class School {
    constructor(name, level, numOfStudents) {
        this._name = name;
        this._level = level;
        this._numOfStudents = numOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numOfStudents() {
        return this._numOfStudents;
    }

    set numOfStudents(value) {
        if (value == number) {
            this.numOfStudents = value;
        } else {
            console.log('Invalid Input: numOfStudents must be set to a number');
        }

        // Alternate Code
        // if (value.isNaN()) {
        //     console.log('Invalid Input: numOfStudents must be set to a number');
        // } else {
        //     this.numOfStudents = value;
        // }
    }

    quickFacts() {
        console.log(`${this.name} educates ${this.numOfStudents} students at ${this.level} level.`);
    }

    static pickSubTeacher(subTeachers) {
        const randInt = Math.floor(Math.random() * subTeachers.length);

        return subTeachers[randInt];
    }
}

class HighSchool extends School {
    constructor(name, numOfStudents, sportsTeams) {
        super(name, 'high school', numOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams;
    }
}

class College extends School {
    constructor(name, numOfStudents, programsOffered) {
        super(name, 'college', numOfStudents);
        this._programsOffered = programsOffered;
    }

    get programsOffered() {
        return this._programsOffered;
    }
}

const dLa = new HighSchool ('Divine Light Academy', 250, ['Basketball, Volleyball, Badmintion']);
dLa.quickFacts();

const letran = new College ('Colegio de San Juan de Letran', 500, ['Digital Arts', 'Information Technology', 'Communication']);
letran.quickFacts();