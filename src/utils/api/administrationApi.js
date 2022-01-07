import base64 from 'base-64'
import { promisesParser } from '../main'
import { Alert } from 'react-native'
import * as constants from '../constants'

const API_URL = 'https://api.1administration.com'

const API_HEADER = new Headers({
    'Content-Type': 'multipart/form-data',
    'Authorization': 'Basic ' + base64.encode(constants.ADMIN_USERNAME + ':' + constants.ADMIN_PASSWORD),
})

export function getVendors() {
    return fetch(`${API_URL}/v2/settings/vendors`, {
        method: 'GET',
        headers: API_HEADER,
    })
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw Error(response.status)
            }
            return response.json()
        })
        .catch(error => {
            return console.log(error);
        })
}

export function getProducts(agentID = constants.AGENT_ID) {
    return fetch(`${API_URL}/v2/products/${agentID}`, {
        method: 'GET',
        headers: API_HEADER,
    })
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw Error(response.status)
            }
            return response.json()
        })
        .catch(error => {
            console.log(error)
            return { error: error.toString() }
        })
}

export function getAgent(agentID = constants.AGENT_ID) {
    return fetch(`${API_URL}/v2/agents/${agentID}`, {
        method: 'GET',
        headers: API_HEADER,
    })
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw Error(response.status)
            }
            return response.json()
        })/*.then(data => {
            console.log(" In get agent");
            console.log(" Get agent data is " + JSON.stringify(data) + " and broker flag is "+ data['BROKERFLAG'])
        })*/
        .catch(error => {
            console.log(error)
            return { error: error.toString() }
        })
}

export function createMember(data) {
    const formData = new FormData()
    data.corpid = constants.CORP_ID
    data.agent = constants.AGENT_ID
    formData.append('MEMBER', JSON.stringify(data))
    return fetch(`${API_URL}/v1/${constants.AGENT_ID}/member/0.json`, {
        method: 'POST',
        headers: API_HEADER,
        body: formData,
    })
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw Error(response.status)
            }
            return response.json()
        })
        .catch(error => {
            return console.log(error);
        })
}

export function updateMember(memberID, agentID, data) {
    const formData = new FormData()
    formData.append('MEMBER', JSON.stringify(data))
    return fetch(`${API_URL}/v1/${agentID}/member/${memberID}.json`, {
        method: 'POST',
        headers: API_HEADER,
        body: formData,
    })
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw Error(response.status)
            }
            return response.json()
        })
        .catch(error => {
            return console.log(error);
        })
}

/*export function getRates(productID, agentID = constants.AGENT_ID) {
    const apiHeader = new Headers({
        'Content-Type': 'text/xml',
        'SOAPAction': 'urn:getRates',
    })
    const dataRequest =
        '<x:Envelope xmlns:x="http://schemas.xmlsoap.org/soap/envelope/" xmlns:api="http://api">' +
        '<x:Header/>' +
        '<x:Body>' +
        '<api:getRates>' +
        `<api:corpid>${constants.CORP_ID}</api:corpid>` +
        `<api:username>${constants.ADMIN_USERNAME}</api:username>` +
        `<api:password>${constants.ADMIN_PASSWORD}</api:password>` +
        `<api:payload>{"PRODUCT":{"PRODUCTID":${productID},"AGENTID":${agentID}},"VERSION":0,"PRIMARY":{},"SPOUSE":{}}</api:payload>` +
        '</api:getRates>' +
        '</x:Body>' +
        '</x:Envelope>'
    console.log(" Product id is " + productID);
    const payload = `{"PRODUCT":{"PRODUCTID":${productID},"AGENTID":${agentID}},"VERSION":0,"PRIMARY":{},"SPOUSE":{}}`
    const url = `https://www.1administration.com/api/rate/index.cfc?method=getRates&corpid=${constants.CORP_ID}&username=${constants.ADMIN_USERNAME}&password=${constants.ADMIN_PASSWORD}&payload=${payload}`;
    console.log("URL is " + url);
    return fetch(url)
        .then(response => {
            // console.log(" Get rate response in api is " + JSON.stringify(response.json()))
            console.log("Response status is " + response.status);
            if (!response.ok) {
                throw Error(response.status);

            }
            const resp = response.json();
            console.log(" Get rate response in api is " + JSON.stringify(resp));
            return response.text();
        }).then(text => {
            // const x = response.text();//['soapenv:Envelope']['soapenv:Body'][0]['ns:getRatesResponse'][0]['ns:return'][0]
            console.log(" value of text is  " + text);
            return JSON.parse(text)
        })
        .then(response => {
            console.log(response)
            return promisesParser(response)
        })

        .catch(error => {
            return console.log(error);
        })
}*/
export function getRates(productID, agentID = constants.AGENT_ID) {
    const payload = `{"PRODUCT":{"PRODUCTID":${productID},"AGENTID":${agentID}},"VERSION":0,"PRIMARY":{},"SPOUSE":{}}`
    const url = `https://www.1administration.com/api/rate/index.cfc?method=getRates&corpid=${constants.CORP_ID}&username=${constants.ADMIN_USERNAME}&password=${constants.ADMIN_PASSWORD}&payload=${payload}`;

    return fetch(url, {
        method: 'GET',
    })
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw Error(response.status)
            }
            return response.json()
        })
        .catch(error => {
            console.log(error)
            return { error }
        })
}

export function providerSearch(data) {
    return fetch(`http://www.nbbidev.com:8041/PhamacyHelper.svc/GetPharmacyList?zipCode=${data.zipCode}&zipRadius=${data.zipRadius}&providerTable=${data.providerTable}&speciality=${data.speciality}&providerName=${data.providerName}`, {
        method: 'GET',
    })
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw Error(response.status)
            }
            return response.json()
        })
        .catch(error => {
            console.log(error)
            return { error }
        })
}

export function drugSearchStep1(data) {
    return fetch(`http://adclookup.com:8036/DrugServiceHelper.svc/FindDrug?prefixText=${data.prefixText}`, {
        method: 'GET',
    })
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw Error(response.status)
            }
            return response.json()
        })
        .catch(error => {
            return console.log(error);
        })
}

export function drugSearchStep2(data) {
    return fetch(`http://adclookup.com:8036/DrugServiceHelper.svc/GetPackageSizeList?drug=${data.drug}&gpi14=${data.gpi14}`, {
        method: 'GET',
    })
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw Error(response.status)
            }
            return response.json()
        })
        .catch(error => {
            return console.log(error);
        })
}

export function drugSearchStep3(data) {
    return fetch(`http://adclookup.com:8036/DrugServiceHelper.svc/FindPharmacy?zipCode=${data.zipCode}&miles=${data.miles}&drug=${data.drug}&gpi14=${data.gpi14}&dayOfSupply=${data.dayOfSupply}&selectedSize=${data.selectedSize}&prodExtn=${data.prodExtn}&dosageCode=${data.dosageCode}`, {
        method: 'GET',
    })
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw Error(response.status)
            }
            return response.json()
        })
        .catch(error => {
            return console.log(error);
        })
}
