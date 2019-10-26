export function request(data) {
  return {
    type: '@pokemons/REQUEST',
    payload: { data },
  };
}

export function requestSuccess(results) {
  return {
    type: '@pokemons/REQUEST_SUCCESS',
    payload: { results },
  };
}

export function requestFailed() {
  return {
    type: '@pokemons/REQUEST_FAILED',
  };
}
