import axios from 'axios'

const config = {baseUrl: `https://api.hnpwa.com/v0/`}

// FETCH ALL LISTS FROM NEWS ASK AND JOBS
function fetchList(pageName){
    return axios.get(`${config.baseUrl}${pageName}/1.json`)
}


// function fetchNewsList(){
//     return axios.get(`${config.baseUrl}news/1.json`)  
// }

// function fetchAskList(){
//     return axios.get(`${config.baseUrl}ask/1.json`)  
// }

// function fetchJobsList(){
//     return axios.get(`${config.baseUrl}jobs/1.json`)  
// }

function fetchUserList(userName){
    return axios.get(`${config.baseUrl}user/${userName}.json`)
}

function fetchItemList(itemId){
    return axios.get(`${config.baseUrl}item/${itemId}.json`)
}



export {fetchUserList, fetchItemList, fetchList}