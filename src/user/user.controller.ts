import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UppercasePipe } from 'src/pipes/uppercase/uppercase.pipe';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    getUserName(@Query('name', UppercasePipe) name: string) {
        return {
            'messageId': '00',
            'data': 'Hello ' + name
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
