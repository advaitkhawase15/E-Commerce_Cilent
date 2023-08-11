import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/header/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Checkout from './components/checkout/Checkout';
import Footer from './components/Footer';
// import ItemsState from './context/cart/ItemsState';
import PriceState from './context/cart/PriceState';
import View from './components/View';
import ContactUs from './components/ContactUs';
import ProductDetail from './components/ProductDetail';
import ItemsContext from './context/cart/ItemsContext';
import Redirect from './components/checkout/Redirect';
// import Payment from './components/checkout/Payment';
axios.defaults.baseURL = `https://e-commerce-server-7s60.onrender.com`;

function App() {
  const [data, setData] = useState('');
  const { TotalItems, setTotalItems } = useContext(ItemsContext);

  useEffect(() => {
    const data = window.localStorage.getItem('TotalItems');
    if (data) setTotalItems(JSON.parse(data));
  }, [setTotalItems])

  useEffect(() => {
    window.localStorage.setItem('TotalItems', JSON.stringify(TotalItems))
  }, [TotalItems])

  useEffect(() => {
    axios.get("/")
      .then((response) => {
        setData(response.data.message);
      })
  }, []);


  return (
    <div className="App">
      {/* <ItemsState> */}
      <PriceState>
        <Router>
          <Header />
          <p className='absolute z-50 w-full dark:text-gray-400'>
            {data ? data : "---Server not Connected---"}
          </p>
          <Routes>
            <Route exact path="/"
              element={<Home />} />
            <Route exact path="/men"
              element={<View />} />
            <Route exact path="/women"
              element={<View />} />
            <Route exact path="/redirect"
              element={<Redirect />} />
            <Route exact path="/product_detail/:id"
              element={<ProductDetail />} />
            <Route exact path="/contact_us"
              element={<ContactUs />} />
            <Route exact path="/checkout"
              element={<Checkout />} />
            {/* <Route exact path="/payment"
              element={<Payment />} /> */}
          </Routes>
          <Footer />
        </Router>
      </PriceState>
      {/* </ItemsState> */}
    </div>
  );
}

export default App;
