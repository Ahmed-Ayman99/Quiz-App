import { useQuiz } from "../contexts/QuizContext";
import Button from "./Button";

const FinishScreen = () => {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();
  const percentage = (points / maxPossiblePoints) * 100;

  const handleFinish = () => dispatch({ type: "data/restart" });

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <section className="finish-screen">
      <div className="finish-bar">
        {emoji} You scored {points} out of {maxPossiblePoints} (
        {Math.round(percentage)}%)
      </div>

      {highscore > 0 && (
        <p className="highscore">(Highscore: {highscore} points)</p>
      )}

      <div className="restart-quiz">
        <Button onClick={handleFinish} className="btn">
          Restart quiz
        </Button>
      </div>
    </section>
  );
};

export default FinishScreen;
