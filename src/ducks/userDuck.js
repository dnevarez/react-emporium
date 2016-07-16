// Action types
const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";
// initialState
const initialState = {
  username: '',
  email: '',
  loggedIn: false
};
// Reducer, exported by default, that handles the action.
export default function reducer( state =
initialState, action ) {
  switch ( action.type ) {
    case LOGIN:
      return Object.assign( {}, action.user, { loggedIn: true } );
    case LOGOUT:
      return initialState;
  }
  return state;
}
// Action creators
export function login(user){
  return { type: LOGIN, user };
}

export function logout() {
  return { type: LOGIN };
}
