import left from './arrow.svg';

const Arrow = (props) => {
  const { back, label, onClickHandler } = props;
  const arrowStyles: CSSProperties = {

  };
  return (
    <button
      type="button"
      onClick={onClickHandler}
      title={label}
      style={{
        ...arrowStyles,
        left: 0,
        backgroundColor: "transparent",
      }}
    >
      <img src={left} />
    </button>
  );
};

export default Arrow;
