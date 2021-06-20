import React, { ReactNode } from 'react';

import { AuthProvider } from './auth';
import { SearchProvider } from './search';

interface IAppProvider {
  children: ReactNode;
}

export const AppProvider = ({ children }: IAppProvider): JSX.Element => (
  <AuthProvider>
    <SearchProvider>{children}</SearchProvider>
  </AuthProvider>
);
