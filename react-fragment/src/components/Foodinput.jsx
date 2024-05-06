import styles from "./Foodinput.module.css"
import PropTypes from 'prop-types';
export default function Foodinput({ handlekeydown }) {

   
  return (
    <div className={styles.Input_text}>
        <input type="text" placeholder="Enter food Item name" 
        onKeyDown={handlekeydown}/>
    </div>
  )
}

Foodinput.propTypes={
    handlekeydown:PropTypes.func.isRequired
}
