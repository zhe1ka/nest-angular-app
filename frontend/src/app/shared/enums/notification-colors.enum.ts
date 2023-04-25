export enum NotificationColorsEnum {
  red = 'red',
}

type NotificationColorsTypes = keyof typeof NotificationColorsEnum;

export {
  NotificationColorsTypes,
};

export default NotificationColorsEnum;

