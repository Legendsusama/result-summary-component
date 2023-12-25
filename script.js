
let contentBox = document.querySelector('.content-box');



async function fetchingContent(){

  let fetchData = await fetch('data.json');
  let jsonData = await fetchData.json();
  return jsonData;


}

fetchingContent().then(data => {
  
  if(data){

    data.forEach(object =>{

      let createDiv = document.createElement('div');
      createDiv.className = "content";

      createDiv.innerHTML = `

      <div>
        <img src="${object['icon']}" />
        <p>${object['category']}</p>
      </div>

      <div>
        <p>${object['score']}<span>/100</span> </p>
      </div>

      `;
      contentBox.appendChild(createDiv);
    })
  }

})
