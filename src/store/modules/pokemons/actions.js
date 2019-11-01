export function request(name, image) {
  return {
    type: '@pokemons/REQUEST',
    payload: { name, image },
  };
}

export function requestSuccess(name, image) {
  return {
    type: '@pokemons/REQUEST_SUCCESS',
    payload: { name, image },
  };
}

export function requestFailed() {
  return {
    type: '@pokemons/REQUEST_FAILED',
  };
}
