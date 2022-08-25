import React, { Component } from "react";

class Pokemon extends Component {
    render() {
        const {
            name,
            type,
            averageWeight: { value, measurementUnit },
            image,
        } = this.props.pokemon;

        return (
            <section className='pokemon-card'>
                <div>
                    <p>Name: {name}</p>
                    <p>Type: {type}</p>
                    <p>Average weight: {value} {measurementUnit}</p>
                </div>
                <img src={image} alt={name}/>
            </section>
        )
    };
};

export default Pokemon;