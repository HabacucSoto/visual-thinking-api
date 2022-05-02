const Reader = require( "../../../lib/utils/Reader.js" );

describe( "Unit test for class Reader", () => {

    test( "1) Returns an array", () => {

        const students = Reader.readJsonFile( "students.json" );

        expect( Array.isArray( students ) ).toBe( true );

    } );

} );