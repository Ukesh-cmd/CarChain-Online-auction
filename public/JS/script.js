
function showElement(elementId) {
    var elements = ['product', 'category', 'user', 'dashboard', 'order'];
    for (var i = 0; i < elements.length; i++) {
        var element = document.getElementById(elements[i]);
        if (elements[i] === elementId) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none'; 
        }
    }
}