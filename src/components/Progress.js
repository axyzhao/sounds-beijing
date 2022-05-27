import ProgressBar from "@ramonak/react-progress-bar";

const Progress = (props) => {
  const { current, total } = props;
  const barStyles: CSSProperties = {
    position: "absolute",
    top: "730px",
    right: "0px",

    }

  return (
    <div className="hello" style={barStyles}>
      <ProgressBar
        completed={current}
        maxCompleted={total}
        labelSize="0px"
        height="20px"
        borderRadius="0px"
        width="1840px"
      />
    </div>
  );
};

export default Progress;
