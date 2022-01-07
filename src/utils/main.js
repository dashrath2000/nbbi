import xml2js from 'react-native-xml2js'

export function promisesParser(xml) {
    return new Promise((resolve, reject) => {
        xml2js.parseString(xml, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

export function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   		return re.test(email)
}

export function validatedate(date) {
    var matches = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/.exec(date);
    if (matches == null) return false;
    var d = matches[2];
    var m = matches[1] - 1;
    var y = matches[3];
    var composedDate = new Date(y, m, d);
    return composedDate.getDate() == d &&
            composedDate.getMonth() == m &&
            composedDate.getFullYear() == y;
}

export function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

export function getProductImageByLabel(label) {
    let imageSource = require('../assets/benefits/general.png')
    if (label && label.includes('Health')) {
        imageSource = require('../assets/benefits/health.jpg')
    } else if (label && label.includes('Lifestyle')) {
        imageSource = require('../assets/benefits/lifestyle.jpg')
    } else if (label && label.includes('Pet')) {
        imageSource = require('../assets/benefits/pet.jpg')
    } else if (label && label.includes('Senior')) {
        imageSource = require('../assets/benefits/senior.jpg')
    } else if (label && label.includes('Wellness')) {
        imageSource = require('../assets/benefits/wellness.jpg')
    } else if (label && label.includes('Prescription')) {
        imageSource = source={
            uri: 'https://www.nbbihome.com/app/cards/walkin.png', }
    } else if (label && label.includes('Dentachoice')) {
        imageSource = require('../assets/benefits/dental.jpg')
    } else if (label && label.includes('Telehealth')) {
        imageSource = require('../assets/benefits/telehealth.jpg')
    } else if (label && label.includes('Brand-Name Mail-Order')) {
        imageSource = source={uri:'https://www.nbbihome.com/app/cards/mailorder.png'}
    } else if (label && label.includes('Legalshield')) {
        imageSource = require('../assets/benefits/legalshield.png')
    }
    return imageSource;
}
