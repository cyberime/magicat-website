document.addEventListener("DOMContentLoaded",()=>{

  // COUNTER SAFE
  document.querySelectorAll(".counter").forEach(el=>{
    const target = +el.dataset.target || 0;
    let c = 0;

    const run=()=>{
      if(c<target){
        c+=target/100;
        el.innerText=Math.floor(c).toLocaleString();
        requestAnimationFrame(run);
      }else el.innerText=target.toLocaleString();
    };

    if(target) run();
  });

  // CAT SAFE
  const cat=document.querySelector(".cat");
  if(cat){
    document.addEventListener("mousemove",(e)=>{
      const x=(e.clientX-window.innerWidth/2)/50;
      const y=(e.clientY-window.innerHeight/2)/50;
      cat.style.transform=`translate(${x}px,${y}px)`;
    });
  }

});
