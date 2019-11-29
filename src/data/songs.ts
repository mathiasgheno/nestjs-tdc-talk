
export interface ISong {
  id: number,
  name: string,
  artists: string[],
  releaseYear: number,
  genre: string[],
}

const songs = [
  {
    id: 1,
    name: 'Reactivation',
    artists: ['Aura Vortex'],
    genre: ['Trance', 'Psy Trance'],
    releaseYear: 2017,
  },
  {
    id: 2,
    name: 'Imaginarium',
    artists: ['Aura Vortex'],
    genre: ['Trance', 'Psy Trance'],
    releaseYear: 2018,
  },
  {
    id: 3,
    name: 'Interlude - Shapeless Remix',
    artists: ['Blazy, Aura Vortex', 'Shapeless'],
    genre: ['Trance', 'Psy Trance'],
    releaseYear: 2019,
  },
  {
    id: 4,
    name: 'Downloading System',
    artists: ['Indra', 'Blazy', 'Sighter'],
    genre: ['Trance'],
    releaseYear: 2019,
  },
  {
    id: 5,
    name: 'Sentidos',
    artists: ['Groundbass', 'Blazy', 'Dang3r'],
    releaseYear: 2017,
    genre: ['Trance'],
  },
  {
    id: 6,
    name: 'Stars',
    artists: ['Menumas'],
    releaseYear: 2018,
    genre: ['Psy Trance'],
  },
  {
    id: 7,
    name: 'Good Vibes',
    artists: ['Menumas', 'Omnisent'],
    releaseYear: 2019,
    genre: ['Psy Trance'],
  }
];

export default () => {
  console.log('satanás');
  return Promise.resolve(songs);
}