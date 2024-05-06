import PropTypes from 'prop-types';

export default function Errormessage({ fItems }) {
    // let foodItems = ['Dal', 'Salad', 'Roti', 'Milk', 'Green vegetable'];
    return (
        <>
            {fItems.length === 0 && <h2>I am hungry</h2>}
        </>
    );
}

Errormessage.propTypes = {
    fItems: PropTypes.arrayOf(PropTypes.string).isRequired // fItems prop is a required array of strings
};
