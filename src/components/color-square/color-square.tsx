import {useState, useEffect, useCallback, useMemo} from 'react';
import './color-square.module.scss';
import ColorSlider from '../color-slider';
import TinySwatch from '../tiny-swatch';

type ColorSquareProps = {
  red: number;
  green: number;
  blue: number;
  alpha: number;
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

const ColorSquare = ({red, green, blue, alpha}: ColorSquareProps) => {
  const [rgba, setRgba] = useState({red, green, blue, alpha});

  const hexColor = getHexColor(rgba.red, rgba.green, rgba.blue, rgba.alpha);

  const onChange = (red: number, green: number, blue: number, alpha: number) => {
    setRgba({red, green, blue, alpha});
  }

  const textColor = rgba.red + rgba.green + rgba.blue >= 200 ? '#000' : '#FFF';
  const styles: {[key: string]: string} = {};
  styles['--background-color'] = hexColor;
  styles['color'] = textColor;

  return <color-square-container>
    <color-square style={styles}>{hexColor.toUpperCase()}
    </color-square>
    <ColorSlider indicator={<RedDot/>} level={red} onChange={(newRed) => onChange(newRed, rgba.green, rgba.blue, rgba.alpha)}/>
    <ColorSlider indicator={<GreenDot/>} level={green} onChange={(newGreen) => onChange(rgba.red, newGreen, rgba.blue, rgba.alpha)}/>
    <ColorSlider indicator={<BlueDot/>} level={red} onChange={(newBlue) => onChange(rgba.red, rgba.green, newBlue, rgba.alpha)}/>
    </color-square-container>
};
export default ColorSquare;