import * as express from 'express'

export abstract class BaseController {
  protected req: express.Request;
  protected res: express.Response;
  
  protected abstract executeImpl (): Promise<void | any>;

  // execute is a handler for all child controllers
  // executeImpl() runs the controller logic
  public execute (req: express.Request, res: express.Response): void {
    this.req = req;
    this.res = res;

    this.executeImpl();
  }

  protected jsonResponse (code: number, message: string) {
    return this.res.status(code).json({ message });
  }

  protected ok<T> (response?: T) {
    if (response) {
      return this.res.status(200).json(response);
    } else {
      return this.res.sendStatus(200);
    }
  }

  protected noContent (message?: string) {
    return this.jsonResponse(204, message ? message : '');
  }

  protected error (message?: string) {
    return this.jsonResponse(400, message ? message : '');
  }

  protected unauthorized (message?: string) {
    return this.jsonResponse(401, message ? message : '');
  }

  protected forbidden (message?: string) {
    return this.jsonResponse(403, message ? message : '');
  }

  protected notFound (message?: string) {
    return this.jsonResponse(404, message ? message : '');
  }

  protected tooManyRequests (message?: string) {
    return this.jsonResponse(429, message ? message : '');
  }

  protected internalServerError (message?: string) {
    return this.jsonResponse(500, message ? message : '');
  }

  protected serviceUnavailable (message?: string) {
    return this.jsonResponse(503, message ? message : '');
  }
}