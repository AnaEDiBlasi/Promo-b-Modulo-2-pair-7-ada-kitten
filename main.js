'use strict';

//Estamos llamando a las clases de html del boton(+) y a la seccion formulario.//
const btn = document.querySelector('.js-btn-add');
const menu = document.querySelector('.js-form');


//Estamos llamando a la clase de html de la seccion datos de gatitos// 
const jsList = document.querySelector('.js-list');




//Estamos escuchando el evento click, sobre el boton (+) del header. Si el menu esta desplegado se pliega y si esta cerrado se despliega//

/*btn.addEventListener('click', ()=>{
    menu.classList.toggle("collapsed");
}); 
*/

//OBJETOS ---> 

const kittenData_1 = {
    image: 'https://dev.adalab.es/gato-siames.webp',
    name: 'Anastasio',
    desc: 'Porte elegante, su patrón de colorcaracterístico y sus ojos de un azul intenso, pero su historiremonta a Asía al menos hace 500 años, donde tuvo su origenposiblemente.',
    race:'Siamés'

};
const kittenData_2 = {
    image: 'https://dev.adalab.es/sphynx-gato.webp',
    name: 'Fiona',
    desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
    race: 'Sphynx'
};
const kittenData_3 = {
    image: 'https://dev.adalab.es/maine-coon-cat.webp',
    name: 'Cielo',
    desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
    race: 'Maine Coon'
};

//18-  Diciembre arrays
const kittenDataList=[kittenData_1, kittenData_2, kittenData_3];

//19diciembre BUCLES
//debugger;
function renderKittenItem (kittenDataList){
    const li = `<li class= "card">
    <img class="card_img" src="${kittenDataList.image}" />
    <h3 class="card_title">${kittenDataList.name}</h3>
    <h4 class="card_race">${kittenDataList.race}</h4>
    <p class="card_description">${kittenDataList.desc} </p></li>`;
    return li;
};


function renderKittenList(){
    
    for( const oneKitten of kittenDataList){
        jsList.innerHTML += renderKittenItem(oneKitten);
    };

};

renderKittenList();
console.log();


//Estamos reemplazando el contenido que teniamos en HTML en la seccion datos de gatitos , con las variables que declaramos mas arriba para cada uno//



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


//ejercicio 2 listado//
/*function renderKitten(url, name, race, desc){
    return `<li class= "card">
    <img class="card_img" src="${url}" />
    <h3 class="card_title">${name}</h3>
    <h4 class="card_race">${race}</h4>
    <p class="card_description">
             ${desc}
    </p>
</li>`;
    
  };
  
const kittenOne = renderKitten (kittenImage1,kittenName1,kittenRace1, kittenDesc1);
const kittenTwo = renderKitten  (kittenImage2,kittenName2,kittenRace2, kittenDesc2);
const kittenThree = renderKitten (kittenImage3,kittenName3,kittenRace3, kittenDesc3);
jsList.innerHTML = kittenOne + kittenTwo + kittenThree;



//Filtrar por descripcion//
/*Estamos escuchando el evento click sobre el boton BUSCAR.
Agregamos un prevent pero por ahora no funciona.
Estamos haciendo un condicional para que se vean resultados que coicidan con alguna palabra de la descripcion.Si es asi se guarda en la constante valDesc que es igual al VALOR del imput searchDesc*/
  function filterKitten (ev) {
    ev.preventDefault();
    const valDesc = searchDesc.value;
    
    if (kittenData_1.desc.includes(valDesc)) {
        jsList.innerHTML= '';
        for(const kittenItem of kittenDataList){
            jsList.innerHTML += renderKittenItem(oneKitten); // 19diciembre ejercicio 2bucles OJO!!

        }
    }
    
    if (kittenData_2.desc.includes(valDesc)) {
        jsList.innerHTML +=renderKitten(kittenData_2);
    }
    
    if (kittenData_3.desc.includes(valDesc)) {
        jsList.innerHTML +=renderKitten(kittenData_3);
    }
}
btnSearch.addEventListener('click', filterKitten); 



// Ejercicio 1 OBJETOS --> listado: convertir gatito en un objeto
//17-diciembre hemos modificado lo de arriba (function filter kitten) y puesto en notas el ejercicio 2 Listado



/*

function renderKitten(kittenData){
    return `<li class= "card">
    <img class="card_img" src="${kittenData.image}" />
    <h3 class="card_title">${kittenData.name}</h3>
    <h4 class="card_race">${kittenData.race}</h4>
    <p class="card_description">
             ${kittenData.desc}
    </p>
</li>`;
    
  };

jsList.innerHTML = renderKitten(kittenDataList[0]);
jsList.innerHTML += renderKitten(kittenDataList[1]);
jsList.innerHTML += renderKitten(kittenDataList[2]);
 */





