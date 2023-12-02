export interface IAlternativeList {
  correctAnswer: string;
  wrongAnswers: string[];
  onAnswerSelected: (answer: string) => void;
}

interface IAlternative {
  title: string;
}

const AlternativeList = (props: IAlternativeList) => {
  const arr = [...props.wrongAnswers];
  arr.splice(((arr.length + 1) * Math.random()) | 0, 0, props.correctAnswer);

  return (
    <>
      {arr.map((i) => (
        <Alternative title={i} key={i} />
      ))}
    </>
  );
};

const Alternative = (props: IAlternative) => {
  return <p>{props.title}</p>;
};

export default AlternativeList;
