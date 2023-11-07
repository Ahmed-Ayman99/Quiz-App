import { useQuiz } from "./contexts/QuizContext";

import Header from "./components/Header";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";
import Loadding from "./components/Loading";
import Error from "./components/Error";
import QuestionSection from "./components/QuestionSection";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";

const App = () => {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "start" && <StartScreen />}
        {status === "loading" && <Loadding />}
        {status === "error" && <Error />}
        {status === "dataReceived" && <QuestionSection />}
        {status === "finish" && <FinishScreen />}
      </Main>
      <Footer />
    </div>
  );
};

export default App;
