import { useEffect, useState } from "react";
import "./App.css";
import Question, { IQuestion } from "./Question";

const App = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentQuestion] = useState<number>(1);
  useEffect(() => {
    fetch("http://localhost:3002/api/quiz/general?numOfQuestions=3")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuestions(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  if (questions.length === 0) {
    return null;
  }

  return <Question {...questions[currentQuestion - 1]} />;
};

export default App;
