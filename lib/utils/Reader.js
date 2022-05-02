const fs = require("fs");

class Reader {

    static readJsonFile( jsonPath ){
        const rawdata = fs.readFileSync( jsonPath );
        const students = JSON.parse( rawdata );
        
        return students;
    }

}

module.exports = Reader;