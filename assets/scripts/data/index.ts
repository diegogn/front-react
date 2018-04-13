import { WorkResponse, Book } from '../interfaces/index';

const HEADERS = new Headers({
    "Access-Control-Allow-Origin": "*"
})

export function getWorks(callback: (response: WorkResponse) => void): void {
    let response: WorkResponse = {count: 0, next: "", previous: "", results: []};
    fetch("http://127.0.0.1:8000/library/work/", {mode: "cors"})
        .then(status)
        .then(json)
        .then(callback)
        .catch(error);
}

function status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  }
  
function json(response) {
    return response.json()
}

function error(error) {
    console.log("An error has ocurred", error);
}
