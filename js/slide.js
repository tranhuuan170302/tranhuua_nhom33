
/*biến của slide 2*/
const arrSecondaryItem = document.getElementsByClassName("child-slide");
const numberSecondaryItemActive = document.getElementsByClassName('active1').length;
const arrZone = document.getElementsByClassName("item-select");
var secondaryActive = "active1";
var activeLi = "active_li";
let btnnext = document.getElementById("btn-next1");
let btnprev = document.getElementById("btn-prev1");


/*biến của slide 3 */

const arrThirdItem = document.getElementsByClassName("child");
const numberThirdItemActive = document.getElementsByClassName('active2').length;
var ThirdActive = "active2";
let btnnextThird = document.getElementById("btn-next2");
let btnprevThird = document.getElementById("btn-prev2");


function removeItem(active,arr) {
   for (let i = 0; i < arr.length; i++) {
       arr[i].classList.remove(active);
   }
}

function removeSelect(arrZone,active_li) {
   for (let i = 0; i < arrZone.length; i++) {
       arrZone[i].classList.remove(active_li);
   }
}

function selectZoneBefore(arr,active,number,arrZone,active_li){
   let flag = 0;
   for(let i = 0; i < arr.length; i++){
       if(arr[i].classList.contains(active)){
           flag = i;
           break;
       }
   }
   removeSelect(arrZone,active_li);
   arrZone[parseInt(flag/number)].classList.add(active_li);
}

function next(btnnext,arr,arrZone,number,active,active_li) {
   btnnext.onclick = function () {
       let flag = 0;
       for (let i = 0; i < arr.length; i++) {
           if (arr[i].classList.contains(active)) {
               flag = i;
               break;
           }
       }
       if (flag == arr.length - number) {
           removeItem(active,arr);
           for (let i = 0; i < number; i++) {
               arr[i].classList.add(active);

           }
       }
       else {
           arr[flag].classList.remove(active);
           for (let i = flag + 1; i <= flag + number; i++) {
               arr[i].classList.add(active);
           }
       }
       if(arrZone == null)
       {

       }
       else
       {
        selectZoneBefore(arr,active,number,arrZone,active_li);
       }
       
   };
}

function prev(btnprev,arr,arrZone,number,active,active_li) {
   btnprev.onclick = function () {
       let flag = 0;
       for (let i = 0; i < arr.length; i++) {
           if (arr[i].classList.contains(active)) {
               flag = i;
           }
       }
       if (flag == number-1) {
           removeItem(active,arr);
           for (let i = arr.length - 1; i >= arr.length - number; i--) {
               arr[i].classList.add(active);

           }
       }
       else {
           arr[flag].classList.remove(active);
           for (let i = flag - 1; i >= flag - number; i--) {
               arr[i].classList.add(active);
           }
       }
       if(arrZone == null)
       {

       }
       else
       {
        selectZoneBefore(arr,active,number,arrZone,active_li);
       }
   };
}

function selectZone(arr,active,number,arrZone,active_li) {
   for (let i = 0; i < arrZone.length; i++) {
       arrZone[i].onclick = function () {
           removeSelect(arrZone,active_li);
           arrZone[i].classList.add(active_li);
           removeItem(active,arr);
           for (let j = i * number; j < i * number + number; j++) {
               arr[j].classList.add(active);
           }
       }
   }
}

next(btnnext,arrSecondaryItem,arrZone,numberSecondaryItemActive,secondaryActive,activeLi);
prev(btnprev,arrSecondaryItem,arrZone,numberSecondaryItemActive,secondaryActive,activeLi);
selectZone(arrSecondaryItem,secondaryActive,numberSecondaryItemActive,arrZone,activeLi);

next(btnnextThird,arrThirdItem,null,numberThirdItemActive,ThirdActive,null);
prev(btnprevThird,arrThirdItem,null,numberThirdItemActive,ThirdActive,null);