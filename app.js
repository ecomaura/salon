var WA="919999999999"; // country code + number, no + or spaces
var S=[["m","Haircut","Classic, fade or scissor cut",150],["m","Beard styling","Shape-up with hot towel finish",100],["m","Hair spa","Deep conditioning with scalp massage",500],["m","Global colour","Ammonia-free options available",800],["m","Head massage","20 minutes, oil of your choice",150],["w","Haircut & blow-dry","Trim, layers or a full restyle",400],["w","Colour & highlights","Root touch-up to full balayage",1200],["w","Keratin smoothening","Price varies with hair length",3500],["w","Hair spa","Repair and shine treatment",800],["w","Threading & waxing","Brows, upper lip, arms and legs",60],["s","Cleanup","A quick refresh for tired skin",400],["s","Facial","Fruit, gold or de-tan",800],["s","Manicure & pedicure","Soak, scrub, shape and polish",600],["s","Bridal package","Makeup, hair and draping, after a consult",9000]];
var $=function(s){return document.querySelector(s)},$$=function(s){return [].slice.call(document.querySelectorAll(s))};
var nav=$(".nav");function sc(){nav.classList.toggle("s",scrollY>40)}sc();addEventListener("scroll",sc,{passive:true});
$(".bur").onclick=function(){nav.classList.toggle("o")};
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
$$(".r").forEach(function(e){io.observe(e)});
var menu=$("#menu"),svc=$("#svc");
if(svc){S.forEach(function(x){var o=document.createElement("option");o.textContent=x[1];svc.appendChild(o)});var q=new URLSearchParams(location.search).get("s");if(q)svc.value=q}
if(menu){S.forEach(function(x,i){var d=document.createElement("div");d.className="row";d.dataset.g=x[0];
 d.innerHTML='<span class="n">'+(i<9?"0":"")+(i+1)+'</span><strong>'+x[1]+'</strong><span class="d">'+x[2]+'</span><span class="p">₹'+x[3]+(x[3]>=1200||x[3]<100?"+":"")+'</span><a class="bk" href="contact.html?s='+encodeURIComponent(x[1])+'#book">Book</a>';menu.appendChild(d)});
 $$(".tab").forEach(function(b){b.onclick=function(){$$(".tab").forEach(function(t){t.classList.remove("on")});b.classList.add("on");$$(".row").forEach(function(r){r.hidden=!(b.dataset.f==="all"||r.dataset.g===b.dataset.f)})}})}
$$(".walink").forEach(function(a){a.href="https://wa.me/"+WA+"?text="+encodeURIComponent("Hi Vinod Hair Lines, I’d like to know more about your services.")});
var dt=$("[name=d]");if(dt)dt.min=new Date().toISOString().split("T")[0];
var f=$("#f");if(f)f.onsubmit=function(e){e.preventDefault();var m="Hi Vinod Hair Lines! I’d like to book.\nName: "+f.n.value+"\nService: "+f.s.value+"\nFor: "+f.g.value+"\nDate: "+f.d.value+"\nTime: "+f.t.value;window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(m),"_blank")};
var qs=$$(".q"),dots=$$(".dots i"),qi=0;function show(n){qi=n;qs.forEach(function(x,i){x.classList.toggle("on",i===n)});dots.forEach(function(x,i){x.classList.toggle("on",i===n)})}
if(qs.length){show(0);dots.forEach(function(d,i){d.onclick=function(){show(i)}});setInterval(function(){show((qi+1)%qs.length)},6000)}
