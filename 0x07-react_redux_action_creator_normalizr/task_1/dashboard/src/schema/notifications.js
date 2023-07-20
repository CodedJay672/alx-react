import * as notificationData from '../../../../notifications.json' assert { type: 'json' };
import { normalize, schema } from 'normalizr';


// setup notification schema using normalizr
// create the user, message, and notification entities
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {}, {
  author: user,
  context: message,
});

// export the normalized output data
export const normalizedData = normalize(notificationData, notification);

// function that returns the context objects from the notification
// data which was imported from the notification.json.
export const getAllNotificationsByUser = (userId) => {
  const obj = notificationData.filter((item) => item.author.id === userId);
  const contexts = [];
  for (const item of obj) {
    contexts.push(item.context);
  }
  return contexts;
}