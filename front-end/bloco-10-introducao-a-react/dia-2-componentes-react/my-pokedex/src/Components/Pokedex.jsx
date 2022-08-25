import React from "react";
import pokemons from "../data";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0,
            filter: '',
        }
    }

    setNextPokemon = () => {
        const { counter } = this.state;
        if (counter === pokemons.length - 1) {
            this.setState(() => ({
                counter: 0,
            }));
        } else {
            this.setState((prevState) => ({
                counter: prevState.counter + 1,
            }))
        }
    }

    setFilterType = () => {
        this.setState({
            // eslint-disable-next-line no-restricted-globals
            filter: event.target.innerText
        })
    }

    render() {
        const { filter } = this.state;
        const filteredTypes = pokemons.filter((pokemon) => {
            const poke = pokemon.type;
            return poke.includes(filter);
        })

        const { counter } = this.state;
        const pokemonHtmlElements =
            <Pokemon key={pokemons[counter].id}
                pokemon={pokemons[counter]}
            />

        return (
            <main>

                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="Pkemon logo" />
                <div className="pokedex">
                    {pokemonHtmlElements}
                </div>

                <input onClick={this.setNextPokemon} type="button" value="Próximo Pokémon" />
                {/* <input onChange={this.setFilterType} type="text" placeholder="Type"/> */}
                <button onClick={this.setFilterType} className="fireBtn">Fire</button>
            </main>
        )
    }
}

export default Pokedex;