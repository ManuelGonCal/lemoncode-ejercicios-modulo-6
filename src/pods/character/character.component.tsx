import React from 'react';
import { Formik, Form } from 'formik';
import {
  TextFieldComponent,
} from 'common/components';
import { Button } from '@material-ui/core';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character,  onSave } = props;
  const [sentence, setSentence] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    character.bestSentences = [...character.bestSentences, sentence];
    onSave(character);
    setSentence('');
  }

  return(
    <div className={classes.root}>
      <div className={classes.infoContainer}>
        <h2>{character.name}</h2>
        <p>{character.gender}</p>
        <p>{character.origin.name}</p>
        <p>{character.species}</p>
        <img src={character.image} alt="" width="300"/>
      </div>
      <div className={classes.sentencesContainer}>
        <h2>Best Sentences</h2>
        <ul className="">
        {character.bestSentences.map((sentence, index) => (
          <li key={index}>
            {sentence}
          </li>
        ))}
      </ul>
        <form className={classes.root} onSubmit={handleSubmit}>
          <label>
          <input name="sentence" value={sentence} onChange={(e) => setSentence(e.target.value)}/>
          </label>
          <button type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  )
};
