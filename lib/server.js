const StudentController = require( "./controllers/StudentController.js" );
const express = require( "express" );
const app = express();
app.use( express.json() );
const port = 3000;

app.get( "/", ( req, res ) => {
    res.json({ msg: "Welcome to visual thinking API" });
} );

app.get( "/v1/students", ( req, res ) => {

    const result = StudentController.getStudents();

    res.json( result );

} );

app.get( "/v1/students/emails", ( req, res ) => {

    const result = StudentController.getEmailByCertificate();

    res.json( { haveCertification: true, result } );

} );

app.get( "/v1/students/credits", ( req, res ) => {

    const result = StudentController.getStudentsByCredits();

    res.json( { creditsGreaterThan: 500, result } );

} );

app.listen( port, () => console.log( `server: ${ port }` ) );