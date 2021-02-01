
$(function() {
        
        $(document).on('hidden.bs.modal', function (event) {
            if ($('.modal:visible').length) {
            $('body').addClass('modal-open');
            }
        });

        var view_to_show = document.getElementById("technology_view").textContent;
        image_name = view_to_show+'_';
        course_name = view_to_show;
        var runit = 0;     
        openMainView(view_to_show);
   
        $("#course-search").autocomplete({  
                source: "/autocomplete",
                dataType: 'json',
                select: function( event , ui ) {
                    additionalInfoOnTechnology();
                    setSideBarLevels(ui);   
                    setTechnology(ui.item.levels);
                    setAssociatedTechnology();   
                    resetSearchTopic();
                    searchTopics();
                    setMostSoughtTechnologies();
                    runit = 1
                   }
        });

        $("#course-search").on('keyup', function (event) {
                if(runit === 0){
                    if (event.keyCode === 13) {                    
                        $("#course-search").blur();
                        technologiesOnSearchBar(event.target.value);
                    }
                }  
                        
                 runit = 0;   
        });   

             
});

(function(a){a.createModalForSearch=function(b){defaults={title:"",message:"Your Message Goes Here!",closeButton:false,scrollable:true};var b=a.extend({},defaults,b);var c=(b.scrollable===true)?'style="max-height: 100%;overflow-y: auto;"':"";html='<div class="modal fade" id="myModal">';html+='<div class="modal-dialog">';html+='<div class="modal-content">';html+='<div style="border-bottom:none" class="modal-header">';html+='<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';if(b.title.length>0){html+='<h4 class="modal-title">'+b.title+"</h4>"}html+='</div><h4 style="text-align: center;color: inherit; font-size:inherit;font-family: inherit;"><img src="static/image/images/2.png" style="padding-right:1%; width:5%; height:90%" alt="TEKLRN" width="35" height="25">    Teklrn Inc.</h4><br><a style="padding-left:4%;">Search results:</a>';html+='<div class="modal-body" '+c+">";html+=b.message;html+="</div>";html+='<div style="border-top:none" class="modal-footer">';if(b.closeButton===true){html+='<button id="closeModal" type="button" style="background-color: white; color: #629DD1" class="btn btn-primary" data-dismiss="modal">Close</button>'}html+="</div>";html+="</div>";html+="</div>";html+="</div>";a("body").prepend(html);a("#myModal").modal().on("hidden.bs.modal",function(){a(this).remove()})}})(jQuery);

(function(a){a.createModal=function(b){defaults={title:"",message:"Your Message Goes Here!",closeButton:false,scrollable:true};var b=a.extend({},defaults,b);var c=(b.scrollable===true)?'style="max-height: 100%;overflow-y: auto;"':"";html='<div class="modal fade" id="myModal">';html+='<div class="modal-dialog">';html+='<div class="modal-content">';html+='<div style="border-bottom:none" class="modal-header">';html+='<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';if(b.title.length>0){html+='<h4 class="modal-title">'+b.title+"</h4>"}html+='</div><h4 style="text-align: center;color: inherit; font-size:inherit;font-family: inherit;"><img src="static/image/images/2.png" style="padding-right:1%; width:5%; height:90%" alt="TEKLRN" width="35" height="25">    Teklrn Inc.</h4>';html+='<div class="modal-body" '+c+">";html+=b.message;html+="</div>";html+='<div style="border-top:none" class="modal-footer">';if(b.closeButton===true){html+='<button type="button" style="background-color: white; color: #629DD1" class="btn btn-primary" data-dismiss="modal">Close</button>'}html+="</div>";html+="</div>";html+="</div>";html+="</div>";a("body").prepend(html);a("#myModal").modal().on("hidden.bs.modal",function(){a(this).remove()})}})(jQuery);

//(function(a){a.createModalVid=function(b){defaults={title:"",message:"Your Message Goes Here!",closeButton:false,scrollable:true};var b=a.extend({},defaults,b);var c=(b.scrollable===true)?'style="max-height: 100%;overflow-y: auto;"':"";html='<div class="modal fade" id="myModal">';html+='<div style="height:100%;" class="modal-dialog">';html+='<div style="height:100%; width:100%" class="modal-content">';html+='<div style="border-bottom:none" class="modal-header">';html+='<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';if(b.title.length>0){html+='<h4 class="modal-title">'+b.title+"</h4>"}html+='</div><h4 style="margin-bottom: 4%;text-align: center;color: inherit; font-size:inherit;font-family: inherit;"><img src="static/image/images/2.png" style="padding-right:1%; width:5%; height:90%" alt="TEKLRN" width="35" height="25">    Teklrn Inc.</h4>';html+='<div style="padding-left:0.1rem; padding-right:0.1rem;" class="modal-body" '+c+">";html+=b.message;html+="</div>";html+='<a style="margin-left: 4%; margin-right: 4%; margin-bottom: 4%; margin-top: 4%;"><b style="text-transform: uppercase; margin-right:1%;"><img src="static/image/images/'+course_name+'_icon.png" style="margin-right: 2%;width: 5%;height: 40%;" alt="TEKLRN" width="35" height="25">'+b.technology_information+' </b>'+b.technology_description+'</a> '+'<div style="border-top:none" class="modal-footer">';if(b.closeButton===true){html+='<button style="background-color: white; color: #629DD1" type="button" class="btn btn-primary" data-dismiss="modal">Close</button>'}html+="</div>";html+="</div>";html+="</div>";html+="</div>";a("body").prepend(html);a("#myModal").modal().on("hidden.bs.modal",function(){a(this).remove()})}})(jQuery);

(function(a){a.createModalVid=function(b){defaults={title:"",message:"Your Message Goes Here!",closeButton:false,scrollable:true};var b=a.extend({},defaults,b);var c=(b.scrollable===true)?'style="max-height: 100%;overflow-y: auto;"':"";html='<div class="modal fade" id="myModal">';html+='<div style="height:100%;" class="modal-dialog">';html+='<div style="height:100%; width:100%" class="modal-content">';html+='<div style="border-bottom:none" class="modal-header">';html+='<button id="closex" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';if(b.title.length>0){html+='<h4 class="modal-title">'+b.title+"</h4>"}html+='</div><h4 style="margin-bottom: 4%;text-align: center;color: inherit; font-size:inherit;font-family: inherit;"><img src="static/image/images/2.png" style="padding-right:1%; width:5%; height:90%" alt="TEKLRN" width="35" height="25">    Teklrn Inc.</h4>';html+='<div style="padding-left:0.1rem; padding-right:0.1rem;" class="modal-body" '+c+">";html+=b.message;html+="</div>";html+='<a style=" text-transform:uppercase; margin-left: 4%; margin-right: 4%; margin-bottom: 4%; margin-top: 4%;"><b style="text-transform: uppercase; margin-right:1%;"><img src="static/image/images/'+course_name+'_icon.png" style="margin-right: 2%;width: 5%;height: 40%;" alt="TEKLRN" width="35" height="25">'+b.technology_information+' </b>'+b.technology_description+'</a> '; html+="</div>";
for (var i = 1; i <= b.total_levels; i++) { 
    if(i!=b.current_level)
    
    html+='<div style="margin: 0%; margin-top: 0%;margin-bottom: 0%;" class="modal-dialog"><div onclick="hi(event, \''+course_name+'\', '+i+')"  style="height:100%; width:100%" class="modal-content"><a style="margin-left: 4%; margin-right: 4%; margin-bottom: 4%; margin-top: 4%;"><b style="text-transform: uppercase; margin-right:1%;"><img src="static/image/images/'+course_name+'_icon.png" style="margin-right: 2%;width: 5%;height: 40%;" alt="TEKLRN" width="35" height="25"> '+course_name+' Level '+ i +' </b>'+ document.getElementById(i+'description').innerText+'</a> </div></div>';
}   
    html+="</div>";html+="</div>";a("body").prepend(html);a("#myModal").modal().on("hidden.bs.modal",function(){a(this).remove()})}})(jQuery);

    
function setSideBarLevels(ui){
    $('#homeSubmenu').empty();
    var elm = document.getElementById('homeSubmenu');
   
    df = document.createDocumentFragment(); // create a document fragment to hold the options while we create them
    course_name = ui.item.value;
    image_name = ui.item.value+'_';
    course_level = null;
    
    for (var i = 1; i <= ui.item.levels; i++) { 
        var li_element = document.createElement('li'); // create the option element
        var aHtml = '<a style="text-transform:uppercase" href="#"><b>'+course_name+'</b> Level '+i+ ' '+ '<br>'+
                    '<button style="font-size: x-small; border: 1px solid transparent;background-color: #98bcdc;font-size: x-small;color: white;border-radius: .25rem;" onclick="lvlclk('+i+')"'+ '>Syllabus '+'<i style="vertical-align:middle;" class="fa fa-book" aria-hidden="true"></i></button>'+
                    ' <button style="font-size: x-small; border: 1px solid transparent;background-color: #7db2e0;font-size: x-small;color: white;border-radius: .25rem;" onclick="login_l(event, \''+course_name+'\', '+i+')"'+ '>Book Trainer'+'<i  style="vertical-align:middle;" class="fas fa-chalkboard-teacher"></i></button></a>';
        li_element.innerHTML+=aHtml;
        elm.appendChild(li_element); 
   
    }

}

function clk(){ 
    if(document.getElementById('1').innerText.includes("FREE")){
    document.getElementById('1').click();
    }
}
/*
* Here is how you use it
*/

function hi(event, crse, lvl){
    
    document.getElementById('closex').click();
    document.getElementById(lvl).click();
}

function lvlclk(pg){ 
        var iframe = '<canvas id="my_canvas" style="width : 100%; max-height: 70%;"></canvas><script>pdfjsLib.getDocument("./static/image/'+image_name+pg+'.pdf").promise.then(doc =>{console.log("This file has "+doc._pdfInfo.numPages + " pages");  doc.getPage(1).then(page =>{ var myCanvas = document.getElementById("my_canvas");var context =  myCanvas.getContext("2d");var viewport = page.getViewport({scale:1.5}); myCanvas.width = viewport.width; myCanvas.height = viewport.height;  page.render({ canvasContext:context, viewport:viewport  });   }); }); </script>'
        $.createModal({
        message: iframe,
        closeButton:true,
        scrollable:false
        });
        return false;        
     }

 function additionalInfoOnTechnology(){
     
    $('#moreinfoviewID').empty();
    var moreinfoviewelement = document.getElementById('moreinfoviewID');
    var versionLiElement = document.createElement('li');
    var aElementHtmlVersion = '<a style="text-transform:uppercase" href="#"><b>version </b> History <br>'+
    '<button style="font-size: x-small; border: 1px solid transparent;background-color: #98bcdc;font-size: x-small;color: white;border-radius: .25rem;" onclick="version_history()"'+ '>View '+'<i style="vertical-align:middle;" class="fa fa-arrow-circle-right" aria-hidden="true"></i></button></a>';
    versionLiElement.innerHTML+=aElementHtmlVersion;
    moreinfoviewelement.appendChild(versionLiElement); 

    var industryLiElement = document.createElement('li');
    var aElementHtmlIndustry = '<a style="text-transform:uppercase" href="#"><b>Industry </b> Acceptance <br>'+
    '<button style="font-size: x-small; border: 1px solid transparent;background-color: #98bcdc;font-size: x-small;color: white;border-radius: .25rem;" onclick="industry_acceptance()"'+ '>View '+'<i style="vertical-align:middle;" class="fas fa-industry"></i></button></a>';
    industryLiElement.innerHTML+=aElementHtmlIndustry;
    moreinfoviewelement.appendChild(industryLiElement); 

    var trendsLiElement = document.createElement('li');
    var aElementHtmlTrends = '<a style="text-transform:uppercase" href="#"><b>Development </b> Trends <br>'+
    '<button style="font-size: x-small; border: 1px solid transparent;background-color: #98bcdc;font-size: x-small;color: white;border-radius: .25rem;" onclick="dev_trends()"'+ '>View '+'<i style="vertical-align:middle;" class="fas fa-chart-line"></i></button></a>';
    trendsLiElement.innerHTML+=aElementHtmlTrends;
    moreinfoviewelement.appendChild(trendsLiElement); 

    var linkedLiElement = document.createElement('li');
    var aElementHtmlLinked = '<a style="text-transform:uppercase" href="#"><b>Linked </b> Technologies <br>'+
    '<button style="font-size: x-small; border: 1px solid transparent;background-color: #98bcdc;font-size: x-small;color: white;border-radius: .25rem;" onclick="associated_tech()"'+ '>View '+'<i style="vertical-align:middle;" class="fas fa-link"></i></button></a>';
    linkedLiElement.innerHTML+=aElementHtmlLinked;
    moreinfoviewelement.appendChild(linkedLiElement); 
 }    


function technologiesOnSearchBar(pg){ 
    html_message = '';
    $.ajax({
        url         : "/getTechnologiesMatchingTheSearch", // the url where we want to POST
        data        : {"search_string":pg}, // our data object
        dataType    : 'json', // what type of data do we expect back from the server
        encode      : true
    })
        // using the done promise callback
        .done(function(data) {
            $.each(data, function(index) {
                html_message += '<h4 style="background-color: #629DD1; color: white;" href=""><div style="margin-left: 1%;"><b style="color: #f5eded;">  <a style="text-transform:uppercase">'+data[index].technology+'</a></b><br><button style="vertical-align: middle;font-size: x-small; border: 1px solid transparent;  background-color: #155d9c; color:#ecf0f3;   font-size: x-small;  border-radius: .25rem;" onclick="openMainViewFromSearchResults(\''+data[index].technology+'\')">Open <i class="fas fa-folder"></i></button></div></h4>';
               
            });
            $.createModalForSearch({
                message: html_message,
                closeButton:true,
                scrollable:false
                });   
        });
    event.preventDefault();
        
      //  var iframe = '<canvas id="my_canvas" style="width : 100%; max-height: 70%;"></canvas><script>pdfjsLib.getDocument("./static/image/'+image_name+pg+'.pdf").promise.then(doc =>{console.log("This file has "+doc._pdfInfo.numPages + " pages");  doc.getPage(1).then(page =>{ var myCanvas = document.getElementById("my_canvas");var context =  myCanvas.getContext("2d");var viewport = page.getViewport({scale:1.5}); myCanvas.width = viewport.width; myCanvas.height = viewport.height;  page.render({ canvasContext:context, viewport:viewport  });   }); }); </script>'
       
        return false;        
     }

     function videoClk(event, crse, lvl) {
        //alert(crse+lvl);
        $.ajax({
            url         : "/loginFormForVideoAccess", // the url where we want to POST
            data        : {"from": "home_book_login", "course_name":crse, "course_level": lvl, "action":"video"}, // our data object
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
    
     function videoClk1(event, crse, lvl, description, videolink, levels_total){ 
       var iframe = '<iframe id="frameclk"  src="'+videolink+'" width="100%" height="100%" allow=autoplay frameborder="0" allowfullscreen="allowfullscreen"></iframe><div style="width: 80px; height: 80px; position: absolute; opacity: 0; right: 0px; top: 0px;">&nbsp;</div>';
        $.createModalVid({
        message: iframe,
        closeButton:true,
        scrollable:false,
        technology_information: crse+' Level '+lvl,
        technology_description: description,
        total_levels: levels_total,
        current_level: lvl
        });       
        return false;    
     }
     function associated_tech(){ 
        var iframe = '<canvas id="my_canvas" style="width : 100%; max-height: 70%;"></canvas><script>pdfjsLib.getDocument("./static/image/'+image_name+'Associated.pdf").promise.then(doc =>{console.log("This file has "+doc._pdfInfo.numPages + " pages");  doc.getPage(1).then(page =>{ var myCanvas = document.getElementById("my_canvas");var context =  myCanvas.getContext("2d");var viewport = page.getViewport({scale:1.5}); myCanvas.width = viewport.width; myCanvas.height = viewport.height;  page.render({ canvasContext:context, viewport:viewport  });   }); }); </script>'
        $.createModal({
        message: iframe,
        closeButton:true,
        scrollable:false
        });
        return false;   
     }

     function version_history(){ 
        var iframe = '<canvas id="my_canvas" style="width : 100%; max-height: 70%;"></canvas><script>pdfjsLib.getDocument("./static/image/'+image_name+'Version.pdf").promise.then(doc =>{console.log("This file has "+doc._pdfInfo.numPages + " pages");  doc.getPage(1).then(page =>{ var myCanvas = document.getElementById("my_canvas");var context =  myCanvas.getContext("2d");var viewport = page.getViewport({scale:1.5}); myCanvas.width = viewport.width; myCanvas.height = viewport.height;  page.render({ canvasContext:context, viewport:viewport  });   }); }); </script>'
         $.createModal({
        message: iframe,
        closeButton:true,
        scrollable:false
        });
        return false;   
     }
     function dev_trends(){ 
        var iframe = '<canvas id="my_canvas" style="width : 100%; max-height: 70%;"></canvas><script>pdfjsLib.getDocument("./static/image/'+image_name+'Dev.pdf").promise.then(doc =>{console.log("This file has "+doc._pdfInfo.numPages + " pages");  doc.getPage(1).then(page =>{ var myCanvas = document.getElementById("my_canvas");var context =  myCanvas.getContext("2d");var viewport = page.getViewport({scale:1.5}); myCanvas.width = viewport.width; myCanvas.height = viewport.height;  page.render({ canvasContext:context, viewport:viewport  });   }); }); </script>'
         $.createModal({
        message: iframe,
        closeButton:true,
        scrollable:false
        });
        return false;   
     }
     function industry_acceptance(){ 
        var iframe = '<canvas id="my_canvas" style="width : 100%; max-height: 70%;"></canvas><script>pdfjsLib.getDocument("./static/image/'+image_name+'Industry.pdf").promise.then(doc =>{console.log("This file has "+doc._pdfInfo.numPages + " pages");  doc.getPage(1).then(page =>{ var myCanvas = document.getElementById("my_canvas");var context =  myCanvas.getContext("2d");var viewport = page.getViewport({scale:1.5}); myCanvas.width = viewport.width; myCanvas.height = viewport.height;  page.render({ canvasContext:context, viewport:viewport  });   }); }); </script>'
         $.createModal({
        message: iframe,
        closeButton:true,
        scrollable:false
        });
        return false;   
     }

function levelClick(event) {

    //document.getElementById("course-pdf").src = "/static/image/"+image_name+event.id+".pdf";
    pdfjsLib.getDocument("./static/image/"+image_name+event.id+".pdf").promise.then(doc =>{
        console.log("This file has "+doc._pdfInfo.numPages + " pages");
      
        doc.getPage(1).then(page =>{
            var myCanvas = document.getElementById("my_canvas");
            var context =  myCanvas.getContext("2d");
      
            var viewport = page.getViewport({scale:3});
            myCanvas.width = viewport.width;
            myCanvas.height = viewport.height;
            page.render({
                canvasContext:context,
                viewport:viewport
            });
        });
      });
    
    course_level = event.id;
   
    }
   

    function search(ele) {
        if(event.key === 'Enter') {
            $.ajax({               
                url          : "/searchtopics", // the url where we want to POST
                data         : {"course_name":course_name, "keyword_data": ele.value},
                dataType     : 'json',
                encode       : true
            })
                // using the done promise callback
                 .done(function(data) {   
                    var elm = document.getElementById('searchtopics');
                    elm.innerHTML="";
                    var aHtml ="";
                    $.each(data, function(index) {
                        aHtml += '<h4  style="background-color: #629DD1; color: white;" href="">'+'<div id='+data[index].level+'description style="margin-left: 1%;">'+data[index].value+ '<br>'+
                        '<button style="font-size: x-small; border: 1px solid transparent;background-color: #98bcdc;  vertical-align: middle;font-size: x-small;color: white;border-radius: .25rem;" onclick="lvlclk('+data[index].level+')"'+ '> Syllabus <i style="vertical-align:middle;" class="fa fa-book" aria-hidden="true"></i>'+'</button>'+
                        ' <button style="font-size: x-small; border: 1px solid transparent;background-color: #7db2e0; vertical-align: middle;font-size: x-small;color: white;border-radius: .25rem;" onclick="login_l(event, \''+course_name+'\', '+data[index].level+')"'+ '><a style="background-color:white; color:#4a82b3; padding-left:1px; padding-right:1px; margin-right: 2px;" >$13</a> Book Trainer'+' <i  style="vertical-align:middle;" class="fas fa-chalkboard-teacher"></i></button>';
                        if(data[index].videoFree==true)
                        {
                         aHtml+=' <button id='+data[index].level+' style="font-size: x-small; border: 1px solid transparent;background-color: #4a82b3; vertical-align: middle;font-size: x-small;color: white;border-radius: .25rem;" onclick="videoClk1(event, \''+course_name+'\', '+data[index].level+', \''+data[index].value+'\', \''+data[index].videolink+'\', \''+data.length+'\' )"'+ '>FREE Video <i style="vertical-align: middle;" class="fas fa-play-circle"></i>'+'</button>';
                          
                        // aHtml+='<a style="margin-left: 1%; padding-left:1%; padding-right:1%; font-size: x-small; background: slategray; vertical-align: middle;">Free Video</a>';
                        }
                        else{
                        aHtml+=' <button  id='+data[index].level+' style="font-size: x-small; border: 1px solid transparent;background-color: #4a82b3; vertical-align: middle;font-size: x-small;color: white;border-radius: .25rem;" onclick="videoClk(event, \''+course_name+'\', '+data[index].level+')"'+ '> Video <i style="vertical-align: middle;" class="fas fa-play-circle"></i>'+'</button>';
                          
                        }
                        var l;
                        aHtml+='<a style="padding-right: 1%"></a>';
                        for (l = 0; l < 5; l++) {
                            if(l<data[index].rating){
                            aHtml+='<span style="font-size:30%;vertical-align: middle;" class="fa fa-star checked"></span>';
                            }
                            else{
                                aHtml+='<span style="color:grey; font-size:30%;vertical-align: middle;" class="fa fa-star checked"></span>';
                             
                            }
                            aHtml+='<a style="padding-right: .4%"></a>';
                        }
                        aHtml+='<a style="padding-right: 1%"></a>';
                        aHtml+='<a style="vertical-align: middle;font-size: 42%;">('+data[index].rating+'/5) '+data[index].reviewCount+' Ratings</a>';
                        aHtml+='</div></h4>';
                      
                     
                    });
                    elm.innerHTML=aHtml;    
        });
            // stop the form from submitting the normal way and refreshing the page
            event.preventDefault();
          
        }
    }

    function searchTopics() {
            $.ajax({               
                url          : "/searchtopics", // the url where we want to POST
                data         : {"course_name":course_name, "keyword_data": "Teklrn"},
                dataType     : 'json',
                encode       : true
            })
                // using the done promise callback
                 .done(function(data) {   
                    var elm = document.getElementById('searchtopics');
                    elm.innerHTML="";
                    var aHtml ="";
                    $.each(data, function(index) {
                        aHtml += '<h4  style="background-color: #629DD1; color: white;" href="">'+'<div style="margin-left: 1%;"><div id='+data[index].level+'description>'+data[index].value+ '</div>' +
                        '<button style="font-size: x-small; border: 1px solid transparent;background-color: #98bcdc;  vertical-align: middle;font-size: x-small;color: white;border-radius: .25rem;" onclick="lvlclk('+data[index].level+')"'+ '>Syllabus <i style="vertical-align:middle;" class="fa fa-book" aria-hidden="true"></i>'+'</button>'+
                        ' <button style="font-size: x-small; border: 1px solid transparent;background-color: #7db2e0; vertical-align: middle;font-size: x-small;color: white;border-radius: .25rem;" onclick="login_l(event, \''+course_name+'\', '+data[index].level+')"'+ '><a style="background-color:white; color:#4a82b3; padding-left:1px; padding-right:1px; margin-right: 2px;" >$13</a> Book Trainer'+'<i style="vertical-align:middle;" class="fas fa-chalkboard-teacher"></i></button>';
                        if(data[index].videoFree==true)
                        {
                            
                        aHtml+=' <button id='+data[index].level+' style="font-size: x-small; border: 1px solid transparent;background-color: #4a82b3; vertical-align: middle;font-size: x-small;color: white;border-radius: .25rem;" onclick="videoClk1(event, \''+course_name+'\', '+data[index].level+', \''+data[index].value+'\', \''+data[index].videolink+'\', \''+data.length+'\')"'+ '>FREE Video <i style="vertical-align: middle;" class="fas fa-play-circle"></i>'+'</button>';
                      //  aHtml+='<a style="margin-left: 1%; padding-left:1%; padding-right:1%; font-size: x-small; background: slategray; vertical-align: middle;">Free Video</a>';
                        }
                        else{
                        aHtml+=' <button id='+data[index].level+'  style="font-size: x-small; border: 1px solid transparent;background-color: #4a82b3; vertical-align: middle;font-size: x-small;color: white;border-radius: .25rem;" onclick="videoClk(event, \''+course_name+'\', '+data[index].level+')"'+ '><a style="background-color:white; color:#4a82b3; padding-left:1px; padding-right:1px; margin-right: 2px;" >$3</a> Video <i style="vertical-align: middle;" class="fas fa-play-circle"></i>'+'</button>';
                          
                        }
                        var l;
                        aHtml+='<a style="padding-right: 1%"></a>';
                        for (l = 0; l < 5; l++) {
                            if(l<data[index].rating){
                            aHtml+='<span style="font-size:30%;vertical-align: middle;" class="fa fa-star checked"></span>';
                            }
                            else{
                                aHtml+='<span style="color:grey; font-size:30%;vertical-align: middle;" class="fa fa-star checked"></span>';
                             
                            }
                            aHtml+='<a style="padding-right: .4%"></a>';
                        }
                        aHtml+='<a style="padding-right: 1%"></a>';
                        aHtml+='<a style="vertical-align: middle;font-size: 42%;"> ('+data[index].rating+'/5) '+data[index].reviewCount+' Ratings</a>';
                        aHtml+='</div></h4>';
                     
                    });
                    elm.innerHTML=aHtml;   
                    clk(); 
        });
            // stop the form from submitting the normal way and refreshing the page
            event.preventDefault();
          
        
    }


function login_l(event, crse, lvl) {
    $.ajax({
        url         : "/loginForm", // the url where we want to POST
        data        : {"from": "home_book_login", "course_name":crse, "course_level": lvl}, // our data object
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

function login_t(event) {

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
}



function backtolandinglogin(event){

    $.ajax({
        url         : "/back_to_landing_login_page", // the url where we want to POST
        data        : {"email":"email"}, // our data object
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

function backtolanding(event){

    $.ajax({
        url         : "/back_to_landing_page", // the url where we want to POST
        data        : {"email":"email"}, // our data object
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

function backtolandingTest(event){

    window.location.href = "https://teklrn.com";
}

function backtolandingmain(event){
    
    if( typeof course_name == "undefined")
        course_name = 'Tensorflow';

    $.ajax({
        url         : "/hi", // the url where we want to POST
        data        : {"technology":course_name}, // our data object
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

function backtolandingmainT(event){

    if( typeof course_name == "undefined")
        course_name = 'Tensorflow';

    $.ajax({
        url         : "/hi", // the url where we want to POST
        data        : {"technology":course_name}, // our data object
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


function resetPassword(event){

    $.ajax({
        url         : "/reset_password", // the url where we want to POST
        data        : {"email":"email"}, // our data object
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

function resetPasswordT(event){

    $.ajax({
        url         : "/reset_password_t", // the url where we want to POST
        data        : {"email":"email"}, // our data object
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





function checkTraineeExists(event){

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

        event.preventDefault();
}

function checkTrainerExists(event){

    var mail_id = $('input[name=email]').val();
                mail_id_login=mail_id;
        
                // process the form
                $.ajax({
                    url         : "/checkTrainer", // the url where we want to POST
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

        event.preventDefault();
}

function traineeResetPassword(event){   

                // get the form data
                // there are many ways to get this data using jQuery (you can use the class or id also)
                var mail_id = $('input[name=email]').val();
                var pwd = $('input[name=pass]').val();
                var image_name = 
        
                // process the form
                $.ajax({
                    url         : "/reset_student_password", // the url where we want to POST
                    type        : 'post',
                    data        : {"email":mail_id, "pwd":pwd}, // our data object
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

function trainerResetPassword(event){   

                // get the form data
                // there are many ways to get this data using jQuery (you can use the class or id also)
                var mail_id = $('input[name=email]').val();
                var pwd = $('input[name=pass]').val();
                var image_name = 
        
                // process the form
                $.ajax({
                    url         : "/reset_trainer_password", // the url where we want to POST
                    type        : 'post',
                    data        : {"email":mail_id, "pwd":pwd}, // our data object
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


function traineeLogin(event){   

                // get the form data
                // there are many ways to get this data using jQuery (you can use the class or id also)
                var mail_id = $('input[name=email]').val();
                var pwd = $('input[name=pass]').val();
                var image_name = 
        
                // process the form
                $.ajax({
                    url         : "/login_student", // the url where we want to POST
                    type        : 'post',
                    data        : {"email":mail_id, "pwd":pwd}, // our data object
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

function trainerLogin(event){   

    // get the form data
    // there are many ways to get this data using jQuery (you can use the class or id also)
    var mail_id = $('input[name=email]').val();
    var pwd = $('input[name=pass]').val();
    var image_name = 

    // process the form
    $.ajax({
        url         : "/login_teacher", // the url where we want to POST
        type        : 'post',
        data        : {"email":mail_id, "pwd":pwd}, // our data object
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

function bookCrseClick(event) {

    if(course_name==null || course_level==null){
        //Alert will be shown 
    }else{
        
    bookcrse();
  }
}
function setTechnology(level_val){
    document.getElementById('tec_name').text = course_name;
    document.getElementById('tot_levls').text = level_val;

}


function openMainViewFromSearchResults(val){
    openMainView(val);   
    setTimeout(() => {  document.getElementById("closeModal").click(); }, 200); 
    
}

function openMainView(val){
 $("#course-search").val(val);
 $.ajax({
    url         : "/autocomplete", // the url where we want to POST
    data        : {"term":val}, // our data object
    dataType    : "json", // what type of data do\ we expect back from the server
    encode      : true
})
    // using the done promise callback
    .done(function(data) {         
df = document.createDocumentFragment(); // create a document fragment to hold the options while we create them
course_name = val;
image_name = val+'_';
course_level = null;
technology_to_set = null;

  $.each(data, function(index) {
    additionalInfoOnTechnology();

    $('#homeSubmenu').empty();
    var elm = document.getElementById('homeSubmenu');
    for (var i = 1; i <= data[0].levels; i++) { 
var li_element = document.createElement('li'); // create the option element
          var aHtml = '<a style="text-transform:uppercase" href="#"><b>'+course_name+'</b> Level '+i+ ' '+'<br>'+
         '<button style="font-size: x-small; border: 1px solid transparent;background-color: #98bcdc;font-size: x-small;color: white;border-radius: .25rem;" onclick="lvlclk('+i+')"'+ '>Syllabus '+'<i style="vertical-align:middle;" class="fa fa-book" aria-hidden="true"></i></button>'+
        ' <button style="font-size: x-small; border: 1px solid transparent;background-color: #7db2e0;font-size: x-small;color: white;border-radius: .25rem;" onclick="login_l(event, \''+course_name+'\', '+i+')"'+ '>Book Trainer'+'<i  style="vertical-align:middle;" class="fas fa-chalkboard-teacher"></i></button></a>';
        li_element.innerHTML+=aHtml;
        
       elm.appendChild(li_element); 
       technology_to_set = data[0].levels;
      
    }    
    setTechnology(technology_to_set);    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    setAssociatedTechnology();
    resetSearchTopic();
    searchTopics();
    setMostSoughtTechnologies();
});
  
}
function resetSearchTopic(){
    $("#search-topics").val("");    
    $('#searchtopics').empty();
}



function setMostSoughtTechnologies(){
    $.ajax({
        url         : "/get_most_sought", // the url where we want to POST
        data        : {"course":course_name}, // our data object
        dataType    : "json", // what type of data do\ we expect back from the server
        encode      : true
    })
        // using the done promise callback
        .done(function(data) {
            
            
                      var elm = document.getElementById('most_t');
                     elm.innerHTML="";
                     var aHtml ="";
    
         $.each(data, function(index) {

          aHtml += '<h4  style="background-color: #629DD1; color: white;" href="">'+'<div style="margin-left: 1%;"><b style="color: #f5eded;">  <a style="text-transform:uppercase">'+data[index].name+'</a></b><br><button style="vertical-align: middle;font-size: x-small; border: 1px solid transparent;  background-color: #155d9c; color:#ecf0f3;   font-size: x-small;  border-radius: .25rem;" onclick="openMainView( \''+data[index].name+'\')">View <i class="fas fa-folder"></i></button></div></h4>';
                     
          });
          elm.innerHTML=aHtml; 
        });
}



function setAssociatedTechnology(){
    $.ajax({
        url         : "/get_associated", // the url where we want to POST
        data        : {"course":course_name}, // our data object
        dataType    : "json", // what type of data do\ we expect back from the server
        encode      : true
    })
        // using the done promise callback
        .done(function(data) {
            
            
                      var elm = document.getElementById('associated_t');
                     elm.innerHTML="";
                     var aHtml ="";
    
         $.each(data, function(index) {

          aHtml += '<h4  style="background-color: #629DD1; color: white;" href="">'+'<div style="margin-left: 1%;"><b style="color: #f5eded;">  <a style="text-transform:uppercase">'+data[index].name+'</a></b><br> <button style="vertical-align: middle;font-size: x-small; border: 1px solid transparent;  background-color: #155d9c; color:#ecf0f3;   font-size: x-small;  border-radius: .25rem;" onclick="openMainView( \''+data[index].name+'\')">View <i class="fas fa-folder"></i></button></div></h4>';
                     
          });
          elm.innerHTML=aHtml; 
        });
}


function bookcrse(){
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
}

function bookV(event) {

    // get the form data
    // there are many ways to get this data using jQuery (you can use the class or id also)
    var course = $('input[name=course-name]').val();
    var level = $('input[name=level-name]').val();

    $.ajax({
        url         : "/book_video", // the url where we want to POST
        type        : 'post',
        data        : {"course":course, "level":level}, // our data object
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

function bookc(event) {

    // get the form data
    // there are many ways to get this data using jQuery (you can use the class or id also)
    var course = $('input[name=course-name]').val();
    var level = $('input[name=level-name]').val();
    var datetimeval = $('input[id=time]').val();
    var sel = document.getElementById('timezone-offset');    
    // process the form
    $.ajax({
        url         : "/book_course", // the url where we want to POST
        type        : 'post',
        data        : {"course":course, "level":level, "datetimeval": datetimeval}, // our data object
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

function traineeRegister(event){   
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
        data        : {"course": "Java", "level": "1", "email":mail_id, "name": name, "pwd":pwd, "tz_info":tz_n}, // our data object
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

function trainerRegister(event){   
    // get the form data
    // there are many ways to get this data using jQuery (you can use the class or id also)
    var mail_id = $('input[id=register-email-t]').val();
    var name = $('input[name=name-register-t]').val();
    var pwd = $('input[name=psw-register-t]').val();
    var course_name = $('input[name=course-register-t]').val();
    var meeting_link= $('input[name=meeting-link-register-t]').val();
    var e = document.getElementById('timezone-offset-t');
    var tz_n = e.options[e.selectedIndex].text;

    // process the form
    $.ajax({
        url         : "/register_teacher", // the url where we want to POST
        type        : 'post',
        data        : {"course": course_name, "email":mail_id, "name": name, "pwd":pwd, "meetingLink": meeting_link, "tz_info": tz_n}, // our data object
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