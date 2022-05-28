import right from './right.png';

const RightArrow = (props) => {
  const { label, onClickHandler } = props;

  const arrowStyles: CSSProperties = {
      position: "absolute",
      right: 0,
      background: "none",
      border: "none",
      top: "50%",
      width: "50px",
      transform: "translateY(-50%)",
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
      <img src={right} style={{height: "50px", width: "40px"}} className="arrow" />
      </button>
    </div>
  );
};

export default RightArrow;
