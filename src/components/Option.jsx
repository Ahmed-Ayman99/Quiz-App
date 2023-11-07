import { useQuiz } from "../contexts/QuizContext";

const Option = ({ answered, clicked, option, ind }) => {
  const { answer, dispatch } = useQuiz();

  const handleAnswer = () => dispatch({ type: "data/answer", payload: ind });

  return (
    <button
      disabled={answer}
      onClick={handleAnswer}
      className={`btn btn-option ${answered ? "answer" : ""} ${clicked}`}
    >
      {option}
    </button>
  );
};

export default Option;
