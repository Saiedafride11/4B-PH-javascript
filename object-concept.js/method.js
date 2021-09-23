const student = {
    id: 101,
    name: 'afride',
    money: 5000,
    major: 'Math',
    isRich:false,
    subjects: ['english', 'economics', 'math 100'],
    bestFriend: {
        name: 'kodu',
        major: 'Math'
    },
    takeExam: function(){
        console.log(this.name, 'taking exam')
    },
    treateDey: function(expense, boksis){
        this.money = this.money - expense - boksis;
        return this.money;
    }
}

student.takeExam();

const remaining = student.treateDey(200,50);
console.log(remaining)