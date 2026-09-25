export const darkTheme: ColorTheme = {
  name: "dark",
  primary: '#1B2A32',
  secondary: '#2B1E33',
  background: '#0F1418',
  foreground: '#FFFFFF',
  surface: '#1E2329',
  accents: '#294D2A',
  card: '#2C1E12',
  text: '#E5E7EB',
  muted: '#9CA3AF',
  barStyle: "light-content",

}
export const lightTheme: ColorTheme = {
  name: "light",
  primary: '#CAE7F2',
  secondary: '#E7CCF3',
  background: '#FFFFFF',
  foreground: "#000000",
  surface: '#F1F3E7',
  accents: '#CDE7CB',
  card: '#F1D9BB',
  text: '#111827',
  muted: '#6B7280',
  barStyle: "dark-content",
}

export type ColorTheme = {
  name: "dark" | "light"
  primary: string;
  secondary: string;
  background: string;
  foreground: string;
  accents: string;
  surface: string;
  card: string;
  text: string;
  muted: string;
  barStyle: "dark-content" | "light-content"
}