        const person = {
            name: {
                first: 'Bob',
                last: 'Smith',
            },
            age: 32,
            bio: function () {
                console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
            },
            introduceSelf: function () {
                console.log(`Hi! I'm ${this.name.first}.`);
            },
        };

        function logProperty(propertyName){
                console.log(person[propertyName]);
            }

            person['age'] = 45;
            person['name']['last'] = 'Cratchit';

            person["eyes"] = "hazel";
            person.farewell = function () {
                console.log("Bye everybody!");
            }

        function createPerson(name){
            const obj = {};
            obj.name = name;
            obj.introduceSelf = function () {
                console.log(`Hi! I'm ${this.name}.`)
            }
            return obj;
        }

        function Person(name) {
            this.name = name;
            this.introduceSelf = function () {
                console.log(`Hi! I'm ${this.name}.`);
            }

        }

        const salva = new Person("Salva");
        salva.name;
        salva.introduceSelf();

        //MDN Activity 3

        let bandInfo = "Co shu nie is a japanese rock band of 3 members. They have been active since 2011 and their first album was released in 2012 under the name idola."

// Put your code here

    const favoriteBand = {
    name: 'co shu nie',
    nationality: 'Japan',
    genre: 'Japanese Rock',
    members: 3,
    formed: 2011,
    split: false,
    albums: {
        name: ['idola', 'Org', 'パズル', 'OVERKILL', 'Asphyxia', 'Aurora', 'PURE', 'LITMUS', 'Flos Ex Machina'],
        released: [2012, 2013, 2016, 2017, 2018, 2018, 2019, 2020, 2022]
    }
    }

    //MDN Activity 4

        const cat = {
            name : 'Bertie',
            breed : 'Cymric',
            color : 'white',
            greeting: function () {
                console.log(`Hello, said ${this.name} the ${this.breed}.`);
            }
            };

            const cat2 = {
            name : 'Matcha',
            breed : 'Tabby',
            color: 'orange',
            greeting: function () {
            console.log(`Hello, said ${this.name} the ${this.breed}.`);
            }
            };

            cat.greeting();
            cat2.greeting();

            // MDN Activity 5

    const catx = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
        console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
    }
    }

    const catxx = {
    name : 'Elfie',
    breed : 'Aphrodite Giant',
    color : 'ginger',
    greeting: function() {
        console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
    }
    }

    function Greeting(name, breed){
    this.name = name;
    this.breed = breed;
    this.greeting = function () { 
    console.log(`Hello, said ${ this.name } the ${ this.breed }.`); 
    }
    }

    const catxGreeting = new Greeting("Bertie", "Cymric");
    const catxxGreeting = new Greeting("Elfie", "Aphrodite Giant");
