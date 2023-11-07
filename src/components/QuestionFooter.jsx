import { useQuiz } from "../contexts/QuizContext";
import Button from "./Button";

const QuestionFooter = () => {
  const { dispatch, currentIndex, questions, answer, secondsRemaining } =
    useQuiz();

  const lastQueastion = currentIndex + 1 === questions.length;
  const minutes = Math.floor(secondsRemaining / 60);
  const socendes = secondsRemaining - minutes * 60;

  const handleNextQueastion = () => {
    if (lastQueastion) return dispatch({ type: "data/finished" });

    dispatch({ type: "data/nextQuestion" });
  };

  return (
    <footer className="question-footer">
      <p className="timer">
        {minutes < 10 ? `0${minutes}` : minutes}:
        {socendes < 10 ? `0${socendes}` : socendes}
      </p>

      {answer !== null && (
        <Button onClick={handleNextQueastion}>
          {!lastQueastion ? "Next Queastion" : "Finish Exam"}
        </Button>
      )}
    </footer>
  );
};

export default QuestionFooter;
