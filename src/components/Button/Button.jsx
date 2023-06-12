import Link from 'next/link'
import React from 'react'
import styles from "./button.module.css"

const Button = ({text,url}) => {
  return (
    url ?
    <Link href={url ? url : "#"}>
        <button className={styles.container}>{text}</button>
    </Link>
    : <button className={styles.container}>{text}</button>


  )
}

export default Button