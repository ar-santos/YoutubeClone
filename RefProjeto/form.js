let form1 = document.getElementById('form-cadastro');

function getDataForm () {

  let itemInput = [];

  [...form1].forEach(el => {

      if(el.id != 'enviar'){

        itemInput.push(`${el.id}: ${el.value}`);

      }

      json = itemInput;

  });

  return json

}

function saveData(data){

  localStorage.setItem('userData', JSON.stringify(data))

}


