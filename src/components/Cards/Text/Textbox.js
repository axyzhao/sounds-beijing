import classNames from 'classnames';

const Textbox = (props) => {
  const { copy, lang, type } = props;
  return (
    <div id={lang} className={classNames(type, {"textbox": true})}>
      <p className="copy">{copy}</p>
    </div>
  );
};

export default Textbox;
