import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;
function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    };
    console.log(product);
    dispatch(addToBasket(product));
  };
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-sm italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h1 className="my-3">{title}</h1>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => {
            return (
              <>
                <StarIcon key={i} className="h-5 text-yellow-500" />
              </>
            );
          })}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div>
        <Currency quantity={price} currency="USD" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 mt-2">
          <img
            className="w-12"
            src="https://logodix.com/logo/5641.png"
            alt=""
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
