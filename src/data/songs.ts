import { ApiModelProperty } from "@nestjs/swagger";

export interface ISong {
  id: number,
  name: string,
  artists: string[],
  releaseYear: number,
  genre: string[],
}

export class SongDTO implements ISong {
  @ApiModelProperty()
  readonly id: number;

  @ApiModelProperty()
  readonly name: string;

  @ApiModelProperty()
  readonly artists: string[];

  @ApiModelProperty()
  readonly releaseYear: number;

  @ApiModelProperty()
  readonly genre: string[];
}

let songs = [
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

export const genres = [
  'Psy Trance',
  'Trance'
];

export default () => {
  return {
    get: () => {
      return Promise.resolve(songs)
    },
    put: song => {
      songs = songs.map(s => s.id == song.id ? song : s);
    },
    post: song => {
      songs.push(song);
    },
    delete: id => {
      songs = songs.filter(s => s.id != id);
    }
  }
}