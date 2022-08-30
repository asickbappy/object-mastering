// const normalPerson = {
//     firstName : 'Rahim',
//     lastName : 'uddin',
//     salary : 15000,

//     getFullName : function (){
//         console.log(this.firstName, this.lastName);
//         },

//     chargeBill : function(amount){
//           this.salary = this.salary - amount;
//           return this.salary;
    
//         }

//     }

//     normalPerson.chargeBill(150);
//     normalPerson.chargeBill(3000);

//     console.log(normalPerson.salary);




//     const normalPerson = {
//         firstName : 'Rahim',
//          lastName : 'uddin',
//          salary : 15000,
    
//          getFullName : function (){
//              console.log(this.firstName, this.lastName);
//              },
    
//          chargeBill : function(amount){
//                this.salary = this.salary - amount;
//                return this.salary;
        
//              }
    
//          }
//          const heroPerson = {
//                    firstName : 'hero',
//                    lastName : 'alom',
//                    salary : 3500
//          }
         
//          const friendlyPerson = {
//             firstName : 'joy',
//             lastName : 'chowdory',
//             salary : 2500
//   }
//   const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);


//    heroChargeBill(3000);

//    console.log(heroPerson.salary);
//    console.log(normalPerson.salary);

//    const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);

//    friendlyChargeBill(1500);

//    console.log(friendlyPerson.salary);
//    console.log(normalPerson.salary);






// const normalPerson = {
//            firstName : 'Rahim',
//               lastName : 'uddin',
//               salary : 15000,
        
//               getFullName : function (){
//                   console.log(this.firstName, this.lastName);
//                   },
        
//               chargeBill : function(amount, tips, tax){
//                     this.salary = this.salary - amount - tips - tax;
//                     return this.salary;
            
//                   }
        
//               }
//               const heroPerson = {
//                                     firstName : 'hero',
//                                     lastName : 'alom',
//                                     salary : 6000
//                           }
                         
//                           const friendlyPerson = {
//                              firstName : 'joy',
//                              lastName : 'chowdory',
//                              salary : 10000
//                    }
//                     normalPerson.chargeBill.call(heroPerson, 5000, 500, 50);

//                     console.log(heroPerson.salary);
//                     console.log(normalPerson.salary);

//                    normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50);

//                    console.log(friendlyPerson.salary);
//                    console.log(normalPerson.salary);






                   const normalPerson = {
                    firstName : 'Rahim',
                       lastName : 'uddin',
                       salary : 15000,
                 
                       getFullName : function (){
                           console.log(this.firstName, this.lastName);
                           },
                 
                       chargeBill : function(amount, tips, tax){
                             this.salary = this.salary - amount - tips - tax;
                             return this.salary;
                     
                           }
                 
                       }
                       const heroPerson = {
                                             firstName : 'hero',
                                             lastName : 'alom',
                                             salary : 6000
                                   }
                                  
                                   const friendlyPerson = {
                                      firstName : 'joy',
                                      lastName : 'chowdory',
                                      salary : 10000
                            }
                             normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
         
                             console.log(heroPerson.salary);
                             console.log(normalPerson.salary);
         
                            normalPerson.chargeBill.apply(friendlyPerson, [5000, 500, 50]);
         
                            console.log(friendlyPerson.salary);
                            console.log(normalPerson.salary);
         