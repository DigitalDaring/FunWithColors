import './color-square.module.scss';

type ColorSquareProps = {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

const ColorSquare = ({red, green, blue, alpha}: ColorSquareProps) => {

  const textColor = red + green + blue >= 200 ? '#000' : '#FFF';
  const hexR = red.toString(16).padStart(2, '0');
  const hexG = green.toString(16).padStart(2, '0');
  const hexB = blue.toString(16).padStart(2, '0');
  const hexA = alpha.toString(16).padStart(2, '0');
  const hexColor = `#${hexR}${hexG}${hexB}${hexA}`;
  const styles: {[key: string]: string} = {};
  styles['--background-color'] = hexColor;
  styles['color'] = textColor;

  return <color-square style={styles}>{hexColor.toUpperCase()}</color-square>
};
export default ColorSquare;