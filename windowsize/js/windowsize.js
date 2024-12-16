"use script";

onload = function getsize()
{
    let w = this.document.documentElement.clientWidth
    let h = this.document.documentElement.clientHeight
    this.document.getElementById('wh').innerHTML = "<h1> width: " + w + "<br   />" +"Height" + h + "</h1>"
    window.addEventListener('resize', getsize);
}
