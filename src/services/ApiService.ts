require('dotenv').config({ path: require('find-config')('.env') });

import { StoredData } from '../types/Api';
import { Database } from '../modules/Database';

export class ApiService {

  public static async getRecords(): Promise<StoredData> {

    let database = new Database();
    let args = 'SELECT * FROM campaigns.campaigns';

    let response: StoredData = {
      value: await database.query(args)
    };

    return response;
  }
}