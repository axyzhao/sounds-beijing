import { useState } from 'react';
import classNames from 'classnames/bind';

const ChoiceButton = (props) => {
  const { caption, right, setText } = props;
  const [status, setStatus] = useState(false);
  const buttonStyles: CSSProperties = {
      background: "#d3d3d3",
      borderRadius: "8px",
      border: "none",
      width: "200px",
      height: "100px",
    }
  const handleClick = () => {
    if (status) {
      setStatus(false);
      setText(caption);

    } else {
      setStatus(true);
      setText(caption);
    }
  }

  return (
  <button onClick={handleClick} style={buttonStyles} className={classNames({"isActive": status})}>
    {caption}
  </button>
  );
};
export default ChoiceButton;
