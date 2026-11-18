var WA="919500378989"; // country code + number, no + or spaces
var S=[
["pop","hair","Hair Cutting","கட்டிங் மட்டும்",150],
["pop","combo","Hair Cutting & Shaving","கட்டிங் சேவிங்",250],
["pop","combo","Hair Cutting & Beard Setting","கட்டிங் / தாடி ஒதுக்குதல்",280],
["","hair","Model Cutting","மாடல் கட்டிங்",200],
["","hair","Shaving Side","சேவிங் சைடு",120],
["","hair","Hair Dryer","ஹேர் டிரையர்",50],
["pop","beard","Shaving","சேவிங் மட்டும்",100],
["pop","beard","Beard Trimming Only","தாடி டிரிம்மிங் மட்டும்",100],
["","beard","Beard Setting","தாடி ஒதுக்குதல்",130],
["","hair","Head Shaving Only","மொட்டை மட்டும்",300],
["","combo","Head Shaving & Shaving","மொட்டை மற்றும் சேவிங்",400],
["pop","kids","Boys Cutting","சிறுவர் கட்டிங்",130],
["","kids","Baby Cutting","பேபி கட்டிங்",200],
["","kids","Baby Head Shaving","குழந்தை மொட்டை",501],
["","colour","Hair Dye Only","ஹேர் டை மட்டும்",200],
["","combo","Cutting, Shaving & Hair Dye","கட்டிங் சேவிங் / ஹேர் டை",450],
["","colour","Highlights – Single colour","ஹேர் ஹைலைட்ஸ் கலர் : சிங்கிள்",150],
["","colour","Highlights – Multi colour","ஹேர் ஹைலைட்ஸ் கலர் : மல்டி",300],
["","skin","Facial (starting)","ஃபேசியல்",1000,"1,000 – 2,500"],
["","skin","Face Wash","ஃபேஸ் வாஷ்",300],
["","skin","Head Massage","ஹெட் மசாஜ்",200],
["","combo","Cut, Shave, Hair Dye & Face Cleanup","கட்டிங், சேவிங், ஹேர் டை, ஃபேஸ் கிளீன்அப்",700],
["","combo","Cut, Shave & Face Cleanup (no dye)","கட்டிங், சேவிங், ஃபேஸ் கிளீன்அப்",500],
["","bridal","Gun Shot (Ear Piercing – 1)","கன் ஷாட் (காது குத்துதல்)",150],
["","bridal","Bridal Makeup – Male","திருமண மேக்கப் (ஆண்கள்)",3500],
["","bridal","Bridal Makeup – Female","திருமண மேக்கப் (பெண்கள்)",5000]];
var $=function(s){return document.querySelector(s)},$$=function(s){return [].slice.call(document.querySelectorAll(s))};
var sel=[];try{sel=JSON.parse(sessionStorage.getItem("vhl")||"[]")}catch(e){}
function save(){try{sessionStorage.setItem("vhl",JSON.stringify(sel))}catch(e){}}
function items(){return sel.map(function(i){return S[i]}).filter(Boolean)}
function total(){return items().reduce(function(a,x){return a+x[4]},0)}
function pl(x){return "₹"+(x[5]||x[4])}function tot(){return "₹"+total()+(items().some(function(x){return x[5]})?"+":"")}function msgList(){return items().map(function(x){return x[2]+" ("+pl(x)+")"}).join(", ")}
document.documentElement.classList.add("js");
/* reveal */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.1});$$(".r").forEach(function(e){io.observe(e)});
var tray=$(".tray");
function paint(){var n=sel.length;if(tray){tray.classList.toggle("on",n>0);document.body.classList.toggle("ht",n>0);$("#tn").textContent=n+" selected · "+tot();$("#tl").textContent=items().map(function(x){return x[2]}).join(", ")}
 $$(".card").forEach(function(c){var on=sel.indexOf(+c.dataset.i)>-1;c.classList.toggle("on",on);c.querySelector(".ad").textContent=on?"✓ Added":"+ Add"});
 var sm=$("#sm");if(sm)sm.innerHTML=n?"<b>Your selection</b><br>"+items().map(function(x){return x[2]+" – "+pl(x)}).join("<br>")+"<br><b>Estimated total: "+tot()+"</b> · <a href='services.html'>edit</a>":"No services picked yet. <a href='services.html'>Pick services</a> or just tell us on WhatsApp."}
function toggle(i){var k=sel.indexOf(i);k>-1?sel.splice(k,1):sel.push(i);save();paint()}
var pk=$("#picker");
if(pk){var pop=pk.hasAttribute("data-pop");S.forEach(function(x,i){if(pop&&x[0]!=="pop")return;var d=document.createElement("div");d.className="card"+(x[1]==="combo"?" combo":"");d.dataset.i=i;d.dataset.c=x[1];d.innerHTML="<h3>"+x[2]+"</h3><p lang='ta'>"+x[3]+"</p><div class='f'><span class='pr'>"+pl(x)+"</span><span class='ad'>+ Add</span></div>";d.onclick=function(){toggle(i)};pk.appendChild(d)});
 $$(".tab[data-f]").forEach(function(b){b.onclick=function(){$$(".tab[data-f]").forEach(function(t){t.classList.remove("on")});b.classList.add("on");$$(".card").forEach(function(c){c.hidden=!(b.dataset.f==="all"||c.dataset.c===b.dataset.f)})}})}
function wa(t){return "https://wa.me/"+WA+"?text="+encodeURIComponent(t)}
$$(".walink").forEach(function(a){a.href=wa("Hi Vinod Hair Lines, I’d like to know more.")});
if(tray){$("#tx").onclick=function(){sel=[];save();paint()};$("#tw").onclick=function(){window.open(wa("Hi Vinod Hair Lines! I’d like to book:\n"+msgList()+"\nEstimated total: "+tot()),"_blank")}}
paint();
/* open / closed */
var d=new Date(Date.now()+new Date().getTimezoneOffset()*60000+19800000),h=d.getHours()+d.getMinutes()/60,hol=d.getDay()===2&&d.getDate()+7>new Date(d.getFullYear(),d.getMonth()+1,0).getDate(),op=!hol&&h>=7.5&&h<21.5;
$$(".st").forEach(function(e){e.classList.toggle("open",op);e.textContent=hol?"Closed today · monthly holiday":op?"Open now · till 9:30 pm":"Closed · opens 7:30 am"});
/* menu */
var hd=$(".top");$(".bur").onclick=function(){hd.classList.toggle("o")};
/* gallery */
var gi=$$(".gi"),lb=$(".lb"),li=0;
if(lb){function show(n){var v=gi.filter(function(g){return !g.hidden});li=(n+v.length)%v.length;$(".lb img").src=v[li].dataset.big;lb.classList.add("on");lb._v=v}
 gi.forEach(function(g){g.onclick=function(){show(gi.filter(function(x){return !x.hidden}).indexOf(g))}});
 $(".lb .c").onclick=function(){lb.classList.remove("on")};$(".lb .p").onclick=function(){show(li-1)};$(".lb .n").onclick=function(){show(li+1)};
 lb.onclick=function(e){if(e.target===lb)lb.classList.remove("on")};
 addEventListener("keydown",function(e){if(!lb.classList.contains("on"))return;if(e.key==="Escape")lb.classList.remove("on");if(e.key==="ArrowLeft")show(li-1);if(e.key==="ArrowRight")show(li+1)});
 $$(".tab[data-g]").forEach(function(b){b.onclick=function(){$$(".tab[data-g]").forEach(function(t){t.classList.remove("on")});b.classList.add("on");gi.forEach(function(g){g.hidden=!(b.dataset.g==="all"||g.dataset.c===b.dataset.g)})}})}
/* booking */
var f=$("#f");if(f){var dt=f.elements.d;dt.min=new Date().toISOString().split("T")[0];
 f.onsubmit=function(e){e.preventDefault();var s=f.querySelector("[name=t]:checked");window.open(wa("Hi Vinod Hair Lines! I’d like to book.\nName: "+f.elements.n.value+"\nServices: "+(sel.length?msgList()+" | Est. "+tot():"to be discussed")+"\nDate: "+f.elements.d.value+"\nTime: "+(s?s.value:"any")),"_blank")}}
