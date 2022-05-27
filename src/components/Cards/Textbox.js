const Textbox = (props) => {
  const { copy } = props;
  return (
    <div className="textbox">
      <p>{copy}</p>
    </div>
  );
};

export default Textbox;
