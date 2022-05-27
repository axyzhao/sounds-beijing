import left from './left.png';

const LeftArrow = (props) => {
  const { label, onClickHandler } = props;

  const arrowStyles: CSSProperties = {
      position: "absolute",
      left: 0,
      background: "none",
      border: "none",
      top: "50%",
      width: "100px",

      transform: "translateY(-50%)",
      zIndex: 2,
    }

  return (
    <div className="arrow-container">
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        style={{
          ...arrowStyles,
        }}
      >
      <img src={left} className="arrow" />

      </button>
    </div>
  );
};

export default LeftArrow;
