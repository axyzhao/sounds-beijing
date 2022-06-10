import { useState, useEffect, useCallback } from 'react';
import throttle from 'lodash/throttle';

export default function useWindowSize() {
  const [sizes, updateSize] = useState({ width: 0, height: 0 });

  const handler = useCallback(throttle(() => {
    updateSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 500), []);

  useEffect(() => {
    handler();
    window.addEventListener('resize', handler);
    return () => { window.removeEventListener('resize', handler); };
  });

  return [sizes.width, sizes.height];
}
