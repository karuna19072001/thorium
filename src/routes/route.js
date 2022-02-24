const express = require('express');
const router = express.Router();



// let arr =
//    [
//        {
//            "name": "manish",
//            "dob": "1/1/1995",
//            "gender": "male",
//            "city": "jalandhar",
//            "sports": [
//                "swimming"
//            ],
//            "bookings": [
//                {
//                    "bookingNumber": 1,
//                    "sportId": "",
//                    "centerId": "",
//                    "type": "private",
//                    "slot": '16286598000000',
//                    "bookedOn": '31/08/2021',
//                    "bookedFor": '01/09/2021'
//                },
//                {
//                    "bookingNumber": 2,
//                    "sportId": "",
//                    "centerId": "",
//                    "type": "private",
//                    "slot": '16286518000000',
//                    "bookedOn": '31/08/2001',
//                    "bookedFor": '01/09/2001'
//                },
//            ]
//        },
//        {
//            "name": "gopal",
//            "dob": "1/09/1995",
//            "gender": "male",
//            "city": "delhi",
//            "sports": [
//                "soccer"
//            ],
//            "bookings": []
//        },
//        {
//            "name": "lokesh",
//            "dob": "1/1/1990",
//            "gender": "male",
//            "city": "mumbai",
//            "sports": [
//                "soccer"
//            ],
//            "bookings": []
//        },
//    ]
// //    router.post('/player', function (req, res) {
// //     let details = req.body.name1.name
// //     let inputDetails = req.body.name1
// //     for (let i = 0; i < arr.length; i++) {
// //     if (details === arr[i].name) {
// //     console.log("Data already exist")
// //     res.send("Data already exist")
// //     }
// //     else if (i === arr.length - 1) {
// //     arr.push( inputDetails )
// //     res.send({arr})
// //     } 
// //     }  
// //     res.send(  { data: players , status: true }  )
// // })



// router.post('/players/:playerName/bookings/:bookingId',function(req,res){
//     let playerName = req.params.playerName;
//     let bookingId = req.params.bookingId;
//     let booking = req.body;
//     let bn = req.body.bookingNumber;
//     for(let i=0;i<arr.length;i++){
//         if(playerName==arr[i].name){
//             console.log(playerName==arr[i].name)
//              let x=  arr[i].bookings.find(ele=>ele.bookingNumber==bookingId)
//              let y=  arr[i].bookings.find(ele=>ele.bookingNumber==bn)
//              if ( x||y ){
//                 return res.send("Booking id already exists")
//              }
//                 arr[i].bookings.push(booking)
//                 return res.send(arr)
//             }
//      }
//     return res.send("Player does not exist")
// })
// module.exports = router;



// Q1.  Write the api in first project directory (Routes/index.js or routes/route.js)
// Problem Statement 1 :
// NOTE: you must create the players array outside( on the top ) of the api( so that data is maintained across api hits )
// // Your player collection should be an ARRAY of player objects. Each player object should have the following attributes:


// Q2. Write a POST /players api that creates a new player ( that saves a player’s details and doesn’t allow saving the data of a player with a name that already exists in the data)

// NOTE: you must create the players array outside( on the top ) of the api( so that data is maintained across api hits)

let persons = [
    {
        name: "PK",
        age: 10,
        votingStatus: false
    },
    {
        name: "SK",
        age: 20,
        votingStatus: false
    },
    {
        name: "AA",
        age: 70,
        votingStatus: false
    },
    {
        name: "SC",
        age: 5,
        votingStatus: false
    },
    {
        name: "HO",
        age: 40,
        votingStatus: false
    }
]

router.post("/election", function (req, res) {
    let votingAge = req.query.votingAge

    let mahir=[];
    for (let i = 0; i < persons.length; i++) {

        if (persons[i].age = votingAge) {
        
            persons[i].votingStatus = true
            mahir.push(persons[i])
        }
    }
if (mahir.length>0)
{
    return res.send(mahir)
}
else{
    return res.send("no member found above this age")
}

})
module.exports = router;