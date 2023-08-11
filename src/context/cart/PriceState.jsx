import React, { useContext, useState } from "react";
import ItemsContext from "./ItemsContext";
import PriceContext from "./PriceContext";

function PriceState(props) {
    const { TotalItems } = useContext(ItemsContext);
    const [TotalPrice, setTotalPrice] = useState(0);

    return (
        <PriceContext.Provider value={{ TotalPrice, setTotalPrice }}>
            {props.children}
        </PriceContext.Provider>
    )
}

export default PriceState;