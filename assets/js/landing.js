var image_name;
var course_name;
var course_level;
var mail_id_login;
        $(function() {
               $.ajax({
                url         : "/get_pending_student_trainings", // the url where we want to POST
                data        : {"course":"ab"}, // our data object
                dataType    : "json", // what type of data do\ we expect back from the server
                encode      : true
            })
                // using the done promise callback
                .done(function(data) {
                    $('#pageSubmenu').empty();
                    var elm = document.getElementById('pageSubmenu');
               /*  while (elm.hasChildNodes()) {
                     elm.removeChild(elm.firstChild);
                  }*/
        
                 $.each(data, function(index) {
                    var li_element = document.createElement('li'); // create the option element
                   
                  //  var aHtml = '<div font-size: xx-small;><br><label><input type="radio" name="sel3" id="courseSelect" value="' + data[index].course+'_'+ data[index].level+'"'+' onchange="thisisSelected(event, this.value)" '+'>'+data[index].course+' '+'-'+data[index].level+ ' on : '+data[index].date+' </label> <button style="font-size: xx-small; float: right; color: #39739d; background-color: #e1ecf4;  border-color: #7aa7c7;"  type="Submit" value="'+ data[index].course+'_'+ data[index].level+'"'+ ' onclick="thisisSelected(event, this.value)">Syllabus</button></div>'+'<br>';
                     var aHtml = '<a href="#">'+data[index].date+
                     '<button style="font-size: x-small; border: 1px solid transparent;background-color: #17a2b8;font-size: x-small;color: white;border-radius: .25rem;" value="'+ data[index].course+'_'+ data[index].level+'"'+ ' onclick="bookingSyllabus(event, this.value)">View syllabus</button></a>';
                   
                  //  var node = document.createTextNode(data[index].course+' '+'level '+data[index].level+ ' date '+data[index].date);
                   //  var ele = document.createElement('div');
                   li_element.innerHTML+=aHtml;
                  //  ele.appendChild(node);
                   // elm.appendChild(ele);
                    
                   elm.appendChild(li_element); 
                  });
        
        });

        $.ajax({
            url         : "/get_accepted_student_trainings", // the url where we want to POST
            data        : {"course":"ab"}, // our data object
            dataType    : "json", // what type of data do\ we expect back from the server
            encode      : true
        })
            // using the done promise callback
            .done(function(data) {
                $('#accepted').empty();
                var elm = document.getElementById('accepted');
           /*  while (elm.hasChildNodes()) {
                 elm.removeChild(elm.firstChild);
              }*/
    
             $.each(data, function(index) {
                var li_element = document.createElement('li'); // create the option element
               
              //  var aHtml = '<div font-size: xx-small;><br><label><input type="radio" name="sel3" id="courseSelect" value="' + data[index].course+'_'+ data[index].level+'"'+' onchange="thisisSelected(event, this.value)" '+'>'+data[index].course+' '+'-'+data[index].level+ ' on : '+data[index].date+' </label> <button style="font-size: xx-small; float: right; color: #39739d; background-color: #e1ecf4;  border-color: #7aa7c7;"  type="Submit" value="'+ data[index].course+'_'+ data[index].level+'"'+ ' onclick="thisisSelected(event, this.value)">Syllabus</button></div>'+'<br>';
                 var aHtml = '<a href="#">'+data[index].date+
                 '<button style="font-size: x-small;    border: 1px solid transparent;  background-color: #17a2b8; font-size: x-small;color: white; border-radius: .25rem;" type="Submit" value="'+ data[index].pk + '" onclick="markCompletion(event, this.value)">Mark complete</button><button style="font-size: x-small; margin-left: .2rem;   border: 1px solid transparent;background-color: #17a2b8;font-size: x-small;color: white;border-radius: .25rem;"  onclick="window.open('+'\''+data[index].meetingLink+'\''+')">Join session</button><button style="font-size: x-small; border: 1px solid transparent;background-color: #17a2b8;font-size: x-small;color: white;border-radius: .25rem;" value="'+ data[index].course+'_'+ data[index].level+'"'+ ' onclick="bookingSyllabus(event, this.value)">View syllabus</button></a>';
               
              //  var node = document.createTextNode(data[index].course+' '+'level '+data[index].level+ ' date '+data[index].date);
               //  var ele = document.createElement('div');
               li_element.innerHTML+=aHtml;
              //  ele.appendChild(node);
               // elm.appendChild(ele);
                
               elm.appendChild(li_element); 
              });
    
    });



    $.ajax({
        url         : "/get_completed_student_trainings", // the url where we want to POST
        data        : {"course":"ab"}, // our data object
        dataType    : "json", // what type of data do\ we expect back from the server
        encode      : true
    })
        // using the done promise callback
        .done(function(data) {
            $('#completed').empty();
            var elm = document.getElementById('completed');
       /*  while (elm.hasChildNodes()) {
             elm.removeChild(elm.firstChild);
          }*/

         $.each(data, function(index) {
            var li_element = document.createElement('li'); // create the option element
           
          //  var aHtml = '<div font-size: xx-small;><br><label><input type="radio" name="sel3" id="courseSelect" value="' + data[index].course+'_'+ data[index].level+'"'+' onchange="thisisSelected(event, this.value)" '+'>'+data[index].course+' '+'-'+data[index].level+ ' on : '+data[index].date+' </label> <button style="font-size: xx-small; float: right; color: #39739d; background-color: #e1ecf4;  border-color: #7aa7c7;"  type="Submit" value="'+ data[index].course+'_'+ data[index].level+'"'+ ' onclick="thisisSelected(event, this.value)">Syllabus</button></div>'+'<br>';
             var aHtml = '<a href="#">'+data[index].date+
             '<button style="font-size: x-small; border: 1px solid transparent;background-color: #17a2b8;font-size: x-small;color: white;border-radius: .25rem;" value="'+ data[index].course+'_'+ data[index].level+'"'+ ' onclick="bookingSyllabus(event, this.value)">View syllabus</button></a>';
           
          //  var node = document.createTextNode(data[index].course+' '+'level '+data[index].level+ ' date '+data[index].date);
           //  var ele = document.createElement('div');
           li_element.innerHTML+=aHtml;
          //  ele.appendChild(node);
           // elm.appendChild(ele);
            
           elm.appendChild(li_element); 
          });

});



            $("#myFormemail").click(function(event) {

                // get the form data
                // there are many ways to get this data using jQuery (you can use the class or id also)
                var mail_id = $('input[name=email]').val();
                mail_id_login=mail_id;
        
                // process the form
                $.ajax({
                    url         : "/checkuser", // the url where we want to POST
                    data        : {"email":mail_id}, // our data object
                    dataType    : "html", // what type of data do\ we expect back from the server
                    encode      : true
                })
                
                    // using the done promise callback
                    .done(function(data) {
                        document.open("text/html", "load")
                        document.write(data);
                        document.close();
        });
        
                // stop the form from submitting the normal way and refreshing the page
                event.preventDefault();
            });

            
            $("#book_course1").click(function(event) {

                // get the form data
                // there are many ways to get this data using jQuery (you can use the class or id also)
                
        
                // process the form
                $.ajax({
                    url         : "/book_course_form", // the url where we want to POST
                    data        : {"email":'login'}, // our data object
                    dataType    : "html", // what type of data do\ we expect back from the server
                    encode      : true
                })
                    // using the done promise callback
                    .done(function(data) {
                        document.open("text/html", "load")
                        document.write(data);
                        document.close();
        
                        // here we will handle errors and validation messages
                    });
        
                // stop the form from submitting the normal way and refreshing the page
                event.preventDefault();
            });

            $("#book_course").click(function(event) {

                if(course_name==null || course_level==null){
                  //  alert('Enter a course in the search box and select a level review the syllabus of the level before you proceed with booking');
              }else{
                booklogin();
              }
            });

           
            $("#book_course_login").click(function(event) {

                if(course_name==null || course_level==null){
                    alert('Enter a course in the search box and select a level review the syllabus of the level before you proceed with booking');
              }else{
                bookcrse();
              }
            });


            $("#login_l").click(function(event) {

                // get the form data
                // there are many ways to get this data using jQuery (you can use the class or id also)
                
        
                // process the form
                $.ajax({
                    url         : "/loginForm", // the url where we want to POST
                    data        : {"email":'login'}, // our data object
                    dataType    : "html", // what type of data do\ we expect back from the server
                    encode      : true
                })
                    // using the done promise callback
                    .done(function(data) {
                        document.open("text/html", "load")
                        document.write(data);
                        document.close();
        
                        // here we will handle errors and validation messages
                    });
        
                // stop the form from submitting the normal way and refreshing the page
                event.preventDefault();
            });

            $("#login_t").click(function(event) {

                // get the form data
                // there are many ways to get this data using jQuery (you can use the class or id also)
                
        
                // process the form
                $.ajax({
                    url         : "/loginFormT", // the url where we want to POST
                    data        : {"email":'login'}, // our data object
                    dataType    : "html", // what type of data do\ we expect back from the server
                    encode      : true
                })
                    // using the done promise callback
                    .done(function(data) {
                        document.open("text/html", "load")
                        document.write(data);
                        document.close();
        
                        // here we will handle errors and validation messages
                    });
        
                // stop the form from submitting the normal way and refreshing the page
                event.preventDefault();
            });

            $("#course-search").autocomplete({
                source: "/autocomplete",
                dataType: 'json',
                select: function( event , ui ) {
                    $('#homeSubmenu').empty();
                    var elm = document.getElementById('homeSubmenu');
                   
        df = document.createDocumentFragment(); // create a document fragment to hold the options while we create them
        course_name = ui.item.value;
        image_name = ui.item.value+'_';
        course_level = null;
    for (var i = 1; i <= ui.item.levels; i++) { // loop, i like 42.
        var li_element = document.createElement('li'); // create the option element
        var a_element = document.createElement('a');       
        a_element.id=i;
        a_element.setAttribute("onclick", "levelClick(this)");
        a_element.appendChild(document.createTextNode("Level " + i));
        li_element.appendChild(a_element);
        elm.appendChild(li_element); 
    }
   
        }
            });

           // onLoadAComplete();
         

            $("#teacherFormemail").submit(function(event) {

                // get the form data
                // there are many ways to get this data using jQuery (you can use the class or id also)
                var mail_id = $('input[name=teacheremail]').val();
                mail_id_login=mail_id;
        
                // process the form
                $.ajax({
                    url         : "/checkteacher", // the url where we want to POST
                    data        : {"email":mail_id}, // our data object
                    dataType    : "json", // what type of data do\ we expect back from the server
                    encode      : true
                })
                    // using the done promise callback
                    .done(function(data) {
                        closeteacherFormemail();        
                        // log data to the c    sole so we can see
                        if(ans1 = (Object.keys(data).length === 0) ){
                            openTeacherFormRegister();
                        }else{
                            openTeacherFormLogin();
                        }
                        
        
                        // here we will handle errors and validation messages
                    });
        
                // stop the form from submitting the normal way and refreshing the page
                event.preventDefault();
            });


            $("#myFormlogin").submit(function(event) {

                // get the form data
                // there are many ways to get this data using jQuery (you can use the class or id also)
                var mail_id = $('input[name=email_name]').val();
                var pwd = $('input[name=psw]').val();
                var image_name = 
        
                // process the form
                $.ajax({
                    url         : "/login_student", // the url where we want to POST
                    type        : 'post',
                    data        : {"course": course_name, "level": course_level, "email":mail_id, "pwd":pwd, "csrfmiddlewaretoken" : getCookie('csrftoken')}, // our data object
                    dataType    : "html", // what type of data do\ we expect back from the server
                    encode      : true
                })
                    // using the done promise callback
                   .done(function(data) {
                    closeFormLogin(); 
                    document.open("text/html", "load")
                    document.write(data);
                    document.close();
                        // here we will handle errors and validation messages
                    });
                   
                // stop the form from submitting the normal way and refreshing the page
                event.preventDefault();

            });

            $("#teacherFormLogin").submit(function(event) {

                // get the form data
                // there are many ways to get this data using jQuery (you can use the class or id also)
                var mail_id = $('input[id=teacher-email-id]').val();
                var pwd = $('input[name=teacher-psw]').val();
        
                // process the form
                $.ajax({
                    url         : "/login_teacher", // the url where we want to POST
                    type        : 'post',
                    data        : {"email":mail_id, "pwd":pwd, "csrfmiddlewaretoken" : getCookie('csrftoken')}, // our data object
                    dataType    : "html", // what type of data do\ we expect back from the server
                    encode      : true
                })
                    // using the done promise callback
                   .done(function(data) {
                    closeTeacherFormLogin(); 
                    document.open("text/html", "load")
                    document.write(data);
                    document.close();
                        // here we will handle errors and validation messages
                    });
                   
                // stop the form from submitting the normal way and refreshing the page
                event.preventDefault();

            });

            $("#myFormRegister").submit(function(event) {

                // get the form data
                // there are many ways to get this data using jQuery (you can use the class or id also)
                var mail_id = $('input[id=register-email]').val();
                var name = $('input[name=name-register]').val();
                var pwd = $('input[name=psw-register]').val();
                var e = document.getElementById('timezone-offset');
                var tz_n = e.options[e.selectedIndex].text;
        
                // process the form
                $.ajax({
                    url         : "/register_student", // the url where we want to POST
                    type        : 'post',
                    data        : {"course": course_name, "level": course_level, "email":mail_id, "name": name, "pwd":pwd, "tz_info":tz_n , "csrfmiddlewaretoken" : getCookie('csrftoken')}, // our data object
                    dataType    : "html", // what type of data do\ we expect back from the server
                    encode      : true
                })
                    // using the done promise callback
                    .done(function(data) {
                        closeFormLogin(); 
                        document.open("text/html", "load")
                        document.write(data);
                        document.close();
                            // here we will handle errors and validation messages
                        });
        
                // stop the form from submitting the normal way and refreshing the page
                event.preventDefault();
            });


            $("#logout").click(function() {
                $.ajax({
                    url         : "/logout", // the url where we want to POST
                    data        : {"email":'hi'}, // our data object
                    dataType    : "html", // what type of data do\ we expect back from the server
                    encode      : true
                })
                    .done(function(data) {
                        document.open("text/html", "load")
                        document.write(data);
                        document.close();
        });
        
                // stop the form from submitting the normal way and refreshing the page
                event.preventDefault();
              });   
        


        $("#teacherFormRegister").submit(function(event) {

            // get the form data
            // there are many ways to get this data using jQuery (you can use the class or id also)
            var mail_id = $('input[id=teacher-email-register]').val();
            var name = $('input[name=teacher-name-register]').val();
            var pwd = $('input[name=teacher-psw-register]').val();
            var course_name = $('input[name=teacher-course-register]').val();
            var meeting_link= $('input[name=teacher-meeting-link]').val();
            var e = document.getElementById('timezone-offset-teacher');
            var tz_n = e.options[e.selectedIndex].text;
    
            // process the form
            $.ajax({
                url         : "/register_teacher", // the url where we want to POST
                type        : 'post',
                data        : {"course": course_name, "email":mail_id, "name": name, "pwd":pwd, "meetingLink": meeting_link, "tz_info": tz_n,  "csrfmiddlewaretoken" : getCookie('csrftoken')}, // our data object
                dataType    : "html", // what type of data do\ we expect back from the server
                encode      : true
            })
                // using the done promise callback
                .done(function(data) {
                    closeTeacherFormRegister(); 
                    document.open("text/html", "load")
                    document.write(data);
                    document.close();
                        // here we will handle errors and validation messages
                    });
    
            // stop the form from submitting the normal way and refreshing the page
            event.preventDefault();
        });
    
    });

        function getCookie(name) {
            var cookieValue = null;
            if (document.cookie && document.cookie != '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = jQuery.trim(cookies[i]);
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) == (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }

        function onLoadAComplete(){

          
           $("#course-search").val('JavaScript'); 
            $("#course-search").autocomplete("search", "JavaScript");
            $('#course-search').autocomplete({autoFocus:true});
            

               
        }
function levelClick(event) {

 document.getElementById("course-pdf").src = "/static/image/"+image_name+event.id+".pdf";
 course_level = event.id;

 }

 function bookingSyllabus(event, val) {
     
  var page = "/static/image/"+val+".pdf";
  document.getElementById("course-pdf").src = page;
  event.preventDefault();
   
    } 

 function closeteacherFormemail() {
    document.getElementById("temailPopup").style.display = "none";
  }

  function openteacherFormemail() {
    document.getElementById("temailPopup").style.display = "block";
  }

  function markCompletion(event, val){
      

    $.ajax({
      url         : "/markCompletion", // the url where we want to POST
      data        : {"pk":val}, // our data object
      dataType    : "html", // what type of data do\ we expect back from the server
      encode      : true

  })
      // using the done promise callback
      .done(function(data) {
        document.open("text/html", "load")
        document.write(data);
        document.close();
          
      });   
      event.preventDefault();
  }
 
  function bookcrse(){
    $.ajax({
        url         : "/bookingForm", // the url where we want to POST
        data        : {"course": course_name, "level": course_level}, // our data object
        dataType    : "html", // what type of data do\ we expect back from the server
        encode      : true
    })
        // using the done promise callback
        .done(function(data) {
            document.open("text/html", "load")
            document.write(data);
            document.close();

            // here we will handle errors and validation messages
        });

    // stop the form from submitting the normal way and refreshing the page
    event.preventDefault();
}


  function booklogin(){
                $.ajax({
                    url         : "/loginForm", // the url where we want to POST
                    data        : {"email":'login', "course": course_name, "level": course_level}, // our data object
                    dataType    : "html", // what type of data do\ we expect back from the server
                    encode      : true
                })
                    // using the done promise callback
                    .done(function(data) {
                        document.open("text/html", "load")
                        document.write(data);
                        document.close();
        
                        // here we will handle errors and validation messages
                    });
        
                // stop the form from submitting the normal way and refreshing the page
                event.preventDefault();
  }

 function openForm() {
    if(course_name==null || course_level==null){
        document.getElementById("alertPopup").style.display = "block";
    }else{
     
    document.getElementById("emailPopup").style.display = "block";
    }
  }

  function openStudentForm() {
        
    document.getElementById("emailPopup").style.display = "block";
    
  }

  function alertbx(){
    Modal.alert('Hello World!');
  }


  function closePopup() {
    document.getElementById("alertPopup").style.display = "none";
  }
  
  function closeForm() {
    document.getElementById("emailPopup").style.display = "none";
  }

  function openFormLogin() {
    document.getElementById("loginPopup").style.display = "block";
    $("#email-id").val(mail_id_login);

  }
  
  function closeFormLogin() {
    document.getElementById("loginPopup").style.display = "none";
  }

  function openTeacherFormLogin() {
    document.getElementById("tloginPopup").style.display = "block";
    $("#teacher-email-id").val(mail_id_login);

  }
  
  function closeTeacherFormLogin() {
    document.getElementById("tloginPopup").style.display = "none";
  }

  

  function openFormRegister() {
    document.getElementById("registerPopup").style.display = "block";
    $("#register-email").val(mail_id_login);

  }
  
  function closeFormRegister() {
    document.getElementById("registerPopup").style.display = "none";
  }

  function openTeacherFormRegister() {
    document.getElementById("tRegisterPopup").style.display = "block";
    $("#teacher-email-register").val(mail_id_login);

  }

  function closeTeacherFormRegister() {
    document.getElementById("tRegisterPopup").style.display = "none";
  }



  