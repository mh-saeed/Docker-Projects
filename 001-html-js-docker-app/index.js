let elem = document.getElementById("reference");
let btn = document.getElementById("btn");
let addBtn = document.getElementById("addBtn");

btn.addEventListener("click", (event) => {
  elem.innerHTML = "";
  event.preventDefault();
});
addBtn.addEventListener("click", (event) => {
  elem.innerHTML = `Icons made by
                    <a href="https://www.freepik.com" title="Freepik">Freepik</a> from
                    <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com</a>`;
  event.preventDefault();
});
