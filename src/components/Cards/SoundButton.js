import useSound from 'use-sound';
import { useState } from 'react';
import classNames from 'classnames/bind';

const SoundButton = (props) => {
  const { sound, image, imgStyles, caption, label, setText, buttonClass, lang } = props;
  const [play, { stop }] = useSound(sound, {interrupt: true,});
  const [status, setStatus] = useState(false);
  var defaultText;
  if (lang === "english") {
    defaultText = "Tsinghua is full of sounds and sights. Click on an image to hear its sound. Click again to pause.";
  } else {
    defaultText = "点击图像可以聆听声音, 再次点击则暂停声音。";
  }
  if (!buttonClass) {
    const buttonClass = null;
  }

  const handleClick = () => {
    if (status) {
      stop();
      setStatus(false);
      const arr = document.getElementsByClassName("sound-isActive");
      console.log(arr);
      if (arr.length === 1) {
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
    <button onClick={handleClick} className={classNames(buttonClass, {"sound-isActive": status})}>
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
  <button onClick={handleClick} className={classNames(buttonClass, {"sound-isActive": status})}>
    <img style={imgStyles} src={image} className="card-image" />
  </button>

  );
};
export default SoundButton;
