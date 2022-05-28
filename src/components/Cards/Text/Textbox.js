const Textbox = (props) => {
  const { copy, id } = props;
  return (
    <div id={id} className="textbox">
      <p className="copy">{copy}</p>
    </div>
  );
};

export default Textbox;
