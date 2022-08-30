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