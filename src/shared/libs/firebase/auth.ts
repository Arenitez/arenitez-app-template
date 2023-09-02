import { ReactNativeFirebase } from '@react-native-firebase/app';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

type FirebaseError = ReactNativeFirebase.NativeFirebaseError;

const isFirebaseError = (error: unknown): error is FirebaseError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    'message' in error
  );
};

const catchFirebaseAuthError = (error: unknown) => {
  if (isFirebaseError(error)) {
    switch (error.code) {
      case 'auth/email-already-in-use':
        return '既に使用されているメールアドレスです';
      case 'auth/invalid-email':
        return '無効なメールアドレスです';
      case 'auth/weak-password':
        return 'パスワードは6文字以上で入力してください';
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        return 'メールアドレスまたはパスワードが間違っています';
      case 'auth/user-disabled':
        return 'このアカウントは無効になっています';
      case 'auth/too-many-requests':
        return '短時間に多くのリクエストがありました。後ほど再試行してください';
      case 'auth/operation-not-allowed':
        return 'この認証方法は許可されていません';
      case 'auth/account-exists-with-different-credential':
        return '異なる認証情報で同じメールアドレスのアカウントが存在します';
      case 'auth/auth-domain-config-required':
        return '認証のドメイン設定が必要です';
      case 'auth/credential-already-in-use':
        return '認証情報はすでに別のユーザーで使用されています';
      case 'auth/operation-not-supported-in-this-environment':
        return '現在の環境ではこの操作はサポートされていません';
      case 'auth/timeout':
        return '認証サーバーへの接続がタイムアウトしました';
      default:
        return 'エラーが発生しました';
    }
  }
  return 'エラーが発生しました';
};

const signUpWithEmail = async (values: {
  email: string;
  password: string;
}): Promise<FirebaseAuthTypes.UserCredential> => {
  return await auth().createUserWithEmailAndPassword(
    values.email,
    values.password
  );
};

const signInWithEmail = async (values: {
  email: string;
  password: string;
}): Promise<FirebaseAuthTypes.UserCredential> => {
  return await auth().signInWithEmailAndPassword(values.email, values.password);
};

const signOut = async (): Promise<void> => {
  return await auth().signOut();
};

export const firebaseAuth = {
  signInWithEmail,
  signUpWithEmail,
  signOut,
  catchFirebaseAuthError,
};
