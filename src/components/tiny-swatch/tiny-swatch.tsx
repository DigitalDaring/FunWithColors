import './tiny-swatch.module.scss'
type TinySwatchProps = {
  color: 'red' | 'green' | 'blue';
}
const TinySwatch = ({color}: TinySwatchProps) => <tiny-swatch color={color}></tiny-swatch>;
export default TinySwatch;