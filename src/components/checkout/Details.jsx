import React, { useRef, useContext, useEffect, useState } from 'react';
import PriceContext from '../../context/cart/PriceContext';
import ItemsContext from '../../context/cart/ItemsContext';
import axios from 'axios';
import OrderSummary from './OrderSummary';
import { useNavigate } from 'react-router-dom';

function Details(props) {
    const ref = useRef();
    const navigate = useNavigate()
    const { setsuccess, setStatus } = props;
    const { TotalItems, setTotalItems } = useContext(ItemsContext);
    const { TotalPrice, setTotalPrice } = useContext(PriceContext);
    const [Customer_Info, setCustomer_Info] = useState({
        Name: "",
        Email: "",
        Address: "",
        Phone_Number: "",
    });
    const [error, setError] = useState({
        Name: false,
        Email: false,
        Address: false,
        Phone_Number: false
    });
    const [disabledCheck, setdisabledCheck] = useState(true);
    const [showErrorText, setShowErrorText] = useState({
        Name: false,
        Email: false,
        Address: false,
        Phone_Number: false
    });

    function submitEmail(e) {
        e.preventDefault();
        setsuccess("Please wait while your pament is being processed..")
        setStatus("Loading")
        let Products = [];
        TotalItems.map((CurrentItem, key) =>
            Products[key] = {
                id: CurrentItem.id,
                product_name: CurrentItem.product_name,
                quantity: CurrentItem.quantity,
                product_size: CurrentItem.product_size,
                discounted_price: CurrentItem.discounted_price
            }
        )

        axios.post("/send/mailInvoice", {
            Customer_Info: Customer_Info,
            Products: Products,
            TotalPrice: TotalPrice,
            Payed: true
        }).then((response) => {
            setsuccess(response.data.emailMsg);
            setStatus("Successful");
            setTotalItems([]);
            setTotalPrice(0);
            setTimeout(() => {
                setsuccess(null);
                navigate("/")
            }, 3000)
        }).catch(() => {
            setsuccess("Payment not Successful. Please try again.");
            setStatus("Failed");
            setTimeout(() => {
                setsuccess(null);
                navigate("/")
            }, 3000);
        })
    }

    function handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        if (error[name]) {
            if (!e.target.validity.patternMismatch) {
                setError({ ...error, [name]: false });
                setShowErrorText({ ...showErrorText, [name]: false });
            }
        }
        setCustomer_Info({ ...Customer_Info, [name]: value });
    };

    function handleBlur(e) {
        let name = e.target.name;
        if (!error[name]) {
            if (e.target.validity.patternMismatch) {
                ref.current.focus();
                setError({ ...error, [name]: true });
                setShowErrorText({ ...showErrorText, [name]: true });
            }
        }
        if (error[name]) {
            setShowErrorText({ ...showErrorText, [name]: false });
        }
    };

    useEffect(() => {
        let flag = 0;

        for (var i in Customer_Info) {
            if (Customer_Info[i].length === 0) {
                flag = 1;
                break;
            }
        }

        if (flag === 0)
            for (var j in error) {
                if (error[j] === true) {
                    flag = 1;
                    break;
                }
            }

        if (flag === 1)
            setdisabledCheck(true);
        else
            setdisabledCheck(false);
    }, [error, Customer_Info])


    return (
        <>
            <div className='card p-6 text-left dark:!bg-gray-900 dark:!border-gray-800 text-gray-600 dark:text-gray-400' >
                <OrderSummary />
                <form onSubmit={submitEmail}>
                    <div className="mb-3">
                        <label htmlFor="Name"
                            className="leading-7 text-sm">Name</label>
                        <input
                            minLength="5"
                            maxLength="100"
                            pattern="[a-zA-Z][a-zA-Z ]{2,}"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            ref={ref}
                            name="Name"
                            value={Customer_Info.Name}
                            className={`${error.Name ? "form-control is-invalid !border-red-400" : ""} w-full bg-white dark:!bg-gray-900 rounded border border-gray-300 dark:!border-gray-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                            required
                        />
                        {showErrorText.Name && (
                            <p role="alert" className='text-xs text-red-600'>
                                Name should include more then 5 characters and only alphabet. <em>Invalid Name</em>
                            </p>
                        )}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email"
                            minLength="5"
                            className="leading-7 text-sm">Email</label>
                        <input
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            ref={ref}
                            name="Email"
                            value={Customer_Info.Email}
                            className={`${error.Email ? "form-control is-invalid !border-red-400" : ""} w-full bg-white dark:!bg-gray-900 rounded border border-gray-300 dark:!border-gray-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                            required
                        />
                        {showErrorText.Email && (
                            <p role="alert" className='text-xs text-red-600'>
                                Please enter write correct email address. It will be used for further communication.<em> Invalid Email</em>
                            </p>
                        )}
                    </div>
                    <div className=" mb-3">
                        <label htmlFor="Phone_Number"
                            className="leading-7 text-sm">Phone No.</label>
                        <input
                            minLength="14"
                            pattern="[+][0-9]{1,3}[\s][0-9]{10}|[+][0-9]{1,3}[0-9]{10}"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            ref={ref}
                            name="Phone_Number"
                            className={`${error.Phone_Number ? "form-control is-invalid !border-red-400" : ""} w-full bg-white dark:!bg-gray-900 rounded border border-gray-300 dark:!border-gray-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                            required
                        />
                        {showErrorText.Phone_Number && (
                            <p role="alert" className='text-xs text-red-600'>
                                Please validate phone number with country pin code.<em> Invalid Phone number</em>
                            </p>
                        )}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Address"
                            className="leading-7 text-sm">Address</label>
                        <input
                            minLength="10"
                            maxLength="200"
                            pattern="[A-Za-z0-9'\.\-\s\,]"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            ref={ref}
                            name="Address"
                            value={Customer_Info.Address}
                            className={`${error.Address ? "form-control is-invalid !border-red-400" : ""} w-full bg-white dark:!bg-gray-900 rounded border border-gray-300 dark:!border-gray-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                            required
                        />
                        {showErrorText.Address && (
                            <p role="alert" className='text-xs text-red-600'>
                                Name should include more then 5 characters and only alpabets. <em>Invalid Name</em>
                            </p>
                        )}
                    </div>
                    <div className="d-grid gap-2">
                        <button disabled={disabledCheck} className='btn !text-white  bg-blue-700 hover:bg-blue-600 disabled:bg-blue-700'
                            type="submit"> {TotalPrice === 0 ? "loading.." : "Pay " + ((TotalPrice / 100) * 12 + TotalPrice)}</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Details