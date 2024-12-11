'use strict';

const jsList = document.querySelector('.js-list');

const btn = document.querySelector('.js-btn-add');

const menu = document.querySelector('.js-form');

btn.addEventListener('click', ()=>{
    menu.classList.toggle("collapsed");
});
const kittenOne = `<li class="card">
<article>
      <img class="card_img" src="https://dev.adalab.es/gato-siames.webp" alt="siames-cat" />
      <h3 class="card_title">Anastacio</h3>
     <h4 class="card_race">Siamés</h4>
     <p class="card_description">
         Porte elegante, su patrón de colorcaracterístico y sus ojos
        de un azul intenso, pero su historiremonta a Asía al menos
        hace 500 años, donde tuvo su origenposiblemente.
     </p>
</article>
</li>`; 


const kittenTwo = `<li class="card">
    <img class="card_img" src="https://dev.adalab.es/sphynx-gato.webp" alt="sphynx-cat" />
     <h3 class="card_title">Fiona</h3>
     <h4 class="card_race">Sphynx</h4>
     <p class="card_description">
         Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
         hasta con pinta de alienígena han llegado a definir a esta raza
         gatuna que se caracteriza por la «ausencia» de pelo.
         </p>                   
</li>`;



const kittenThree = `<li class= "card">
    <img class="card_img" src="https://dev.adalab.es/maine-coon-cat.webp" alt="maine-coon-cat" />
    <h3 class="card_title">Cielo</h3>
    <h4 class="card_race">Maine Coon</h4>
    <p class="card_description">
     Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
    bella mirada se ha convertido en una de sus señas de identidad.
     Sus ojos son grandes y las orejas resultan largas y en punta.
    </p>
</li>`;

jsList.innerHTML = kittenOne;
jsList.innerHTML += kittenTwo;
jsList.innerHTML += kittenThree;


const btnCancel = document.querySelector ('.js-btn-cancel');
const form = document.querySelector('.js-form');
const url = document.querySelector ('.js-url');
const name = document.querySelector ('.js-name');
const raza = document.querySelector ('.js-raza');
const desc = document.querySelector ('.js-desc');


btnCancel.addEventListener('click', (event)=>{
    event.preventDefault();
    form.classList.toggle('collapsed');
    url.value = '';
    name.value = '';
    raza.value = '';
    desc.value = '';

})
const btnSearch = document.querySelector ('.js-button-search');
const searchDesc = document.querySelector ('.js-in-search-desc');


btnSearch.addEventListener('click', (ev) => {
    ev.preventDefault();
    const searchDesc = js-in-search-desc.value;
    

})