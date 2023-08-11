import React, { useContext, useEffect } from 'react'
import ItemsContext from '../../context/cart/ItemsContext'
import PriceContext from '../../context/cart/PriceContext';

function OrderSummary() {
    const { TotalItems } = useContext(ItemsContext);
    const { TotalPrice, setTotalPrice } = useContext(PriceContext);
    useEffect(() => {
        setTotalPrice(TotalItems.reduce((Total, CurrentItem) => Total += (CurrentItem.discounted_price * CurrentItem.quantity), 0))
    }, [TotalItems, setTotalPrice])
    return (
        <div className='card mb-4 p-4 text-left font-medium dark:!bg-gray-900 dark:!border-gray-800'>
            <h2 className='text-red-600 text-2xl font-semibold mb-2'>Order Summary:</h2>
            <div className='divide-y divide-red-300 text-red-500 text-base'>
                <div className='flex justify-between py-2'>
                    <span>Total Items:</span>
                    <span>&#8377; {TotalPrice}.00</span>
                </div>
                <div className='flex justify-between py-2'>
                    <span>Delivery Charges:</span>
                    <span>&#8377; 0.00</span>
                </div>
                <div className='flex justify-between py-2'>
                    <span>12% GST:</span>
                    <span>&#8377; {Math.round(((TotalPrice / 100) * 12) * 100) / 100}</span>
                </div>
            </div>
            <div className='py-2 flex justify-between border-y-2 border-dashed border-red-400  text-red-600 text-xl font-semibold'>
                <span>Total Amount:</span>
                <span>&#8377; {Math.round(((TotalPrice / 100) * 12 + TotalPrice) * 100) / 100}</span>
            </div>
            {/* <div className="d-grid gap-2">
                <button className='btn mt-3 text-white bg-blue-700 hover:bg-blue-600' type="submit"> {TotalPrice === 0 ? "loading.." : "Pay " + ((TotalPrice / 100) * 12 + TotalPrice)}</button>
            </div> */}
        </div>
    )
}

export default OrderSummary