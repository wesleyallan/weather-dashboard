import Default from './Default';

declare module 'styled-components' {
  type CustomTheme = typeof Default;
  export interface DefaultTheme extends CustomTheme {}
}