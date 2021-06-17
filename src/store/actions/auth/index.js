import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

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
export const logOut = () => {
    return dispatch => {
        return new Promise(async (resolve, reject) => {
            try {
                await auth().signOut()
                resolve()
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

                        reject(error)


                    });
            } catch (e) {
                reject(e)
            }
        })
    }
}

export const profileData = (username, dob, country, city, zipCode) => {
    return dispatch => {
        return new Promise(async (resolve, reject) => {
            try {
                console.log('User account updated');
                let result = await firestore().collection('Users').doc(auth().currentUser.uid).update({
                    fullname: username,
                    dob: dob,
                    country: country,
                    city: city,
                    zipCode: zipCode,
                    user_id: auth().currentUser.uid,

                });
                resolve(result)
            } catch (error) {
                reject(error)
            }
        })
    }
}
export const genderData = (gender) => {
    return dispatch => {
        return new Promise(async (resolve, reject) => {
            try {
                console.log('User gender updated');
                let result = await firestore().collection('Users').doc(auth().currentUser.uid).update({
                    gender: gender,
                });
                resolve(result)
            } catch (error) {
                reject(error)
            }
        })
    }
}

export const profileImage = (image, score) => {
    return dispatch => {
        return new Promise(async (resolve, reject) => {
            try {
                let reference = storage().ref('profilePics/' + auth().currentUser.uid + "/" + auth().currentUser.uid + Date.now() + ".jpg");
                let task = reference.putFile(image);
                await task
                task.snapshot.ref.getDownloadURL().then(async (e) => {
                    let upload = await firestore().collection("Users").doc(auth().currentUser.uid).update({
                        profile_picture: e
                    })
                    createSelfie(e, score)
                    resolve(upload)
                }).catch((e) => {
                    console.log('uploading image error => ', e)
                });

            } catch (error) {
                reject(error)
            }
        })
    }
}

export const getUser = () => {
    return dispatch => {
        return new Promise(async (resolve, reject) => {
            try {
                let data = await firestore()
                    .collection('Users')
                    .doc(auth().currentUser.uid)
                    .get()
                    .then(documentSnapshot => {
                        console.log('User exists: ', documentSnapshot.exists);
                        if (documentSnapshot.exists) {
                            console.log('User data: ', documentSnapshot.data());
                            resolve(documentSnapshot.data())
                        }
                    });
            } catch (e) {
                reject(e, "error")
            }
        })
    }
}

export const createSelfie = (url, self_score) => {
    return new Promise(async (resolve, reject) => {
        try {

            let result = await firestore().collection('selfies').doc().set({
                selfie_url: url,
                user_id: auth().currentUser.uid,
                self_score: self_score,
                created_at: firestore.Timestamp.fromDate(new Date())
            });
            console.log('result', result)
        } catch (e) {
            console.log("TCL ~ file: index.js ~ line 160 ~ returnnewPromise ~ e", e)
            reject(e, "error")
        }
    })

}
