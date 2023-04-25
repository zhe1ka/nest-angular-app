import { IRandomUser } from './random-user.interface';

export interface IResponseRandomUser {
  info: {
    page: number;
    results: number;
    seed: string;
    version: string;
  };
  results: IRandomUser[];
}
