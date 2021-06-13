import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class NotificationService {
    sendNotif(title: string, message: string) {
        // admin.messaging().sendToDevice(fcmtoken, payload)
    }
}
