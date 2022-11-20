import React from "react";
import { Link } from "react-router-dom";

const Card = ({ ...item }) => {
  return (
    <div className="px-2 w-24">
      <Link to={item.id}>
        <img
          className="w-24 h-24 rounded"
          src={item.download_url}
          alt={item.author}
        />
      </Link>
      <p className="text-sm text-center font-mono pt-2">{item.author}</p>
    </div>
  );
};

export default Card;
