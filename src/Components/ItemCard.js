import './ItemCard.css'

export default function ItemCard(props) {
    return (
      <div className="Item-card">
        <span className="span">{props.date}</span>
        <span className="span">{props.category}</span>
        <span className="span">{props.title}</span>
        <span className="span">{props.value}</span>
      </div>
    );
  }