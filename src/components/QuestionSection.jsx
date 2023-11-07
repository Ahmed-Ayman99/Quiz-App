import { useEffect } from "react";
import Queastion from "./Queastion";
import QuestionFooter from "./QuestionFooter";
import QuestionProgress from "./QuestionProgress";
import { useQuiz } from "../contexts/QuizContext";

const QuestionSection = () => {
  const { dispatch, secondsRemaining } = useQuiz();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (secondsRemaining <= 0) return dispatch({ type: "data/finished" });

      dispatch({ type: "data/tick" });
    }, 1000);

    return () => clearTimeout(timer);
  }, [secondsRemaining, dispatch]);

  return (
    <section className="question-section">
      <QuestionProgress />
      <Queastion />
      <QuestionFooter />
    </section>
  );
};

export default QuestionSection;
