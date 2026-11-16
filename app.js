var WA="919999999999"; // country code + number, no + or spaces
var S=[
["pop","hair","Haircut","Scissor cut or clipper cut, finished clean",150],
["pop","hair","Fade / skin fade","Sharp taper with a crisp neckline",200],
["","hair","Kids haircut","For boys under 12",120],
["","hair","Hair colour","Global colour or grey cover",600],
["","hair","Hair spa","Deep conditioning and scalp massage",500],
["pop","beard","Beard trim","Length control and clean edges",100],
["pop","beard","Beard styling","Full shape-up with hot towel",150],
["","beard","Clean shave","Hot towel, razor, aftershave",100],
["","beard","Beard colour","Even, natural-looking cover",250],
["","skin","Cleanup","Quick refresh for tired skin",400],
["","skin","Facial","De-tan, fruit or charcoal",600],
["","skin","Head massage","20 minutes, oil of your choice",150],
["pop","combo","Haircut + Beard","The weekly regular",230],
["","combo","Groom package","Haircut, beard, facial and hair spa",2500],
["","combo","Dad + Son","Two haircuts, one visit",270],
["","wk","Women’s haircut","Trim, layers or blow-dry",400],
["","wk","Threading","Eyebrows and upper lip",60]];
var $=function(s){return document.querySelector(s)},$$=function(s){return [].slice.call(document.querySelectorAll(s))};
var sel=[];try{sel=JSON.parse(sessionStorage.getItem("vhl")||"[]")}catch(e){}
function save(){try{sessionStorage.setItem("vhl",JSON.stringify(sel))}catch(e){}}
function items(){return sel.map(function(i){return S[i]}).filter(Boolean)}
function total(){return items().reduce(function(a,x){return a+x[4]},0)}
function msgList(){return items().map(function(x){return x[2]+" (₹"+x[4]+")"}).join(", ")}
var tray=$(".tray");
function paint(){var n=sel.length;if(tray){tray.classList.toggle("on",n>0);document.body.classList.toggle("ht",n>0);$("#tn").textContent=n+" selected · ₹"+total();$("#tl").textContent=items().map(function(x){return x[2]}).join(", ")}
 $$(".card").forEach(function(c){var on=sel.indexOf(+c.dataset.i)>-1;c.classList.toggle("on",on);c.querySelector(".ad").textContent=on?"✓ Added":"+ Add"});
 var sm=$("#sm");if(sm)sm.innerHTML=n?"<b>Your selection</b><br>"+items().map(function(x){return x[2]+" – ₹"+x[4]}).join("<br>")+"<br><b>Estimated total: ₹"+total()+"</b> · <a href='services.html'>edit</a>":"No services picked yet. <a href='services.html'>Pick services</a> or just tell us on WhatsApp."}
function toggle(i){var k=sel.indexOf(i);k>-1?sel.splice(k,1):sel.push(i);save();paint()}
var pk=$("#picker");
if(pk){var pop=pk.hasAttribute("data-pop");S.forEach(function(x,i){if(pop&&x[0]!=="pop")return;var d=document.createElement("div");d.className="card"+(x[1]==="combo"?" combo":"");d.dataset.i=i;d.dataset.c=x[1];d.innerHTML="<h3>"+x[2]+"</h3><p>"+x[3]+"</p><div class='f'><span class='pr'>₹"+x[4]+"</span><span class='ad'>+ Add</span></div>";d.onclick=function(){toggle(i)};pk.appendChild(d)});
 $$(".tab[data-f]").forEach(function(b){b.onclick=function(){$$(".tab[data-f]").forEach(function(t){t.classList.remove("on")});b.classList.add("on");$$(".card").forEach(function(c){c.hidden=!(b.dataset.f==="all"||c.dataset.c===b.dataset.f)})}})}
function wa(t){return "https://wa.me/"+WA+"?text="+encodeURIComponent(t)}
$$(".walink").forEach(function(a){a.href=wa("Hi Vinod Hair Lines, I’d like to know more.")});
if(tray){$("#tx").onclick=function(){sel=[];save();paint()};$("#tw").onclick=function(){window.open(wa("Hi Vinod Hair Lines! I’d like to book:\n"+msgList()+"\nEstimated total: ₹"+total()),"_blank")}}
paint();
/* open / closed */
var d=new Date(),h=d.getHours()+d.getMinutes()/60,close=d.getDay()===0?19:21,op=h>=10&&h<close;
$$(".st").forEach(function(e){e.classList.toggle("open",op);e.textContent=op?"Open now · till "+(close-12)+" pm":"Closed · opens 10 am"});
/* menu */
var hd=$(".top");$(".bur").onclick=function(){hd.classList.toggle("o")};
/* reveal */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.1});$$(".r").forEach(function(e){io.observe(e)});
/* gallery */
var gi=$$(".gi"),lb=$(".lb"),li=0;
if(lb){function show(n){var v=gi.filter(function(g){return !g.hidden});li=(n+v.length)%v.length;$(".lb img").src=v[li].dataset.big;lb.classList.add("on");lb._v=v}
 gi.forEach(function(g){g.onclick=function(){show(gi.filter(function(x){return !x.hidden}).indexOf(g))}});
 $(".lb .c").onclick=function(){lb.classList.remove("on")};$(".lb .p").onclick=function(){show(li-1)};$(".lb .n").onclick=function(){show(li+1)};
 lb.onclick=function(e){if(e.target===lb)lb.classList.remove("on")};
 addEventListener("keydown",function(e){if(!lb.classList.contains("on"))return;if(e.key==="Escape")lb.classList.remove("on");if(e.key==="ArrowLeft")show(li-1);if(e.key==="ArrowRight")show(li+1)});
 $$(".tab[data-g]").forEach(function(b){b.onclick=function(){$$(".tab[data-g]").forEach(function(t){t.classList.remove("on")});b.classList.add("on");gi.forEach(function(g){g.hidden=!(b.dataset.g==="all"||g.dataset.c===b.dataset.g)})}})}
/* booking */
var f=$("#f");if(f){var dt=f.d;dt.min=new Date().toISOString().split("T")[0];
 f.onsubmit=function(e){e.preventDefault();var s=f.querySelector("[name=t]:checked");window.open(wa("Hi Vinod Hair Lines! I’d like to book.\nName: "+f.n.value+"\nServices: "+(sel.length?msgList()+" | Est. ₹"+total():"to be discussed")+"\nDate: "+f.d.value+"\nTime: "+(s?s.value:"any")),"_blank")}}
