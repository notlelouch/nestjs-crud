import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string; author: string } {
    return { message: 'HOlA! AMIGOS', author: 'Aryan' };
  }
}
