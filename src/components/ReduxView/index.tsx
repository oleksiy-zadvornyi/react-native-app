import React, {FC, PropsWithChildren} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import store, {persistor} from '@/store';

const ReduxView: FC<PropsWithChildren> = (props: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{props.children}</PersistGate>
    </Provider>
  );
};

export default ReduxView;
