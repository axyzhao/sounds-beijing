import Label from './Text/Label';
import Title from './Text/Title';
import classNames from 'classnames/bind';
import { useState } from 'react';

const Title_Card = (props) => {
  const { title_copy, copyEnglish, copyChinese, setCopy } = props;
  const [english, setEnglish] = useState(true);
  const handleClick = () => {
    if (english) {
      setEnglish(false);
      setCopy(copyChinese);
    } else {
      setEnglish(true);
      setCopy(copyEnglish);
    }
  }
  return (
    <div
        className={classNames({"card-container": true, "title-card": true})}
        style={{textAlign: "left"}}
    >
      <button onClick={handleClick} className="language">
          <p>
            <tspan className={classNames({"english-button": true, "english": english})}>
                EN</tspan> |
                <tspan> </tspan>
            <tspan className={classNames({"chinese-button": true, "english": english})}>
               CN
            </tspan>
          </p>
      </button>

      <div className="title" style={{textAlign: "center"}}>
        <h1 className="big"> {title_copy["big"]}  </h1>
        <h3 className="byline">{title_copy["byline1"]} </h3>
        <h3 className="byline"> {title_copy["byline2"]}</h3>
        <h3 className="subtitle">
            {title_copy["subtitle"]}
        </h3>
        <p className="italic"> {title_copy["instruction"]}</p>

      </div>
    </div>
  );
};

export default Title_Card;
