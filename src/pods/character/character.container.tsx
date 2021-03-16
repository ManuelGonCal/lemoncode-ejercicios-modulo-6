import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { CharacterComponent } from './character.component';

interface paramTypes {
  id: string,
}

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const { id } = useParams<paramTypes>();
  const history = useHistory();

  const handleLoadCharacter = async () => {
    const apiHotel = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiHotel));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  const handleSave = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    console.log(apiCharacter);
    const success = await api.saveCharacter(apiCharacter);
    console.log(success);
    if (success) {
      // history.goBack();
    } else {
      alert('Error on save hotel');
    }
  };

  return <CharacterComponent character={character} onSave={handleSave} />;
};
