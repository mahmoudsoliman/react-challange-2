import React, { Component } from 'react'

export default class PokeCard extends Component {
  render() {
    const {
      name,
      sprites,
      video
    } = this.props.pokeData
    
    return (
      <div className="poke-card">
        <h1 className="row poke-name">{name}</h1>
        <div className="row my">
          <img src={sprites.front_default}/>
          <img src={sprites.front_shiny}/>
        </div>
        <div className="my">
          <a className="row" href={video}>Watch {name} Here</a>
        </div>
      </div>
    )
  }
}
