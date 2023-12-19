'use client'

import { Provider } from 'react-redux';
import { store } from './store';  // Зміни тут: імпортуйте 'store', а не 'srore'

export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;  // Зміни тут: використовуйте 'store', а не 'srore'
}