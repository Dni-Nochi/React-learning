function Exemple(props) {
  const { info, ggClick } = props;

  return <button onClick={ggClick}>{info}</button>;
}

export default Exemple;
