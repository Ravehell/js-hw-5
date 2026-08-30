// const getTotalBalanceByGender = (users, gender) => {
//     return users.filter(user => user.gender === gender)
//         .map(user => user.balance)
//         .reduce((total, balance) => total + balance, 0)
// }


// const clients = [
//     {
//         name: "Moore Hensley",
//         gender: "male",
//         balance: 2811
//     },
//     {
//         name: "Sharlene Bush",
//         gender: "female",
//         balance: 3821
//     },
//     {
//         name: "Ross Vazquez",
//         gender: "male",
//         balance: 3793
//     },
//     {
//         name: "Elma Head",
//         gender: "female",
//         balance: 2278
//     },
//     {
//         name: "Carey Barr",
//         gender: "male",
//         balance: 3951
//     },
//     {
//         name: "Blackburn Dotson",
//         gender: "male",
//         balance: 1498
//     },
//     {
//         name: "Sheree Anthony",
//         gender: "female",
//         balance: 2764
//     }
// ];

// console.log(getTotalBalanceByGender(clients, "male")); // 12053

// console.log(getTotalBalanceByGender(clients, "female")); // 8863


// const getUserNames = users => {
// return users.map(user => user.name)
// }


// const getAdultUsers = users => {
//     return users.filter(user => user.age >= 18)
// }


// const getAdultUserNames = users => {
//     return users.filter(user => user.age >= 18)
//         .map(user => user.name)
// }


// const getTotalPrice = products => {
//     return products.map(product => product.price).reduce((total, price) => total + price, 0)
// }

// const getTotalPriceByCategory = (products, category) => {
//     return products.filter(product => product.category === category).map(product => product.price).reduce((total, price) => total + price, 0)
// }


// const getUsersWithFriend = (users, friendName) => {
//     return users.filter(user => user.friends.includes(friendName))
// }


// const sortByFriendCount = (users) => {
//     return users.toSorted((a, b) => a.friends.length - b.friends.length)
// }


const getTotalBalanceByGender = (users, gender) => {
    return users.filter(user => user.gender === gender).map(user => user.balance).reduce((total, balance) => total + balance, 0)
}