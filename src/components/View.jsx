import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
// axios.defaults.baseURL = `http://localhost:${process.env.REACT_APP_NODE_PORT}`;

function View() {
    const location = useLocation().pathname.slice(1);
    const [Category_Product, setCategory_Product] = useState();
    useEffect( () => {
        // setCategory_Product (Object.keys(Category_Product).map((key) => Inital_Items[key].product_category_tree[1].slice(1, 2) === location.toUpperCase().slice(0, 1)))

        axios.get(`/products/${location.toUpperCase().slice(0, 1) === "M" ? 'men' : 'women'}`)
            .then((response) => {
                setCategory_Product(response.data);
                // console.log(Category_Product)
            })
    }, [location]);

    async function Filter (option) {
        if (option === "OG")
            await axios.get(`/products/${location.toUpperCase().slice(0, 1) === "M" ? 'men' : 'women'}`)
                .then((response) => {
                    setCategory_Product(response.data);
                    // console.log(Category_Product)
                })
        else if (option === "Price:LtoH")
            setCategory_Product(Object.values(Category_Product).sort((a, b) => a.discounted_price > b.discounted_price ? 1 : -1));
        else if (option === "Price:HtoL")
            setCategory_Product(Object.values(Category_Product).sort((a, b) => a.discounted_price > b.discounted_price ? -1 : 1));
        else
            setCategory_Product(Object.values(Category_Product).sort((a, b) => a.product_rating > b.product_rating ? -1 : 1))
    }

    function Rating({ children }) {
        let star = children;
        let star_rating = [];
        for (let i = 1; i <= 5; i++) {
            star_rating.push(
                <svg key={i}
                    fill={star-- > 0 ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-yellow-400"
                    viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
            );
        }
        return star_rating;
    }

    return (
        <div>
            <section className="text-gray-600 dark:text-gray-400 body-font dark:!bg-gray-900">
                <div className="container px-5 py-24 mx-auto relative">
                    <div className='text-right w-full border-b dark:border-gray-700 py-2 px-2 absolute left-0 top-0'>
                        <div className='ml-auto p-2 border w-max border-gray-200 dark:!border-gray-700 rounded '>
                        <span>Sort by: </span> 
                            <select className='bg-white dark:!bg-gray-900'  onChange={(e) => Filter(e.target.value)}>
                                <option value="OG">Featured</option>
                                <option value="Price:LtoH">Price: Low to High</option>
                                <option value="Price:HtoL">Price: High to Low</option>
                                <option value="CR">Customer Rating</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {Category_Product
                            ? Object.keys(Category_Product).map((key) => {
                                const { product_name, product_rating, image, brand, retail_price, discounted_price } = Category_Product[key];
                                return (
                                    <div key={key}
                                        className="rounded lg:w-1/4 md:w-1/2 py-4 px-1 w-full  transition transform duration-200 hover:shadow-lg shadow-gray-40 dark:shadow-gray-700 ">
                                        <Link to={`/product_detail/${key}`}
                                            className="block">
                                            <img alt="ecommerce"
                                                className="m-auto object-fit object-center h-48 block rounded"
                                                src={image[0]} />
                                        </Link>
                                        <div className="mt-4">
                                            <h3 className="text-gray-500 dark:text-gray-400 text-xs tracking-widest title-font mb-1">
                                                {brand}
                                            </h3>
                                            <h2 className="text-gray-900 dark:text-gray-200 title-font text-lg font-medium mb-1">
                                                {product_name}
                                            </h2>
                                            <div className="flex justify-center">
                                                <Rating>{product_rating}</Rating>
                                            </div>
                                            <p className="mt-1">
                                                &#8377; {discounted_price}.00
                                                <s className=' ml-2 text-red-600'>
                                                    &#8377; {retail_price}.00
                                                </s>
                                            </p>
                                        </div>
                                    </div>)
                            })
                            : <div className='w-full lg:h-[26rem] md:h-[26rem] h-72'>
                                <img alt="Loading" className='mx-auto mt-16' src={require("../Photos/282.gif")} width="50px" height="50px" />
                                <p className='mt-4'>Refresh if it takes time..</p>
                            </div>
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default View