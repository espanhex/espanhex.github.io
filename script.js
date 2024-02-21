function toggleMode(){
  const html = document.documentElement
  
  /*
  if(html.classList.contains('light')){
    html.classList.remove('light')
  }else{
    html.classList.add('light')
  }
  */

  html.classList.toggle('light')/* atalho toggle que faz a mesma verificação */ 

  if(html.classList.contains('light')){
    img.setAttribute("src", "./assets/redonda.png")
  }else{
    img.setAttribute("src","./assets/redonda.png")
  }
}