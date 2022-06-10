import right from './right.png';

const RightArrow = (props) => {
  const { label, onClickHandler, mobile } = props;

  var arrowStyles: CSSProperties = {
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

    var imgStyles = {height: "50px", width: "40px"}

    if (mobile) {
      arrowStyles = {
          position: "absolute",
          right: "8px",
          background: "white",
          border: "none",
          top: "50%",
          width: "30px",
          height: "60px",
          border: "solid",
          borderWidth: "2px",
          borderColor: "gray",
          transform: "translateY(-50%)",
          zIndex: 2,
        }
        imgStyles = {
          height: "30px", width: "20px"
        }
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
      <img src={right} style={imgStyles} className="arrow" />
      </button>
    </div>
  );
};

export default RightArrow;
