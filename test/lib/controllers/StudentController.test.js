const StudentController = require( "../../../lib/controllers/StudentController.js" );

describe( "Unit test for class StudentController", () => {

    test( "1) Test for method getStudents", () => {

        const result = StudentController.getStudents();

        expect( result ).not.toBeUndefined();

    } );

    test( "2) Test for method getEmailByCertificate", () => {

        const result = StudentController.getEmailByCertificate();

        expect( Array.isArray( result ) ).toBe( true );

    } );

    test( "3) Test for method getStudentsByCredits", () => {

        const result = StudentController.getStudentsByCredits();

        expect( result[0].credits ).toBeGreaterThan( 500 );

    } );

} );