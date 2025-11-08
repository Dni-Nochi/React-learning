import './Svg.css';

function Svg({ id, width, height, className }) {
  return (
    <svg width={width} height={height} className={className}>
      <use href={`/icons/spritesSvg.svg#${id}`} />
    </svg>
  );
}

export default Svg;
