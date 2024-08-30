let x = 0;
        
openMenu.onclick = OpenMenu; 
function OpenMenu(){  
    if(x == 0){
        mobileNav.style.transform = "scaleX(1)";
        openMenu.innerHTML = "<i class=\"fa fa-close\"></i>"
        ++x
    }
    else if (x == 1){
        mobileNav.style.transform = "scaleX(0)";
        openMenu.innerHTML = "<i class=\"bx bx-menu\"></i>" 
        --x
    }    
        }        
AOS.init()