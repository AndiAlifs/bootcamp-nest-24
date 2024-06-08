import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    getUser() {
        return {
            'messageId': '00',
            'data': this.userService.getUser()
        };
    }

    @Post()
    createUser(@Body() req: any) {
        if (!req.name) {
            return {
                'messageId': '01',
                'message': 'Name is required!'
            };
        }

        return {
            'messageId': '00',
            'data': this.userService.createUser(req.name)
        };
    }

    @Put(':id')
    updateUser(@Body() req: any, @Param('id') id: string){
        if (!req.name) {
            return {
                'messageId': '01',
                'message': 'Name is required!'
            };
        }

        return {
            'messageId': '00',
            'data': this.userService.updateUser(id, req.name)
        };
    }
}
