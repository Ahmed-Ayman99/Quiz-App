import { useQuiz } from "../contexts/QuizContext";
import Button from "./Button";

const StartScreen = () => {
  const { getQuestions } = useQuiz();

  return (
    <section className="start-screen">
      <h3 className="secondary-heading">Welcome to The React Quiz!</h3>
      <p className="start-text">15 questions to test your React mastery</p>

      <Button onClick={getQuestions}>Let&apos;s start</Button>
    </section>
  );
};

export default StartScreen;
