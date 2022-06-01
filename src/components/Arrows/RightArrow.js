import right from './right.png';

const RightArrow = (props) => {
  const { label, onClickHandler } = props;

  const arrowStyles: CSSProperties = {
      position: "absolute",
      right: "8px",
      height: "150px",
      background: "white",
      border: "none",
      top: "50%",
      width: "50px",
      border: "solid",
      borderWidth: "2px",
      borderColor: "gray",
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
