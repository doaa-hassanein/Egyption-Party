
let size = $("#header").outerWidth()
// console.log(size);

$("#header .page-content small").click(function () {

    $("#sidebarCollapse").click(function () {
        $("#sidebar, #content").toggleClass("active");
    });


    $(document).ready(function(e){
        // e.preventDefault();
        $('.accordion').click(function(){
           
          $(this).next().slideToggle();
          $('.accordion').not(this).next().slideUp()
        });
    });
})






// $(".closeBtn").click(function(){
//     console.log("hi");
//     $("aside").hide(50)
// })



let sideBar = $("aside");
let navBar = $("aside nav");
let navBarWidth = navBar.outerWidth();
let showHideMenu = $("#showHideMenu");

sideBar.css("left", `${-navBarWidth}px`);
const linkMarginBlock = $("nav ul li").css("margin-block");

showHideMenu.click(toggleSideBar);

function toggleSideBar() {
    if (sideBar.css("left") == "0px") {
        sideBar.animate({ left: -navBarWidth }, 500);
        showHideMenu.removeClass("fa-xmark").addClass("fa-bars");
        $("nav > ul li").animate(
            { marginBlock: linkMarginBlock, opacity: 0 },
            700
        );
    } else {
        // show nav bar
        sideBar.animate({ left: 0 }, 500);
        showHideMenu.removeClass("fa-bars").addClass("fa-xmark");
        $("nav ul li").animate({ marginBlock: "20px", opacity: 1 }, 200);
    }
}


const inputs = document.querySelectorAll("input");
const sendBtn = document.getElementById('sendbtn');
//const sidebarCollapse = documentHTML.getElementById('sidebarCollapse');
const icon = document.querySelector("#sidebarCollapse i");
const smallData = document.querySelector('small');  // open & close icon
const myTextArea = document.getElementById('textArea');
const remainCharText = document.getElementById('remainChar');
const MAX_CHARS = 100;
let remaining = MAX_CHARS - myTextArea.value.length;


sendBtn.addEventListener('click',function(e){
    e.preventDefault();
    clearForm();
   //  alert('msg sent');
   });

   function clearForm(){
    
    inputs[0].value = ""
    inputs[1].value = ""
    myTextArea.value = ""
    remaining=MAX_CHARS;
    remainCharText.textContent=`${remaining} Characters Remaining`;
    remainCharText.style.color=null; 
  }
  


$(function () {
    // Sidebar toggle behavior
    $("#sidebarCollapse").click(function () {
      $("#sidebar, #content").toggleClass("active");
    });

    //sideUp toggle behavior
    $(".accordion").click(function (e) {
      e.preventDefault();
      var $this = $(this);

      if (!$this.hasClass(".activeAccordion")) {
        $(".panel").slideUp(1000);
        $(".accordion").removeClass(".activeAccordion");
      }

      $this.toggleClass(".activeAccordion");
      $this.next().slideToggle();
    });

    console.log("hi");

    //Counter behavior
    counterDown();

    //Count Remaining Characters
    remainChar();
});

function counterDown() {

    var countDown = new Date("17 August, 2024 20:00:00").getTime()   // وقت الحفلة deadline
    var x = setInterval(function () {
        var now = new Date().getTime()      // الوقت الحالي 
        var diffrence = countDown - now

        if (diffrence < 0) {  // الوقت عدى اصلا بتاع الحفلة 
            clearInterval(x); // توقف عن تنفيذ الدالة كل ثانية

            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
            document.getElementById('daysData').innerHTML = days + ' D';
            document.getElementById('hoursData').innerHTML = hours + ' H';
            document.getElementById('minutesData').innerHTML = minutes + ' M';
            document.getElementById('secondsData').innerHTML = seconds + ' S';
        } else {
            var days = Math.floor(diffrence / (1000 * 60 * 60 * 24));  // math.floor =>  لتقريب الأرقام إلى أقرب عدد صحيح
            var hours = Math.floor(diffrence % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            var minutes = Math.floor(diffrence % (1000 * 60 * 60) / (1000 * 60));
            var seconds = Math.floor(diffrence % (1000 * 60) / 1000);

            document.getElementById('daysData').innerHTML = days + ' D';
            document.getElementById('hoursData').innerHTML = hours + ' H';
            document.getElementById('minutesData').innerHTML = minutes + ' M';
            document.getElementById('secondsData').innerHTML = seconds + ' S';
        }

    }, 1000)


}

function remainChar() {


    myTextArea.addEventListener("input", function () {
        remaining = MAX_CHARS - myTextArea.value.length

        let color;

        if (remaining <= MAX_CHARS * 0.1) {
            color = '#D62E33'
        }
        else {
            color = null
        }

        remainCharText.textContent = `${remaining} Characters Remaining`;   // textcontent => بتجيب الكلام اللى جوة العنصر 

        remainCharText.style.color = color;

        if (remaining <= 0) {

            remainCharText.textContent = `your available character finished`;

            sendBtn.setAttribute("disabled", true);

        } else {
            sendBtn.removeAttribute('disabled');
        }

    })

}

















