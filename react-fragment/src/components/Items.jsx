import PropTypes from 'prop-types';
import styles from "./item.module.css";
Items.propTypes = {
    myfoodItems: PropTypes.string,
    handlebuyButton: PropTypes.func,
    handleremove: PropTypes.func,
    bought: PropTypes.bool
};
export default function Items({ myfoodItems, handlebuyButton, handleremove, bought }) {
    const handle = () => {
        if (bought) {
            handleremove();
        } else {
            handlebuyButton()
        }

    }
    return (
        <li className={`${styles["kg-item"]} list-group-item  ${bought && "active"}`}>
            <span className={`${styles["kg-span"]}`}>{myfoodItems}</span>
            <button className={`${styles.Button} btn btn-info`}
                onClick={handle}>{bought ? "Remove":"Buy"}</button>
        </li>
    );
}

