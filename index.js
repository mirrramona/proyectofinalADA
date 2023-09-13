
const main = document.getElementById("main")
console.log(main)


fetch("https://rickandmortyapi.com/api/character") 
.then(respuesta => respuesta.json()) 
.then(data => {
    console.log(data.results)
    const array = data.results
    
    let acc = ""
    for(let i = 0; i < array.length; i++){
        acc = acc + `
        <div class="tarjeta">
            <div>
                <img src=${array[i].image} alt=${array[i].name}>
            </div>
            <div class="info">
                <p>
                    ${array[i].name}
                </p>

            </div>
        </div>
        `        
    }
    main.innerHTML = acc

}) 
  

              