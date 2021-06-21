//calcula idade e insere na bio
const getAge = () => {
  let age =  (new Date().getFullYear() - 1988);
  let month = new Date().getMonth(); 
  if(month < 11){
    age -= 1;
  }
  return age;
}
document.getElementById('age').innerText = getAge();

//Mostrar Bio e Habilildades
const navBio = document.getElementById('navbio');
const navHabilidade = document.getElementById('navhabilidades');
const bio = document.getElementById('bio');
const habilidade = document.getElementById('habilidades');
bio.hidden = false;
habilidade.hidden = true;
const onClickBio = ()=> {
  if(bio.hidden === false && habilidade.hidden === true){
    bio.hidden = true;
    habilidade.hidden = false;
  }else {
    bio.hidden = false;
    habilidade.hidden = true;
  }
  return bio;
}
navHabilidade.onclick = onClickBio;
navBio.onclick = onClickBio;

//preencher iframe com experiencia ou formacão
const pageExperiencia = document.getElementById('navexperiencia');
const iframe = document.getElementById('iframe');
pageExperiencia.onclick = () => {
  iframe.setAttribute('src', './experiencia.html');
}
const pageFormacao = document.getElementById('navformacao');
pageFormacao.onclick = () => {
  iframe.setAttribute('src', './formacao.html');
}