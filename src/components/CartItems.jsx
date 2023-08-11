import React, { useContext } from 'react';
import ItemsContext from '../context/cart/ItemsContext';

function CartItems(props) {
    const { ThisItem } = props;
    const { TotalItems, setTotalItems } = useContext(ItemsContext);
    const { product_name, image, discounted_price, quantity, product_size } = ThisItem;
    const Id = ThisItem.id;

    function HandleRemove() {
        setTotalItems(
            TotalItems.filter((CurrentItem) =>
                (CurrentItem.id !== Id || CurrentItem.product_size !== product_size)
            )
        )
    }
    function HandleDecrement() {
        if (quantity === 1) {
            HandleRemove();
        }
        else {
            setTotalItems(
                TotalItems.map((CurrentItem) =>
                    (CurrentItem.id === Id && CurrentItem.product_size === product_size)
                        ? { ...CurrentItem, quantity: quantity - 1 }
                        : { ...CurrentItem }
                )
            )
        }
    }
    function HandleIncrement() {
        setTotalItems(
            TotalItems.map((CurrentItem) =>
                (CurrentItem.id === Id && CurrentItem.product_size === product_size)
                    ? { ...CurrentItem, quantity: quantity + 1 }
                    : { ...CurrentItem }
            )
        );
    }


    return (
        <div className="flex py-6">
            <div className=" h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img alt="Item" src={image[0]}
                    className="object-contain object-center"
                />
            </div>
            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900 dark:text-gray-200">
                        <h3>
                            <a href={`product_detail/${Id}`}>{product_name}</a>
                        </h3>
                        <p className="ml-4">&#8377; {discounted_price * quantity}.00</p>
                    </div>
                    <p className="mt-1 text-left text-sm text-gray-600 dark:text-gray-400">Size: {product_size}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-900 dark:text-gray-200 border-y rounded-xl border-gray-100 dark:border-gray-800">
                        <button className=" w-5 rounded-l-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 hover:dark:bg-gray-700"
                            onClick={HandleDecrement}>-</button>
                        <span> {quantity} </span>
                        <button className=" w-5 rounded-r-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 hover:dark:bg-gray-700"
                            onClick={HandleIncrement}>+</button>
                    </p>
                    <div className="flex">
                        <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-700 hover:bg-gray-200 rounded p-1"
                            onClick={HandleRemove}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems

