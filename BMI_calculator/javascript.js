const form = document.querySelector("form");

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result =  document.querySelector("#results");
  if(height <=0  || isNaN(height)){
    result.innerHTML = `please give me a valid value of height ${height}`;
  }
  else if(weight <= 0 || isNaN(weight)){
    result.innerHTML = `please give me a valid value of weight ${weight}`;
  }
  else {
    const ans = (weight/((height*height)/10000)).toFixed(2);
    result.innerHTML = `<span>${ans}</span>`;
  }
});