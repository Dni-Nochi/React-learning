import './Button.css';

function Button({ id, name, className }) {
  return (
    <button id={id} className={className}>
      {name}
    </button>
  );
}

export default Button;
