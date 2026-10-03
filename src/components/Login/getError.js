let ERRORS = {
  'auth/invalid-email': 'invalidEmail',
  'auth/missing-password': 'missingPassword',
  'auth/weak-password': 'weakPassword',
  'auth/email-already-in-use': 'emailInUse',
  'auth/user-not-found': 'userNotFound',
  'auth/wrong-password': 'wrongPassword',
  'auth/invalid-credential': 'invalidCredential',
  'auth/too-many-requests': 'tooMany',
  'auth/network-request-failed': 'networkError',
  'auth/popup-closed-by-user': 'popupClosed',
  'auth/unauthorized-domain': 'unauthorizedDomain',
  'auth/operation-not-allowed': 'operationNotAllowed',
}

function getError(code, t) {
  let key = ERRORS[code]

  if (!key) {
    return t.generalError
  }

  return t[key]
}

export default getError
