(function(){
  const KEY="pingl-ai-lab-language";
  const body=document.body;
  const button=document.getElementById("langToggle");
  function browserPref(){
    const l=(navigator.language||"en").toLowerCase();
    return l.startsWith("zh") ? "zh" : "en";
  }
  function apply(lang){
    body.classList.toggle("lang-zh",lang==="zh");
    document.documentElement.lang=lang==="zh"?"zh-Hant":"en";
    if(button) button.textContent=lang==="zh"?"EN":"中文";
    localStorage.setItem(KEY,lang);
  }
  apply(localStorage.getItem(KEY)||browserPref());
  if(button){
    button.addEventListener("click",()=>apply(body.classList.contains("lang-zh")?"en":"zh"));
  }
})();
