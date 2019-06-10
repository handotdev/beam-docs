import { BaseController } from "./BaseController";

export class TestController extends BaseController {  
  protected async executeImpl (): Promise<void | any> {

    let message = 'ts-express-api-template';
    return this.jsonResponse(200, message);
  }
}
