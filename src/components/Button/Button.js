import React from 'react';

import styles from './Button.module.css'

const Button = ({ onLoadMore, isHidden }) => (
  <button type="button"
    onClick={onLoadMore}
    className={styles.button}
    style={{ display: isHidden ? 'none' : 'block' }}>
    Load more
  </button>
);

export default Button;
