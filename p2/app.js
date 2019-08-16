let info;

informationFetch = () =>{

    fetch('./comunas.json')
    .then(data=> data.json())
    .then((data)=>{
        info = data;
        chargeInfo(data)
    })
}

chargeInfo =(infoData)=>{

    let selectRegion = document.getElementById('regiones');
    let selectProvincia = document.getElementById('provincia');
    let selectComuna = document.getElementById('comunas');
    for (value in infoData) {
     let option = document.createElement("option");
     let optionProvincia = document.createElement("option");
     let optionComuna = document.createElement("option");
     option.text = infoData[value].region;
     optionProvincia.text = infoData[value].provincia;
     optionComuna.text = infoData[value].name;
     selectRegion.add(option);
     selectProvincia.add(optionProvincia);
     selectComuna.add(optionComuna)
    }

   
    

}

window.onload = informationFetch