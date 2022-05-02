class StudentService {

    static allStudents( students ){
        return students;
    }

    static filterByCertificate( students ){
        const filtered = students.filter( ({ haveCertification }) => haveCertification === true );
        return filtered.map( ({ email }) => email );
    }

    static greaterThanFiveHundred( students ){
        return students.filter( ({ credits }) => credits > 500 );
    }

}

module.exports = StudentService;