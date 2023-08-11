import React, { useState, useEffect } from "react";
import ItemsContext from "./ItemsContext";

const Inital_Items = {
    "e54bc0a7c3429da2ebef0b30331fe3d2": {
        "crawl_timestamp": "2016-03-25 22:59:23 +0000",
        "product_url": "http://www.flipkart.com/ladela-bellies/p/itmeh4kmxght7tuc?pid=SHOEH4KM2W3Z6EH5",
        "product_name": "Ladela Bellies",
        "product_category_tree": [
            "Footwear ",
            " Women's Footwear ",
            " Ballerinas ",
            " Ladela Bellies"
        ],
        "pid": "SHOEH4KM2W3Z6EH5",
        "retail_price": 1724,
        "discounted_price": 950,
        "image": [
            "http://img5a.flixcart.com/image/shoe/s/g/m/black-r998-22-ladela-38-original-imaega8phqh6tf4e.jpeg",
            "http://img6a.flixcart.com/image/shoe/s/g/m/black-r998-22-ladela-38-original-imaega8phqh6tf4e.jpeg",
            "http://img6a.flixcart.com/image/shoe/s/g/m/black-r998-22-ladela-38-original-imaeh3w9sc3nhuwa.jpeg",
            "http://img5a.flixcart.com/image/shoe/s/g/m/black-r998-22-ladela-38-original-imaeh3w99nazagyp.jpeg",
            "http://img5a.flixcart.com/image/shoe/s/g/m/black-r998-22-ladela-38-original-imaeh3w9pyfvmqap.jpeg",
            "http://img5a.flixcart.com/image/shoe/s/g/m/black-r998-22-ladela-38-original-imaeh3w9cycrgdgt.jpeg"
        ],
        "description": "Key Features of Ladela Bellies Brand: LADELA Color : Black,Ladela Bellies Price: Rs. 950 Experience the best bellies from the house of Ladela. Providing the best material to keep your feet cozy and active for the whole day.,Specifications of Ladela Bellies General Occasion Casual Ideal For Women Shoe Details Heel Height 0 inch Outer Material PU Color Black",
        "product_rating": 5,
        "overall_rating": 5,
        "brand": "Ladela",
        "product_specifications": {
            "Occasion": "Casual",
            "Ideal For": "Women",
            "Heel Height": "0 inch",
            "Outer Material": "PU",
            "Color": "Black"
        }
    },
    "d620fa0d35825bb3c0717e9d3446cc97": {
        "crawl_timestamp": "2016-04-05 17:56:58 +0000",
        "product_url": "http://www.flipkart.com/roadster-men-s-zipper-solid-cardigan/p/itmedfy7ueuk5mfs?pid=CGNEDFY77SGZTEQ2",
        "product_name": "Roadster Men's Zipper Solid Cardigan",
        "product_category_tree": [
            "Clothing ",
            " Men's Clothing ",
            " Winter & Seasonal Wear ",
            " Cardigans ",
            " Roadster Cardigans ",
            " Roadster Men's Zipper Solid Cardigan"
        ],
        "pid": "CGNEDFY77SGZTEQ2",
        "retail_price": 1399,
        "discounted_price": 699,
        "image": [
            "http://img5a.flixcart.com/image/cardigan/e/q/2/1-1-872907-roadster-m-original-imaeczn7rzdcghrz.jpeg",
            "http://img6a.flixcart.com/image/cardigan/e/q/2/1-1-872907-roadster-l-original-imaeczn7g9zcqhny.jpeg",
            "http://img6a.flixcart.com/image/cardigan/e/q/2/1-1-872907-roadster-xl-original-imaeczn7jzbdrb6k.jpeg",
            "http://img5a.flixcart.com/image/cardigan/e/q/2/1-1-872907-roadster-xl-original-imaeczn7qygcgwqw.jpeg",
            "http://img5a.flixcart.com/image/cardigan/e/q/2/1-1-872907-roadster-xl-original-imaeczn7ncbz9r6t.jpeg"
        ],
        "description": "Key Features of Roadster Men's Zipper Solid Cardigan Fabric: 100% Acrylic Suitable For: Western Wear,Roadster Men's Zipper Solid Cardigan Price: Rs. 699 Navy blue and olive green cardigan, has a mock collar, a full zip closure, long raglan sleeves, two insert pockets, a ribbed hemLook stylish while beating the winter chill in this comfortable cardigan from Roadster. Team it with a pair of jeans and casual shoes when heading out for the day..,Specifications of Roadster Men's Zipper Solid Cardigan Cardigan Details Closure Zipper Sleeve Full Sleeve Number of Contents in Sales Package Pack of 1 Fabric 100% Acrylic General Details Pattern Solid Ideal For Men's Occasion Casual Fabric Care Machine-Wash Cold Additional Details Style Code 872907",
        "product_rating": 3.6,
        "overall_rating": 3.6,
        "brand": "Roadster",
        "product_specifications": {
            "Closure": "Zipper",
            "Sleeve": "Full Sleeve",
            "Number of Contents in Sales Package": "Pack of 1",
            "Fabric": "100% Acrylic",
            "Pattern": "Solid",
            "Ideal For": "Men's",
            "Occasion": "Casual",
            "Machine-Wash Cold": "-1",
            "Style Code": "872907"
        }
    },
    "e5a5956dc69034776fa093f891ff9a44": {
        "crawl_timestamp": "2016-05-20 15:45:50 +0000",
        "product_url": "http://www.flipkart.com/adidas-solid-men-s-track-top/p/itmebgckanmfdahv?pid=TKTEBGCK4ZVWZEZS",
        "product_name": "Adidas Solid Men's Track Top",
        "product_category_tree": [
            "Clothing ",
            " Men's Clothing ",
            " Sports Wear ",
            " Track Tops ",
            " Adidas Track Tops ",
            " Adidas Solid Men's Track Top"
        ],
        "pid": "TKTEBGCK4ZVWZEZS",
        "retail_price": 2999,
        "discounted_price": 1949,
        "image": [
            "http://img5a.flixcart.com/image/track-top/x/d/f/ess-premfz-hood-blue-adidas-s-1000x1000-imaecejnhyzhvrwn.jpeg",
            "http://img5a.flixcart.com/image/track-top/x/d/f/ess-premfz-hood-blue-adidas-s-original-imaecejnhyzhvrwn.jpeg",
            "http://img6a.flixcart.com/image/track-top/x/d/f/ess-premfz-hood-blue-adidas-m-original-imaegrapatahjvgz.jpeg",
            "http://img5a.flixcart.com/image/track-top/x/d/f/ess-premfz-hood-blue-adidas-s-original-imaecejng6ayp7zf.jpeg",
            "http://img5a.flixcart.com/image/track-top/x/d/f/ess-premfz-hood-blue-adidas-m-original-imaegrapqxgjkzu8.jpeg",
            "http://img5a.flixcart.com/image/track-top/x/d/f/ess-premfz-hood-blue-adidas-s-original-imaecejnhvg5hkkx.jpeg",
            "http://img5a.flixcart.com/image/track-top/x/d/f/ess-premfz-hood-blue-adidas-m-original-imaegraperjsye9q.jpeg",
            "http://img5a.flixcart.com/image/track-top/x/d/f/ess-premfz-hood-blue-adidas-m-original-imaegrapfdv3xntu.jpeg",
            "http://img6a.flixcart.com/image/track-top/x/d/f/ess-premfz-hood-blue-adidas-m-original-imaegrapmyfyztzx.jpeg"
        ],
        "description": "Specifications of Adidas Solid Men's Track Top Track Top Details Sleeve Full Sleeve Closure Zipper Fabric Cotton, Polyester Pockets Kangaroo Pockets at Front Design Logo on Chest General Details Pattern Solid Ideal For Men's Occasion Sports Fabric Care Machine Wash as per Tag, Do not Dry Clean, Do not Bleach, Iron Steam or Dry as per Tag Additional Details Other Details Hooded Style Code ESS PREMFZ HOOD BLUE",
        "product_rating": 1,
        "overall_rating": 1,
        "brand": "Adidas",
        "product_specifications": {
            "Sleeve": "Full Sleeve",
            "Closure": "Zipper",
            "Fabric": "Cotton, Polyester",
            "Pockets": "Kangaroo Pockets at Front",
            "Design": "Logo on Chest",
            "Pattern": "Solid",
            "Ideal For": "Men's",
            "Occasion": "Sports",
            "Machine Wash as per Tag": "-1",
            "Do not Dry Clean": "-1",
            "Do not Bleach": "-1",
            "Iron Steam or Dry as per Tag": "-1",
            "Other Details": "Hooded",
            "Style Code": "ESS PREMFZ HOOD BLUE"
        }
    },
    "99b43531ced17db7b368b2b39ab123e8": {
        "crawl_timestamp": "2016-04-21 20:34:29 +0000",
        "product_url": "http://www.flipkart.com/speedo-men-s-swimsuit/p/itme5gn66mdgtb6n?pid=SWIE5GN6EQ4HKHVD",
        "product_name": "Speedo Men's Swimsuit",
        "product_category_tree": [
            "Clothing ",
            " Men's Clothing ",
            " Sports Wear ",
            " Swimsuit & Swimwear ",
            " Speedo Swimsuit & Swimwear ",
            " Speedo Men's Swimsuit"
        ],
        "pid": "SWIE5GN6EQ4HKHVD",
        "retail_price": 699,
        "discounted_price": 699,
        "image": [
            "http://img5a.flixcart.com/image/swimsuit/h/v/d/8141117780-speedo-32-1000x1000-imaeh2f3chwgkk9t.jpeg",
            "http://img5a.flixcart.com/image/swimsuit/h/v/d/8141117780-speedo-32-original-imaeh2f3chwgkk9t.jpeg",
            "http://img5a.flixcart.com/image/trunk/8/5/j/8141117780-speedo-70-original-imae5z63gdhyfpyf.jpeg",
            "http://img5a.flixcart.com/image/swimsuit/h/v/d/8141117780-speedo-32-original-imaeh2f3fep2vytg.jpeg",
            "http://img5a.flixcart.com/image/swimsuit/h/v/d/8141117780-speedo-42-original-imaeh2f3u9p3t7yh.jpeg",
            "http://img6a.flixcart.com/image/trunk/8/5/j/8141117780-speedo-70-original-imae5z63sfy86gbg.jpeg",
            "http://img6a.flixcart.com/image/trunk/8/5/j/8141117780-speedo-70-original-imae5z63tz5bhyde.jpeg",
            "http://img6a.flixcart.com/image/swimsuit/t/d/a/8141117780-speedo-44-original-imaeh2f3hfhp3zht.jpeg",
            "http://img5a.flixcart.com/image/swimsuit/h/v/d/8141117780-speedo-28-original-imae5zcdjgnwhzhg.jpeg"
        ],
        "description": "Specifications of Speedo Men's Swimsuit General Details Occasion Sports Ideal For Men's",
        "product_rating": 4,
        "overall_rating": 4,
        "brand": "Speedo",
        "product_specifications": {
            "Occasion": "Sports",
            "Ideal For": "Men's"
        }
    },
    "cb8d36a60e2d1bae4c8c46875e1a08d6": {
        "crawl_timestamp": "2016-06-17 14:13:36 +0000",
        "product_url": "http://www.flipkart.com/mee-women-s-maternity-panty/p/itmeenemccqsmvag?pid=PANEENEMG9NPM2QQ",
        "product_name": "Mee Mee Women's Maternity Panty",
        "product_category_tree": [
            "Clothing ",
            " Women's Clothing ",
            " Maternity Wear ",
            " Lingerie & Sleepwear ",
            " Panties ",
            " Mee Mee Panties ",
            " Mee Mee Women's Maternity Panty (Pack of 2)"
        ],
        "pid": "PANEENEMG9NPM2QQ",
        "retail_price": 358,
        "discounted_price": 358,
        "image": [
            "http://img6a.flixcart.com/image/panty/q/e/z/mm-akl-01pnty-prp-mee-mee-xl-1000x1000-imaeeh52xpwhwrcp.jpeg",
            "http://img5a.flixcart.com/image/panty/q/e/z/mm-akl-01pnty-prp-mee-mee-xl-original-imaeeh52xpwhwrcp.jpeg"
        ],
        "description": "Key Features of Mee Mee Women's Maternity Panty Made of premium quality soft 90% cotton and 10% spandex fabrics. Breathable fabric that is gentle on the skin and stretchable, with a comfy fit. Provides support to lower back & abdominal area, reduces pressure on pelvic muscles. Fits the growing belly during pregnancy and comfy to wear during post-pregnancy till mother loses inches. Clean, seamless lines are invisible under all clothes and allows mother ease of movement.,Mee Mee Women's Maternity Panty (Pack of 2) Price: Rs. 358 Pregnant mothers need lingerie that support and adapt to their growing curves. Mee Mee's Soft Maternity Support Panty provides a clean, seamless fit to every mommy-to-be. The stretchable fabric provides mothers with ease of movement even in the post-pregnancy stage. The design of the panty supports the abdominal area and the lower back and also gives respite from pressure in the pelvic muscles.,Specifications of Mee Mee Women's Maternity Panty (Pack of 2) Panty Details Number of Contents in Sales Package Pack of 2 Fabric Knits Type Maternity General Details Pattern Solid Ideal For Women's In the Box 2 Panty",
        "product_rating": 1,
        "overall_rating": 1,
        "brand": "Mee Mee",
        "product_specifications": {
            "Number of Contents in Sales Package": "Pack of 2",
            "Fabric": "Knits",
            "Type": "Maternity",
            "Pattern": "Solid",
            "Ideal For": "Women's",
            "2 Panty": "-1"
        }
    }
}

function ItemsState(props) {
    const [TotalItems, setTotalItems] = useState([]);
    return (
        <ItemsContext.Provider value={{ TotalItems, setTotalItems }}>
            {props.children}
        </ItemsContext.Provider>
    )
}

export default ItemsState;
export { Inital_Items };