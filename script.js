import {
  nav,
  imagePlanet,
  imageGoology,
  descriptionTitle,
  descriptionText,
  descriptionSource,
  overview,
  structure,
  geology,
  rotationNumb,
  revolutionNumb,
  radiusNumb,
  averageNumb,
} from "./DOMutility.js";
import { Planet, navColor } from "./utilits.js";

const response = await fetch("./data.json");
const data = await response.json();

let navLink = nav.querySelectorAll("a");
for (let i = 0; i < navLink.length; i++) {

  navLink[i].addEventListener("click", () => {
    let planetMerc = new Planet(
      data[i].name,
      data[i].overview,
      data[i].structure,
      data[i].geology,
      data[i].rotation,
      data[i].revolution,
      data[i].radius,
      data[i].temperature,
      data[i].images
    );
    var current = document.getElementsByClassName("active");
    console.log(current[0].className);
    current[0].className = current[0].className.replace(" active", "");
    navLink[i].className += " active";
    current[0].style.borderColor = navColor[i];
    overview.style.backgroundColor = navColor[i];
    document.body.classList.add("blurred");
    setTimeout(function () {
      document.body.classList.remove("blurred");
    }, 500);
    descriptionText.innerText = data[i].overview.content
    descriptionSource.href = data[i].overview.source
    imagePlanet.src = data[i].images.planet
    rotationNumb.innerText = data[i].rotation
    revolutionNumb.innerText = data[i].revolution
    radiusNumb.innerText = data[i].radius
    averageNumb.innerText = data[i].temperature
    geology.style.backgroundColor = 'transparent';
      structure.style.backgroundColor = 'transparent';
      imageGoology.style.display = 'none'
    let textDescriptionTitle = planetMerc.name;
    descriptionTitle.innerText = textDescriptionTitle;
    
  });
}
overview.addEventListener('click', () => {
  document.body.classList.add("blurred");
    setTimeout(function () {
      document.body.classList.remove("blurred");
    }, 500);
  for (let i = 0; i < data.length; i++) {
    let planetName = descriptionTitle.innerText
    let dataPlanetName = data[i].name.toUpperCase();
    if (planetName === dataPlanetName) {
      descriptionText.innerText = data[i].overview.content
      overview.style.backgroundColor = navColor[i];
      geology.style.backgroundColor = 'transparent';
      structure.style.backgroundColor = 'transparent';
      descriptionSource.href = data[i].overview.source
      imagePlanet.src = data[i].images.planet
      imageGoology.style.display = 'none'
    } 
  }
})
structure.addEventListener('click', () => {
  document.body.classList.add("blurred");
    setTimeout(function () {
      document.body.classList.remove("blurred");
    }, 500);
  for (let i = 0; i < data.length; i++) {
    let planetName = descriptionTitle.innerText
    let dataPlanetName = data[i].name.toUpperCase();
    if (planetName === dataPlanetName) {
      descriptionText.innerText = data[i].structure.content
      structure.style.backgroundColor = navColor[i];
      overview.style.backgroundColor = 'transparent';
      geology.style.backgroundColor = 'transparent';
      descriptionSource.href = data[i].structure.source
      imagePlanet.src = data[i].images.internal
      imageGoology.style.display = 'none'
    } 
  }
})
geology.addEventListener('click', () => {
  document.body.classList.add("blurred");
    setTimeout(function () {
      document.body.classList.remove("blurred");
    }, 500);
    for (let i = 0; i < data.length; i++) {
      let planetName = descriptionTitle.innerText
      let dataPlanetName = data[i].name.toUpperCase();
      if (planetName === dataPlanetName) {
        descriptionText.innerText = data[i].geology.content
        structure.style.backgroundColor = 'transparent';
        overview.style.backgroundColor = 'transparent';
        geology.style.backgroundColor = navColor[i];
        descriptionSource.href = data[i].geology.source
        imagePlanet.src = data[i].images.planet
        imageGoology.src = data[i].images.geology
        imageGoology.style.display = 'block'
        } 
    }
})