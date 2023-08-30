$(document).ready(function(){
    var autoLoad= setInterval(function(){
		$('#btn-next').trigger('click');
	},3000);
   $('#btn-next').click(function(event) {
       var vi_tri_hien_tai = $('.active-nut').index()+1;
       var slide_sau = $('.active').next();
       if(slide_sau.length!=0){
          $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
             $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
          });
          slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
             $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
          });
        $('.nut-slide ul li').removeClass('active-nut');
        $('.nut-slide ul li:nth-child('+(vi_tri_hien_tai+1)+')').addClass('active-nut');
       }else{
          $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
             $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
          });
          $('.slide:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
             $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
          });
          $('.nut-slide ul li').removeClass('active-nut');
           $('.nut-slide ul li:nth-child(1)').addClass('active-nut');
       }
    });
    
   $('#btn-prev').click(function(event) {
       var slide_truoc = $('.active').prev();
       var vi_tri_hien_tai = $('.active-nut').index()+1;
         if(slide_truoc.length!=0){
             $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
                 $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
             });
             slide_truoc.addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
                 $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
          });
          
          $('.nut-slide ul li').removeClass('active-nut');
           $('.nut-slide ul li:nth-child('+(vi_tri_hien_tai-1)+')').addClass('active-nut');
         }else{
             $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
                 $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
             });
             $('.slide:last-child').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
                 $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
          });
          $('.nut-slide ul li').removeClass('active-nut');
           $('.nut-slide ul li:last-child').addClass('active-nut');
         }
    });
    
    $('.nut-slide ul li').click(function(event) {
       clearInterval(autoLoad);
       var vi_tri_hien_tai = $('.active-nut').index()+1;
       var vi_tri_click = $(this).index()+1;
       $('.nut-slide ul li').removeClass('active-nut');
       $(this).addClass('active-nut');
       if(vi_tri_click>vi_tri_hien_tai){
          $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
             $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
          });
          $('.slide:nth-child('+vi_tri_click+')').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
             $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
          });
       }
       if(vi_tri_click<vi_tri_hien_tai){
          $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
             $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
          });
          $('.slide:nth-child('+vi_tri_click+')').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
             $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
          });
       }
    });
 });


 $(document).ready(function(){
   $('.login-info-box').fadeOut();
   $('.login-show').addClass('show-log-panel');
});


$('.login-reg-panel input[type="radio"]').on('change', function() {
   if($('#log-login-show').is(':checked')) {
       $('.register-info-box').fadeOut(); 
       $('.login-info-box').fadeIn();
       
       $('.white-panel').addClass('right-log');
       $('.register-show').addClass('show-log-panel');
       $('.login-show').removeClass('show-log-panel');
       
   }
   else if($('#log-reg-show').is(':checked')) {
       $('.register-info-box').fadeIn();
       $('.login-info-box').fadeOut();
       
       $('.white-panel').removeClass('right-log');
       
       $('.login-show').addClass('show-log-panel');
       $('.register-show').removeClass('show-log-panel');
   }
});
 
// deloy handle product
