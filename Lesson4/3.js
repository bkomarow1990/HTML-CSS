//alert(imagesSrc.length());
function nextImage(){
    if(imageIndex+1 == countImages){
        imageIndex = 0;
    }
    else{
        ++imageIndex;
    }
    document.getElementById("main_image").src = imagesSrc[imageIndex];
}
function prevImage(){
    if(imageIndex == 0){
        imageIndex = 5;
    }
    else{
        --imageIndex;
    }
    document.getElementById("main_image").src = imagesSrc[imageIndex];
}
let imageIndex = 0;
const countImages = 6;
let imagesSrc = ["https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg","https://static.remove.bg/remove-bg-web/99ab439c6e8e26adfd8c59cee4eb26f0376a9584/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg","https://static.remove.bg/remove-bg-web/99ab439c6e8e26adfd8c59cee4eb26f0376a9584/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg","https://static.remove.bg/remove-bg-web/99ab439c6e8e26adfd8c59cee4eb26f0376a9584/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg","https://static.remove.bg/remove-bg-web/99ab439c6e8e26adfd8c59cee4eb26f0376a9584/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg","https://static.remove.bg/remove-bg-web/99ab439c6e8e26adfd8c59cee4eb26f0376a9584/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"];
