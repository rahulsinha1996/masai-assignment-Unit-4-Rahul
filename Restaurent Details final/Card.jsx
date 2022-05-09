import React from "react";

const Card = ({
  category,
  total_votes,
  total_reviews,
  total_cost,
  payment_methods,
  url,
  rating,
  name,
}) => {
  const { card, cash, upi } = payment_methods;

  return (
    <div>
      <div>
        <img src={url} alt={url} />
        <div>
          <h2>{name}</h2>
          <p>{category}</p>
          <p>{`Cost ₹${total_cost} for one`}</p>
          <p>Min ₹50 Up to 30 min </p>
          <p>
            Accepts
            {card && cash && upi
              ? " all payments"
              : cash && card
              ? " cash & card payments only"
              : cash
              ? " cash payments only"
              : card
              ? " card payments only"
              : " upi payments only"}
          </p>
        </div>
        <div>
          <h3>{rating}</h3>
          <p>{total_votes} votes</p>
          <p>{total_reviews} reviews</p>
        </div>
      </div>
      <div>
        <div></div>
        <button>Order online</button>
      </div>
    </div>
  );
};

export default Card;
