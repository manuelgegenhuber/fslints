import domReady from 'domReady';
import {onScroll,anchorElement_outofView} from 'scroll';

domReady(() =>{

  onScroll(
    (event)=>{
      //console.log(event);
      anchorElement_outofView(
        document.getElementsByClassName('header__logo-box ')[0],
        document.getElementsByClassName('navigation__logo-box')[0]
      );
    }

  );
});

