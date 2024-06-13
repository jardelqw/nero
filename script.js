function toggleMode () {
    const html = document.documentElement
/*
   if(html.classList.contains('light') ){
        html.classList.remove('light')
    }else{
        html.classList.add('light')
    }
*/
    html.classList.toggle('light')
 
    //pegar a tag img

    const img = document.querySelector("#profile img")

    //substituir a imagem
    if(html.classList.contains('light')){
        //sse tiver tight mode, adicionar a imagem light
        img.setAttribute('src', './assets/avatar-light.png')
    
        img.setAttribute("alt",'descrição clara')
    }else{
        //se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/avatar2.png")

        img.setAttribute("alt", 'Descrição preta')
    } 

    
    
    
}