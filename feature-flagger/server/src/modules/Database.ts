import { db, port, host } from '../utils/constants';
import { DBRecords } from 'types/Api';

export class Database {

  private connection: any;

  constructor() {
    this.connection = db;
  }

  public async query(args): Promise<DBRecords> {

    let response: Promise<any> = db.query(args, (error, result) => {
      if (error) return false;
      return result[0];
    });

    return response;
  } 
}