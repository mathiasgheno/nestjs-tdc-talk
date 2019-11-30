import { ApiModelProperty } from "@nestjs/swagger";
import { SongDTO } from "./songs";

export interface IDJ {
  id: number,
  name: string,
  spotifyLink: string,
  genders: string[],
}

export class DjsDTO implements IDJ {
  @ApiModelProperty() readonly id: number;
  @ApiModelProperty() readonly name: string;
  @ApiModelProperty() readonly spotifyLink: string;
  @ApiModelProperty() readonly genders: string[];
}

export class DjsWithSongs extends DjsDTO {
  @ApiModelProperty({
    isArray: true,
    required: true,
    type: SongDTO,
  }) readonly songs;
}

const djs: IDJ[] = [
  {
    id: 1,
    name: 'Menumas',
    spotifyLink: 'https://open.spotify.com/artist/4Twac77vlS7hFrMd0tcd4B?si=_nFVtcG-QK6bXZwBeXZ46w',
    genders: ['Trance', 'Psy Trance'],
  },
  {
    id: 2,
    name: 'Aura Vortex',
    spotifyLink: 'https://open.spotify.com/artist/5T6ATRUoiqVQpcQTK94ies?si=QbknMu6TRR2Uzh1qqMU0nw',
    genders: ['Trance', 'Progressive Trance', 'Psy Trance'],
  },
  {
    id: 3,
    name: 'Blazy',
    spotifyLink: 'https://open.spotify.com/artist/0ASqieRgSFzYlNmf1VkBVC?si=OPhmWpg-ToKItPIXdhRnJg',
    genders: ['Psy Trance', 'Future House'],
  },
  {
    id: 4,
    name: 'Shapeless',
    spotifyLink: 'https://open.spotify.com/artist/01056gItT5lFJEvQnFOByX?si=0qOlZXnxSx2jNaC55vcRkQ',
    genders: ['Psy Trance', 'Electro House', 'House', 'Dance'],
  },
  {
    id: 5,
    name: 'Indra',
    spotifyLink: 'https://open.spotify.com/artist/3sH57C4p0KSpzkh5uY0bK6?si=bmYeamxjTIyEIruZNMlZcA',
    genders: ['Psy Trance', 'House', 'Full On'],
  },
  {
    id: 6,
    name: 'Boris Brejcha',
    spotifyLink: 'https://open.spotify.com/artist/6caPJFLv1wesmM7gwK1ACy?si=wnrfF_zIRkm0GzUGB0R8ag',
    genders: ['Progressive House', 'Techno', 'Minumal Techno'],
  }
];

export default () =>  Promise.resolve(djs);