import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configSvc: ConfigType<typeof config>,
  ) {}

  getHello(): string {
    const apiKey = this.configSvc.apiKey;
    return `Hello World! ${apiKey}`;
  }
}
