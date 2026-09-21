(function(){
  const section=document.querySelector("[data-academic-map]");
  if(!section) return;
  const tooltip=section.querySelector(".map-tooltip");
  const dots=[...section.querySelectorAll(".city-dot")];
  let animated=false;
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting&&!animated){
        animated=true;
        section.querySelectorAll(".route").forEach((r,i)=>setTimeout(()=>r.classList.add("draw"),i*140));
      }
    });
  },{threshold:.3});
  observer.observe(section);
  function showTooltip(dot,evt){
    const zh=document.body.classList.contains("lang-zh");
    const title=zh?dot.dataset.titleZh:dot.dataset.titleEn;
    const meta=zh?dot.dataset.metaZh:dot.dataset.metaEn;
    tooltip.innerHTML=`<strong>${title}</strong><div style="margin-top:6px;color:#667985;font-size:.9rem">${meta}</div>`;
    tooltip.style.display="block";
    const rect=section.getBoundingClientRect();
    tooltip.style.left=Math.min(evt.clientX-rect.left+16,rect.width-330)+"px";
    tooltip.style.top=(evt.clientY-rect.top+16)+"px";
  }
  dots.forEach(dot=>{
    dot.addEventListener("mouseenter",e=>showTooltip(dot,e));
    dot.addEventListener("mousemove",e=>showTooltip(dot,e));
    dot.addEventListener("mouseleave",()=>tooltip.style.display="none");
  });
})();
