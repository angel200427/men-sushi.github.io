document.addEventListener("DOMContentLoaded", ()=>{

/* ================= PROMOS POR DIA ================= */
const dia = new Date().getDay();

const dias = {
2:"promo-martes",
3:"promo-miercoles",
4:"promo-jueves",
5:"promo-viernes"
};

const clase = dias[dia];

const slides = document.querySelectorAll(".slide");

slides.forEach(s=>{
if(!s.classList.contains(clase)){
s.style.display="none";
}
});

const visibles = document.querySelectorAll("."+clase);

let index=0;
const contenedor = document.querySelector(".slider-contenedor");

function mover(){
contenedor.style.transform=`translateX(-${index*100}%)`;
}

/* FLECHAS */
const izq = document.querySelector(".izquierda");
const der = document.querySelector(".derecha");

if(visibles.length<=1){
izq.style.display="none";
der.style.display="none";
}

der.onclick=()=>{
index=(index+1)%visibles.length;
mover();
}

izq.onclick=()=>{
index=(index-1+visibles.length)%visibles.length;
mover();
}

/* ================= ZOOM IMAGEN ================= */
const modal = document.getElementById("modal");
const imgModal = document.getElementById("imgModal");

document.querySelectorAll("img").forEach(img=>{
img.addEventListener("click", ()=>{
imgModal.src = img.src;
modal.style.display="flex";
});
});

modal.onclick=()=> modal.style.display="none";

/* ================= BOTON ROLLOS ================= */
const btn = document.getElementById("toggleMenu");


btn.onclick=()=>{
menu.style.display = menu.style.display==="block" ? "none":"block";
};

/* ================= PETALOS ================= */
const petalos = document.getElementById("petalos");

setInterval(()=>{
const p = document.createElement("span");
p.style.left = Math.random()*100+"%";
p.style.animationDuration = (3+Math.random()*5)+"s";
petalos.appendChild(p);

setTimeout(()=>p.remove(),8000);
},300);

});// ZOOM IMAGENES
document.querySelectorAll(".img-plato").forEach(img => {
  img.addEventListener("click", () => {
    img.classList.toggle("zoom");
  });
});
/* ===== BOTON ROLLOS ===== */
const btn = document.getElementById("toggleMenu");
const menu = document.getElementById("menuContent");

btn.onclick=()=>{
menu.style.display = menu.style.display==="block" ? "none":"block";
};

