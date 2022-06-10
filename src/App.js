import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "video-react/dist/video-react.css"; // import css
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import useWindowSize from './Utils/getWindowDim';

import constructChildren from './Children';
import LeftArrow from './components/Arrows/LeftArrow';
import RightArrow from './components/Arrows/RightArrow';
import Progress from './components/Progress';

function App(props)
{
  const [currentIndex, setIndex] = useState(0);
  const clickers = [];
  const getData = function getData(val, isSelected, index) {
    if (isSelected) {
      setIndex(index);
    }
    clickers.push(val);
  }
  const children = constructChildren(clickers);
  const [windowWidth] = useWindowSize();
  const mobile = windowWidth < 600;

  return (
    <div>
      <Carousel
          showThumbs={false}
          showLegend={false}
          showIndicators={true}
          transitionTime={0}
          autoFocus={true}
          swipeable={!mobile}
          renderIndicator={(clickHandler, isSelected, index, label) =>
            {getData(clickHandler, isSelected, index)}}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (<LeftArrow onClickHandler={onClickHandler} label={label}/>)}
          renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (<RightArrow onClickHandler={onClickHandler} label={label}/>)}
          statusFormatter={(current, total) =>
        (<Progress total={total} current={current}/>)}
          useKeyboardArrows={true}
      >

      {children.map((child, index) => {
              if (
                index === currentIndex ||
                index === currentIndex+ 1 ||
                index === currentIndex+ 2 ||
                index === currentIndex - 1
              ) {
                return child;
              } else return <></>;
            })}
        </Carousel>
      </div>
  );
}
export default App;
