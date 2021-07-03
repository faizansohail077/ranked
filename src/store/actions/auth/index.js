import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import functions from '@react-native-firebase/functions';



if (__DEV__) {
    functions().useFunctionsEmulator('http://localhost:5000');
}


export const signUp = (email, password, username) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            try {
                auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(async () => {
                        let result = await firestore().collection('Users').doc(auth().currentUser.uid).set({
                            email: email,
                            username: username,
                            step: 0
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
                        else {
                            reject(error)
                            console.error(error);
                        }
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
                let result = await firestore().collection('Users').doc(auth().currentUser.uid).update({
                    fullname: username,
                    dob: dob,
                    country: country,
                    city: city,
                    zipCode: zipCode,
                    step: 1,
                    user_id: auth().currentUser.uid,

                });
                resolve(result)
            } catch (error) {
                reject(error)
            }
        })
    }
}
export const genderData = (gender, longitude, latitude) => {
    return dispatch => {
        return new Promise(async (resolve, reject) => {
            try {
                let result = await firestore().collection('Users').doc(auth().currentUser.uid).update({
                    gender: gender,
                    step: 2,
                    location: {
                        long: longitude,
                        lat: latitude
                    },
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
                if (image.indexOf('https') == -1) {
                    let task = reference.putFile(image);
                    await task
                    task.snapshot.ref.getDownloadURL().then(async (e) => {
                        let upload = await firestore().collection("Users").doc(auth().currentUser.uid).update({
                            profile_picture: e,
                            step: null
                        })
                        createSelfie(e, score)
                        resolve(upload)
                            .catch((e) => {
                                console.log('uploading image error => ', e)
                            });
                    })
                }
                else {
                    createSelfie(image, score)
                    resolve()
                }
            }
            catch (error) {
                console.log('error', error)
                reject(error)
            }
        })
    }
}

export const createSelfie = (url, self_score) => {
    return new Promise(async (resolve, reject) => {
        try {
            let docId = firestore().collection('Selfies').doc().id
            let result = await firestore().collection('Selfies').doc(docId).set({
                selfie_url: url,
                user_id: auth().currentUser.uid,
                self_score: self_score,
                selfie_id: docId,
                created_at: firestore.Timestamp.fromDate(new Date())
            })
            postSelefieId(docId)
            let update = await firestore().collection('Users').doc(auth().currentUser.uid).update({
                selfies: firestore.FieldValue.arrayUnion(docId),
            });
            resolve()
        } catch (e) {
            console.log("TCL ~ file: index.js ~ line 160 ~ returnnewPromise ~ e", e)
            reject(e, "error")
        }
    })
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
                        if (documentSnapshot.exists) {
                            resolve(documentSnapshot.data())
                            dispatch({ type: 'USER', payload: documentSnapshot.data() })

                        }
                    });
            } catch (e) {
                reject(e, "error")
            }
        })
    }
}

export const getProfilePhoto = () => {
    return dispatch => {
        return new Promise(async (resolve, reject) => {
            try {
                let profileData = []
                let selfieId = []
                let obj
                const data = await firestore().collection("Selfies").where("user_id", "==", auth().currentUser.uid)
                data.get()
                    .then((querySnapshotSelfies) => {
                        querySnapshotSelfies.forEach(async (doc) => {
                            const data2 = await firestore().collection("Rating").where("selfie_id", "==", doc?.id)
                            data2.get().then((querySnapshot) => {
                                if (querySnapshot.size !== 0) {
                                    let overallScore = 0;
                                    let temArr = []
                                    querySnapshot.forEach((docs) => {
                                        // avaerage overall score
                                        let rating = docs.data().rating;
                                        overallScore += rating
                                        temArr.push('temp')
                                        if (querySnapshot.size == temArr.length) {
                                            profileData.push({ ...doc.data(), ...docs.data(), average: overallScore / querySnapshot.size })
                                        }
                                    })
                                } else {
                                    profileData.push({ ...doc.data(), rating: null })
                                }
                                if (profileData?.length === querySnapshotSelfies.size) {
                                    resolve(profileData)
                                }
                            })
                        });
                    })
                    .catch((error) => {
                        console.log("Error getting documents: ", error);
                        reject(error, "error")

                    });

            } catch (e) {
                console.log("TCL ~ file: index.js ~ line 160 ~ returnnewPromise ~ e", e)
                reject(e, "error")
            }
        })
    }
}


// functions()
//     .httpsCallable(`helloWorld?selfie_id=${'query'}&currentUser_id=${auth()?.currentUser?.uid}`)()
//     .then(response => {
//     }).catch((err) => {
//         console.log("working2"),
//             console.log("ERRROR ", err)
//     })


export const postSelefieId = async (query) => {

    const { data } = await functions()
        .httpsCallable(`helloWorld?selfie_id=${query}&currentUser_id=${auth()?.currentUser?.uid}`)()
        .then(response => {

        }).catch((err) => {
            console.log("ERRROR ", err)
        })
}

export const submitSelfie = (rating, gender, longitude, latitude, age, selfie_id) => {
    return dispatch => {
        return new Promise(async (resolve, reject) => {
            try {
                let result = await firestore().collection('Rating').doc().set({
                    rating: rating,
                    user_id: auth().currentUser.uid,
                    gender: gender,
                    age: age,
                    location: {
                        long: longitude,
                        lat: latitude
                    },
                    created_at: firestore.Timestamp.fromDate(new Date()),
                    selfie_id: selfie_id
                })
                resolve()
            } catch (error) {
                console.log(error, 'error')
                reject(error)
            }
        }
        )
    }
}



export const getAnalytics = (age, gender) => {

    return dispatch => {
        return new Promise(async (resolve, reject) => {
            try {
                let docData = []
                let obj
                let response
                const data = firestore().collection("Selfies").where("user_id", "==", auth().currentUser.uid).orderBy("created_at", "desc").limit(1)
                data.get()
                    .then((querySnapshot) => {
                        querySnapshot.forEach(async (doc) => {
                            response = doc?.data()

                            let result = firestore().collection("Rating")
                            age && (result = result.where("age", "<=", age))
                            gender && (result = result.where('gender', '==', gender));
                            const querySnapshot = await result.get()
                            if (querySnapshot?.docs?.length > 0) {
                                querySnapshot.docs.forEach((doc) => {
                                    docData.push(doc?.data())
                                    obj = { docData, ...response }
                                })
                                resolve(obj)
                            }
                            else {
                                console.log("no data is avaliable")
                                reject("no data is avaliable")
                            }
                        });
                    })
                    .catch((error) => {
                        console.log("Error getting documents: ", error);
                        reject(error)
                    });
            } catch (error) {
                console.log(error, 'error')
                reject(error)
            }
        })
    }
}