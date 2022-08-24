//ES6

//block scope
//chỗ này dùng từ khóa let thì nó sẽ không hiểu được i là gì vì let tầm vực của nó là local
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
// console.log(i + 100)

//ở đây dùng var là biến global thì kết thúc vòng lặp i sẽ bằng 10
// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }
// console.log(i + 100)

//không thể định nghĩa lại một biến khi khai bảo kiểu của nó là constant
// const a = 10;
// a=12;

//Nối chuỗi trong ES6
// const myage = 22;
// const year = 2022;
// console.log(`Năm nay tôi ${myage} tuổi
// và tôi đã tốt nghiệp năm ${year}`);


//Enhanced Object Property

// 1.Property short hand 
//nếu biến truyền vào trùng với tên key trả về thì có thể viết tắt kiểu này còn ko thì phải return { this.name=name,this.age=age}
// function person(name, age) {
//     return {
//         name,
//         age
//     }
// }
// console.log(person('Long',22));


// 2.Method property(đơn giản là viết gọn hàm,thay vì phải viết getName:function()
// function person(name, age) {
//     return {
//         name,
//         age,
//         getName() {
//             return this.name + ' ' + this.age
//         },
//     }
// }
// console.log(person('Long', 22));

// 3.Computed property key
//Nạp thêm một phần tử mới vào object có key là SalaryofHailongdev,value là 2000
// function person(name, age) {
//     const salary = 'Salary';
//     return {

//         name,
//         age,
//         getName() {
//             return this.name + ' ' + this.age
//         },
//         [`${salary}ofHailongdev`]: 2000,
        
//     }
// }
// console.log(person('Long', 22));
// console.log(person('Hải',20).getName())

//Extend Parametter Handling
    //Default Parametter(trong ES6 hỗ trợ nếu ko tạo giá trị mặc định cho biến)
// function getNameES6(name = 'Long', age = 22) {
//     console.log(name + ' ' + age);
// }
// getNameES6('Long đẹp trai');

    //Rest Parametter
    //ta thấy ở đây đang truyền dư 2 giá trị là IT và 20000,thì lúc này 2 thằng này sẽ tự được lưu vào thằng rest và rest đóng vai trò như một mảng
function getNameES6(name = 'Long', age = 22, ...rest) {
    console.log(name + ' ' + age);
    console.log("rest" + ' ' + rest[1]);
}
getNameES6('Hải', 22, 'IT', 20000);

//Spread Operator
// VD1: với mảng
// const toDoList = ['đi học', 'đi chơi'];
// const toDoListMore = ['đá bóng', 'xem phim', ...toDoList];
// console.log('To Do List More : ', toDoListMore)

// VD2 : với object
// const person = {
//     name: 'Long',
//     age: 22

// }
// const worker = {
//     job: 'worker',
//     ...person
// }
// console.log('worker', worker)


//Arrow Function
// const person1 = {
//     name: 'Long',
//     age: 22,
//     getInfo() {
//         console.log('Tôi tên là ' + this.name + 'Năm nay tôi ' + this.age + ' tuổi');

//         // const getAge = () => {
//         //     console.log('ES6 - Tuổi của tôi hiện tại là ' + this.age);
//         // }

//         //Trường hợp mà chỉ có một dòng code bên trong thì có thể bỏ dấu {}
//         // const getAge = () =>
//         //     console.log('ES6 - Tuổi của tôi hiện tại là ' + this.age);

//         //
//         const getAge = () => ({ age: this.age })


//         getAge();
//     }

// }
// person1.getInfo();

//Destructuring Assigment

//đôi với mảng
// const toDoList = ['đi học', 'đi chơi', 'đi cafe'];
// const [first, , third] = toDoList;
// console.log({first,third})

//đối với object
// const person = {
//     name: 'Long',
//     age: 22,
//     salary: 7000000
// }
// const { name, test, salary } = person;
// console.log({ name, test, salary });

//đối với default value
// const list = [11,12];
// const [first,second,third=33]=list;
// console.log({
//     first,
//     second,
//     third
// })

//Đối với function
// const getFullName = ({ name, age }) => {
//     console.log(`Toi ten là ${name},năm nay tôi ${age} tuổi`);
// }

// const getFullName = ([name, age]) => {
//     console.log(`Toi ten là ${name},năm nay tôi ${age} tuổi`);
// }
// getFullName(['Long', 22]);

//Class trong ES6
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getJob() {
//         console.log(`Công việc hiện tại của tôi là ${this.job}`); //thằng cha này được thừa hưởng thuộc tính job của Worker
//     }
// }
// class Worker extends Person {
//     constructor(name, age, job) {
//         super(name, age); //super chỗ này sẽ gọi đến constructor của Person
//         this.job = job;
//     }
// }
// const worker = new Worker("long", 22, 'Dev');
// console.log(worker);
// worker.getJob();

//Promise //Asynchonous

// const getAllDataFromDB = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         var database = ['hanoi', 'da nang', 'hcm'];
//         // resolve(database);
//         reject(new Error("Đã xảy ra lỗi khi đọc dữ liệu database"));
//         console.log("getting data from database");
//     }, 3000);
// });
// getAllDataFromDB.then((data) => console.log("data", data))
//     .catch((err) => console.log(err))



//ES5

// var age = 22;
// var fullname = 'Đoàn Hải Long';
// console.log(fullname + age)

// function person(name, age) {
//     return {
//         name: name,
//         age: age,
//         getName: function () {
//             return this.name + ' ' + this.age
//         }
//     }
// }
// console.log(person('Long', 22).getName());


// function getName(name, age) {
//     console.log(name + ' ' + age);
// }

// const person1 = {
//     name: 'Long',
//     age: 22,
//     getInfo() {
//         console.log('Tôi tên là ' + this.name + 'Năm nay tôi ' + this.age + 'tuổi');
//         var temp=this;
//         function getAge() {
//             console.log('Tuổi của tôi hiện tại là' + temp.age);
//         }
//         getAge();
//     }

// }
// person1.getInfo();

// function getAllData(callback) {
//     console.log('start');
//     setTimeout(() => {
//         var database = ['hanoi', 'da nang', 'hcm'];
//         callback(database);
//         console.log("getting data from database");
//     }, 3000);
//     console.log("end");
// }

// getAllData(function (data) {
//     console.log("data", data)
// })