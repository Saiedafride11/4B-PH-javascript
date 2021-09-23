
// ************************************************************
// ******************      This        ************************


// const normalPerson = {
//     fristName: 'Saied',
//     lastName: 'Afride',
//     fullName: function () {
//         console.log(this.fristName, this.lastName);
//     }
// }
// console.log(normalPerson);



// const normalPerson = {
//     fristName: 'Saied',
//     lastName: 'Afride',
//     Selary: 15000,
//     fullName: function () {
//         console.log(this.fristName, this.lastName);
//     },
//     chargeBill: function(amount){
//         this.Selary = this.Selary - amount;
//         return this.Selary
//     }
// }

// normalPerson.chargeBill(150);
// console.log(normalPerson.Selary);
//----------------------------------------------------------------------------------------
//-----------------------   bind        --------------------------------------------------
//----------------------------------------------------------------------------------------
// const Kibria = {
//     id: 101,
//     money: 5000,
//     name: 'RJ Kibria',
//     treateDey: function(expense){
//         this.money = this.money - expense;
//         console.log(this);
//         return this.money;
//     }
// }

// const heroBalam = {
//     id: 102,
//     money: 3000,
//     name: 'Hero Alam'
// }

// const heroKamal = {
//     id: 102,
//     money: 8000,
//     name: 'Hero Kamal'
// }

// Kibria.treateDey(100);

// const heroBalamTreateDey = Kibria.treateDey.bind(heroBalam);
// heroBalamTreateDey(500);
// heroBalamTreateDey(100);
// heroBalamTreateDey(200);


// const heroKamalTreateDey = Kibria.treateDey.bind(heroKamal);
// heroKamalTreateDey(500);
// heroKamalTreateDey(100);
// heroKamalTreateDey(200);

//----------------------------------------------------------------------------------------
//-------- call ------- call, apply same... just call normal hbe, apply arry system e hbe
//----------------------------------------------------------------------------------------

// const Kibria = {
//     id: 101,
//     money: 5000,
//     name: 'RJ Kibria',
//     treateDey: function(expense, boksis, tax){
//         this.money = this.money - expense - boksis - tax;
//         console.log(this);
//         return this.money;
//     }
// }

// const heroBalam = {
//     id: 102,
//     money: 3000,
//     name: 'Hero Alam'
// }

// const heroKamal = {
//     id: 102,
//     money: 8000,
//     name: 'Hero Kamal'
// }

// Kibria.treateDey.call(heroBalam, 500, 100, 50)
//----------------------------------------------------------------------------------------
//-------- apply ------- call, apply same... just call normal hbe, apply arry system e hbe
//----------------------------------------------------------------------------------------

const Kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treateDey: function(expense, boksis, tax){
        this.money = this.money - expense - boksis - tax;
        console.log(this);
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    money: 3000,
    name: 'Hero Alam'
}

const heroKamal = {
    id: 102,
    money: 8000,
    name: 'Hero Kamal'
}

Kibria.treateDey.apply(heroBalam, [500, 100, 50])
