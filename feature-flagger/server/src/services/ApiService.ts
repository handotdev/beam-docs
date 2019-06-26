require('dotenv').config({ path: require('find-config')('.env') });

import { DBRecords } from '../types/Api';
import { Database } from '../modules/Database';

export class ApiService {

  public static async getRecords(): Promise<any> {

    let database = new Database();
    let args = 'SELECT * FROM campaigns.campaigns LIMIT 5';

    let response: any = await database.query(args);
    return response;
  }
}