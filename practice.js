let express = require("express")
const { get } = require("express/lib/response")
let app = express()

app.get("/Hello", function(req,res){
    res.send("Hello!")
})

app.post("/hello", function(req,res){
    res.send("You posted to hello!")
})

// day of the week
// app.get("/:day", function(req,res){
//     const dayOfWeek = req.params.day
//     switch(dayOfWeek){
//         case 'monday':
//         case 'tuesday':
//         case 'wednesday':
//         case 'thursday':
//         case 'friday':
//             res.send(`It is ${dayOfWeek}`)
//             break;
//         case 'saturday':
//         case 'sunday':
//             res.send('It is the weekend')
//             break;
//     }
    
// })

app.get('/:planet', function(req,res){
    const planets = req.params.planet
    const cluster = ['sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto']
    let location = cluster.indexOf(`${planets}`)
    res.send(`${planets} is the ${location} planet closest to the sun`)
})

app.listen(3000)