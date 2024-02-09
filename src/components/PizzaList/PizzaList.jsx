import React from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';
// import refreshPizzaCallBack from '../App/App.jsx'

function PizzaList({ pizzaList, refreshPizzaCallBack }) {
  return (
    <div className="pizzaList">
      {pizzaList.map((pizzaData, pizzaIndex) => {
        // console.log(pizzaData.url);
        return (
          <div key={pizzaIndex}>
            <div>
              <PizzaItem
                refreshPizzaCallBack={refreshPizzaCallBack}
                key={pizzaData.id}
                pizzaData={pizzaData}
                id={pizzaIndex}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PizzaList;
