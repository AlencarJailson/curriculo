const getAge = () => {
  let age =  (new Date().getFullYear() - 1988);
  let month = new Date().getMonth(); 
  if(month < 11){
    age -= 1;
  }
  return age;
}
document.getElementById('age').innerText = getAge();