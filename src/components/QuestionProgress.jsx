import { useQuiz } from "../contexts/QuizContext";

function QuestionProgress() {
  const { questions, currentIndex, points, maxPossiblePoints, answer } =
    useQuiz();
  const answerExisted = answer !== null;

  return (
    <div className="progress">
      <progress
        className="progress-bar"
        max={questions.length}
        value={currentIndex + answerExisted}
      ></progress>

      <div className="progress-overview">
        <p className="questions-num">
          Question <strong>{currentIndex + 1}</strong> / {questions.length}
        </p>

        <p className="questions-points">
          <strong>{points}</strong> / {maxPossiblePoints}
        </p>
      </div>
    </div>
  );
}

export default QuestionProgress;
