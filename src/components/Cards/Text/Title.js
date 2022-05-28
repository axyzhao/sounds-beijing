const Title = (props) => {
  const { title, author } = props;

  return (
    <h1>
      {title} <tspan className="author"> // Recorded by {author} </tspan>
    </h1>
  );
};

export default Title;
