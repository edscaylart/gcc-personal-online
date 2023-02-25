import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    /* Blue */
    blue_900: "#052E52",
    blue_800: "#003B70",
    blue_700: "#0055A1",
    blue_600: "#2164A0",
    blue_500: "#7DB6E8",
    blue_400: "#A8CEF0",
    blue_300: "#D4E6F7",
    blue_200: "#E1EEF9",
    blue_100: "#E9F3FB",
    blue_50: "#F2F7FA",

    /* Complementar - Turquesa */
    turquoise_900: "#134044",
    turquoise_800: "#1E656C",
    turquoise_700: "#298A94",
    turquoise_600: "#34B0BC",
    turquoise_500: "#55C5D0",
    turquoise_400: "#7BD2DB",
    turquoise_300: "#A3E0E6",
    turquoise_200: "#CBEDF1",
    turquoise_100: "#E3F5F7",
    turquoise_50: "#F3FBFC",

    /* Cinza Neutro*/
    grey_900: "#212121",
    grey_800: "#424242",
    grey_700: "#616161",
    grey_600: "#757575",
    grey_500: "#9E9E9E",
    grey_400: "#BDBDBD",
    grey_300: "#E0E0E0",
    grey_200: "#EEEEEE",
    grey_100: "#F5F5F5",
    grey_50: "#FAFAFA",

    /* Cinza Frio*/
    cold_grey_900: "#263238",
    cold_grey_800: "#37474F",
    cold_grey_700: "#455A64",
    cold_grey_600: "#546E7A",
    cold_grey_500: "#607D8B",
    cold_grey_400: "#78909C",
    cold_grey_300: "#90A4AE",
    cold_grey_200: "#B0BEC5",
    cold_grey_100: "#CFD8DC",
    cold_grey_50: "#ECEFF1",

    // Alertas

    alert_failure: "#D32F2F",
    alert_warning: "#FFB300",
    alert_sucess: "#388E3C",

    black: "#000000",
    white: "#fff",
  },

  fonts: {
    mulish: {
      h1: [
        "font: 24px 'Mulish', sans-serif; font-weight: 700; line-height: 48px;",
      ],
      h2: [
        "font: 2rem 'Mulish', sans-serif; font-weight: 600;line-height: 44px;",
      ],
      h3_regular: [
        "font: 1.75rem 'Mulish', sans-serif; font-weight: 400; line-height: 48px;",
      ],
      h3_semibold: [
        "font: 1.75rem 'Mulish', sans-serif; font-weight: 600; line-height: 48px;",
      ],
      h4: [
        "font: 1.56rem 'Mulish', sans-serif;font-weight: 600;line-height: 32px;",
      ],
      h5_regular: [
        "font: 1.25rem 'Mulish', sans-serif;font-weight: 400;line-height: 28px;",
      ],
      h5_semibold: [
        "font: 1.25rem 'Mulish', sans-serif;font-weight: 600;line-height: 28px;",
      ],
      h5_bold: [
        "font: 1.25rem 'Mulish', sans-serif;font-weight: 700; line-height: 28px;",
      ],
      body_regular: [
        "font: 1rem 'Mulish', sans-serif; line-height: 24px;font-weight: 400",
      ],
      body_semibold: [
        "font: 1rem 'Mulish', sans-serif; line-height: 24px;font-weight: 600",
      ],
      body_bold: [
        "font: 1rem 'Mulish', sans-serif; line-height: 24px;font-weight: 700",
      ],
      small_regular: [
        "font: 0.87rem 'Mulish', sans-serif; line-height: 20px;font-weight: 400",
      ],
      small_semibold: [
        "font: 0.87rem 'Mulish', sans-serif; line-height: 20px;font-weight: 600",
      ],
      small_bold: [
        "font: 0.87em 'Mulish', sans-serif; line-height: 20px;font-weight: 700",
      ],
    },
  },
};

export const darkTheme = {
  colors: {
    /* Blue */
    blue_900: "#F2F7FA",
    blue_800: "#E9F3FB",
    blue_700: "#0055A1",
    blue_600: "#E1EEF9",
    blue_500: "#D4E6F7",
    blue_400: "#A8CEF0",
    blue_300: "#7DB6E8",
    blue_200: "#0055A1",
    blue_100: "#003B70",
    blue_50: "#263238",

    /* Complementar - Turquesa */
    turquoise_900: "#134044",
    turquoise_800: "#1E656C",
    turquoise_700: "#298A94",
    turquoise_600: "#34B0BC",
    turquoise_500: "#55C5D0",
    turquoise_400: "#7BD2DB",
    turquoise_300: "#A3E0E6",
    turquoise_200: "#CBEDF1",
    turquoise_100: "#E3F5F7",
    turquoise_50: "#F3FBFC",

    /* Cinza Neutro*/
    grey_900: "#212121",
    grey_800: "#424242",
    grey_700: "#616161",
    grey_600: "#757575",
    grey_500: "#9E9E9E",
    grey_400: "#BDBDBD",
    grey_300: "#E0E0E0",
    grey_200: "#EEEEEE",
    grey_100: "#F5F5F5",
    grey_50: "#FAFAFA",

    /* Cinza Frio*/
    cold_grey_900: "#263238",
    cold_grey_800: "#37474F",
    cold_grey_700: "#455A64",
    cold_grey_600: "#546E7A",
    cold_grey_500: "#607D8B",
    cold_grey_400: "#78909C",
    cold_grey_300: "#90A4AE",
    cold_grey_200: "#B0BEC5",
    cold_grey_100: "#CFD8DC",
    cold_grey_50: "#ECEFF1",
  },
  fonts: { ...theme.fonts },
};

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
  }


  *::-webkit-scrollbar {
      width: 12px;
      height: 12px;
      border-radius: 99px;
      
      
    }
    
    *::-webkit-scrollbar-track {
      background: #e0e0e0;
      border-radius: 99px;
            
    }

    *::-webkit-scrollbar-thumb {
      border-radius: 99px;
      background: ${theme.colors.grey_600};
    }

    *::-webkit-scrollbar-thumb:hover {
      background: #555;
    }


  #root {
    width: 100%;
    height:100%;
    display:flex ;
    flex-direction:column ;
  }

button{
  cursor:pointer ;
}

  input, button, *{
      background:none;
      border:0;
  }


  html, body {
    min-height: 100%;
    height: 100%;
    background: ${theme.colors.blue_50} ;
    scroll-behavior: smooth;
  }


h1{
    ${theme.fonts.mulish.h1}
}
h2{
    ${theme.fonts.mulish.h2}
}
h4{
    ${theme.fonts.mulish.h4}
}



input{

  &::-webkit-calendar-picker-indicator{
  opacity:0.6;
  cursor:pointer;
  }

}

`;
