import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const signUp = (email, password, username) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            try {
                auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(async () => {
                        console.log('User account created & signed in!');
                        let result = await firestore().collection('Users').doc(auth().currentUser.uid).set({
                            email: email,
                            username: username
                        });
                        resolve(result)
                    })
                    .catch(error => {
                        if (error.code === 'auth/email-already-in-use') {
                            reject('That email address is already in use!')
                            console.log('That email address is already in use!');
                        }
                        if (error.code === 'auth/invalid-email') {
                            reject('That email address is invalid!')
                            console.log('That email address is invalid!');
                        }
                        console.error(error);
                    });
            } catch (e) {
                reject(e)
            }
        })
    }
}

export const logIn = (email, password) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            try {
                auth()
                    .signInWithEmailAndPassword(email, password)
                    .then(async () => {
                        console.log("signed in")
                        resolve()
                    })
                    .catch(error => {
                        if (error.code === 'auth/email-already-in-use') {
                            console.log('That email address is already in use!');
                            reject('That email address is already in use!')
                        }
                        if (error.code === 'auth/invalid-email') {
                            reject('That email address is invalid!')
                            console.log('That email address is invalid!');
                        }
                        console.error(error);
                    });
            } catch (e) {
                reject(e)
            }
        })
    }
}
