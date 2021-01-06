import React from 'react'
import styles from './Input.module.css'

export default function Input(props) {
  const { label, id, error } = props

  return (<div className={styles.wrapper}>
    <label className={styles.label} htmlFor={id}>{label}</label>
    <input className={styles.input} {...props} id={id} name={id} />
    {error && <p className={styles.error} >{error}</p>}
  </div>)
}
