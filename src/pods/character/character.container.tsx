import React from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';
import { CharacterComponent } from './character.component';

interface ParamTypes {
  id: string;
}

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );
  const { id } = useParams<ParamTypes>();

  const handleLoadHotel = async () => {
    const apiHotel = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiHotel));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadHotel();
    }
  }, []);

  return (
    <>
      <CharacterComponent character={character} />
      <Link to="/">&lt;&lt;Back to list</Link>
    </>
  );
};
