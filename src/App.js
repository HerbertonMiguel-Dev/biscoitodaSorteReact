import React, { Component, useState } from "react";
import "./estilo.css";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: "",
      imagemAtual: require("./assets/biscoito.png"),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.fechaBiscoito = this.fechaBiscoito.bind(this);

    this.frases = [
      "Siga os bons e aprenda com eles.",
      "O bom-senso vale mais do que muito conhecimento.",
      "O riso é a menor distância entre duas pessoas.",
      "Deixe de lado as preocupações e seja feliz.",
      "Realize o óbvio, pense no improvável e conquiste o impossível.",
      "Acredite em milagres, mas não dependa deles.",
      "A maior barreira para o sucesso é o medo do fracasso.",
    ];
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    let novaFrase = '" ' + this.frases[numeroAleatorio] + ' "';

    this.setState({
      textoFrase: novaFrase,
      imagemAtual: require("./assets/biscoitoAberto.png"),
    });

  }

  fechaBiscoito(){

    this.setState({
      imagemAtual: require("./assets/biscoito.png"),
    });
  }
  

  render() {
    return (
      <div className="container">
        <img src={this.state.imagemAtual} className="img" alt="Biscoito da sorte" />
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito} />
        <Botao nome="Reiniciar" acaoBtn={this.fechaBiscoito} />
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}

export default App;
