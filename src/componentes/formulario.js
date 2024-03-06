'use client'
import styles from "./formulario.module.css"
import useBusca from "@/hoocks/useBusca";

export default function Formulario(){
    const { dados, cep, setCep, buscaDados, erros} = useBusca();
    
    function hangleCep(event){
        setCep(event.target.value);
        console.log(cep);
    }

    return(

        <section className={styles.flex}>

            <div className={styles.form}>

                <label htmlFor="cep">Digite seu CEP:</label>
                <input onChange={hangleCep} type="text" id="cep" name="cep" ></input>
                
                <button onClick={buscaDados}>Buscar</button>
            
            </div>
      
            <div className={styles.dados}>
                {erros && 
                    <h4>{erros}</h4>
                }
                {dados &&
                    <>
                        <h4>Logradouro: {dados.logradouro}</h4>
                        <h4>Bairro: {dados.bairro}</h4>
                        <h4>Cidade: {dados.localidade}</h4>
                        <h4>UF: {dados.uf}</h4>
                        <h4>DDD: {dados.ddd}</h4>
                    </>
                }
            </div>
        </section>

    )
}