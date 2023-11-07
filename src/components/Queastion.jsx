import { useQuiz } from "../contexts/QuizContext";
import Option from "./Option";

const Queastion = () => {
  const { currentQueastion, answer } = useQuiz();

  return (
    <div className="queastion">
      <h3 className="heading-tertiary">{currentQueastion.question}</h3>

      <div className="list questions-list">
        {currentQueastion.options.map((option, ind) => (
          <Option
            option={option}
            ind={ind}
            key={ind}
            answered={answer === ind}
            clicked={
              answer !== null
                ? ind === currentQueastion.correctOption
                  ? "correct disabled"
                  : "wrong disabled"
                : ""
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Queastion;
