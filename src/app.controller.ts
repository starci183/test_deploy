import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "https://www.facebook.com/starci183";
  }

  @Get("/greet")
  getGreet(): string {
    return "greetings from the NestJS application!";
  }
}
