export enum ButtonColorsEnum {
  primary = 'primary',
  green = 'green',
}

type ButtonColorsTypes = keyof typeof ButtonColorsEnum;

export {
  ButtonColorsTypes,
};

export default ButtonColorsEnum;

