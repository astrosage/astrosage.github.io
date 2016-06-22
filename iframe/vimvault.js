
//login window


$(document).ready(function login(){
    $("#forgot-pwd").hide();
    $("#username").attr({"placeholder":"帳號"});
    $("#password").attr({"placeholder":"密碼"});
    $("#login").css({"box-shadow":"inset 15000px 0 0 #778f9b "});
    $(".login-border").fadeIn();

    $("input").keyup(function(){
        var name=$("#username").val();
        var pwd=$("#password").val();

        $("#login").attr({"disabled":"disabled"});
        $("input").removeClass("wrong-border");
       
         if(name!="" && pwd!="" ){
        //alert("請輸入帳號密碼");
        //$("#username").attr({"placeholder":"請輸入帳號"}); 
        //$("#password").attr({"placeholder":"請輸入密碼"});
        //$("#username,#password").addClass("wrong-border"); 

          $("#login").attr({"disabled":false});
          $("#login").css({"box-shadow":"none"});
        }

        else if(name!="" || pwd!="" ){
        //alert("請輸入帳號密碼");
        //$("#username").attr({"placeholder":"請輸入帳號"}); 
        //$("#password").attr({"placeholder":"請輸入密碼"});
        //$("#username,#password").addClass("wrong-border"); 
        $("#forgot-pwd").hide();
        $("#login").css({"box-shadow":"inset 5000px 0 0 #778f9b "});
         $("#login").attr({"disabled":"disabled"});
        }
  });

});


$(document).ready(function(){
 $("#login").mousedown(function add(){

          var name=$("#username").val();
          var pwd=$("#password").val();
          var i=0;

          
          $("#login").css({"animation":"login-animation .5s ease-in-out"});


          if (name=="aaron" && pwd==1234 ){ 
          $(".login-border").animate({"top":"-600px"},1000).css({"opacity":".5"}).fadeOut();
           setTimeout('window.open("frame.html","_self")',1000);

          }

           else if(name=="" && pwd=="" ){
            $("#username").attr({"placeholder":"請輸入帳號"}); 
            $("#username").addClass("wrong-border");
            $("#password").attr({"placeholder":"請輸入密碼"}); 
            $("#password").addClass("wrong-border"); 
          }


          else if(name=="" ){
            $("#username").attr({"placeholder":"請輸入帳號"}); 
            $("#username").addClass("wrong-border"); 
          }

          else if(pwd=="" ){
            $("#password").attr({"placeholder":"請輸入密碼"}); 
            $("#password").addClass("wrong-border"); 
          }

          else {
            $("#forgot-pwd").show();
            $("#username,#password").val("");
            $("#username").attr({"placeholder":"帳號或密碼錯誤"}); 
            $("#password").attr({"placeholder":"帳號或密碼錯誤"});
            $("#username,#password").addClass("wrong-border");
            $("#login").css({"box-shadow":"inset 5000px 0 0 #778f9b "}).attr({"disabled":"disabled"});
            $(".login-border").animate({"left":"6px"},10).animate({"left":"0px"},10)
            .animate({"left":"6px"},10).animate({"left":"0px"},10)
            .animate({"left":"6px"},10).animate({"left":"0px"},10)
            .animate({"left":"6px"},10).animate({"left":"0px"},10)
            .animate({"left":"6px"},10).animate({"left":"0px"},10)
            .animate({"left":"6px"},10).animate({"left":"0px"},10);
             
             return i+= 1 
            } 

            
        });
       
    });

   
    
    



//login window



$(document).ready(function scrolldown(){
  $(".account-wrap").scroll(function(){
    if($(".account-wrap").scrollTop()>10){
    
    $(".u_navi").css({"animation":"u_navi_shadow_top .5s ease-in-out","box-shadow":" 0 10px 16px -10px grey"});
    
    }

    else if($(".account-wrap").scrollTop()<40){

      $(".u_navi").css({"animation":"u_navi_shadow_top_r .5s ease-in-out","box-shadow":" 0 0 0 0 grey"});

    }

    //卷軸拉置最底 產生事件
    if($(".account-wrap").scrollTop()==($("#account-list").height()-$(".account-wrap").height())){
        $(".list-group-item:last-child").css({"animation":"u_navi_shadow 2s ease-in-out"});
       
    }

    else if ($(".account-wrap").scrollTop()!=($("#account-list").height()-$(".account-wrap").height())){
      $(".list-group-item:last-child").css({"animation":"u_navi_shadow_r 1s ease-in-out"});
    }
  });

});

//用戶子選單
$(document).ready(function u_navi(){
   $("#u_navi_cancel_btn,.aa-cancel").hide();

	$("#u_navi_search_box_btn").click(function(){

		$("#u_navi_delete_btn").hide();
		$("#u_navi_plus_btn").hide();
		$("#u_navi_search_box_btn").hide();
		$("#u_navi_search_box").show();
		$("#u_navi_cancel_btn,.aa-cancel").show();
		$(".u_navi").css({"background-color":"#7fdde9"});
	});


	$(".aa-cancel").click(function(){

		$("#u_navi_delete_btn").show();
		$("#u_navi_plus_btn").show();
		$("#u_navi_search_box_btn").show();
		$("#u_navi_search_box").hide();
		$("#u_navi_search_box").val('');
		$("#u_navi_cancel_btn,.aa-cancel").hide();
		$(".u_navi").css({"background-color":"transparent"});

	});

});





//用戶名單
$(document).ready(function accounts(){
var name = ["Andywu", "BillWang", "CartLin","Cindy", 
            "DoraTzeng","Eason","Eric","FrancisChen","Frank","GibsonHsu","Herry",
            "Iverson","Jackie","Ken","Lee","Michael","Mike","Nancy","Nickson","Opera","Patty",
            "Peter","Potter","Rob","Ruby","Zebra"];
var cars=name.sort();
var text = "";
var accounts="";
var i;
var r;
var d=new Date();
var y=d.getSeconds();


  

for (i = 0; i < cars.length; i++) {
    r=Math.floor((Math.random() * y) );
    var p=Math.floor((Math.random()*100));
    var p2=Math.floor((Math.random()*100));
    var bgcolor = "";

    if(r>30){
      bgcolor='badge bgcolor2';
      }


    else if (r<30 && r>10) {
     bgcolor='badge bgcolor2';  
      
      }

    else if (r==0) {
     bgcolor='badge2';  
      
      }

    else {
       bgcolor='badge';
    }

    if(p>90 || p2>90){
    text +='<a href="#'+cars[i]+'" data-toggle="tab" class="list-group-item">'+
    '<li>'+cars[i]+'<span class="badge bgcolor3">'+"!"+'</span>'+'</li>'+'</a>'}

    else{
       text +='<a href="#'+cars[i]+'" data-toggle="tab" class="list-group-item">'+
    '<li>'+cars[i]+'<span class="'+bgcolor+'">'+r+'</span>'+'</li>'+'</a>'
    }

    


   accounts+='<div class="row tab-pane fade" id="'+cars[i]+'">'+
                '<div class="col-lg-2">'+
                  '<div class="avatar_top">'+
                  '</div>'+
                  '<div class="account_info">'+
                  '<div class="avatar">'+
                  '</div>'+
                    '<h3>'+cars[i]+'</h3>'+'<p>'+cars[i]+'@domain.com'+'</p>'+'<br>'+
                  '</div>'+
                '</div>'+
                '<div class="col-lg-10 tab-content">'+
                  '<ul class="nav nav-pills ">'+
                      '<li class="active"><a data-toggle="tab" href="#home'+cars[i]+'">'+'網路'+'</a>'+'</li>'+
                      '<li>'+'<a data-toggle="tab" href="#menu1'+cars[i]+'">'+'空間'+'</a>'+'</li>'+
                      '<li>'+'<a data-toggle="tab" href="#menu2'+cars[i]+'">'+'活動'+'</a>'+'</li>'+
                      '<li class="dropdown">'+
                        '<a class="dropdown-toggle" data-toggle="dropdown" href="#">'+'其他'+'<span class="caret">'+'</span>'+'</a>'+
                        '<ul class="dropdown-menu">'+
                            '<li>'+'<a  data-toggle="tab" href="#menu4">'+'設置1'+'</a>'+'</li>'+
                            '<li>'+'<a href="#">'+'設置2'+'</a>'+'</li>'+
                            '<li>'+'<a href="#">'+'停用'+'</a>'+'</li>'+                        
                        '</ul>'+
                      '</li>'+
                  '</ul>'+
                      '<div id="home'+cars[i]+'" class="tab-pane fade in active">'+
                        '<h3>'+'網路設定'+'</h3>'+
                      '</div>'+
                      '<div id="menu1'+cars[i]+'" class="tab-pane fade">'+
                        '<h3>'+'空間用量'+'</h3>'+
                        '<h2>'+'個人加密盤('+p+'%)'+'</h2>'+
                        '<div class="progress">'+
                          '<div class="progress-bar progress-bar-success" role="progressbar" style="width:'+p+'%">'+
                           +p+'%'+
                          '</div>'+
                        '</div>'+
                        '<br>'+
                        '<h2>'+'共享盤('+p2+'%)'+'</h2>'+
                        '<div class="progress">'+
                          '<div class="progress-bar progress-bar-warning" role="progressbar" style="width:'+p2+'%">'+
                              +p2+'%'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                      '<div id="menu2'+cars[i]+'" class="tab-pane fade">'+
                       '<h3>'+'活動'+'</h3>'+
                      '</div>'+
                '</div>'+
              '</div>';
   


    
     
   
}
  
  document.getElementById("account-list").innerHTML =text;
  document.getElementById("accounts_page").innerHTML =accounts;
  
  $(".row:first-child").addClass("in active");
 
});



//群組名單
$(document).ready(function groups(){
var group = ["Admin", "Bussiness", "CartLin", "DoraTzeng","FrancisChen","GibsonHsu","Herry","Iverson","Lee","Michael","Nickson","Opera","Patty","Ruby","Zebra"];
var text = "";
var i;
var r;
var d=new Date();
var y=d.getSeconds();

for (i = 0; i < group.length; i++) {
    r=Math.floor((Math.random() * y) );
    var bgcolor = "";
    if(r>30){
      bgcolor='badge bgcolor';
      }


    else if (r<30 && r>10) {
     bgcolor='badge bgcolor2';  
      
      }

    else if (r==0) {
     bgcolor='';  
      
      }

    else {
       bgcolor='badge';
    }


     text +='<a href="#'+group[i]+'" data-toggle="tab" class="list-group-item">'+
    '<li>'+group[i]+'<span class="badge">'+r+'</span>'+'</li>'+'</a>';

}

  document.getElementById("group-list").innerHTML =text;
  

});


 $(document).ready(function(){
        
        var menu=0;

        $("#sidemenu").click(function(){
          if(menu==0){
            //$(".initial").fadeOut(1500);
            $(".initial").animate({width:"40px"},500);
            menu+=1;
            }
         else{
            $(".initial").fadeIn(1000);
             $(".initial").animate({width:"96px"},100);
            menu-=1;
         }
        });

      });

      $(document).ready(function(){
        
          $(".aa-btn-plus").click(function(){

              $(".aa-btn-plus").tooltip();
          });

      });


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});


$(document).ready(function update(){
	$("#btn_update_cancel").hide();
    $('#btn_update').click(function(){
    	var d=new Date();
    	var s=d.getSeconds();
    	
    	if(s%2==0){
    		$("#p_update").text("已更新到最新版本");
    		$("#p_update").css({"color":"#ced7db"});
    		$("#btn_update").hide();
    		$("#btn_update").addClass("disabled");

    	}
    	else{
    		$("#p_update").html('新版本2.6....<br>Release Note<br><button type="button" class="btn btn-default" id="btn_update_ok" >更新</button><span>&nbsp;</span><button type="button" class="btn btn-danger" id="btn_update_cancel" >取消</button>');
    		$("#p_update").css({"color":"#00abc0"});
    		$("#btn_update").hide();
    		$("#btn_update_cancel").show();

    	}


              $("#btn_update_ok").click(function update_process(){
                  var i=0;
                  var text="";
                  var t;
                  if(i<101){
                  i=i+1;
                  t= setTimeout(function(){ update_process() }, 100);
                  
                  text="更新中...("+t+"%)";
                   $("#p_update").html(text);
                  }
                  
                  if(t>100){
                    $("#p_update").html("已更新到最新版本");
                  }
                 
                 
                });
           

            
              $("#btn_update_cancel").click(function(){
                  $("#p_update").html('取消更新');
              });
           

    });   	


});


/*logout event*/
  $(document).ready(function(){
    $("#btn-logout").click(function(){
        $('body').fadeOut();
        setTimeout('window.open("login.html","_self")',1000);
    });
  });
    
  

/*logout event*/
/* input range >>>>>>>>>>>>>>>>>>>>>>>>>>>>.*/ 

  function range(e){ 

    if (e.value == 20){
      $("#range_space_value").css({"font-weight":"bold"});
      document.getElementById("range_space_value").innerHTML=e.value+"GB(max)";

    }
    else{
      $("#range_space_value").css({"color":"grey","font-weight":"inherit"});
      document.getElementById("range_space_value").innerHTML=e.value+"GB";
    }

    
  }

   function range2(e){ 
    document.getElementById("range_space2_value").innerHTML=e.value+"GB";
  }


/*<<<<<<<<<<<<<<<<<<<<<<<<<<<< input range */ 
function svg(x,y){

    $(".path").attr({})
}



