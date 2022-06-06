import left from './left.png';

const LeftArrow = (props) => {
  const { label, onClickHandler } = props;

  const arrowStyles: CSSProperties = {
      position: "absolute",
      left: "8px",
      background: "white",
      border: "none",
      top: "50%",
      width: "50px",
      height: "150px",
      border: "solid",
      borderWidth: "2px",
      borderColor: "gray",
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
      <img src={left} style={{height: "50px", width: "40px"}} className="arrow" />

      </button>
    </div>
  );
};

export default LeftArrow;
