import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import CartItems from '../CartItems';
import ItemsContext from '../../context/cart/ItemsContext';
import { ThemeContext } from '../../context/themeContext';

function Header() {
    const navigate = useNavigate();
    const { theme, setTheme } = useContext(ThemeContext);
    const [cartStatus, setCartStatus] = useState(false);
    const { TotalItems } = useContext(ItemsContext);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            async function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setCartStatus(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    function OutsideAlerter(props) {
        const wrapperRef = useRef(null);
        useOutsideAlerter(wrapperRef);

        return <div ref={wrapperRef}>{props.children}</div>;
    }
    return (
        <>
            <header className="fixed w-full z-10 bg-white dark:!bg-gray-900 xl:h-20 l:h-20 md:h-20 text-gray-600 dark:text-gray-400 body-font border-b-2 border-gray-200 dark:border-gray-800 h-40">
                <div className="container h-full  mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <div className="flex title-font font-medium items-center light:text-gray-900 dark:text-gray-200 my-auto md:mb-0">
                        <Link className="ml-3 text-xl cursor-pointer" to="/">Tailblocks</Link>
                    </div>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link className="mr-5 hover:text-gray-900 hover:dark:text-gray-300 cursor-pointer" to="/">Home</Link>
                        <Link className="mr-5 hover:text-gray-900 hover:dark:text-gray-300 cursor-pointer" to="/men">Men</Link>
                        <Link className="mr-5 hover:text-gray-900 hover:dark:text-gray-300 cursor-pointer" to="/women">Women</Link>
                        <Link className="mr-5 hover:text-gray-900 hover:dark:text-gray-300 cursor-pointer" to="/contact_us">Contact Us</Link>
                    </nav>
                    <div className="inline-flex items-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 hover:dark:bg-gray-700 border-0 p-2 focus:outline-none rounded text-base my-auto lg:mr-2 md:mr-2 sm:mt-4" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                        {theme === 'dark'
                            ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
                                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                            </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-sun-fill" viewBox="0 0 16 16">
                                <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                            </svg>
                        }
                    </div>
                    <button className="inline-flex items-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 hover:dark:bg-gray-700 border-0 p-2 focus:outline-none rounded text-base my-auto sm:mt-4"
                        onClick={setCartStatus}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        {/* <svg fill="none" stroke="currentColor" stokelinecap="round" stokelinejoin="round" stokewidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg> */}
                    </button>
                    <OutsideAlerter>
                        <div className={`fixed bg-white dark:!bg-gray-900 z-10 top-0 bottom-0 right-0 w-80 transition ease-in-out duration-600 ${cartStatus ? "translate-x-0" : "translate-x-full"}`}
                            style={{ boxShadow: cartStatus ? '-9px 9px 23px -15px rgba(0,0,0,0.74)' : "none" }} show={{ cartStatus }}>
                            <div className='sticky h-20 w-full border-b-2 border-gray-200 dark:border-gray-800'>
                                <span className='absolute right-0 top-0 mr-4 mt-2 p-2 cursor-pointer'
                                    onClick={() => { setCartStatus(false) }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </span>
                            </div>
                            <div className={`cartSidebar px-4 overflow-y-scroll h-[84%] divide-y divide-gray-200 dark:divide-gray-800 flex flex-col items-center `} >
                                {TotalItems.length
                                    ? TotalItems.map((ThisItem, key) => {
                                        return <CartItems key={key}
                                            ThisItem={ThisItem} />
                                    })
                                    : <div className='mt-4'> NO ITEMS IN THE CART </div>
                                }
                            </div>
                            <button className='sticky text-white bottom-0 right-0 w-full h-10 bg-blue-700 hover:bg-blue-600'
                                type="button"
                                hidden={!TotalItems.length ? true : false}
                                onClick={() => { setCartStatus(false); navigate("/checkout"); }}>
                                Checkout
                            </button>
                        </div>
                    </OutsideAlerter>
                </div>
            </header>
            <div className='xl:h-20 l:h-20 md:h-20 h-40 w-full'></div>
        </>
    )
}

export default Header;


// const BurgerNav = styled.div`
//     transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
//     transition: transform 0.2s;
//     box-shadow: ${props => props.show ? '-9px 9px 23px -15px rgba(0,0,0,0.74)' : "none"};
// `

