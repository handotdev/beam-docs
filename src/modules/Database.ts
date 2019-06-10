import { db, port, host } from '../utils/constants';

export class Database {

  public connection: any;
  public database: any;

  constructor() {
    this.connection = db.connect();
  }

  public async query(args): Promise<any> {

    let response: any = await db.query(args);

    if (response !== undefined) {
      return response;
    }

    return undefined;
  }
}