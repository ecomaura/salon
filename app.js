
// Set your number here (country code + number, no + or spaces)
var WA="919999999999";
var S=[
["m","Haircut","Classic, fade or scissor cut",150],
["m","Beard trim & shaping","Includes hot towel finish",100],
["m","Hair spa","Deep conditioning with scalp massage",500],
["m","Global colour","Ammonia-free options available",800],
["m","Head massage","20 minutes, oil of your choice",150],
["w","Haircut & blow-dry","Trim, layers, or a full restyle",400],
["w","Hair colour / highlights","Root touch-up to full balayage",1200],
["w","Keratin / smoothening","Price varies with hair length",3500],
["w","Hair spa","Repair and shine treatment",800],
["w","Threading & waxing","Eyebrows, upper lip, full arms and legs",60],
["s","Cleanup","Quick refresh for tired skin",400],
["s","Facial","Choose from fruit, gold or de-tan",800],
["s","Manicure / pedicure","Soak, scrub, shape and polish",600],
["s","Bridal package","Makeup, hair and draping – consult first",9000]
];
var menu=document.getElementById("menu"),svc=document.getElementById("svc"),dm=document.createElement("div");menu=menu||dm;svc=svc||dm;
S.forEach(function(x){
 var d=document.createElement("div");d.className="item";d.dataset.g=x[0];
 d.innerHTML='<div><strong>'+x[1]+'</strong><span>'+x[2]+'</span></div><span class="p">₹'+x[3]+(x[3]<100||x[1].indexOf("Bridal")>-1||x[1].indexOf("Keratin")>-1||x[1].indexOf("colour")>-1?'+':'')+'</span><a class="bk" href="'+(document.getElementById("f")?"#book":"contact.html?s="+encodeURIComponent(x[1])+"#book")+'" data-s="'+x[1]+'">Book</a>';
 menu.appendChild(d);
 var o=document.createElement("option");o.textContent=x[1];svc.appendChild(o);
});
menu.addEventListener("click",function(e){var s=e.target.dataset&&e.target.dataset.s;if(s)svc.value=s});
document.querySelectorAll(".tab").forEach(function(b){b.onclick=function(){
 document.querySelectorAll(".tab").forEach(function(t){t.classList.remove("on")});b.classList.add("on");
 var f=b.dataset.f;document.querySelectorAll(".item").forEach(function(i){i.hidden=!(f==="all"||i.dataset.g===f)});
}});
var q=new URLSearchParams(location.search).get("s");if(q)svc.value=q;
document.getElementById("wa").href="https://wa.me/"+WA+"?text="+encodeURIComponent("Hi Vinod Hair Lines, I’d like to know more about your services.");
(document.querySelector("[name=d]")||{}).min=new Date().toISOString().split("T")[0];
(document.getElementById("f")||{}).onsubmit=function(e){
 e.preventDefault();var f=e.target;
 var m="Hi Vinod Hair Lines! I’d like to book.\nName: "+f.n.value+"\nService: "+f.s.value+"\nFor: "+f.g.value+"\nDate: "+f.d.value+"\nTime: "+f.t.value;
 window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(m),"_blank");
};
