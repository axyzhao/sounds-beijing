const Label = (props) => {
  const { caption, toc } = props;

  return (
    <div className="label">
      {toc}
      <tspan className="label"> > {caption} </tspan>

    </div>
  );
};

export default Label;
