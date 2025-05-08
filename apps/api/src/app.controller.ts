import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Get('test')
  getTest() {
    return { message: 'test OK' };
  }
}
