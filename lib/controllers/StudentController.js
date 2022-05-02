const StudentService = require( "../services/StudentService.js" );
const Reader = require( "../utils/Reader.js" );
const students = Reader.readJsonFile( "students.json" );

class StudentController {

    static getStudents(){
        return StudentService.allStudents( students );
    }

    static getEmailByCertificate(){
        return StudentService.filterByCertificate( students );
    }

}

module.exports = StudentController;