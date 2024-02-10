import React from 'react';

function PizzaItem({ pizzaData, refreshPizzaCallBack }) {
  // console.log('Here is a PizzaItem');
  return (
    <div className="pizzaItem">
      {/* <img src={pizzaData.image_path}/> */}
      <img className='pizzaImage' src={`${pizzaData.image_path}`}/>
      <h3>{pizzaData.name}</h3>
      <p>{pizzaData.description}</p>
      <h3 className='pizzaPrice'>{pizzaData.price}</h3>
      <button>Add</button>
    </div>
  );
}

export default PizzaItem;
