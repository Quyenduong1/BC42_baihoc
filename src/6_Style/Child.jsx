import React from 'react'

import styles from "./child.module.scss"

function Child() {
  return (
    <div>
        <h1 className='heading'> Child Style</h1>

        {/* CSS Module */}
        <h1 className={styles.heading}>Hello Child CSS Module</h1>
    </div>
  );
}

export default Child