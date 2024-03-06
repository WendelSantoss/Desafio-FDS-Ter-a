import axios from "axios";
import {useState} from "react";

export default function useBusca(){

    const [cep, setCep]= useState()
    const [ dados, setDados]= useState()
    const [erros, setErros]= useState('')
    
    function buscaDados(){

        if (!/^\d+$/.test(cep)){
        
            setErros("O CEP deve conter apenas números, sem letras.");
            setDados(null)
        
        }else if(cep.length != 8){
            
            setErros("Favor digitar um cep válido com 8 dígitos")
            setDados(null)
        
        }else{

            fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response=> response.json())
            .then(data =>{
                setDados(data)
                setErros('')
                console.log(dados)
            })
            .catch(error => {
                setErros('Erro na Requisição')
                setDados(null);
                console.error('Erro na requisição:', error)}
            )
            
        };
    };

    return{
        cep, setCep, dados, buscaDados, erros
    }
    
} 