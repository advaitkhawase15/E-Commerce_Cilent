import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemsContext from '../../context/cart/ItemsContext';
// import PerfectScrollbar from 'react-perfect-scrollbar'
// import "react-perfect-scrollbar/dist/css/styles.css";
import CartItems from '../CartItems';
import Details from './Details';
import Redirect from './Redirect';
import Payment from './Payment';

function Checkout() {
    const navigate = useNavigate();
    const { TotalItems } = useContext(ItemsContext);
    const [success, setsuccess] = useState(null);
    const [Status, setStatus] = useState(null);

    return (
        <>
            {!success
                ? <div className='lg:p-0 px-4 flex lg:flex-row justify-evenly flex-col bg-white dark:!bg-gray-900'>
                    <div className='card mt-4 flex flex-col h-[36rem] lg:w-2/5 dark:!bg-gray-900 dark:!border-gray-800'>
                        <div className='cartSidebar snap-y snap-proximity h-full divide-y overflow-y-auto divide-gray-200 dark:divide-gray-800'>
                            {TotalItems.length
                                ? TotalItems.map((ThisItem, key) => {
                                    return (
                                        <div key={key}
                                            className='snap-start snap-always mx-4'>
                                            <CartItems ThisItem={ThisItem} />
                                        </div>
                                    )
                                })
                                : navigate("/")
                            }
                        </div>
                    </div>
                    <div className='mt-4 lg:w-1/4'>
                        <Details setsuccess={setsuccess} setStatus={setStatus} />
                    </div>
                </div>
                : <Redirect success={success} Status={Status} />
            }
        </>
    )
}

export default Checkout