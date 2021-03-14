import Axios from 'axios';
import { Character } from './character.api-model';

const url = 'https://rickandmortyapi.com/api/character';

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await Axios.get<Character>(`${url}/${id}`);
  return data;
};
