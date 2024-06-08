import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const currentTime = new Date().toLocaleString();
    new Logger().log(`Request Start: ${req.originalUrl} - ${req.method}`);
    if (req.body) {
      new Logger().log(`Request Body: ${JSON.stringify(req.body)}`);
    }
    next();
  }
}
