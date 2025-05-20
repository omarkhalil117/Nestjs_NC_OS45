import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class HelloMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('hello');
    next();
  }
}
