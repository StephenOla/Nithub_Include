class School {
    constructor(name) {
        this.name = name;
        this.students = [];

    }
    showStudents() {
        console.log(this.students);
    }
    admit(studentName) {
        var matricNumber = Math.floor(Math.random() * 180000000 + 180000000);
        this.students.push({ "name": studentName, "matricNumber": matricNumber });
        console.log(`${studentName} has been admitted and has been assigned matric number ${matricNumber}`);
    }
    rusticate(matricNum) {
        if (this.students.length == 0) {
            console.log("Kindly admit students as there are no student to rusticate");
        } else {
            for (let student of this.students) {
                if (student["matricNumber"] == matricNum) {
                    for (var i = 0; i < this.students.length; i++) {
                        if (this.students[i].matricNumber == matricNum) {
                            this.students.splice(i, 1);
                        }
                    }
                    console.log(`The student with matric number ${matricNum} has been rusticated`);
                }
            }
        }
    }

}