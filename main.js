'use strict';

//Estamos llamando a las clases de html del boton(+) y a la seccion formulario.//
const btn = document.querySelector('.js-btn-add');
const menu = document.querySelector('.js-form');


//Estamos llamando a la clase de html de la seccion datos de gatitos// 
const jsList = document.querySelector('.js-list');


//Constantes de cada uno de los gatitos //
//Constantes de gato 1//
const kittenImage1 = "https://dev.adalab.es/gato-siames.webp" ;
const kittenName1 = "Anastacio" ;
const kittenRace1 = "Siamés" ;
const kittenDesc1 = "Porte elegante, su patrón de colorcaracterístico y sus ojos de un azul intenso, pero su historiremonta a Asía al menos hace 500 años, donde tuvo su origenposiblemente.";

//Constantes de gato 2 //
const kittenImage2 = "https://dev.adalab.es/sphynx-gato.webp" ;
const kittenName2 = "Fiona" ;
const kittenRace2 = "Sphynx";
const kittenDesc2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";

//Constantes de gato 3
const kittenImage3 = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenName3 = "Cielo" ;
const kittenRace3 = "Maine Coon" ;
const kittenDesc3 =  "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";



//Estamos escuchando el evento click, sobre el boton (+) del header. Si el menu esta desplegado se pliega y si esta cerrado se despliega//

/*btn.addEventListener('click', ()=>{
    menu.classList.toggle("collapsed");
}); 
*/



//Estamos sustituyendo las variables que declaramos arriba de cada uno de los gatitos//
const kittenOne = `<li class="card">
<article>
      <img class="card_img" src="${kittenImage1}" alt="siames-cat" />
      <h3 class="card_title">${kittenName1}</h3>
     <h4 class="card_race">${kittenRace1}</h4>
     <p class="card_description">
         ${kittenDesc1}
     </p>
</article>
</li>`; 


const kittenTwo = `<li class="card">
    <img class="card_img" src="${kittenImage2}" alt="sphynx-cat" />
     <h3 class="card_title">${kittenName2}</h3>
     <h4 class="card_race">${kittenRace2}</h4>
     <p class="card_description">
         ${kittenDesc2}
         </p>                   
</li>`;

const kittenThree = `<li class= "card">
    <img class="card_img" src="${kittenImage3}" />
    <h3 class="card_title">${kittenName3}</h3>
    <h4 class="card_race">${kittenRace3}</h4>
    <p class="card_description">
             ${kittenDesc3}
    </p>
</li>`;


//Estamos reemplazando el contenido que teniamos en HTML en la seccion datos de gatitos , con las variables que declaramos mas arriba para cada uno//
jsList.innerHTML = kittenOne;
jsList.innerHTML += kittenTwo;
jsList.innerHTML += kittenThree;


//Estamos llamando al boton Cancelar y a todos los inputs del formulario "¿agregarmos un nuevo gatito?"//
const btnCancel = document.querySelector ('.js-btn-cancel');
const form = document.querySelector('.js-form');
const url = document.querySelector ('.js-url');
const name = document.querySelector ('.js-name');
const raza = document.querySelector ('.js-raza');
const desc = document.querySelector ('.js-desc');

//Estamos escuchando el evento click sobre el boton Cancelar.Añadimos prevent para que al hacer click en enviar no se envie el formulario vacio.Al hacer click en cancelar el formulario se pliega//
btnCancel.addEventListener('click', (event)=>{
    event.preventDefault();
    form.classList.toggle('collapsed');
    url.value = '';
    name.value = '';
    raza.value = '';
    desc.value = '';

})

//Estamos llamando al boton buscar y al input de la casilla descripcion, en  la seccion filtrado y busqueda//
const btnSearch = document.querySelector ('.js-button-search');
const searchDesc = document.querySelector ('.js-in-search-desc');
console.log(searchDesc)


/*Estamos escuchando el evento click sobre el boton BUSCAR.

Agregamos un prevent pero por ahora no funciona.

Estamos haciendo un condicional para que se vean resultados que coicidan con alguna palabra de la descripcion.Si es asi se guarda en la constante valDesc que es igual al VALOR del imput searchDesc*/

btnSearch.addEventListener('click', (ev) => {
    ev.preventDefault();
    const valDesc = searchDesc.value;


    if (kittenDesc1.includes(valDesc)) {
        jsList.innerHTML=kittenOne
    }
    
    if (kittenDesc2.includes(valDesc)) {
        jsList.innerHTML=kittenTwo
    }
    
    if (kittenDesc3.includes(valDesc)) {
        jsList.innerHTML=kittenThree
    }

});




//ejercicio funciones 1 - mostrar ocultar formulario//

function showNewCatForm() {
    menu.classList.remove("collapsed");
  }
  function hideNewCatForm() {
    menu.classList.add("collapsed");
  }
function handleClick() {
    if (form.classList.contains("collapsed")){
        showNewCatForm();
    }
    else{
        hideNewCatForm();
    }

}

btn.addEventListener('click', handleClick);