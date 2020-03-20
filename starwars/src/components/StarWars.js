//https://swapi.co/api/people/
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    background-color: white;
    border-radius: 5px;
    padding: 3% 5%;
    margin: 3%;
`;


const StarWars = ({character}) => {
    console.log(character)
    return (
        <CardContainer>
            <h3>{character.name}</h3>

            <div>
                <p>{character.height}</p>
                <p>{character.mass}</p>
            </div>
            <div>
                <p>{character.birth_year}</p>
                <p>{character.gender}</p>
            </div>
        </CardContainer>
    )
}

export default StarWars;