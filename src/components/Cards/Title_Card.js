import Label from './Text/Label';
import Title from './Text/Title';
import classNames from 'classnames/bind';

const Title_Card = (props) => {

  const { copy } = props;

  return (
    <div className={classNames({"card-container": true, "title-card": true})}>
      <div className="title">
        <h1 className="big"> Sounds of Beijing </h1>
        <h3 className="byline"> By Alex Zhao and Yucheng Tang</h3>
        <h3 className="byline"> 文 ｜ 赵星宇， 汤禹成 </h3>

        <h3> We spent a year in Beijing, immersed in sounds and sights.</h3>
        <p className="italic"> Click the arrows or hit your keyboard arrows to navigate the exhibit.</p>

      </div>
    </div>
  );
};

export default Title_Card;
