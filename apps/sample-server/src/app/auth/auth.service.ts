import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    sayAuth(){
        return {message: 'auth'}
    }
}
