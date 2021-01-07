import React from 'react'
import styles from './Input.module.css'

export default function Input({ label, type, id, error, value, onChange, onBlur }) {

  return (<div className={styles.wrapper}>
    <label className={styles.label} htmlFor={id}>{label}</label>
    <input className={styles.input} type={type} id={id} name={id} value={value} onChange={onChange} onBlur={onBlur} />
    {error && <p className={styles.error} >{error}</p>}
  </div>)
}
