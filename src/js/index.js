const divTab = document.querySelectorAll(".content-tab")

//Adiciona um evento de click nas tabs que irá mudar o estilo e ativar a div do conteúdo correspondente
divTab.forEach(function(element) {
    let indexTab = element.dataset.index
    
    element.addEventListener('click', function(){
        changeClassTab(".tab-current", indexTab) //adiciona a classe active das divs com o conteúdo correspondente das tabs
        removeClassActiveElement(".content-tab") //remove a classe active das tabs quando clicadas
        element.classList.add('active') //adiciona a classe active para a tab clicada
    });
});

//adiciona a classe active em um elemento, que neste caso são as tabs
function changeClassTab(classElement, index) {
    const currentElement = document.querySelectorAll(classElement)
    removeClassActiveElement(classElement) 
    currentElement[index].classList.add('active')
    currentElement[index]
}

//Remove todas as classes active de um elemento
function removeClassActiveElement(classElement) {
    const element = document.querySelectorAll(classElement)
    element.forEach(function(item){
        item.classList.remove('active')
    });
}