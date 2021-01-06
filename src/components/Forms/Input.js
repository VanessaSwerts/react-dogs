import React from 'react'
import styles from './Input.module.css'

export default function Input(props) {
  const { label, id } = props

  return (<div className={styles.wrapper}>
    <label className={styles.label} htmlFor={id}>{label}</label>
    <input className={styles.input} {...props} id={id} name={id} />
    <p className={styles.error} >Erro</p> 
  </div>)
}
