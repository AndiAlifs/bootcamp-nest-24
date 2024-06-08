import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUser() {
        return 'I am the User!';
    }

    createUser(name: string) {
        return 'Heloo, ' + name + '! Your account has been created!';
    }

    updateUser(id: string, name: string) {
        return 'Heloo, id ' + id + '! Your account has been updated, your new name is ' + name + '!';
    }
}
