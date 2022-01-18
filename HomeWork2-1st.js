
let name = document.querySelector('#name');
let phone = document.querySelector('#phone');
let Birthday = document.querySelector('#birthday')
let Gender = document.querySelectorAll('input[name=gender]');

let address = document.querySelector('#address')
let city = document.querySelector('#city')
let state = document.querySelector('#state')
let country = document.querySelector('#country')
let image = document.querySelector("#image")
let img = document.querySelector("#img")

let form = document.querySelector('form')
let input = document.querySelectorAll('input')

const submit = document.querySelector("#submit")
let dataFields = document.querySelectorAll(".ft_tbl_meta")
let button = document.querySelector('#submit');
let data = document.querySelector('.data')
let btn = document.querySelector('input[type=button]');

function showData(event) {

  if (phone.validity.valid)
  
    for (let i = 0; i < dataFields.length; i++) {
        switch (i) {
            case (0) : dataFields[i].textContent =  name.value; break;
            case (1) : dataFields[i].textContent = phone.value; break;
            case (2) : dataFields[i].textContent =  Birthday.value; break;


        
            case (3) : 
            for (let z=0; z<Gender.length; z++) {
                if (Gender[z].type === 'radio' && Gender[z].checked) {
            dataFields[i].textContent = Gender[z].value; 
                }
            }
            break;
            
            case (4) : dataFields[i].textContent = address.value; break;
            case (5) : dataFields[i].textContent = city.value; break;
            case (6) : dataFields[i].textContent = state.value; break;
            case (7) : dataFields[i].textContent = country.value; break;
        };

        event.preventDefault();
        form.style.display = 'none'
        data.style.visibility = "visible"
    };
};

button.addEventListener('click', showData, false);

btn.addEventListener('click', (e)=>{
    form.style.display = 'block'
})


image.addEventListener('change', ()=> {
    const [file] = image.files;
     if(file) {
        img.src = URL.createObjectURL(file);
     }   
});

