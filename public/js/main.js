(()=>{const e=document.querySelector(".header__navigation"),n=(document.querySelector(".header__links"),document.querySelector(".loginBtnContainer")),o=document.querySelector(".header__container"),t=document.querySelector(".header__buttonsContainer"),r=document.querySelector("#menuIcon"),c=document.querySelector("#exitIcon"),d=document.querySelector(".overlay"),i=document.querySelector(".menuMobile"),a=document.querySelector("main"),u=document.querySelector(".footer__discoverKits"),s=document.querySelector("#firstPartOfLinks"),m=document.querySelector("#secondPartOfLinks"),l=document.querySelector(".footer__socials"),p=document.querySelector("#inputWithButtonSmall"),v=document.querySelector(".footer__bottom"),y=(document.querySelector(".footer__span"),document.querySelector(".footer__linksContainer")),S=document.querySelector(".footer__container");function _(){window.screen.width<=580?(a.contains(d)&&d.remove(),o.contains(e)&&t.contains(n)&&(e.remove(),n.remove(),i.append(e),i.append(n),o.contains(r)||o.prepend(r))):(o.contains(r)&&r.remove(),a.contains(d)&&d.remove(),o.contains(e)||t.contains(n)||(e.remove(),n.remove(),o.prepend(e),t.append(n),o.contains(r)&&r.remove()))}function q(){window.screen.width<=580?(y.contains(s)&&s.remove(),S.contains(u)&&u.remove(),v.contains(p)&&p.remove(),v.contains(l)&&l.remove(),y.contains(m)&&m.remove(),S.contains(y)&&y.remove(),v.prepend(m),S.append(l),S.append(p)):(v.contains(m)&&m.remove(),S.contains(l)&&l.remove(),S.contains(p)&&p.remove(),S.contains(y)||S.contains(u)||(S.append(y),S.append(u),y.append(m),y.append(s)),v.contains(l)||v.contains(y)||(v.append(p),v.prepend(l)))}function w(e){e.preventDefault(),"Escape"===e.key&&f()}function f(){document.body.style.overflow="scroll",d.remove(),document.removeEventListener("keydown",w)}window.addEventListener("DOMContentLoaded",_),window.addEventListener("DOMContentLoaded",q),r.addEventListener("click",(function(){d.style.zIndex="1000",document.body.style.overflow="hidden",a.prepend(d),document.addEventListener("keydown",w)})),c.addEventListener("click",f),window.addEventListener("resize",_),window.addEventListener("resize",q)})();