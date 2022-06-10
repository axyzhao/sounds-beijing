import left from './left.png';

const LeftArrow = (props) => {
  const { label, onClickHandler, mobile } = props;

  var arrowStyles: CSSProperties = {
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
  var imgStyles: CSSProperties = {
    height: "50px", width: "40px"
  }

  if (mobile) {
    arrowStyles = {
        position: "absolute",
        left: "8px",
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
      <img src={left} style={imgStyles} className="arrow" />

      </button>
    </div>
  );
};

export default LeftArrow;
