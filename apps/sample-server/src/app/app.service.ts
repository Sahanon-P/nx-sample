import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  getAnotherData() {
    return { message: 'Another Hello API' };
  }
}
