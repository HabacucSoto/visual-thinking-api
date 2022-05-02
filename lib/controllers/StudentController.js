const StudentService = require( "../services/StudentService.js" );
const Reader = require( "../utils/Reader.js" );
const students = Reader.readJsonFile( "students.json" );

class StudentController {

    static getStudents(){
        return StudentService.allStudents( students );
    }

}

module.exports = StudentController;