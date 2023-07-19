const notificationData = require('../../../../notifications.json');

const getAllNotificationsByUser = (userId) => {
  const obj = notificationData.filter((item) => item.id === userId);
  return obj.context;
}

export default getAllNotificationsByUser;