import { ThemeOptions, createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#f36cf6",
    },
  },

  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          borderColor: "#ffffff",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          borderColor: "#ffffff",
        },
      },
    },

    MuiPagination: {
      styleOverrides: {
        root: {
          button: {
            color: "#fff",
            fontSize: "1rem",
          },
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          color: "#fff",
          borderColor: "#fff",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          borderColor: "#ffffff",
          fill: "#ffffff",
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          fill: "#ffffff",
          color: "#ffffff",
        },
      },
    },
  },
});
