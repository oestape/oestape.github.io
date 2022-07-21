
const listItem = document.getElementById("headline");
const newItem = document.createElement('div');
newItem.innerHTML = "<a id='headline' class='navbar-brand' href='https://oestape.github.io'>Octavi Estapé's 2022 Projects</a>";
listItem.parentNode.replaceChild(newItem, listItem);