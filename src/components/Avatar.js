import React from 'react'
import styles from '/workspace/p5reactfront/src/styles/Avatar.modules.css'

const Avatar = ({ src, height = 45, text }) => {
  return (
    <span>
        <img 
        className={styles.Avatar} 
        src={src}
        height={height} 
        width={height} 
        alt="avatar" />
        {text}
    </span>
  )
}

export default Avatar;