var t=document.querySelectorAll(".features__feature");document.querySelector(".features__list");var e=document.querySelector(".next-button"),n=document.querySelector(".prev-button"),a=document.getElementById("page"),c=0;t[0].style.opacity="1",e.addEventListener("click",function(){if(c!==t.length-1){n.disabled=!1,(c+=1)===t.length-1&&(e.disabled=!0);for(var o=0;o<t.length;o++)t[o].style.opacity="0",t[o].style.transform="translateX(".concat(-100*c,"%)");t[c].style.opacity="1",a.textContent="0".concat(c+1)}}),n.addEventListener("click",function(){if(0!==c){e.disabled=!1,0==(c-=1)&&(n.disabled=!0);for(var o=0;o<t.length;o++)t[o].style.opacity="0",t[o].style.transform="translateX(".concat(-100*c,"%)");t[c].style.opacity="1",a.textContent="0".concat(c+1)}});
//# sourceMappingURL=index.cd6e6a37.js.map
