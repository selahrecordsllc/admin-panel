// create your theme
export const theme = {
  colors: {
    white: '#ffffff',
    primary: '#A374EB',
    colorText: '#333333',
    errorRed: '#DD1919',
    pageBackground: '#F1EAFC',
    borderInputGrey: '#E1E1E1',
    greyColorText: '#9E9E9E',
    lightGreen: '#19DDA2',
    disabledGrey: '#EDEDED',
    statusGreen: '#19DDA2',
    hoverButton: '#8B5FE0',
  },
  bottomLine: '1px solid #EDEDED',
};

// typing theme
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      primary: string;
      colorText: string;
      errorRed: string;
      pageBackground: string;
      borderInputGrey: string;
      greyColorText: string;
      lightGreen: string;
      disabledGrey: string;
      statusGreen: string;
      hoverButton: string;
    };
    bottomLine: string;
  }
}
