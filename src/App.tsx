import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./hooks/auth";
import { ErrorProvider } from "./hooks/errors";
import GlobalStyle, { theme } from "./styles/globalStyle";
import RoutesConfig from "./routes/route";
const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ErrorProvider>
          <ThemeProvider theme={theme}>
            <ToastContainer
              autoClose={4000}
              position="top-center"
              newestOnTop
              style={{ zIndex: 9999 }}
            />
            <GlobalStyle />
            <QueryClientProvider client={queryClient}>
              <RoutesConfig />
            </QueryClientProvider>
          </ThemeProvider>
        </ErrorProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
