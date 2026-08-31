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
// const sortProductsByPrice = (products) => {
//     products.toSorted((a, b) => a.price - b.price)
// }

// console.log(
//     sortProductsByPrice([
//         {
//             name: "Laptop",
//             price: 25000
//         },
//         {
//             name: "Phone",
//             price: 18000
//         },
//         {
//             name: "Tablet",
//             price: 12000
//         },
//         {
//             name: "Monitor",
//             price: 9000
//         }
//     ])
// );

// Task 4
// const getUserEmails = (users) => users.map(user => user.email)
// console.log(
//     getUserEmails([
//         {
//             name: "John Smith",
//             email: "john@example.com",
//             age: 25
//         },
//         {
//             name: "Anna Brown",
//             email: "anna@example.com",
//             age: 31
//         },
//         {
//             name: "Mike Wilson",
//             email: "mike@example.com",
//             age: 22
//         },
//         {
//             name: "Kate Taylor",
//             email: "kate@example.com",
//             age: 28
//         }
//     ])
// );
// // [
// //   "john@example.com",
// //   "anna@example.com",
// //   "mike@example.com",
// //   "kate@example.com"
// // ]

// Task 5
// const getUsersOlderThan = (users, age) => {
//     return users.filter(user => user.age > age)
// }

// const users = [
//     {
//         name: "John Smith",
//         age: 25
//     },
//     {
//         name: "Anna Brown",
//         age: 31
//     },
//     {
//         name: "Mike Wilson",
//         age: 22
//     },
//     {
//         name: "Kate Taylor",
//         age: 28
//     },
//     {
//         name: "Robert Davis",
//         age: 35
//     }
// ];

// console.log(getUsersOlderThan(users, 27));
// // [
// //   {
// //     name: "Anna Brown",
// //     age: 31
// //   },
// //   {
// //     name: "Kate Taylor",
// //     age: 28
// //   },
// //   {
// //     name: "Robert Davis",
// //     age: 35
// //   }
// // ]

// console.log(getUsersOlderThan(users, 40));
// // []

// Task 6
// const sortProductsByPrice = (products) => {
//     return products.toSorted((a, b) => b.price - a.price)
// }
// console.log(
//     sortProductsByPrice([
//         {
//             name: "Laptop",
//             price: 1200
//         },
//         {
//             name: "Phone",
//             price: 800
//         },
//         {
//             name: "Headphones",
//             price: 150
//         },
//         {
//             name: "Monitor",
//             price: 400
//         },
//         {
//             name: "Keyboard",
//             price: 100
//         }
//     ])
// );

// // [
// //   {
// //     name: "Laptop",
// //     price: 1200
// //   },
// //   {
// //     name: "Phone",
// //     price: 800
// //   },
// //   {
// //     name: "Monitor",
// //     price: 400
// //   },
// //   {
// //     name: "Headphones",
// //     price: 150
// //   },
// //   {
// //     name: "Keyboard",
// //     price: 100
// //   }
// // ]

// Task 6
// const getTotalQuantityByCategory = (products, category) => {
//     return products.filter(product => product.category === category)
//         .reduce((total, product) => total + product.quantity, 0)
// }

// const products = [
//     {
//         name: "Laptop",
//         category: "electronics",
//         quantity: 5
//     },
//     {
//         name: "Phone",
//         category: "electronics",
//         quantity: 10
//     },
//     {
//         name: "T-shirt",
//         category: "clothes",
//         quantity: 20
//     },
//     {
//         name: "Jeans",
//         category: "clothes",
//         quantity: 15
//     },
//     {
//         name: "Headphones",
//         category: "electronics",
//         quantity: 8
//     },
//     {
//         name: "Sneakers",
//         category: "shoes",
//         quantity: 7
//     }
// ];

// console.log(
//     getTotalQuantityByCategory(products, "electronics")
// );
// // 23

// console.log(
//     getTotalQuantityByCategory(products, "clothes")
// );
// // 35

// console.log(
//     getTotalQuantityByCategory(products, "shoes")
// );
// // 7

// console.log(
//     getTotalQuantityByCategory(products, "books")
// );
// // 0

// Task 7
// const getUsersByCity = (users, city) => {
//     return users.filter(user => user.city === city)
// }
// const users = [
//     {
//         name: "John Smith",
//         city: "Kyiv"
//     },
//     {
//         name: "Anna Brown",
//         city: "Lviv"
//     },
//     {
//         name: "Mike Wilson",
//         city: "Kyiv"
//     },
//     {
//         name: "Kate Taylor",
//         city: "Odesa"
//     }
// ];

// console.log(getUsersByCity(users, "Kyiv"));
// // ["John Smith", "Mike Wilson"]

// console.log(getUsersByCity(users, "Lviv"));
// // ["Anna Brown"]

// console.log(getUsersByCity(users, "Kharkiv"));
// // []

// Task 8
// const getAvailableProducts = (products) => {
//     return products.filter(product => product.quantity > 0)
// }
// console.log(
//     getAvailableProducts([
//         {
//             name: "Laptop",
//             quantity: 5
//         },
//         {
//             name: "Phone",
//             quantity: 0
//         },
//         {
//             name: "Keyboard",
//             quantity: 10
//         },
//         {
//             name: "Mouse",
//             quantity: 0
//         }
//     ])
// );

// // [
// //   { name: "Laptop", quantity: 5 },
// //   { name: "Keyboard", quantity: 10 }
// // ]

// // task 9
// const getTotalPrice = (products) => {
//     return products.reduce((total, products) => total + (products.price * products.quantity), 0)
// }
// console.log(
//     getTotalPrice([
//         {
//             name: "Laptop",
//             price: 1000,
//             quantity: 2
//         },
//         {
//             name: "Phone",
//             price: 500,
//             quantity: 3
//         },
//         {
//             name: "Mouse",
//             price: 50,
//             quantity: 4
//         }
//     ])
// );
// // 3700

// task 10
// const getUsersByRole = (users, role) => {
//     return users.filter(user => user.role === role)
// }
// const users = [
//     {
//         name: "John",
//         role: "admin"
//     },
//     {
//         name: "Anna",
//         role: "user"
//     },
//     {
//         name: "Mike",
//         role: "admin"
//     },
//     {
//         name: "Kate",
//         role: "manager"
//     }
// ];

// console.log(getUsersByRole(users, "admin"));
// // [
// //   { name: "John", role: "admin" },
// //   { name: "Mike", role: "admin" }
// // ]

// console.log(getUsersByRole(users, "user"));
// // [
// //   { name: "Anna", role: "user" }
// // ]

// console.log(getUsersByRole(users, "guest"));
// // []

// task 11
// const getMostExpensiveProduct = (products) => {
//     return products.reduce((total, product) => product.price > total.price ? product : total)
// }
// console.log(
//     getMostExpensiveProduct([
//         {
//             name: "Laptop",
//             price: 1200
//         },
//         {
//             name: "Phone",
//             price: 800
//         },
//         {
//             name: "Monitor",
//             price: 400
//         },
//         {
//             name: "Keyboard",
//             price: 100
//         }
//     ])
// );

// // {
// //   name: "Laptop",
// //   price: 1200
// // }

// task 12
// const sortUsersByAge = (users) => {
//     return users.toSorted((a, b) => a.age - b.age)
// }
// console.log(
//     sortUsersByAge([
//         {
//             name: "John",
//             age: 32
//         },
//         {
//             name: "Anna",
//             age: 19
//         },
//         {
//             name: "Mike",
//             age: 25
//         },
//         {
//             name: "Kate",
//             age: 21
//         }
//     ])
// );

// // [
// //   { name: "Anna", age: 19 },
// //   { name: "Kate", age: 21 },
// //   { name: "Mike", age: 25 },
// //   { name: "John", age: 32 }
// // ]

// task 13
// const getTotalBalanceByRole = (users, role) => {
//     return users.filter(user => user.role === role).reduce((total, role) => total + role.balance, 0)
// }
// const users = [
//     {
//         name: "John",
//         role: "admin",
//         balance: 3000
//     },
//     {
//         name: "Anna",
//         role: "user",
//         balance: 1500
//     },
//     {
//         name: "Mike",
//         role: "admin",
//         balance: 2500
//     },
//     {
//         name: "Kate",
//         role: "user",
//         balance: 2000
//     }
// ];

// console.log(getTotalBalanceByRole(users, "admin"));
// // 5500

// console.log(getTotalBalanceByRole(users, "user"));
// // 3500

// console.log(getTotalBalanceByRole(users, "manager"));
// // 0

// task 14
const getSortedProductsByCategory = (products, category) => {
    return products.filter(product => product.category === category).toSorted((a, b) => b.price - a.price)
}
const products = [
    {
        name: "Laptop",
        category: "electronics",
        price: 1200
    },
    {
        name: "Phone",
        category: "electronics",
        price: 800
    },
    {
        name: "T-shirt",
        category: "clothes",
        price: 50
    },
    {
        name: "Monitor",
        category: "electronics",
        price: 400
    },
    {
        name: "Jeans",
        category: "clothes",
        price: 100
    }
];

console.log(
    getSortedProductsByCategory(products, "electronics")
);

// [
//   { name: "Laptop", category: "electronics", price: 1200 },
//   { name: "Phone", category: "electronics", price: 800 },
//   { name: "Monitor", category: "electronics", price: 400 }
// ]

console.log(
    getSortedProductsByCategory(products, "clothes")
);

// [
//   { name: "Jeans", category: "clothes", price: 100 },
//   { name: "T-shirt", category: "clothes", price: 50 }
// ]

console.log(
    getSortedProductsByCategory(products, "books")
);
// []