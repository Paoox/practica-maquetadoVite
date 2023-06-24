export default function ButtonAsside(props) {
  const nameButton = props.nameButton;
  return (
    <button type="button" className="buttonAsside">
      {nameButton}
    </button>
  );
}
