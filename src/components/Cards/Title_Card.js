import Label from './Label.js';

const Title_Card = (props) => {

  const { title } = props;
  const imgStyles: CSSProperties = {
      width: "auto",
      height: "100%",
      margin: "0 auto",
    }

  return (
    <div className="card-container">
      <Label caption={title} />
    </div>
  );
};

export default Title_Card;
