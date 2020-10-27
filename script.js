resize(".resizable")
function resize(element) {
  let elementName = element;
  let childName = elementName + ">.resizer";
  let resizable = document.querySelector(elementName)
  let resizer = document.querySelectorAll(".resizer")
  let selected;
  resizable.addEventListener("click", select)
  function select() {
    /*For Border*/
    selected = true;
    resizable.style.border = "4px #1E8BC3 solid"
    resizer.forEach((item) => {
      item.style.display = "block"
      resizable.appendChild(item)
    });

    //draging for mouse click
    resizable.addEventListener("mousedown", cursorDown)
    function cursorDown() {
      window.addEventListener("mousemove", drag)
    }
    resizable.addEventListener("mouseup", cursorUp)
    function cursorUp() {
      window.removeEventListener("mousemove", drag);
    }
    function drag(event) {
      resizable.style.top = event.pageY + "px";
      resizable.style.left = event.pageX + "px";
    }
    /*//resizing
    console.log(resizer)
    resizer.forEach(elemet=>{
      elemet.addEventListener("mousedown",resizerDown)
      wi.addEventListener('mouseup',resizerUp)
      let x1,x2,y1,y2;
      function resizerDown(event){
      }
      function resizerUp(){
        window.removeEventListener("mousemove",onMove)
      }
      function onMove(event){

      }
      elemet.addEventListener("mouseup",resizerUp)
      function resizerUp(event){
        console.log(event.pageX+"px "+event.pageY+"px ")
        
      }
    })
    */
    //deselecting 
    document.addEventListener('keydown', esc);
    function esc(event) {
      console.log(event.code)
      if (event.code == "Escape") {
        selected = false;
        let elementChild = document.querySelectorAll(childName);
        console.log(elementChild)
        elementChild.forEach(element => { element.remove(); });
        console.log(elementChild)
        resizable.style.border = "none";
      }
    }
    if (!selected)
      return;

  }
}