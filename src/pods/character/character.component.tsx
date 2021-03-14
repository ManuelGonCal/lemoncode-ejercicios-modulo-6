import React from 'react';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <>
      <h2>{character.name}</h2>
      <img src={character.image} alt="" />
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <h3>List of Episodes</h3>
      <ul className={classes.episodeList}>
        {character.episode.map((episode) => (
          <li className={classes.episodeElement} key={episode}>
            {episode.split('/').pop()}
          </li>
        ))}
      </ul>
    </>
  );
};
