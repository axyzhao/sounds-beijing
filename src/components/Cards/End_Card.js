import Label from './Text/Label';
import Title from './Text/Title';
import classNames from 'classnames/bind';
import { useState } from 'react';

const End_Card = (props) => {
  const { copy } = props;
  return (
    <div
        className={classNames({"card-container": true, "title-card": true})}
        style={{textAlign: "left"}}
    >
      <div className="title" style={{textAlign: "center"}}>
        <h3 className="subtitle">
            {copy["subtitle"]}
        </h3>
        <p className="italic"> {copy["instruction"]}</p>

      </div>
    </div>
  );
};

export default End_Card;
