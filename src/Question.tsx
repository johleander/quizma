import AlternativeList from "./AlternativeList";
import "./Question.css";
import { decode } from "html-entities";

export interface IQuestion {
  category: string;
  difficulty: string;
  type: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  onAnswerSelected: (answer: string) => void;
}

const Question = (props: IQuestion) => {
  return (
    <div className="question">
      <div className="difficulty">{props.difficulty.toUpperCase()}</div>
      <div className="category">{decode(props.category)}</div>
      <div className="question">{decode(props.question)}</div>
      <AlternativeList
        correctAnswer={props.correct_answer}
        wrongAnswers={props.incorrect_answers}
        onAnswerSelected={props.onAnswerSelected}
      />
    </div>
  );
};

export default Question;
