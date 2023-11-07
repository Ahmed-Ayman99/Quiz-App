import { createContext, useContext, useReducer } from "react";

const QuizContext = createContext();

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  status: "start",
  currentIndex: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

const reducer = (state, action) => {
  let question, correct, higherScore;

  switch (action.type) {
    case "data/loading":
      return { ...state, status: "loading" };

    case "data/faild":
      return { ...state, status: "error" };

    case "data/received":
      return {
        ...state,
        questions: action.payload,
        status: "dataReceived",
        secondsRemaining: action.payload.length * SECS_PER_QUESTION,
      };

    case "data/answer":
      question = state.questions.at(state.currentIndex);
      correct = action.payload === question.correctOption;
      return {
        ...state,
        answer: action.payload,
        points: correct ? state.points + question.points : state.points,
      };

    case "data/nextQuestion":
      return { ...state, currentIndex: state.currentIndex + 1, answer: null };

    case "data/tick":
      return { ...state, secondsRemaining: state.secondsRemaining - 1 };

    case "data/finished":
      higherScore = state.points > state.highscore;
      return {
        ...state,
        status: "finish",
        highscore: higherScore ? state.points : state.highscore,
      };

    case "data/restart":
      return {
        ...initialState,
        questions: state.questions,
        highscore: state.highscore,
        status: "dataReceived",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    default:
      return state;
  }
};

export const QuizProvider = ({ children }) => {
  const [
    {
      questions,
      status,
      currentIndex,
      answer,
      points,
      highscore,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const getQuestions = async () => {
    try {
      dispatch({ type: "data/loading" });

      const res = await fetch(
        "https://ahmed-ayman99.github.io/queastions/queastions.json"
      );

      if (!res.ok) throw new Error();
      const data = await res.json();

      dispatch({ type: "data/received", payload: data.questions });
    } catch (err) {
      dispatch({ type: "data/faild" });
    }
  };

  const numQuestions = questions?.length;
  const currentQueastion = questions[currentIndex];
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  const contextValues = {
    questions,
    status,
    currentIndex,
    answer,
    points,
    highscore,
    secondsRemaining,
    getQuestions,
    numQuestions,
    maxPossiblePoints,
    currentQueastion,
    dispatch,
  };

  return (
    <QuizContext.Provider value={contextValues}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");

  return context;
};
