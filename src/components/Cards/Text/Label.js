const Label = (props) => {
  const { caption } = props;

  return (
    <p className="label">
      <tspan className="label-head"> <a href="https://alzhao.com/sounds-beijing">Sounds of Beijing</a> >
      </tspan><tspan className="label"> {caption} </tspan>
    </p>
  );
};

export default Label;
