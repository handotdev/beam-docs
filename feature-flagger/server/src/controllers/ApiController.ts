import { BaseController } from "./BaseController";
import { ApiService } from "../services/ApiService";

export class ApiController extends BaseController {  

  protected async executeImpl (): Promise<void | any> {

    const records : any = await ApiService.getRecords();
    return this.jsonResponse(200, records[0]);
  }
}
