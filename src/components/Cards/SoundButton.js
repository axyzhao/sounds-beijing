import useSound from 'use-sound';
import { useState } from 'react';
import classNames from 'classnames/bind';

const SoundButton = (props) => {
  const { sound, image, imgStyles, caption, setText } = props;
  const [play, { stop }] = useSound(sound, {interrupt: true,});
  const [status, setStatus] = useState(false);
  const defaultText = "Tsinghua is full of sounds and sights. Click on an image to hear its sound. Click again to pause."

  const handleClick = () => {
    if (status) {
      stop();
      setStatus(false);
      const arr = document.getElementsByClassName("isActive");
      if (arr.length === 1) {
        setText(defaultText);
      }
    } else {
      play();
      setStatus(true);
      setText(caption);
    }
  }

  return (
  <button onClick={handleClick} className={classNames({"isActive": status})}>
    <img style={imgStyles} src={image} className="card-image" />
  </button>
  );
};
export default SoundButton;
