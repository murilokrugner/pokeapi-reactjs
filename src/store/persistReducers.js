import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReucer = persistReducer(
    {
      key: 'pokeapi',
      storage,
      whitelist: ['auth', 'pokemons'],
    },
    reducers
  );

  return persistedReucer;
};
