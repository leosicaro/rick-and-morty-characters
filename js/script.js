function obtener_personajes(parametro) {

 let character_font = fetch("https://rickandmortyapi.com/api/character");
        character_font.then((response)=>{
            if (!response.ok){
                throw new error("error");
            }
            return response.json();
            });
        character_font.then(data=>{
            parametro(data)
        })
        }
obtener_personajes(data =>{
    
})
let character_list = document.getElementById("character-list")
let character = document.createElement("li")
character_list.appendChild(character)

let photo = document.createElement("img")
photo.setAttribute("src","")

character.appendChild(photo)

let name_character = document.createElement("p")
name_character.innerText = "esrgegr" 
character.appendChild(name_character)

let specie = document.createElement("p")
specie.innerText = "esgtsergser"
character.appendChild(specie)





