//https://swapi.co/api/people/
import React from 'react';
import styled from 'styled-components';
import './StarWars.scss';

const CardContainer = styled.div`
    display:flex;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
    padding: 1% 2%;
    margin: 1%;
`;

const StarWars = ({character}) => {
    console.log(character)
    return (
        <CardContainer>
            <h3>{character.name}</h3>
            <div>
                <div className='section'>
                    <p>Height: {character.height}</p>
                    <p>Mass: {character.mass}</p>
                </div>
                <div className='section'>
                    <p>Birth Year: {character.birth_year}</p>
                    <p>Gender: {character.gender}</p>
                </div>
            </div>
        </CardContainer>
    )
}

export default StarWars;