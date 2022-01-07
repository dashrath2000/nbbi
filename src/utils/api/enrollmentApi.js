import { promisesParser } from '../main'
import * as constants from '../constants'

const API_URL = 'https://www.enrollment123.com'

function getFormData() {
    const formData = new FormData()
    formData.append('username', constants.ADMIN_USERNAME)
    formData.append('password', constants.ADMIN_PASSWORD)
    formData.append('corpid', constants.CORP_ID)
    return formData
}

export function getUser(memberID) {
    const formData = getFormData()
    formData.append('memberid', memberID)
    formData.append('return_products', 1)
    formData.append('return_dependents', 1)
    formData.append('return_transactions', 1)
    return fetch(`${API_URL}/api/user.getall/`, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        console.log(response)
        if (!response.ok) {
            throw Error(response.status)
        }
        return response.text()
    })
    .then(response => {
        console.log(response)
        return promisesParser(response)
    })
}

export function getUserByUsername(memberUsername) {
    const formData = getFormData()
    formData.append('user_username', memberUsername)
    return fetch(`${API_URL}/api/user.getall/`, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        console.log(response)
        if (!response.ok) {
            throw Error(response.status)
        }
        return response.text()
    })
    .then(response => {
        console.log(response)
        return promisesParser(response)
    })
}

export function getUserLessData(memberID) {
    const formData = getFormData()
    formData.append('method', 'doLookUp')
    formData.append('memberid', memberID)
    return fetch(`${API_URL}/api/user.cfc`, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        console.log(response)
        if (response.ok) {
            console.log('REPONSE OK')
        }
        return response.text()
    })
    .then(response => {
        console.log(response)
        return promisesParser(response)
    })
    .catch(error => {
        return console.error(error);
    })
}

export function getUserByUsernamePassword(userUsername, userPassword) {
    const formData = getFormData()
    formData.append('method', 'doLookUp')
    formData.append('user_username', userUsername)
    formData.append('user_password', userPassword)
    return fetch(`${API_URL}/api/user.cfc`, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        console.log(response)
        if (response.ok) {
            console.log('REPONSE OK')
        }
        return response.text()
    })
    .then(response => {
        console.log(response)
        return promisesParser(response)
    })
    .catch(error => {
        return console.error(error);
    })
}

export function authenticateUser(userUsername, userPassword) {
    const userUsernameEncoded = encodeURIComponent(userUsername)
    const userPasswordEncoded = encodeURIComponent(userPassword)
    return fetch(`${API_URL}/gateway/authenticate.cfm?id=${constants.CORP_ID}&username=${userUsernameEncoded}&password=${userPasswordEncoded}`, {
        method: 'GET',
    })
    .then(response => {
        console.log(response)
        if (response.ok) {
            console.log('REPONSE OK')
        }
        return response.text()
    })
    .catch(error => {
        return error.toString()
    })
}
