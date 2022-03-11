import './color-square.module.scss';
import ColorSlider from '../color-slider';
import TinySwatch from '../tiny-swatch';

export type Hues = {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

type ColorSquareProps = {
  red: number;
  green: number;
  blue: number;
  alpha: number;
  idx: number;
  onChange: (_newColor: Hues, _idx: number) => void;
}

const RedDot = () => <TinySwatch color={'red'}/>
const GreenDot = () => <TinySwatch color={'green'}/>
const BlueDot = () => <TinySwatch color={'blue'}/>

const getHexColor = (red: number, green: number, blue: number, alpha: number) => {
  const hexR = red.toString(16).padStart(2, '0');
  const hexG = green.toString(16).padStart(2, '0');
  const hexB = blue.toString(16).padStart(2, '0');
  const hexA = alpha.toString(16).padStart(2, '0');
  return `#${hexR}${hexG}${hexB}${hexA}`;
}

const ColorSquare = ({red, green, blue, alpha, idx, onChange}: ColorSquareProps) => {
  const hexColor = getHexColor(red, green, blue, alpha);

  const handleChange = (red: number, green: number, blue: number, alpha: number) => {
    onChange({red, green, blue, alpha}, idx)
  }

  const textColor = red + green + blue >= 300 ? '#000' : '#FFF';
  const styles: {[key: string]: string} = {};
  styles['--background-color'] = hexColor;
  styles['color'] = textColor;

  return <color-square-container>
    <color-square style={styles}>{hexColor.toUpperCase()}
    </color-square>
    <slider-array>
      <ColorSlider indicator={<RedDot/>} level={red} onChange={(newRed) => handleChange(newRed, green, blue, alpha)}/>
      <ColorSlider indicator={<GreenDot/>} level={green} onChange={(newGreen) => handleChange(red, newGreen, blue, alpha)}/>
      <ColorSlider indicator={<BlueDot/>} level={red} onChange={(newBlue) => handleChange(red, green, newBlue, alpha)}/>
    </slider-array>
    </color-square-container>
};
export default ColorSquare;