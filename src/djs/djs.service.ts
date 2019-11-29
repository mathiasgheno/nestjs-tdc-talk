import { Injectable } from "@nestjs/common";
import DJS, { IDJ } from '../data/djs';

@Injectable()
export class DjsService {

  async getDjById(id): Promise<IDJ> {
    const myDjs = await DJS();
    return myDjs
      .find(dj => dj.id == id);
  }

  async getNameDjByName(id): Promise<String> {
    const myDjs = await DJS();
    return myDjs
      .find(dj => dj.id == id)
      .name
  }

}