import {Body, Controller, Post} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {NotificationService} from "./notification.service";

@ApiTags('notification')
@Controller('notification')
export class NotificationController {
    constructor(private readonly notificationService: NotificationService) {
    }

    @Post('')
    sendNotification(@Body('title') title: string, @Body('message') message: string){
        this.notificationService.sendNotif(title, message);
    }
}
