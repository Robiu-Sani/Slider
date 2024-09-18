const class1 = document.querySelector(".slider-pic1"),
class2 = document.querySelector(".slider-pic2"),
class3 = document.querySelector(".slider-pic3"),
class4 = document.querySelector(".slider-pic4"),
leftBtn = document.querySelector(".leftbtn"),
rightBtn = document.querySelector(".rightbtn");

const slide = [class1,class2,class3,class4];

slide[0].classList.add("active");

var x = 0;
setInterval(function(){
   if(x == slide.length-1){
      x = 0;
      slide[0].classList.add("active");
      slide[3].classList.remove("active");
   }else{
      x++;
      a=slide[x];
      if(a==slide[1]){
         slide[1].classList.add("active");
         slide[0].classList.remove("active");
      }else if(a==slide[2]){
         slide[2].classList.add("active");
         slide[1].classList.remove("active");
      }else{
         slide[3].classList.add("active");
         slide[2].classList.remove("active");
      }
   }   
},5000);

leftBtn.addEventListener("click",function(){
    if(x == 0){
        x = slide.length-1;
       slide[3].classList.add("active");
       slide[0].classList.remove("active");
    }else{
        x--;
        a=slide[x];
        if(a==slide[1]){
           slide[1].classList.add("active");
           slide[2].classList.remove("active");
        }else if(a==slide[2]){
           slide[2].classList.add("active");
           slide[3].classList.remove("active");
        }else{
           slide[0].classList.add("active");
           slide[1].classList.remove("active");
        }
    }   
});

rightBtn.addEventListener("click",function(){
   if(x == slide.length-1){
      x = 0;
     slide[0].classList.add("active");
     slide[3].classList.remove("active");
  }else{
      x++;
      a=slide[x];
      if(a==slide[1]){
         slide[1].classList.add("active");
         slide[0].classList.remove("active");
      }else if(a==slide[2]){
         slide[2].classList.add("active");
         slide[1].classList.remove("active");
      }else{
         slide[3].classList.add("active");
         slide[2].classList.remove("active");
      }
  }  
});