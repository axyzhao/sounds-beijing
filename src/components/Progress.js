import ProgressBar from "@ramonak/react-progress-bar";
import ReactDOM from 'react-dom';

const Progress = (props) => {
  const { current, total } = props;
  const barStyles: CSSProperties = {
    position: "absolute",
    top: "730px",
    right: "0px",
    }

  const root = document.getElementById('root');

  return ReactDOM.createPortal(
    <footer>
      <ProgressBar
        completed={current}
        maxCompleted={total}
        labelSize="0px"
        height="20px"
        borderRadius="0px"
        baseBgColor="black"
      />
    </footer>,
    root
  );
};

export default Progress;
