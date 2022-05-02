const Reader = require( "../../../lib/utils/Reader.js" );
const students = Reader.readJsonFile( "students.json" );
const StudentService = require( "../../../lib/services/StudentService.js" );

describe( "Unit test for class StudentService", () => {

    test( "1) Test for method allStudents", () => {
        
        const result = StudentService.allStudents( students );
        console.log(result)

    } );

} );