const fs = require("fs")
const process = require("process")
const axios = require("axios")

/** read file at path and print it out. */
function cat(path){
    fs.readFile(path, 'utf8', (err, data) => {
        if(err) {
            console.log(`ERROR!!!!! ${path}: ${err}`)
            process.kill(1)
        }
        console.log("DATA: ", data)
    })
}

/** read page at URL and print it out. */
async function webCat(url) {
    try {
        let resp = await axios.get(url)
        console.log(resp.data)
    }catch {
        console.log(`ERROR fetching!!!!! ${path}: ${err}`)
        process.kill(1)
    }
}

let path = process.argv[2]

if (path.slice(0, 4) === 'http') {
    webCat(path)
}else {
    cat(path)
}