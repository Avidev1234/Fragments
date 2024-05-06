import PropTypes from 'prop-types';
import styles from "./Container.module.css"
export default function Container(props) {
  return (
    <div className={styles.container}>{props.children}</div>
  )
}

Container.propTypes = {
    children: PropTypes.node.isRequired
  };