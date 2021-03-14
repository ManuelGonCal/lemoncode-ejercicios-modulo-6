import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: `${character.id}`,
  picture: `https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`,
  name: character.name,
  status: character.status,
  origin: {
    name: character.origin.name,
    url: character.origin.url,
  },
});
