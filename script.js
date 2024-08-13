// for main navigation menu
const displayMenu = document.querySelectorAll(".show-display");
const navMenu = document.querySelectorAll(".nav-btn");
navMenu.forEach((menu, index) => {
  menu.addEventListener("click", () => {
    displayMenu.forEach((display) => (display.style.display = "none"));
    navMenu.forEach((border)=>{border.classList.remove('border-bottom')})
    navMenu.forEach((border)=>{border.style.textShadow='none'})
    displayMenu[index].style.display = "block";
    navMenu[index].classList.add('border-bottom');
    navMenu[index].style.textShadow='0 0 25px #ff8c00';
  });
});

// for academics year navigation menu
const years = document.querySelectorAll(".years");
const courses = document.querySelectorAll(".courses");
years.forEach((currYear, index) => {
  currYear.addEventListener("click", () => {
    courses.forEach((course) => (course.style.display = "none"));
    years.forEach((yearColor) => (yearColor.style.border = "none"));
    courses[index].style.display = "flex";
    years[index].style.borderBottom = "2px solid gold";
  });
});

// all characters in hogwarts 
const allCharacters = document.querySelector('.characters');
let charNames = '';
const allHogwartsCharecters = document.querySelector(".characters-inhogwarts");
const allHogwartsTypes = document.querySelector(".types-inhogwarts");
const charactersAll = function(){
  fetch(`https://potterapi-fedeperin.vercel.app/en/characters`)
  .then(res=> {return res.json()})
  .then(data=>{
    console.log(data);
    data.forEach(function (charData) {
      const elImg = document.createElement("img");
      elImg.setAttribute("alt", charData.name);
      elImg.setAttribute("src", charData.image);
      const cards = document.createElement("div");
      cards.classList.add("cards");
      // name
      const elName = document.createElement("h2");
      elName.innerText = `${charData.fullName}`;
      // nickname
      const elNname = document.createElement("h3");
      elNname.innerText = `Nickname: ${charData.nickname}`;
       // house
       const elHouse = document.createElement("h3");
       elHouse.innerText = `House: ${charData.hogwartsHouse}`;
      // appending
      allHogwartsCharecters.appendChild(cards);
      cards.appendChild(elImg);
      cards.appendChild(elName);
      cards.appendChild(elNname);
      cards.appendChild(elHouse);
    });
  })
}

const charactersGryffindor = function(){
  // Fetch data from the API
  fetch('https://potterapi-fedeperin.vercel.app/en/characters')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // Filter characters whose hogwartsHouse is 'Gryffindor'
    const gryffindorCharacters = data.filter(character => character.hogwartsHouse === 'Gryffindor');
    console.log(gryffindorCharacters);
    
    // Clear the existing content in allHogwartsTypes
    allHogwartsTypes.innerHTML = ''; 
    
    // Display the filtered Gryffindor characters
    gryffindorCharacters.forEach(character => {
      const charDiv = document.createElement('div');
      charDiv.classList.add('character');

      const img = document.createElement('img');
      img.src = character.image;
      img.alt = character.fullName;

      const name = document.createElement('h2');
      name.textContent = character.fullName;

      const DOB = document.createElement('p');
      DOB.textContent = `Date of Birth: ${character.birthdate}`;

      charDiv.appendChild(img);
      charDiv.appendChild(name);
      charDiv.appendChild(DOB);

      allHogwartsTypes.appendChild(charDiv);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
}

const charactersSlytherin = function(){
  // Fetch data from the API
  fetch('https://potterapi-fedeperin.vercel.app/en/characters')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // Filter characters whose hogwartsHouse is 'Slytherin'
    const slytherinCharacters = data.filter(character => character.hogwartsHouse === 'Slytherin');
    console.log(slytherinCharacters);
    
    // Clear the existing content in allHogwartsTypes
    allHogwartsTypes.innerHTML = ''; 
    
    // Display the filtered Slytherin characters
    slytherinCharacters.forEach(character => {
      const charDiv = document.createElement('div');
      charDiv.classList.add('character');

      const img = document.createElement('img');
      img.src = character.image;
      img.alt = character.fullName;

      const name = document.createElement('h2');
      name.textContent = character.fullName;

      const DOB = document.createElement('p');
      DOB.textContent = `Date of Birth: ${character.birthdate}`;

      charDiv.appendChild(img);
      charDiv.appendChild(name);
      charDiv.appendChild(DOB);

      allHogwartsTypes.appendChild(charDiv);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
}

const charactersHufflepuff = function(){
  // Fetch data from the API
  fetch('https://potterapi-fedeperin.vercel.app/en/characters')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // Filter characters whose hogwartsHouse is 'Hufflepuff'
    const hufflepuffCharacters = data.filter(character => character.hogwartsHouse === 'Hufflepuff');
    console.log(hufflepuffCharacters);
    
    // Clear the existing content in allHogwartsTypes
    allHogwartsTypes.innerHTML = ''; 
    
    // Display the filtered Hufflepuff characters
    hufflepuffCharacters.forEach(character => {
      const charDiv = document.createElement('div');
      charDiv.classList.add('character');

      const img = document.createElement('img');
      img.src = character.image;
      img.alt = character.fullName;

      const name = document.createElement('h2');
      name.textContent = character.fullName;

      const DOB = document.createElement('p');
      DOB.textContent = `Date of Birth: ${character.birthdate}`;

      charDiv.appendChild(img);
      charDiv.appendChild(name);
      charDiv.appendChild(DOB);

      allHogwartsTypes.appendChild(charDiv);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
}

const charactersRavenclaw = function(){
  // Fetch data from the API
  fetch('https://potterapi-fedeperin.vercel.app/en/characters')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // Filter characters whose hogwartsHouse is 'Ravenclaw'
    const ravenclawCharacters = data.filter(character => character.hogwartsHouse === 'Ravenclaw');
    console.log(ravenclawCharacters);
    
    // Clear the existing content in allHogwartsTypes
    allHogwartsTypes.innerHTML = ''; 
    
    // Display the filtered Ravenclaw characters
    ravenclawCharacters.forEach(character => {
      const charDiv = document.createElement('div');
      charDiv.classList.add('character');

      const img = document.createElement('img');
      img.src = character.image;
      img.alt = character.fullName;

      const name = document.createElement('h2');
      name.textContent = character.fullName;

      const DOB = document.createElement('p');
      DOB.textContent = `Date of Birth: ${character.birthdate}`;

      charDiv.appendChild(img);
      charDiv.appendChild(name);
      charDiv.appendChild(DOB);

      allHogwartsTypes.appendChild(charDiv);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
}


// click function for characters api call
const charTypes = document.getElementById('char-type');
allCharacters.addEventListener('click', charactersAll)
charTypes.addEventListener('change', function(){
  if(charTypes.value == 'all'){
    allHogwartsCharecters.style.display = 'flex';
    allHogwartsTypes.style.display = 'none';
    allHogwartsTypes.innerHTML = '';
    charactersAll();
  } else if (charTypes.value == 'gryffindor'){
    allHogwartsCharecters.style.display = 'none';
    allHogwartsTypes.style.display = 'flex';
    allHogwartsTypes.innerHTML = '';
    charactersGryffindor();
  }
  else if (charTypes.value == 'slytherin'){
    allHogwartsCharecters.style.display = 'none';
    allHogwartsTypes.style.display = 'flex';
    allHogwartsTypes.innerHTML = '';
    charactersSlytherin();
  }
  else if (charTypes.value == 'hufflepuff'){
    allHogwartsCharecters.style.display = 'none';
    allHogwartsTypes.style.display = 'flex';
    allHogwartsTypes.innerHTML = '';
    charactersHufflepuff();
  }
  else if (charTypes.value == 'ravenclaw'){
    allHogwartsCharecters.style.display = 'none';
    allHogwartsTypes.style.display = 'flex';
    allHogwartsTypes.innerHTML = '';
    charactersRavenclaw();
  }
});