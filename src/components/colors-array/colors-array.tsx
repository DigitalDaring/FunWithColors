import { useState } from 'react';
import ColorSquare from '../color-square';
import './colors-array.module.scss';
import {Hues} from '../color-square/color-square';

const pickRandomHue = () => Math.floor(Math.random() * 256);
const pickRandomColor = (): Hues => ({
  red: pickRandomHue(),
  green: pickRandomHue(),
  blue: pickRandomHue(),
  alpha: 255
})

const ColorsArray = () => {
  const [colors, setColors] =
    useState<Array<Hues>>([0,1,2,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(() => pickRandomColor()));
  const handleChange = (newHues: Hues, idx: number) => {
    const newColors = [...colors];
    newColors[idx] = newHues;
    setColors(newColors);
    console.log(newHues);
  };
  const squares = colors.map((c, idx) => <ColorSquare key={idx} idx={idx} red={c.red} green={c.green} blue={c.blue} alpha={c.alpha} onChange={handleChange}/>);
  return <colors-array>
    {squares}
  </colors-array>
}

export default ColorsArray;