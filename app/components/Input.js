'use client'

import styles from '@/app/components/styles/input.module.css'
import { useState, useEffect } from 'react'

import placeholderFirstNames from '@/app/services/placeholderFirstNames'
import placeholderLastNames from '@/app/services/placeholderLastNames'
import getRandomInt from '../services/randomNumber'


const Input = () => {
  const [placeholderName, setPlaceholderName] = useState('')
  const [username, setUsername] = useState('')
  const [pronouns, setPronouns] = useState('')

  useEffect(()=>{
    const num1 = getRandomInt(0,9)
    const num2 = getRandomInt(0,9)
  
    const nome = "Ex: " + placeholderFirstNames[num1] + " " + placeholderLastNames[num2];
    setPlaceholderName(nome)
  }, [])


    return (
    <main>
        <div className={styles.userInfo}>

        <h2 className={styles.h2}>Insert your information</h2>
        
        {/* Username Input */}
        <div className={styles.usernameInput}>
          <label
            className={styles.label}
            htmlFor='username'
          >Insert your name:</label>
          <input 
            className={styles.input}
            name='username'
            placeholder={placeholderName}
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
        </div>
        
        {/* Pronouns Input */}
        <div className={styles.pronounsInput}>
          <label
            className={styles.label}
            htmlFor='pronouns'
          >Insert your pronouns:</label>
          <select 
            className={styles.select} 
            name='pronouns' 
            defaultValue={"Your Pronouns"}
            onChange={(e)=>{setPronouns(e.target.value)}}
          >
            <option disabled>Your Pronouns</option>
            <option>He/him</option>
            <option>She/Her</option>
            <option>They/Them</option>
            <option>Don't call me</option>
          </select>
        </div>

      {/* Botão gerar sua história */}
      <button className={styles.button}>Generate your story</button>

      </div>
    </main>
  )
}

export default Input