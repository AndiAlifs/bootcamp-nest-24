import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { UppercasePipe } from 'src/pipes/uppercase/uppercase.pipe';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { LoggingInterceptor } from 'src/interceptor/logging/logging.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test-error')
  getError(){
    throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR); 
  }
}
