import { useState } from 'react';
import classNames from 'classnames/bind';

const ChoiceButton = (props) => {
  const { caption, right, setText } = props;
  const rightText = "Correct!";
  const wrongText = "Wrong! Try picking a different option."
  const [status, setStatus] = useState(false);

  const handleClick = () => {
    setStatus(true);
    if (!status) {
      if (right) {
        setText(rightText);
        const arr = document.getElementsByClassName("choice");
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
      {"choice": true,
        "isActive": status,
        "right": right,
      })
    }
  >
    <div className="choice_button">{caption}</div>
  </button>
  );
};
export default ChoiceButton;
