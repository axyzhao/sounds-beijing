import classNames from 'classnames';

const Textbox = (props) => {
  const { copy, id, type } = props;
  return (
    <div id={id} className={classNames(type, {"textbox": true})}>
      <p className="copy">{copy}</p>
    </div>
  );
};

export default Textbox;
