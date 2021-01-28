let filter = document.getElementById('filterInput');
filter.addEventListener('keyup', abc);


function abc() {
  let filterVlaue = document.getElementById('filterInput').value.toUpperCase();
  let li = document.querySelectorAll('.collection-item');

  for (let i = 0; i < li.length; i++) {
    let a = li[i].querySelectorAll("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filterVlaue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }

  }
}