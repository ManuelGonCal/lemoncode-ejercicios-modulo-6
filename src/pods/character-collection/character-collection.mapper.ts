import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: `${character.id}`,
  picture: character.image,
  name: character.name,
  status: character.status,
  origin: {
    name: character.origin.name,
    url: character.origin.url,
  },
});
