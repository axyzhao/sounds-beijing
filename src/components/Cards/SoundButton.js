import useSound from 'use-sound';

const SoundButton = (props) => {
  const { sound } = props;

  const [play] = useSound(sound);

  return (
  <button onClick={play}>Boop!</button>;
  );
};
export default SoundButton;
