import "../../css/main.css";

function Tagline(props) {
  console.log(props.img);
  return (
    <div className="feature-item">
      <img src={props.img} alt={props.alt} className="feature-icon" />
      <h3 className="feature-item-title">{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default Tagline;
