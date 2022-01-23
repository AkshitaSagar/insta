var a = document.getElementById ("stylebutton");
function like(){
    if(a.style.color == "grey"){
        a.style.color = "#FF0000";
    }else{
        a.style.color = "grey";
    }
}
a.addEventListener('click', like);

var b = document.getElementById ("second");
function secondlike(){
    if(b.style.color == "grey"){
        b.style.color = "#FF0000";
    }else{
        b.style.color = "grey";
    }
}
b.addEventListener('click', secondlike);


var c = document.getElementById ("firstsave");
function saved(){
    if(c.style.color == "grey"){
        c.style.color = "black";
    }else{
        c.style.color = "grey";
    }
}
c.addEventListener('click', saved);

var d = document.getElementById ("save");
function save(){
    if(d.style.color == "grey"){
        d.style.color = "black";
    }else{
        d.style.color = "grey";
    }
}
d.addEventListener('click', save);

//load images


    var btn_ref = document.getElementById('initButton');



var btn_ref = document.getElementById('initButton');



var img_arr = [
    'https://th.bing.com/th/id/OIP.3R3_z2zCLOG4yGyzcxeD8wHaEo?pid=ImgDet&rs=1',
    'https://asset.mansionglobal.com/editorial/florida-for-the-equestrian--why-horse-lovers-should-trot-over-to-wellington/assets/VuDBOe3HmN/horsey_inbody1-1920x2560.jpeg',
    'https://www.pcclean.io/wp-content/gallery/birds/331335.jpg',
    'https://th.bing.com/th/id/R.0507121a40ac880c760cefc47212a211?rik=HglB2hIaJvwYYw&riu=http%3a%2f%2fcdn130.picsart.com%2f248304754020202.jpg&ehk=x5A8ZpA%2flRUVhUql4JQuuCCxlcIfqpnEX223zn0Amk0%3d&risl=&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/OIP.gnIVmCY09Uugf2wmep4qkAHaEo?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/OIP.2qLBMowaNBPL7LmPbTW_6gHaEo?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/R.f066f5bce3dba130e460651611a7f1d2?rik=M%2bAtPMF7dCZbuA&riu=http%3a%2f%2fwww.itravelto.com%2fimages%2flazy-lion-okavango-michael-poliza-1232x824.jpg%3ft%3d1590441703&ehk=kKNDFv6O3ErMV%2bCHH9YE1dE%2fUniKDMNoAO7yjaDdgZw%3d&risl=&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/OIP.o7N6ZxVke7CphwB_phXwNgHaE7?pid=ImgDet&rs=1',
    

    
];

//closeall

   
//This is correct. ✔
btn_ref.addEventListener('click', showImages);

function showImages() {
    var container_ref = document.getElementById("gallery_container");

    container_ref.innerText = "";
    
    for(var i = 0; i < img_arr.length; i = i + 1) {
        var img_ref = document.createElement("img");
        img_ref.src = img_arr[i];
        img_ref.addEventListener('click', imageClicked);

        container_ref.appendChild(img_ref);
    }
}  
function imageClicked(event) {
    var img_prev_r = document.getElementById("img_preview");
    img_prev_r.classList.remove("d-none");
    //classList.add("class_name");
    
    var img_r = img_prev_r.children[0];

    // img_r.src = img_arr[3];
    img_r.src = event.target.src;
    // console.log();

}
//closeall

   
//This is correct. ✔
btn_ref.addEventListener('click', showImages);

function showImages() {
    var container_ref = document.getElementById("gallery_container");

    container_ref.innerText = "";
    
    for(var i = 0; i < img_arr.length; i = i + 1) {
        var img_ref = document.createElement("img");
        img_ref.src = img_arr[i];
        img_ref.addEventListener('click', imageClicked);

        container_ref.appendChild(img_ref);
    }
}  
function imageClicked(event) {
    var img_prev_r = document.getElementById("img_preview");
    img_prev_r.classList.remove("d-none");
    //classList.add("class_name");
    
    var img_r = img_prev_r.children[0];

    // img_r.src = img_arr[3];
    img_r.src = event.target.src;
    // console.log();

}



//close all
var button = document.getElementById('close');
function closeWin() {
    button.loadimages.close();
  }

    
