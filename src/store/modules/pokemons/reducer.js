import produce from 'immer';

const InitialState = {
  loading: false,
};

export default function pokemons(state = InitialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@pokemons/REQUEST': {
        draft.loading = true;
        break;
      }
      case '@pokemons/REQUEST_SUCCESS': {
        draft.name = action.payload.name;
        draft.image = action.payload.image;
        draft.loading = false;
        break;
      }
      case '@pokemons/REQUEST_FAILED': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
