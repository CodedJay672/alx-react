const notificationData = require('../../../../notifications.json');

const getAllNotificationsByUser = (userId) => {
  const obj = notificationData.filter((item) => item.author.id === userId);
  const contexts = [];
  for (const item of obj) {
    contexts.push(item.context);
  }
  return contexts;
}

export default getAllNotificationsByUser;