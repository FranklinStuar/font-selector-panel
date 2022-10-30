const listFonts = [
  {
    name: "Roboto",
    family: 'Roboto',
    weight: [100,300,400,500,700,800,900],
    style: ["normal","italic"],
  },
  {
    name: "Poppins",
    family: 'Poppins',
    weight: [100,300,400,500,700,800,900],
    style: ["normal","italic"],
  },
  {
    name: "Poor Story",
    family: 'Poor Story',
    weight: [400],
    style: ["normal"],
  },
  {
    name: "Island Moments",
    family: 'Island Moments',
    weight: [400],
    style: ["normal"],
  },
]

document.addEventListener("DOMContentLoaded",() =>{
  
  const createNodeText = (index,text) =>{
    const fontSelected = listFonts[index]
    
    let textAbout = ""
    fontSelected.weight.forEach(weight => {
      fontSelected.style.forEach(style => {
        
        textAbout += 
        `<div class="font-selector__text-result">
          <div class="font-selector__text-details"> 
          <strong>Fuente: </strong> <span>${fontSelected.name};</span> <strong>Weight: </strong> <span>${weight};</span> <strong>Estilo: </strong> <span>${style}</span>
          </div>
          <p class="font-selector__text" style="font-family: '${fontSelected.family}'; font-weight: ${weight} ; font-style: ${style};"> 
            ${text}
          </p>
        </div>`
        
      });
    });
    
    return textAbout
  }
  
  const fontSelectorPanel = document.querySelectorAll(".font-selector--panel")
  fontSelectorPanel.forEach(fontSelector => {
    // elements from html
    const selectTagFonts = fontSelector.querySelector(".font-selector__select")
    const cardForText = fontSelector.querySelector(".font-selector__card--text")
    const input = fontSelector.querySelector(".font-selector__input")

    // agrega items al select de los fonts
    listFonts.forEach((fontItem, index) => {
      const option = document.createElement("option");
      option.text = fontItem.name;
      option.value = index;
      selectTagFonts.add(option)
    })

    // agrega evento al select
    selectTagFonts.addEventListener("change",()=>{
      cardForText.innerHTML = createNodeText(selectTagFonts.value, input.value)
    })

    input.addEventListener("keyup",()=>{
      cardForText.innerHTML = createNodeText(selectTagFonts.value, input.value)
    })

    cardForText.innerHTML = createNodeText(selectTagFonts.value, input.value)



  });
})