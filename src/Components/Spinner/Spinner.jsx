import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <Loader
        type="ThreeDots"
        color="rgb(49, 105, 138)"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};
export default Spinner;
