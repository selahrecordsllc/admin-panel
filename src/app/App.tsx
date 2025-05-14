import 'normalize.css';
import { GlobalStyle, theme, store, persistor } from './lib';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import './lib';
import { routes } from './lib/routes/routes';
import { Toaster } from 'react-hot-toast';
import { SWRConfig } from 'swr';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Toaster position="top-center" reverseOrder={false} gutter={8} />
          <SWRConfig
            value={{ revalidateOnFocus: false, keepPreviousData: true }}
          >
            <RouterProvider router={routes} />
          </SWRConfig>
          <GlobalStyle />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
