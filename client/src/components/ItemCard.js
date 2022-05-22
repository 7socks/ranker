import React from 'react';

const ItemCard = ({id, item, select}) => {
  const click = (e) => {
    select(id);
  };

  return (
    <div id={id} className="item-card" onClick={click}>
      <span>{item.value}</span>
    </div>
  );
};

export default ItemCard;