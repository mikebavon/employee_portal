/**
 * Created by dun on 4/13/17.
 */
function getElById(el){
    return document.getElementById(el);
}


function signIn(){

    var user = getElById('username').value;
    var pass = getElById('password').value;	
	var data={username:user,password:pass};
   	
	var loader = '<img src="assets/img/loader.gif" height="60" width="60"/>';
	
	getElById('loginError').innerHTML = loader+'Signing you in....';
		
	$.ajax({
        method: "POST",
        url: "http://ezenfinancials.corvidpartnersltd.com/api/auth/login",
        data:JSON.stringify(data),
        contentType:"application/json",
        success:(function(data) {
            var jsonRecords = JSON.stringify(data);
            var parsingJson = jQuery.parseJSON(jsonRecords);
            var token = parsingJson.token; //get token
			var name = parsingJson.name;
			var employmentId = parsingJson.employmentId;
			var staffNo = parsingJson.staffNo;
			var userId = parsingJson.userId;
			
			$.session.set('token', token);
			$.session.set('username', user);
            $.session.set('name', name);
			$.session.set('userId', userId);
			$.session.set('staffNo', staffNo);
			$.session.set('employmentId', employmentId);
						
			getElById('loginError').innerHTML = '<br><span style="color:">Welcome, '+name+'</span>'

            window.location.href='home.html';
        }),
        error:function () {
            getElById('loginError').innerHTML = '<br><span style="color:red">Sorry, seems the username and password combination did not work</span>';
        }
    });
	
}

function logout()
{
	$.session.clear();
    window.location.href='index.html';
}



/*
	var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if(ajax.readyState<4)
            getElById('loginError').innerHTML = loader+'shshsh Signing you in...';

        if(ajax.readyState==4){
            if(ajax.status==200){
                var resp = ajax.responseText;
                if(resp='Success')
                    window.location.href = 'index.html';
                else
                    getElById('loginError').innerHTML = 'Sorry. The username and password combination did not work!';
            }
        }
    }
    ajax.open('POST', 'http://ezenfinancials.corvidpartnersltd.com/auth/login', true);
    ajax.setRequestHeader('Content-type', 'application/json');
    ajax.send(params);*/