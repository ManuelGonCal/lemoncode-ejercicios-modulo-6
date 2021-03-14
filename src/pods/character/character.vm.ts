export interface Character {
  id: string;
  name: string;
  image: string;
  species: string;
  gender: string;
  episode: string[];
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  image: '',
  species: '',
  gender: '',
  episode: [''],
});
