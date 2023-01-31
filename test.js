const  bbb = document.createElement('div');
const btnList = document.getElementsByTagName('button');
// const customBtnList = [];
if(btnList.length) {

  for(let i=0;i<btnList.length;i++){
    if(!btnList[i].innerText) {
      continue;
    }
    const btn = document.createElement('button');
    btn.innerText = btnList[i].innerText;
    btn.style = btnList[i].style;
    btn.className = btnList[i].className
    btn.addEventListener('click',() =>{
      
      btnList[i].scrollIntoView({behavior: 'smooth',block:'center',inline:'start'})
    })
    bbb.appendChild(btn);
  }
bbb.draggable = true
  bbb.style='position:fixed; right:0;top:69px;z-index:299;display:flex;max-width:500px;flex-wrap:wrap;gap:10px;padding:20px 30px;background:#eeeff2;'

  bbb.addEventListener('dragover',(e)=>{
   bbb.style.top=e.x + 'px'
   bbb.style.left=e.y + 'px'
  })
  document.getElementsByTagName('body')[0].appendChild(bbb)
}





