import domReady from 'domReady';
import {onScroll,anchorElement_outofView} from 'scroll';

domReady(() =>{

  let navigation_desktop = document.getElementById("navigation__desktop ");

  onScroll(
    (event)=>{
      //on scroll Up and Down
      anchorElement_outofView(
        document.getElementsByClassName('header__logo-box ')[0],
        document.getElementsByClassName('navigation__logo-box')[0]
      );

      if(window.scrollY  < 100){
        navigation_desktop.style.backgroundColor = "transparent";
      }
    },
    (event) =>{
      //on scrolling down
      if(navigation_desktop.classList.contains("uk-position-fixed")){
        navigation_desktop.classList.add("uk-position-absolute");
        navigation_desktop.classList.remove("uk-position-fixed");
      }
    },
    (event) =>{
      //on scrolling up
      if(navigation_desktop.classList.contains("uk-position-absolute")){
        navigation_desktop.classList.add("uk-position-fixed");
        
        if(window.scrollY  > 101){
          navigation_desktop.style.backgroundColor = "#222";
        }

        navigation_desktop.classList.remove("uk-position-absolute");
      }
    }

  );
});

