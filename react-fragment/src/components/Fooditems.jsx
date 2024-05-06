import PropTypes from 'prop-types';
import Items from "./Items";
import { useState } from 'react';

// Define PropTypes validation for the Fooditems component
Fooditems.propTypes = {
    foodItems: PropTypes.arrayOf(PropTypes.string).isRequired
};

// Inside your Fooditems component
export default function Fooditems({ foodItems }) {
    const [active, setactive] = useState([])
    const [isBought, setIsBought] = useState(false);

    let onBuyItem =(item,event)=>{
        let newItems=[...active,item];
        console.log(event);
        setactive(newItems);
        setIsBought(true);
    }

    const handleRemoveButtonClick = () => {
        setIsBought(false);
        console.log(isBought);
      };
    // const [color, setColor] = useState('#ff0000');

    // console.log(typeof(foodItems));
    return (
        <ul className="list-group">
            {foodItems.map((item,idx) => (
                <Items 
                myfoodItems={item} 
                key={idx} 
                bought={active.includes(item)}
                handlebuyButton= {(event)=>onBuyItem(item,event)}
                handleremove={(event)=>handleRemoveButtonClick(item,event)}
                />
            ))}
        </ul>
    );
}
