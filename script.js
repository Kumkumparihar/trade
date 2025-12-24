
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header-container").innerHTML = data;

    setTimeout(() => {
      const header = document.getElementById("site-header");
      const spacer = document.getElementById("header-spacer");

      if(header && spacer){
        spacer.style.height = header.offsetHeight + "px";
      }
    }, 100);
  });

window.addEventListener("resize", () => {
  const header = document.getElementById("site-header");
  const spacer = document.getElementById("header-spacer");
  if(header && spacer){
    spacer.style.height = header.offsetHeight + "px";
  }
});
