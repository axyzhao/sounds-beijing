import { useState } from 'react';
import classNames from 'classnames/bind';

const ChoiceButton = (props) => {
  const { caption, right, setText, image, setShow, button_key } = props;
  const rightText = "Correct!";
  const wrongText = "Wrong! Try picking a different option."
  const [status, setStatus] = useState(false);
  const handleClick = () => {
    setStatus(true);
    if (!status) {
      if (right) {
        setText(rightText);
        setShow(true);
        const arr = document.getElementsByClassName(`choice-${button_key}`);
        for (let i = 0; i < arr.length; i++) {
          arr[i].classList.add("isActive");
        }
      } else {
        setText(wrongText);
      }
    }
  }

  return (
  <button onClick={handleClick} className={classNames(
      {[`choice-${button_key}`]: true,
        "choice": true,
        "isActive": status,
        "right": right,
      })
    }
  >
    <div style={{width: "200px"}}>{caption}</div>
  </button>
  );
};
export default ChoiceButton;
