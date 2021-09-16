
const container = document.querySelector('#container')
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for(let i=0;i<=898;i++){

    const Pokemon= document.createElement('div')
    Pokemon.classList.add('pokemon');

    const label=document.createElement('span')
    label.textContent=`#${i}`;

    const newImg = document.createElement('img')
    newImg.src = `${baseUrl}${i}.png`;
    Pokemon.appendChild(newImg)
    Pokemon.appendChild(label)
    container.appendChild(Pokemon)

}


{/* <div>
    <img></img>
    <span></span>
</div> */}
