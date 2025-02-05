import fs from 'fs'


export const readFile = (path, callback) => {
    console.log(path)
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            return callback('');
        }

        return callback(data)
    })
}