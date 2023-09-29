const InfoCard = ({ img, title, description, price }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          <small>{description}</small>
        </p>
        <p className="card-text fw-bold">${price}</p>
      </div>
    </div>
  );
};

export default InfoCard;
