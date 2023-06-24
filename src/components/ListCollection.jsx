export default function ListCollection(props) {
  const iconsCollect = props.iconCollection;
  const titlesCollect = props.titleCollection;
  const contentsCollect = props.contentCollection;

  return (
    <div className="contentCollection">
      <div className="iconCollect">{iconsCollect}</div>
      <p className="titleCollect">{titlesCollect}</p>
      <p className="contentCollect">{contentsCollect}</p>
    </div>
  );
}
