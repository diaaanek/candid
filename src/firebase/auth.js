import { auth } from './firebase'

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password)

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password)

// Sign Out
export const doSignOut = () => auth.signOut()

// returns firebase auth service
// export const getAuth = () => {
//   return firebase.auth();
// };
//
// export const githubOAuth = () => {
//   return new firebase.firebase_.auth.GithubAuthProvider();
// };
//
// export const facebookOAuth = () => {
//   return new firebase.firebase_.auth.FacebookAuthProvider();
// };

// // Password Reset
// export const doPasswordReset = email =>
//   auth.sendPasswordResetEmail(email, {
//     url: 'https://m3ypyo6wq9.codesandbox.io/signin'
//   })
//
// // Password Change
// export const doPasswordUpdate = password =>
//   auth.currentUser.updatePassword(password)
