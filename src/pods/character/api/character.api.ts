import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import Axios from 'axios';

const url = '/api/characters';

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await Axios.get<Character[]>(url);
  return data.find((h) => h.id === parseInt(id));
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character.id) {
    await Axios.put<Character>(`${url}/${character.id}`, character)
  }

  return true
};
