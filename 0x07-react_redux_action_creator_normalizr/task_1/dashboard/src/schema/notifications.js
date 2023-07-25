import * as reduxNoti  from '../../../../notifications.json';
import { normalize, schema } from "normalizr";

export function getAllNotificationsByUser(userId) {
    return reduxNoti.default.filter((contextObj) => contextObj.author.id === userId).map(({ context }) => context);
}

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const notifListSchema = new schema.Array(notification);

export const normalizedData = normalize(reduxNoti, notifListSchema);