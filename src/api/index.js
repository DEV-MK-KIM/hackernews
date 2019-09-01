import axios from 'axios'

const config = {baseUrl: `https://api.hnpwa.com/v0/`}

// FETCH ALL LISTS FROM NEWS ASK AND JOBS
async function fetchList(pageName){
    try{
    return await axios.get(`${config.baseUrl}${pageName}/1.json`)
    }
    catch(error){
        console.log(error)
    }
}


function fetchUserList(userName){
    return axios.get(`${config.baseUrl}user/${userName}.json`)
}

function fetchItemList(itemId){
    return axios.get(`${config.baseUrl}item/${itemId}.json`)
}



export {fetchUserList, fetchItemList, fetchList}