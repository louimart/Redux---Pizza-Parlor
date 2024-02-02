import React from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';

function PizzaList({}) {
  return (
    <div className="pizzaList">
      {/* {pizzaList.map((imageData, imageIndex) => {
        console.log(imageData.url);
        return (
          <div key={imageIndex}> */}
          <div>
            <PizzaItem
              // refreshGalleryCallBack={refreshGalleryCallBack}
              // key={imageData.id}
              // imageData={imageData}
              // id={imageIndex}
            />
          </div>
    </div>
  );
}

export default PizzaList;
