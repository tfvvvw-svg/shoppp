import { EmailAuthProvider, reauthenticateWithCredential, updatePassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase'

export async function saveProfile(user, fullName, curPass, newPass, confirmPass, t) {
  if (fullName) {
    await updateProfile(auth.currentUser, { displayName: fullName })
  }

  if (newPass || confirmPass) {
    if (!curPass) {
      return t.fillFields
    }

    if (newPass !== confirmPass) {
      return t.invalidCredential
    }

    let cred = EmailAuthProvider.credential(user.email, curPass)
    await reauthenticateWithCredential(auth.currentUser, cred)
    await updatePassword(auth.currentUser, newPass)
  }

  return ''
}
