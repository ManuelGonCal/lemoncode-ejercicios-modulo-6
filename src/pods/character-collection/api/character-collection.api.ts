import Axios from 'axios';
import {
  CharacterEntityApi,
  CollectionEntityApi,
} from './character-collection.api-model';

let CharacterCollection = [];
const url = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const { data } = await Axios.get<CollectionEntityApi>(url);
  return data.results;
};
