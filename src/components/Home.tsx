import { useState } from 'react'

import img1 from '../../public/img1.jpeg'
import img2 from '../../public/img2.jpeg'
import img3 from '../../public/img3.jpeg'
import img4 from '../../public/img4.jpeg'
import img5 from '../../public/img5.jpg'
import img6 from '../../public/img6.jpeg'
import fim from '../../public/fim.png'

import styles from './Home.module.css'

export function Home() {

    const [number, setNumber] = useState(0); 

    
    const imgs = [img1, img2, img3, img4, img5, img6, fim]
    const frases = [
        'No brilho dos seus olhos consigo enxergar um futuro maravilhoso ao seu lado.',
        'Nada neste mundo me faz mais feliz do que estar na sua companhia.',
        'Minha princesa, minha guerreira, minha companheira de aventuras: minha namorada.',
        'Você é o maior e melhor presente que Deus já me concedeu.',
        'Todas as frases de amor foram feitas para você... by: nana',
        `Agora é sério, eu te amo demais, isso é só uma lembrancinha para você tentar imaginar o que eu sou capaz de fazer para arrancar um sorriso seu, 
        você é o melhor que já me aconteceu, você é tudo para mim. Parabéns pois mais esse ano que se completa, que amanhã você evolua e chegue mais perto dos seus
        objeivos, e que esse ciclo se repita diariamente! E que eu também esteja do seu lado para sempre apoia-la... Obrigado.
        `
    ]
    function Ramdon () {
        if(number < imgs.length -1){
            setNumber(number+1)
        }else{
            setNumber(1)
        }
    }   


        return (
            <div 
             className={styles.container}
             onClick={Ramdon}
            >
                <img 
                  src={imgs[number]} 
                  alt="Evinha"

                />
                <p>{frases[number]}</p>
            </div>
  )
}