document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click",e=>{
    const id=a.getAttribute("href");
    if(!id||id==="#") return;
    const el=document.querySelector(id);
    if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth",block:"start"});}
  });
});
document.querySelectorAll("[data-coming-soon]").forEach(el=>{
  el.addEventListener("click",e=>{
    e.preventDefault();
    alert(document.body.classList.contains("lang-zh")?"完整履歷 PDF 即將上線。":"Curriculum Vitae PDF coming soon.");
  });
});
