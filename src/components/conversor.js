import React, { Component, useState } from 'react';

import "./conversor.css"

function Conversor(props) {

    const [moedaA_valor, setMoedaA_valor] = useState("");
    const [moedaB_valor, setMoedaB_valor] = useState(0);

    const converter = () => {
        let de_para = `${props.moedaA}_${props.moedaB}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=0ccb432b73a6885d716e`;

        fetch(url)
        .then(res=>{
            return res.json()
        })
        .then(json=>{
            let cotacao = json[de_para];
            setMoedaB_valor((parseFloat(moedaA_valor) * cotacao).toFixed(2));
            
        })
        console.log(moedaB_valor);
    }

    return (
    <div className="conversor">
        <h2>{props.moedaA} para {props.moedaB}</h2>
        <input type="text" onChange={(e)=>{setMoedaA_valor(e.target.value)}}></input>
        <input type="button" value="Converter" onClick={converter}></input>
        <h2>Valor Convertido: R$ {moedaB_valor}</h2>
    </div>
    )
}

export default Conversor;