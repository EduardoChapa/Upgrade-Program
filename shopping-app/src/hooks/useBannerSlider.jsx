import { useState } from "react";

function useBannerSlider(data) {
  const [currentItem, setCurrentItem] = useState(0);

  const nextItem = () => {
    if (!(currentItem === data.length - 1))
      setCurrentItem(currentItem + 1);
    else
      setCurrentItem(0);
  }

  const previousItem = () => {
    if (!(currentItem === 0))
      setCurrentItem(currentItem - 1);
    else
      setCurrentItem(data.length - 1);
  }

  return [
    currentItem,
    nextItem,
    previousItem
  ]
}

export default useBannerSlider;