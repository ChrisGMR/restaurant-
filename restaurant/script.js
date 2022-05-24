// import fetch from 'node-fetch'
fetch('http://localhost:3001/menu')
    .then(response => response.json())
    .then(menu => {
        
        function buildHeader(){
            const appName = menu.appetizers
            appName.forEach(element => {
               
                //gets appetizer name
                const starterName= element.tizer.name
                const nameElement = document.createElement('h2')
                nameElement.id = "appName"
                nameElement.textContent = starterName
                document.querySelector(`#app1`).appendChild(nameElement)
                //gets description
                const description = element.tizer.description
                const descName =document.createElement('p')
                descName.id = "description"
                descName.textContent = description
                document.querySelector(`#app1`).appendChild(descName)
                //gets price
                const price = element.tizer.price
                const priceName = document.createElement('p')
                priceName.id = "price"
                priceName.textContent = price
                document.querySelector(`#app1`).appendChild(priceName)
            });
            
        }
        function buildEntree(){
            const entreeName = menu.entrees
            entreeName.forEach(element => {
                const entreeName= element.ent.name
                const nameAntree = document.createElement('h2')
                nameAntree.textContent = entreeName
                document.querySelector(`#ent1`).appendChild(nameAntree)
                //gets description
                const desc = element.ent.description
                const desName =document.createElement('p')
                desName.textContent = desc
                document.querySelector(`#ent1`).appendChild(desName)
                //gets price
                const pric = element.ent.price
                const pricName = document.createElement('p')
                pricName.textContent = pric
                document.querySelector(`#ent1`).appendChild(pricName)

            })
        }
        buildHeader()
        buildEntree()
    })
    