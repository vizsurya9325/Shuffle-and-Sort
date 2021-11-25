const container = document.getElementById("ss_card_container");
const div = container.getElementsByClassName('ss-cards');


// Shuffle Function

function shuffle() {
    
    var elementsArray = Array.prototype.slice.call(div);
      elementsArray.forEach(function(element){
        container.removeChild(element);
    })
    shuffleMethod(elementsArray);
    elementsArray.forEach(function(element){
    container.appendChild(element);
  })
  }

  function shuffleMethod(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// Shuffle Function

function sortingDiv(){
    var divitems = [];
    for (i = 0; i < div.length; i++) {
        divitems.push(div[i]);
    }
    sorting(divitems);
    divitems.forEach(function(element){
        container.appendChild(element);
      })
}

function sorting(divitems){
    divitems.sort(function(a,b){
      var aVal = a.innerText.trim();
      var bVal = b.innerText.trim();
      return (aVal < bVal) ? -1 : (aVal > bVal) ? 1 : 0;
    });
}