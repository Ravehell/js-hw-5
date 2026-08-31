// Task 1
// const getUserNames = (users) => users.map(user => user.name)


// console.log(
//     getUserNames([
//         {
//             name: "Alice Johnson",
//             age: 25
//         },
//         {
//             name: "John Smith",
//             age: 30
//         },
//         {
//             name: "Emma Brown",
//             age: 22
//         },
//         {
//             name: "Michael Wilson",
//             age: 35
//         }
//     ])
// );
// ["Alice Johnson", "John Smith", "Emma Brown", "Michael Wilson"]

// const getUsersByAge = (users, age) => {
//     return users.filter(user => user.age === age)
// }

// Task 2

// const users = [
//     {
//         name: "Alice Johnson",
//         age: 25
//     },
//     {
//         name: "John Smith",
//         age: 30
//     },
//     {
//         name: "Emma Brown",
//         age: 25
//     },
//     {
//         name: "Michael Wilson",
//         age: 35
//     },
//     {
//         name: "Sophia Davis",
//         age: 30
//     }
// ];

// console.log(getUsersByAge(users, 25));
// // [
// //   { name: "Alice Johnson", age: 25 },
// //   { name: "Emma Brown", age: 25 }
// // ]

// console.log(getUsersByAge(users, 30));
// // [
// //   { name: "John Smith", age: 30 },
// //   { name: "Sophia Davis", age: 30 }
// // ]

// console.log(getUsersByAge(users, 40));
// // []

// Task 3
const sortProductsByPrice = (products) => {
    products.toSorted((a, b) => a.price - b.price)
}

console.log(
    sortProductsByPrice([
        {
            name: "Laptop",
            price: 25000
        },
        {
            name: "Phone",
            price: 18000
        },
        {
            name: "Tablet",
            price: 12000
        },
        {
            name: "Monitor",
            price: 9000
        }
    ])
);
