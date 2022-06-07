import useSound from 'use-sound';
import { useState } from 'react';
import classNames from 'classnames/bind';

const SoundButton = (props) => {
  const { sound, image, imgStyles, caption, label, setText, buttonClass, key } = props;
  const [play, { stop }] = useSound(sound, {interrupt: true,});
  const [status, setStatus] = useState(false);
  const defaultText = "Tsinghua is full of sounds and sights. Click on an image to hear its sound. Click again to pause."

  if (!buttonClass) {
    const buttonClass = null;
  }

  const handleClick = () => {
    if (status) {
      stop();
      setStatus(false);
      const arr = document.getElementsByClassName("isActive");
      if (arr.length < 2) {
        setText(defaultText);
      }
    } else {
      play();
      setStatus(true);
      setText(caption);
    }
  }

  if (label) {
    return (
      <g>
    <button onClick={handleClick} className={classNames(buttonClass, {"isActive": status})}>
      <img style={imgStyles} src={image} className="card-image" />
    </button>
      <p style={{textAlign: "center",
                marginTop: "8px",
                color: "#a9a9a9",
                fontStyle: "italic",
                fontFamily: "sans-serif",
                fontWeight: 100
              }}>
              {label}
      </p>
    </g>
    );
  }
  return (
  <button onClick={handleClick} className={classNames(buttonClass, {"isActive": status})}>
    <img style={imgStyles} src={image} className="card-image" />
  </button>

  );
};
export default SoundButton;
