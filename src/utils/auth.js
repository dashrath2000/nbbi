import { AsyncStorage } from 'react-native'

export const USER_KEY = 'palavra'
export const PASS_KEY = 'virgula'

export function onSignIn(username) {
    return Promise.all([
        AsyncStorage.setItem(USER_KEY, username),
        // AsyncStorage.setItem(PASS_KEY, password),
    ])
}

export function onSignOut() {
    return Promise.all([
        AsyncStorage.removeItem(USER_KEY),
        // AsyncStorage.removeItem(PASS_KEY),
    ])
}

export function isSignedIn() {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(USER_KEY)
            .then(res => {
                if (res !== null) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(err => reject(err));
    })
}

export async function getCredentials() {
    const username = await AsyncStorage.getItem(USER_KEY)
    // const password = await AsyncStorage.getItem(PASS_KEY)
    return { username }
}
