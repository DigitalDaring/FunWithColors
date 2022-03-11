import ColorSquare from '../color-square';
import './colors-array.module.scss';

type generatedColor = {
  r: number,
  g: number,
  b: number,
  a: number
};

const pickRandomHue = () => Math.floor(Math.random() * 256);
const pickRandomColor = (): generatedColor => ({
  r: pickRandomHue(),
  g: pickRandomHue(),
  b: pickRandomHue(),
  a: 255
})

const ColorsArray = () => {
  const randomColors: Array<generatedColor> = [];
  for(let i = 0; i < 4; i++) {
    randomColors.push(pickRandomColor())
  }
  const squares = randomColors.map(c => <ColorSquare red={c.r} green={c.g} blue={c.b} alpha={c.a}/>);
  return <colors-array>
    {squares}
  </colors-array>
}

export default ColorsArray;