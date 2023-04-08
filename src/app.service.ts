import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configSvc: ConfigType<typeof config>,
    @Inject('TASKS') private tasks: any[],
  ) {}

  getHello(): string {
    const apiKey = this.configSvc.apiKey;
    console.log(this.tasks);
    return `Hello World! ${apiKey}`;
  }
}
