import ProgressBar from "@ramonak/react-progress-bar";
import ReactDOM from 'react-dom';

const Progress = (props) => {
  const { current, total } = props;

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
        transitionDuration="0.5s"
      />
    </footer>,
    root
  );
};

export default Progress;
