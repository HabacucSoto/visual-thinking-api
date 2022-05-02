class StudentService {

    static allStudents( students ){
        return students;
    }

    static filterByCertificate( students ){
        return students.filter( ({ haveCertification }) => haveCertification === true );
    }

}

module.exports = StudentService;