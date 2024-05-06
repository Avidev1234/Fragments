import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Fooditems from './components/Fooditems';
import Errormessage from './components/Errormessage';
import Container from './components/Container';
import Foodinput from './components/Foodinput';
import { useState } from 'react';

function App() {
  // let foodItems = [];
  
  // let foodItems = [ 'Milk', 'Green vegetable'];
const [Addvegeis, setAddvegeis] = useState([])
  let [txt, setTextState] = useState()
  // console.log("My current value is",txt);
  const handlekeydown=(e)=>{
    if (e.key==="Enter") {
      let enteredKey=e.target.value;
      e.target.value='';
      let AddFooditems=[...Addvegeis,enteredKey];
      setAddvegeis(AddFooditems)
      // console.log(AddFooditems);
      console.log("I Enterd ",enteredKey);
    } else {
      
      // console.log(e);
      setTextState(e.target.value);
    }
    // console.log("My new value is",setTextState);
  }
  // let FoodItemss = ['Dal', 'Salad', 'Roti', 'Milk', 'Green vegetable'];
  // if (foodItems.length===0) {
  //   return <h3>I am hungry</h3>
  // }
  // let emptyMessge= foodItems.length===0?<h3>I am still hungry</h3>:null;
  return (
    <>
    <Container>

      <h2 className='food-heading'>Healthy Food</h2>
      {/* {emptyMessge} */}
     <Foodinput handlekeydown={handlekeydown}/>
     <Errormessage fItems={Addvegeis} />
      <p>{txt}</p>
      <Fooditems foodItems={Addvegeis}/> 

    </Container>

    {/* <Container>
      <p>Above is the list of healthy food for your good diet</p>
    </Container> */}
    </>
    // <>
    //   <h2 className='food-heading'>Healthy Food</h2>
    //   {/* {emptyMessge} */}
    //  <Errormessage fItems={foodItems} />
    //   <Fooditems foodItems={foodItems}/> 

    // </>

  );

}

export default App;
