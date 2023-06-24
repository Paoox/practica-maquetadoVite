export default function IconsMain(props) {
  const nameIcon = props.nameIcon;
  return (
    <a href="" className="iconsMain">
      {nameIcon}
      <img
        className="arrow"
        src="/src/assets/arrow-down-338-svgrepo-com.svg"
        alt="arrow"
      />
    </a>
  );
}
