import React from 'react';

const ItemCard = ({item, select}) => {
  const click = (e) => {
    select(item);
  };

  return (
    <div className="item-card" onClick={click}>
      <span>{item.value}</span>
    </div>
  )
};

export default ItemCard;