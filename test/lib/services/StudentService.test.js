const Reader = require( "../../../lib/utils/Reader.js" );
const students = Reader.readJsonFile( "students.json" );
const StudentService = require( "../../../lib/services/StudentService.js" );

describe( "Unit test for class StudentService", () => {

    test( "1) Test for method allStudents", () => {
        
        const result = StudentService.allStudents( students );
        
        expect( result ).not.toBeUndefined();

    } );

    test( "2) Test for method filterByCertificate", () => {

        const result = StudentService.filterByCertificate( students );

        expect( result ).not.toBeUndefined();

    } );

    test( "3) Test for method greaterThanFiveHundred", () => {

        const result = StudentService.greaterThanFiveHundred( students );

        expect( result[0].credits ).toBeGreaterThan( 500 );

    } );

} );