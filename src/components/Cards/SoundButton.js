import useSound from 'use-sound';
import { useState } from 'react';
import classNames from 'classnames/bind';

const SoundButton = (props) => {
  const { sound, image, imgStyles } = props;

  const [play, { stop }] = useSound(sound, {interrupt: true,});
  const [status, setStatus] = useState(false);

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
  <button onClick={handleClick} className={classNames({"isActive": status})}>
    <img style={imgStyles} src={image} className="card-image" />
  </button>
  );
};
export default SoundButton;
