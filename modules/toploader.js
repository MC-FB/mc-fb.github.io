function loadModules() {
    topBarLoad();
    navBarLoad();
}
function topBarLoad() {
    var title = document.getElementById("title")
    title.innerHTML = '<div id="logoContainer">\
                            <img id="socLogo" src="../images/logo.png">\
                        </div>\
                        <div id="titleContainer">\
                            <h1 id="socName">Marco Cheng</h1>\
                        </div>'
}

function navBarLoad() {
    var navBar = document.getElementsByClassName("navbar")[0]
    navBar.innerHTML = `<nav class="navbar" role="navigation">\ 
                            <ul class="main-menu">\ 
                            <li class="menu-item has-dropdown" aria-haspopup="true">\ 
                                <a href="./home.html">Home</a>\ 
                                <ul class="dropdown-menu">\ 
                                <li class="submenu-item"><a href="./home.html#Hello">Hello</a></li>\ 
                                </ul>\ 
                            </li>\ 
                            
                            <li class="menu-item has-dropdown" aria-haspopup="true">\ 
                                <a href="./.html">Coming Soon</a>\ 
                                <ul class="dropdown-menu">\ 
                                <li class="submenu-item"><a href="./.html">Coming Soon</a></li>\ 
                                </ul>\ 
                            </li>\ 
                            <li class="menu-item"><a href="./LibColl.html">Library Collection</a></li>\ 
                            <li class="menu-item"><a href="#">More Coming Soon!</a></li>\ 
                            </ul>\ 
                            <!-- AI Resources in HKU -->
                            
                        </nav>`






}

