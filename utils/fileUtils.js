import fs from 'fs'


export const readFile = (path, callback) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            return callback('');
        }

        return callback(data)
    })
}

export const writeFile = (path, content) => {
    fs.writeFile(path, content, err => {
        err ? console.log(err) : console.log("Write Complete!")
    })
}