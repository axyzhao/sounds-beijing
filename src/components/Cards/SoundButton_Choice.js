import useSound from 'use-sound';
import { useState } from 'react';
import classNames from 'classnames/bind';

const SoundButton_Choice = (props) => {
  const { sound, image } = props;
  const [play, { stop }] = useSound(sound, {interrupt: true,});
  const [status, setStatus] = useState(false);
  const mysteryStyles: CSSProperties = {
      width: "200px",
      height: "200px",
      margin: "auto",

    }

  const handleClick = () => {
    if (status) {
      stop();
      setStatus(false);
    } else {
      play();
      setStatus(true);
    }
  }

  return (
  <button onClick={handleClick} className={classNames({"mystery": true, "isActive": status})}>
    <img style={mysteryStyles} src={image} />
  </button>
  );
};
export default SoundButton_Choice;
