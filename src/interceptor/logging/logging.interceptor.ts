import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    new Logger().log('Before...');
    const now = Date.now();
    return next.handle()
      .pipe(
        tap((data) => {
          new Logger().log(`After... ${Date.now() - now}ms`)
          new Logger().log(`Response: ${JSON.stringify(data)}`);
        }),
      );
  }
}
