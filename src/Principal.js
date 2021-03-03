import React, { Component } from 'react';




export default class Principal extends Component {
     constructor(props){
        super(props);
 
        this.state = { 
            moedaA_valor: 1,
            moedaB_valor: 0,
            
        }

        this.converter = this.converter.bind(this); 
     }

     converter(){
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;

        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=20741cb2f37fb4f4958d`;

        fetch(url)
            .then( res => {
                return res.json()
            })
            .then(json => {
                let cotacao = json[de_para];
                let moedaB_valor = (this.state.moedaA_valor * cotacao).toFixed(2);
                this.setState({moedaB_valor})
            });
    }


    render() {
        return (
            <div className="coteiner"  >
                <h2>Cotação do  {this.props.moedaA}</h2>
                
                <input className="button" type="button" value="VER COTAÇAO" onClick={this.converter}></input>
                <h2>COTAÇAO: <span> {this.state.moedaB_valor} </span></h2>

            </div>
        )
    }
}
 