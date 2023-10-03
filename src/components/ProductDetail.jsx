import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import ItemsContext from '../context/cart/ItemsContext';
import PerfectScrollbar from 'react-perfect-scrollbar'
import "react-perfect-scrollbar/dist/css/styles.css";
import axios from 'axios';

function ProductDetail() {
    const { TotalItems, setTotalItems } = useContext(ItemsContext);
    var { id } = useParams();
    // id=Number(id);
    // const Product = Inital_Items[id] ? Inital_Items[id] : null;
    const [Product, setProduct] = useState();
    const [product_name, setproduct_name] = useState();
    const [image, setimage] = useState();
    const [retail_price, setretail_price] = useState();
    const [brand, setbrand] = useState();
    const [product_rating, setproduct_rating] = useState();
    const [description, setdescription] = useState();
    const [MainImage, setMainImage] = useState();
    const [discounted_price, setdiscounted_price] = useState();
    const [product_size, setproduct_size] = useState("SM");
    const [cartAlert, setCartAlert] = useState(false);

    useEffect(() => {
        axios.get(`/product_detail/${id}`)
            .then(async (response) => {
                const Current_product = response.data;
                setProduct(Current_product);
                setproduct_name(Current_product.product_name);
                setimage(Current_product.image);
                setretail_price(Current_product.retail_price);
                setbrand(Current_product.brand);
                setproduct_rating(Current_product.product_rating);
                setdescription(Current_product.description);
                setMainImage(Current_product.image[0]);
                setdiscounted_price(Current_product.discounted_price);
            })
    }, [id])
    // const { product_name, image, retail_price, brand, product_rating, description } = Product;

    function HandelAddToCart() {
        const flag = TotalItems.filter((CurrentItem) => CurrentItem.id === id && CurrentItem.product_size === product_size);
        if (flag.length === 0) {
            setTotalItems([
                ...TotalItems,
                {
                    id: id,
                    product_name: product_name,
                    image: image,
                    quantity: 1,
                    product_size: product_size,
                    discounted_price: discounted_price
                }]
            )
        }
        else {
            setTotalItems(
                TotalItems.map((CurrentItem) =>
                    CurrentItem.id === id
                        ? { ...CurrentItem, quantity: CurrentItem.quantity + 1 }
                        : { ...CurrentItem }
                )
            )
        }
        setCartAlert(true);
        setTimeout(() => {
            setCartAlert(false);
        }, 3000);
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
    function ReadMore({ children }) {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };
        return (
            <p className="text">
                {isReadMore ? text.slice(0, 450) : text}
                {text.length > 450
                    && <span onClick={toggleReadMore}
                        className="read-or-hide text-blue-500  hover:text-blue-700 cursor-pointer ">
                        {isReadMore ? "  ...read more" : "  show less"}
                    </span>
                }
            </p>
        );
    };


    return (
        <section className="dark:!bg-gray-900 text-gray-600 dark:text-gray-400 text-left body-font overflow-hidden h-full">
            {cartAlert &&
                <div className="fadeOut 5s ease-in-out flex items-center alert alert-success absolute right-0 rounded-tr-none"
                    role="alert">
                    <p>
                        Item added to cart Succefully!!
                    </p>
                    <button className='ml-2' onClick={() => setCartAlert(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>
            }
            <div className="container px-5 py-24 mx-auto">
                {Product
                    ? <div className="lg:w-4/5 lg:h-full h-max mx-auto flex flex-wrap">
                        <div className='lg:h-80 h-64'>
                            <div className='overflow-y-auto overscroll-y-auto mr-4 h-full'>
                                <PerfectScrollbar>
                                    {image
                                        ? image.map((image_src, key) => {
                                            return <img key={key}
                                                alt="Product Image"
                                                onMouseEnter={() => setMainImage(image[key])}
                                                className={`h-14 w-10 lg:w-14 mb-1 rounded-sm object-contain ${MainImage === image_src ? "border-2" : "border-0"}`}
                                                src={image_src} />
                                        })
                                        : "NO Image Avaliable"
                                    }
                                </PerfectScrollbar>
                            </div>
                        </div>
                        <img alt="Product Image"
                            className="lg:w-2/5 lg:h-[35rem] md:h-[30rem] h-64 w-3/4 object-contain object-center"
                            src={MainImage} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font tracking-widest">{brand ? brand : ""}</h2>
                            <h1 className="text-gray-900 dark:text-gray-200 text-3xl title-font font-medium mb-1">{product_name ? product_name : ""}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <Rating>
                                        {product_rating}
                                    </Rating>
                                </span>
                            </div>
                            <div className="leading-relaxed">
                                <ReadMore>
                                    {description ? description : ""}
                                </ReadMore>
                            </div>
                            <div className="flex mt-6 items-center pb-5 border-b-2 dark:text-gray-400 border-gray-200 dark:border-gray-800 mb-5">
                                <div className="flex items-center">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        <select onChange={(e) => setproduct_size(e.target.value)} className="rounded border appearance-none dark:bg-gray-900 border-gray-200 dark:!border-gray-700 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-12 text-center">
                                            <option selected value="SM" className='text-left'>SM</option>
                                            <option value="M" className='text-left'>M</option>
                                            <option value="L" className='text-left'>L</option>
                                            <option value="XL" className='text-left'>XL</option>
                                            <option value="XXL" className='text-left'>XXL</option>
                                        </select>
                                        <span className="absolute rounded-r-md dark:!border-gray-700 bg-gray-100 dark:bg-gray-800 right-0 top-0 h-full w-10 text-center text-gray-600 dark:text-gray-400 pointer-events-none flex items-center justify-center border-l">
                                            <svg fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="w-4 h-4"
                                                viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900 dark:text-gray-200">
                                    &#8377;  {discounted_price ? discounted_price : ""}.00
                                    <s className=' ml-2 text-red-600'>
                                        &#8377; {retail_price ? retail_price : ""}.00
                                    </s>
                                </span>
                                <button className="flex ml-auto text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
                                    onClick={HandelAddToCart}>Add to Cart</button>
                                {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button> */}
                            </div>
                        </div>
                    </div>
                    : <div className='w-full lg:h-[22rem] md:h-[22rem] h-64 text-center'>
                        <img alt="Loading" className='mx-auto' src={require("../Photos/282.gif")} width="50px" height="50px" />
                        <p className='mx-auto mt-4'>Refresh if it takes time..</p>
                    </div>
                }
            </div>
        </section>
    )
}

export default ProductDetail