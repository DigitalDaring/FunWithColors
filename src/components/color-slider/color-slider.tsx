import {useState, useEffect, ChangeEvent, ReactChild} from 'react';
import './color-slider.module.scss';

type ColorSliderProps = {
  indicator: ReactChild,
  level: number,
  onChange: (_: number) => void
}

const ColorSlider = ({indicator, level, onChange}: ColorSliderProps) => {

  const [currentLevel, setCurrentLevel] = useState(level);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const newValue = parseInt(e.target.value);
      setCurrentLevel(newValue);
      onChange(newValue);
    } catch (ex) {
      console.log(ex);
    }
  };

  return <color-slider>
    {indicator} <input type="range" min="0" max="255" value={currentLevel} onChange={handleChange}/>
  </color-slider>
};

export default ColorSlider;