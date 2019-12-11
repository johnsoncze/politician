import React from 'react'

import styles from './profilePicture.module.scss'

export default ({src, name}) => <img src={src} alt={name} className={styles.profile}/>;
