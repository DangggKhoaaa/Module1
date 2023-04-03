class People {
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email
    }
}
let people = [new People("A","17","A@gmail.com"),
              new People("B","19","B@gmail.com")]

console.log(people[0].age);
for (let i of people){
    document.getElementById("people").innerHTML += 
    `
    <div id="people_1">
        <p>${i.name}</p>
        <p>${i.age}</p>
        <p>${i.email}</p>
    </div>
    `
}