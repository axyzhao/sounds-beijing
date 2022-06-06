import Textbox from './Textbox';
import Title from './Title';

const AnnotatedBox = (props) => {
  const { xPos, yPos, triHeight, copy, left } = props;

  if (left) {
    return (
    <div style={{display: "flex", "flexDirection": "row"}}>
    <svg viewBox="0 0 100 100" style={{width: "150px"}}>
      <path d={`M ${xPos} ${yPos} ${xPos - triHeight} ${yPos + (triHeight / 2)}
        L${xPos} ${yPos + triHeight}
        L${xPos} ${yPos}`
        }
      />
    </svg>
      <g className="box">
        <Title title={copy["title"]} author={copy["author"]} />
        <Textbox copy={copy["text"]} type="tall"/>
      </g>

    </div>
    );
  }
  return (
  <div style={{display: "flex", "flexDirection": "row"}}>
    <g className="box">
      <Title title={copy["title"]} author={copy["author"]} />
      <Textbox copy={copy["text"]} type="tall"/>
    </g>
    <svg viewBox="0 0 100 100" style={{width: "150px"}}>
      {/*
      <path d={`M${xPos - arrowWidth} ${yPos + arrowHeight} ${xPos} ${yPos}
        L${xPos - arrowWidth} ${yPos - arrowHeight - 0.5}
        L${xPos} ${yPos}
        A 75 75 0 0 0 ${xPos - 95} ${yPos + 45}
        `}
      />
      */}
      <path d={`M ${xPos} ${yPos} ${xPos + triHeight} ${yPos - (triHeight / 2)}
        L${xPos} ${yPos - triHeight}
        L${xPos} ${yPos}`
        }
      />
    </svg>
  </div>
  );
};


export default AnnotatedBox;
