import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import Axios from 'axios';

const url = '/api/characters';

export const getCharacter = async (id: number): Promise<Character> => {
  const { data } = await Axios.get<Character[]>(url);
  return data.find((h) => h.id === id);
};

export const saveHotel = async (character: Character): Promise<boolean> => {
  return true;
};
