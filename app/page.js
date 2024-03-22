'use client'

import getRandomInt from '@/app/services/randomNumber'
import words from '@/app/services/words'
import Input from './components/Input'

import styles from "./page.module.css";
import { useEffect, useState } from 'react'

export default function Home() {
  const [poem, setPoem] = useState('')

  /* Gerar a história */

  function generateStory(){
    const phraseQuantity = getRandomInt(5,15)
    const poem = ""
    
    /* DECIDINDO AS ESTRUTURAS: */

    for(let i=0;i<phraseQuantity;i++){
      const randomNum = getRandomInt(0,3)
      let structure = ""
      
      if (randomNum === 0) {
        const pronounIndex = getRandomInt(0, 6);
        const verbIndex = getRandomInt(0, 9);
        const articleIndex = getRandomInt(0, 2);
        const nounIndex = getRandomInt(0, 9);
      
        const pronoun = words.pronoun[pronounIndex];
        const verb = words.verb[verbIndex];
        const article = words.article[articleIndex];
        const noun = words.noun[nounIndex];
      
        let structure = `${pronoun} ${verb} ${article} ${noun}`;
        if (pronoun === 'he' || pronoun === 'she') {
          structure = `${pronoun} does ${article} ${noun}`;
        } else if (pronoun === 'they') {
          structure = `${pronoun} ${verb} ${article} ${noun}s`;
        }
        setPoem(prevPoem => prevPoem + structure + "\n");
        console.log("Estrutura 1:", structure);
      } else if (randomNum === 1) {
        const articleIndex = getRandomInt(0, 2);
        const adjectiveIndex = getRandomInt(0, 9);
        const nounIndex = getRandomInt(0, 9);
      
        const article = words.article[articleIndex];
        const adjective = words.adjective[adjectiveIndex];
        const noun = words.noun[nounIndex];
      
        const structure = `${article} ${adjective} ${noun}`;
        console.log("Estrutura 2:", structure);
        setPoem(prevPoem => prevPoem + structure + "\n");
      } else if (randomNum === 2) {
        const pronounIndex = getRandomInt(0, 6);
        const verbIndex = getRandomInt(0, 9);
        const pronoun = words.pronoun[pronounIndex];
        const verb = words.verb[verbIndex];
      
        let structure = `Do ${pronoun} ${verb}?`;
        if (pronoun === 'he' || pronoun === 'she') {
          structure = `Does ${pronoun} ${verb}?`;
        } else if (pronoun === 'they') {
          structure = `Do ${pronoun} ${verb}?`;
        }
      
        console.log("Estrutura 3:", structure);
        setPoem(prevPoem => prevPoem + structure + "\n");
      } else if (randomNum === 3) {
        const pronounIndex = getRandomInt(0, 6);
        const verbIndex = getRandomInt(0, 9);
        const adverbIndex = getRandomInt(0, 7);
        const pronoun = words.pronoun[pronounIndex];
        const verb = words.verb[verbIndex];
        const adverb = words.adverb[adverbIndex];
      
        let structure = `${pronoun} ${verb} ${adverb}`;
        if (pronoun === 'he' || pronoun === 'she') {
          structure = `${pronoun} ${verb} ${adverb}`;
        } else if (pronoun === 'they') {
          structure = `${pronoun} ${verb} ${adverb}`;
        }
      
        console.log("Estrutura 4:", structure);
        setPoem(prevPoem => prevPoem + structure + "\n");
      } else if (randomNum === 4) {
        const articleIndex1 = getRandomInt(0, 2);
        const nounIndex1 = getRandomInt(0, 9);
        const prepositionIndex = getRandomInt(0, 9);
        const articleIndex2 = getRandomInt(0, 2);
        const nounIndex2 = getRandomInt(0, 9);
      
        const article1 = words.article[articleIndex1];
        const noun1 = words.noun[nounIndex1];
        const preposition = words.preposition[prepositionIndex];
        const article2 = words.article[articleIndex2];
        const noun2 = words.noun[nounIndex2];
      
        const structure = `${article1} ${noun1} ${preposition} ${article2} ${noun2}`;
        console.log("Estrutura 5:", structure);
        setPoem(prevPoem => prevPoem + structure + "\n");
      } else if (randomNum === 5) {
        const pronounIndex = getRandomInt(0, 6);
        const verbIndex = getRandomInt(0, 9);
        const adverbIndex = getRandomInt(0, 7);
        const pronoun = words.pronoun[pronounIndex];
        const verb = words.verb[verbIndex];
        const adverb = words.adverb[adverbIndex];
      
        let structure = `${pronoun} ${verb} ${adverb}`;
        if (pronoun === 'he' || pronoun === 'she') {
          structure = `${pronoun} ${verb} ${adverb}`;
        } else if (pronoun === 'they') {
          structure = `${pronoun} ${verb} ${adverb}`;
        }
      
        console.log("Estrutura 6:", structure);
        setPoem(prevPoem => prevPoem + structure + "\n");
      } else if (randomNum === 6) {
        const pronounIndex = getRandomInt(0, 6);
        const verbIndex = getRandomInt(0, 9);
        const adjectiveIndex = getRandomInt(0, 9);
        const nounIndex = getRandomInt(0, 9);
        const pronoun = words.pronoun[pronounIndex];
        const verb = words.verb[verbIndex];
        const adjective = words.adjective[adjectiveIndex];
        const noun = words.noun[nounIndex];
      
        let structure = `${pronoun} ${verb} ${adjective} ${noun}`;
      
        if (pronoun === 'he' || pronoun === 'she') {
          structure = `${pronoun} ${verb} ${adjective} ${noun}`;
        } else if (pronoun === 'they') {
          structure = `${pronoun} ${verb} ${adjective} ${noun}s`;
        }
      
        console.log("Estrutura 7:", structure);
        setPoem(prevPoem => prevPoem + structure + "\n");
      } else if (randomNum === 7) {
        const pronounIndex = getRandomInt(0, 6);
        const verbIndex = getRandomInt(0, 9);
        const nounIndex = getRandomInt(0, 9);
        const pronoun = words.pronoun[pronounIndex];
        const verb = words.verb[verbIndex];
        const noun = words.noun[nounIndex];
      
        let structure = `${pronoun} ${verb} ${noun}`;
        if (pronoun === 'he' || pronoun === 'she') {
          structure = `${pronoun} ${verb} ${noun}`;
        } else if (pronoun === 'they') {
          structure = `${pronoun} ${verb} ${noun}s`;
        }
      
        console.log("Estrutura 8:", structure);
        setPoem(prevPoem => prevPoem + structure + "\n");
      } else if (randomNum === 8) {
        const articleIndex = getRandomInt(0, 2);
        const nounIndex = getRandomInt(0, 9);
        const prepositionIndex = getRandomInt(0, 9);
        const article = words.article[articleIndex];
        const noun = words.noun[nounIndex];
        const preposition = words.preposition[prepositionIndex];
      
        const structure = `${article} ${noun} ${preposition}`;
        console.log("Estrutura 9:", structure);
        setPoem(prevPoem => prevPoem + structure + "\n");
      } else if (randomNum === 9) {
        const pronounIndex = getRandomInt(0, 6);
        const verbIndex = getRandomInt(0, 9);
        const adverbIndex = getRandomInt(0, 7);
        const pronoun = words.pronoun[pronounIndex];
        const verb = words.verb[verbIndex];
        const adverb = words.adverb[adverbIndex];
      
        let structure = `${pronoun} ${verb} ${adverb}`;
        if (pronoun === 'he' || pronoun === 'she') {
          structure = `${pronoun} ${verb} ${adverb}`;
        } else if (pronoun === 'they') {
          structure = `${pronoun} ${verb} ${adverb}`;
        }
      
        console.log("Estrutura 10:", structure);
        setPoem(prevPoem => prevPoem + structure + "\n");
      }
    }
  }

  console.log(poem)

  return (
    <main className={styles.main}>
      
      <div className={styles.title}>
        <h1 className={styles.titleText}>WORDS.WORDS.WORDS</h1>
        <h5 className={styles.titleText}>baug. systems ©️</h5>
      </div>

      <button onClick={generateStory} className={styles.button}>Generate your story</button>

      {poem && (
        <div className={styles.poemContainer}>
          {/* Dividindo o poema em linhas separadas e renderizando cada uma em um elemento <div> */}
          {poem.split("\n").map((line, index) => (
            <span className={styles.span} key={index}>{line}</span>
          ))}
        </div>
      )}

      

    </main>
  );
}
