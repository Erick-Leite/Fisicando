let width = window.innerWidth;
const container = document.querySelector(".container");

if(width < 576){
    container.style.maxWidth=`100%`;
}else if(width >= 576 && width < 768){
    container.style.maxWidth=`93.75vw`;
}else if(width >= 768 && width < 980){
    container.style.maxWidth=`72.0rem`;
}else if(width >= 980 && width < 992){
    container.style.maxWidth=`73.469vw`;
}else if(width >= 992 && width < 1200){
    container.style.maxWidth=`75vw`;
}else if(width >= 1200){
    container.style.maxWidth=`90.0rem`;
}


const maxWidth = () => {
  if(width < 576){
    container.style.maxWidth=`100%`;
}else if(width >= 576 && width < 768){
    container.style.maxWidth=`93.75vw`;
}else if(width >= 768 && width < 980){
    container.style.maxWidth=`72.0rem`;
}else if(width >= 980 && width < 992){
    container.style.maxWidth=`73.469vw`;
}else if(width >= 992 && width < 1400){
    container.style.maxWidth=`75vw`;
}else if(width >= 1200){
    container.style.maxWidth=`90.0rem`;
}

}


window.addEventListener('resize', maxWidth);
