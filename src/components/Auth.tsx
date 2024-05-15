import { useState } from 'react'
import styles from './Auth.module.css'

interface AuthProps {
    setLogado: any
}


export function Auth(props: AuthProps) {


  const [input, setInput] = useState('');

  function VerifyPass(e : any) {
    e.preventDefault()
    if (input === 'senha') {
      props.setLogado(true)
    } else {
      alert('Senha incorreta')
    }
  }

  return (
      <div className={styles.container}>
      <p><span>Send</span> a key acess</p>

      <form>
        <input 
          type="text" 
          placeholder="pass..." 
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button 
         type="button"
         onClick={(e) => VerifyPass(e)}
        >
            Enviar
        </button>
      </form>
    </div>
  );
}
