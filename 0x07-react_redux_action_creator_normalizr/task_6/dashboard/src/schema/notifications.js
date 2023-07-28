import * as reduxNoti  from '../../../../notifications.json';
import { normalize, schema } from "normalizr";

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const notifListSchema = new schema.Array(notification);

export function getAllNotificationsByUser(userId) {
  const user = [];
  const { notifications, messages } = normalizedData.entities;
  const{ result } = normalizedData;

  for (const item of result) {
    if (notifications[item].author === userId) {
      user.push(messages[notifications[item].context]);
    }
  }
  return user;
}

export const normalizedData = normalize(reduxNoti, notifListSchema);