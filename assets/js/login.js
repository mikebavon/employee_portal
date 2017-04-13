/**
 * Created by dun on 4/13/17.
 */
function getElById(el){
    return document.getElementById(el);
}

function signIn(){
    var user = getElById('username').value;
    var pass = getElById('password').value;
    var loader = '<img src="assets/img/loader.gif" height="60" width="60"/>';

    var params = 'username='+user+'&password='+pass;

    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if(ajax.readyState<4)
            getElById('loginError').innerHTML = loader+' Signing you in...';

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
    ajax.open('POST', 'http://www.me.co.ke', true);
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    ajax.send(params);

/*
    var data={username:user,password:pass};
    $.ajax({
        method: "POST",
        url: "http://me.co.ke/auth/login",
        data:JSON.stringify(data),
        contentType:"application/json",
        success:(function(data) {
            var jsonRecords = JSON.stringify(data);
            console.log(jsonRecords);
            var parsingJson = jQuery.parseJSON(jsonRecords);
            var token = parsingJson.token; //get token

            window.location.href='index.html';
        }),
        error:function () {
            getElById('loginError').innerHTML = '<br>sorry, seems the username and password combination dint work';
        }
    });

    */
}

function logout()
{
    window.location.href='index.html';
}