/**
 * Created by pujasvi on 18/10/16.
 */


window.onload=function(){
    document.loginform.reset();
    document.signupform.reset();

        $.get('/mob_some', function (data, status) {
            console.log("enter here ");

            //person1

var rows;
            for (  rows of data) {
            }
            $('#person1').append(" A user"+"  says :         " +'<span style="color:blue">' + rows.brand+'</span>'+"     "+'<span style="color:blue">'+'<u>'+rows.name+'</u>'+'</span>'+"     "+rows.views + '<br>'+'<br>');



        })

//person2
    $.get('/mov_some', function (data, status) {

        var rows;
        for ( rows of data) {


        }
        $('#person2').append(" A user"+  " says :         " +'<span style="color:blue">' + rows.name+'</span>'+"     "+'<span style="color:blue">'+'<u>'+rows.lang+'</u>'+'</span>'+"     "+rows.views + '<br>'+'<br>');



    })

 //person3
    $.get('/eve_some', function (data, status) {

        var rows;
        for ( rows of data) {



        }
        $('#person3').append("user"+"  says :         " +'<span style="color:blue">' + rows.name+'</span>'+"      "+'<span style="color:blue">'+'<u>'+rows.loc+'</u>'+'</span>'+"     "+rows.views + '<br>'+'<br>');

    })


    var stat = localStorage.getItem("stat");
    var us = localStorage.getItem("us");
    console.log("stat is"+stat+us);
    if(stat=="logged in ") {
        $('#try').html(" WELCOME  " + '<div>' + us + '</div>');
        $('#try').append('<button  id="vv" onclick="dd()">' + "logout" + '</button>');
    }


}


//login and signup
mb=function(){
    var box=document.getElementById("box");
    box.style.display="block";

    var modal = document.getElementById('box');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


}
cls =function(){

    var box=document.getElementById("box");
    box.style.display="none";

}

cls2 =function(){


    var box=document.getElementById("login");
    box.style.display="none";
    var msg=document.getElementById("msg");
    msg.style.display="none";


}

log1 =function(){

    var box=document.getElementById("login");
    box.style.display="block";
    var modal2 = document.getElementById('login');
    var msg=document.getElementById("msg");

    window.onclick = function(event) {
        if (event.target == modal2) {
            msg.style.display="none";
            modal2.style.display = "none";
        }
    }


}


//endd......





var mob_largest;
mobile=function() {


    var brand = $("#mob_brand").val();
    var name = $("#mob_name").val();
    var view = $("#mob_views").val();
    //alert("mobile  "+brand+name+view);

    var stat = localStorage.getItem("stat");
    console.log("log is " + stat);
    if (stat != "logged in ") {

        $('#vr').html("login first");

    }
    else if (stat== "logged in ") {

        $.get('/mobileid', function (data, status) {
            console.log("enter here")
            mob_largest = parseInt(data[0].id) + 1;


            $.post('/mobile', {
                    id: mob_largest,
                    brand: brand,
                    name: name,
                    view: view
                },
                function (data, status) {
                    console.log("/mobile is working with status " + status);
                alert("submitted succesfully");

                })
        })
        document.mobileform.reset();

    }

    return false;
}

mob_srch1=function(){
    var search=$("#mob_search").val();
    $.post('/mob_srch',{
            search:search,
        },
        function (data, status) {
            console.log("enter here");
            if(data=="no match"){

                alert("no match for this try with a new search value ");
            }
            else {
                var srchdiv=document.getElementById("mob_srch2");
                srchdiv.style.display="block";
                document.getElementById("mob_srch2").innerHTML = "";
                var count=0;
                for (var rows of data) {
                    count++;
                    $('#mob_srch2').append("user"+count+"  says :         " + rows.views + '<br>');

                }

                $('#mob_srch2').append('<br>'+'<br>'+'<br>'+'<input type="button" value="hide reviews" onclick="mob_div()">'+'<br>'+'<br>');
                document.mobsrchform.reset();
            }
        })

    return false;
}




mob_div=function(){
    var srchdiv=document.getElementById("mob_srch2");
    srchdiv.style.display="none";

}


mob_read_all=function(){


    document.getElementById("readall").innerHTML = "";
    $.get('/mob_all', function (data, status) {
        console.log("enter here");
        var count=0;
        $('#readall').append( '<br>'+'<br>'+'<br>');

        for (var rows of data) {
            count++;
            $('#readall').append("user"+count+"  says :         " +'<span style="color:blue">' + rows.brand+'</span>'+"     "+'<span style="color:blue">'+'<u>'+rows.name+'</u>'+'</span>'+"     "+rows.views + '<br>'+'<br>');

        }
        $('#readall').append('<br>'+'<br>'+'<br>');

    })

}


mob_read_some=function(){


    document.getElementById("readsome").innerHTML = "";
    $.get('/mob_some', function (data, status) {
        console.log("enter here ");
        var count=0;
        $('#readsome').append( '<br>'+'<br>'+'<br>');
        //person1


        for ( var rows of data) {
            count++;
            $('#readsome').append("user"+count+"  says :         " +'<span style="color:blue">' + rows.brand+'</span>'+"     "+'<span style="color:blue">'+'<u>'+rows.name+'</u>'+'</span>'+"     "+rows.views + '<br>'+'<br>');


        }

        $('#readsome').append('<br>'+'<br>'+'<br>');

    })

}


var eve_largest
events=function(){

    var name=$("#ev_name").val();
    var loc=$("#ev_loc").val();
    var view=$("#ev_views").val();

    var stat = localStorage.getItem("stat");
    console.log("log is " + stat);
    if (stat != "logged in ") {

        $('#vr').html("login first");

    }
    else if (stat== "logged in ") {

        $.get('/eventsid', function (data, status) {
            console.log("enter here")
            eve_largest = parseInt(data[0].id) + 1;


            $.post('/events', {
                    id: eve_largest,
                    name: name,
                    loc: loc,
                    view: view
                },
                function (data, status) {
                    console.log("/events is working with status " + status);
                    alert("submitted succesfully");

                })
        })
        document.eventsform.reset();
    }
    return false;


}


eve_srch1=function(){
    var search=$("#eve_search").val();
    $.post('/eve_srch',{
            search:search,
        },
        function (data, status) {
            console.log("enter here");
            if(data=="no match"){

                alert("no match for this try with a new search value ");
            }
            else {
                var srchdiv=document.getElementById("eve_srch2");
                srchdiv.style.display="block";
                document.getElementById("eve_srch2").innerHTML = "";
                var count=0;
                for (var rows of data) {
                    count++;
                    $('#eve_srch2').append("user"+count+"  says :         " + rows.views + '<br>');

                }

                $('#eve_srch2').append('<br>'+'<br>'+'<br>'+'<input type="button" value="hide reviews" onclick="eve_div()">'+'<br>'+'<br>');
                document.evesrchform.reset();
            }
        })

    return false;
}




eve_div=function(){
    var srchdiv=document.getElementById("eve_srch2");
    srchdiv.style.display="none";

}


eve_read_all=function(){


    document.getElementById("e_readall").innerHTML = "";
    $.get('/eve_all', function (data, status) {
        console.log("enter here");
        var count=0;
        $('#e_readall').append( '<br>'+'<br>'+'<br>');

        for (var rows of data) {
            count++;
            $('#e_readall').append("user"+count+"  says :         " +'<span style="color:blue">' + rows.name+'</span>'+"     "+'<span style="color:blue">'+'<u>'+rows.loc+'</u>'+'</span>'+"     "+rows.views + '<br>'+'<br>');

        }
        $('#e_readall').append('<br>'+'<br>'+'<br>');

    })

}


eve_read_some=function(){


    document.getElementById("e_readsome").innerHTML = "";
    $.get('/eve_some', function (data, status) {
        console.log("enter here");
        var count=0;
        $('#e_readsome').append( '<br>'+'<br>'+'<br>');

        for (var rows of data) {
            count++;
            $('#e_readsome').append("user"+count+"  says :         " +'<span style="color:blue">' + rows.name+'</span>'+"     "+'<span style="color:blue">'+'<u>'+rows.loc+'</u>'+'</span>'+"     "+rows.views + '<br>'+'<br>');

        }
        $('#e_readsome').append('<br>'+'<br>'+'<br>');

    })

}







var cof_largest;
cofy=function(){

    var name=$("#cof_name").val();
    var loc=$("#cof_loc").val();
    var view=$("#cof_view").val();

    var stat = localStorage.getItem("stat");
    console.log("log is " + stat);
    if (stat != "logged in ") {

        $('#vr').html("login first");

    }
    else if (stat== "logged in ") {


        $.get('/cofyid', function (data, status) {
            console.log("enter here");
            cof_largest = parseInt(data[0].id) + 1;


            $.post('/cofy', {
                    id: cof_largest,
                    name: name,
                    loc: loc,
                    view: view
                },
                function (data, status) {
                    console.log("/plac is working with status " + status);
                    alert("submitted succesfully");

                })
        })
        document.cofyform.reset();
    }return false;


}


cof_srch1=function(){
    var search=$("#cof_search").val();
    $.post('/cof_srch',{
            search:search,
        },
        function (data, status) {
            console.log("enter here");
            if(data=="no match"){

                alert("no match for this try with a new search value ");
            }
            else {
                var srchdiv=document.getElementById("cof_srch2");
                srchdiv.style.display="block";
                document.getElementById("cof_srch2").innerHTML = "";
                var count=0;
                for (var rows of data) {
                    count++;
                    $('#cof_srch2').append("user"+count+"  says :         " + rows.views + '<br>');

                }

                $('#cof_srch2').append('<br>'+'<br>'+'<br>'+'<input type="button" value="hide reviews" onclick="cof_div()">'+'<br>'+'<br>');
                document.cofysrchform.reset();
            }
        })

    return false;
}




cof_div=function(){
    var srchdiv=document.getElementById("cof_srch2");
    srchdiv.style.display="none";

}


cof_read_all=function(){


    document.getElementById("cof_readall").innerHTML = "";
    $.get('/cof_all', function (data, status) {
        console.log("enter here");
        var count=0;
        $('#cof_readall').append( '<br>'+'<br>'+'<br>');

        for (var rows of data) {
            count++;
            $('#cof_readall').append("user"+count+"  says :         " +'<span style="color:blue">' + rows.name+'</span>'+"     "+'<span style="color:blue">'+'<u>'+rows.loc+'</u>'+'</span>'+"     "+rows.views + '<br>'+'<br>');

        }
        $('#cof_readall').append('<br>'+'<br>'+'<br>');

    })

}


cof_read_some=function(){


    document.getElementById("cof_readsome").innerHTML = "";
    $.get('/cof_some', function (data, status) {
        console.log("enter here in mob.js nov_read_some");
        var count=0;
        $('#cof_readsome').append( '<br>'+'<br>'+'<br>');

        for (var rows of data) {
            count++;
            $('#cof_readsome').append("user"+count+"  says :         " +'<span style="color:blue">' + rows.name+'</span>'+"     "+'<span style="color:blue">'+'<u>'+rows.loc+'</u>'+'</span>'+"     "+rows.views + '<br>'+'<br>');

        }
        $('#cof_readsome').append('<br>'+'<br>'+'<br>');

    })

}






var hot_largest;
hotel=function(){

    var name=$("#hot_name").val();
    var loc=$("#hot_loc").val();
    var view=$("#hot_views").val();

    var stat = localStorage.getItem("stat");
    console.log("log is " + stat);
    if (stat != "logged in ") {

        $('#vr').html("login first");

    }
    else if (stat== "logged in ") {
        $.get('/hotelid', function (data, status) {
            console.log("enter here");
            hot_largest = parseInt(data[0].id) + 1;


            $.post('/hotel', {
                    id: hot_largest,
                    name: name,
                    loc: loc,
                    view: view
                },
                function (data, status) {
                    console.log("/hotel is working with status " + status);
                    alert("submitted succesfully");

                })

        })
        document.hotelform.reset();
    }return false;


}


hot_srch1=function(){
    var search=$("#hot_search").val();
    $.post('/hot_srch',{
            search:search,
        },
        function (data, status) {
            console.log("enter here");
            if(data=="no match"){

                alert("no match for this try with a new search value ");
            }
            else {
                var srchdiv=document.getElementById("hot_srch2");
                srchdiv.style.display="block";
                document.getElementById("hot_srch2").innerHTML = "";
                var count=0;
                for (var rows of data) {
                    count++;
                    $('#hot_srch2').append("user"+count+"  says :         " + rows.views + '<br>');

                }

                $('#hot_srch2').append('<br>'+'<br>'+'<br>'+'<input type="button" value="hide reviews" onclick="hot_div()">'+'<br>'+'<br>');
                document.hotsrchform.reset();
            }
        })

    return false;
}




hot_div=function(){
    var srchdiv=document.getElementById("hot_srch2");
    srchdiv.style.display="none";

}


hot_read_all=function(){


    document.getElementById("hot_readall").innerHTML = "";
    $.get('/hot_all', function (data, status) {
        console.log("enter here");
        var count=0;
        $('#hot_readall').append( '<br>'+'<br>'+'<br>');

        for (var rows of data) {
            count++;
            $('#hot_readall').append("user"+count+"  says :         " +'<span style="color:blue">' + rows.name+'</span>'+"     "+'<span style="color:blue">'+'<u>'+rows.loc+'</u>'+'</span>'+"     "+rows.views + '<br>'+'<br>');

        }
        $('#hot_readall').append('<br>'+'<br>'+'<br>');

    })

}


hot_read_some=function(){


    document.getElementById("hot_readsome").innerHTML = "";
    $.get('/hot_some', function (data, status) {
        console.log("enter here in mob.js hot_read_some");
        var count=0;
        $('#hot_readsome').append( '<br>'+'<br>'+'<br>');

        for (var rows of data) {
            count++;
            $('#hot_readsome').append("user"+count+"  says :         " +'<span style="color:blue">' + rows.name+'</span>'+"     "+'<span style="color:blue">'+'<u>'+rows.loc+'</u>'+'</span>'+"     "+rows.views + '<br>'+'<br>');

        }
        $('#hot_readsome').append('<br>'+'<br>'+'<br>');

    })

}






var mov_largest;
movies=function() {


    var name=$("#mov_name").val();
    var lang=$("#mov_lang").val();
    var view=$("#mov_views").val();
    var stat = localStorage.getItem("stat");
    console.log("log is " + stat);
    if (stat != "logged in ") {

        $('#vr').html("login first");

    }
    else if (stat== "logged in ") {

        $.get('/moviesid', function (data, status) {
            console.log("enter here")
            mov_largest = parseInt(data[0].id) + 1;


            $.post('/movies', {
                    id: mov_largest,
                    name: name,
                    lang: lang,
                    view: view,
                },
                function (data, status) {
                    console.log("/mobile is working with status " + status);
                    alert("submitted succesfully");

                })
        })
        document.moviesform.reset();
    }return false;
}

mov_srch1=function(){
    var search=$("#mov_search").val();
    $.post('/mov_srch',{
            search:search,
        },
        function (data, status) {
            console.log("enter here");
            if(data=="no match"){

                alert("no match for this try with a new search value ");
            }
            else {
                var srchdiv=document.getElementById("mov_srch2");
                srchdiv.style.display="block";
                document.getElementById("mov_srch2").innerHTML = "";
                var count=0;
                for (var rows of data) {
                    count++;
                    $('#mov_srch2').append("user"+count+"  says :         " + rows.views + '<br>');

                }

                $('#mov_srch2').append('<br>'+'<br>'+'<br>'+'<input type="button" value="hide reviews" onclick="mov_div()">'+'<br>'+'<br>');
                document.movsrchform.reset();
            }
        })

    return false;
}




mov_div=function(){
    var srchdiv=document.getElementById("mov_srch2");
    srchdiv.style.display="none";

}


mov_read_all=function(){


    document.getElementById("mov_readall").innerHTML = "";
    $.get('/mov_all', function (data, status) {
        console.log("enter here");
        var count=0;
        $('#mov_readall').append( '<br>'+'<br>'+'<br>');

        for (var rows of data) {
            count++;
            $('#mov_readall').append("user"+count+"  says :         " +'<span style="color:blue">' + rows.name+'</span>'+"     "+'<span style="color:blue">'+'<u>'+rows.lang+'</u>'+'</span>'+"     "+rows.views + '<br>'+'<br>');

        }
        $('#mov_readall').append('<br>'+'<br>'+'<br>');

    })

}


mov_read_some=function(){


    document.getElementById("mov_readsome").innerHTML = "";
    $.get('/mov_some', function (data, status) {
        console.log("enter here");
        var count=0;
        $('#mov_readsome').append( '<br>'+'<br>'+'<br>');

        for (var rows of data) {
            count++;
            $('#mov_readsome').append("user"+count+"  says :         " +'<span style="color:blue">' + rows.name+'</span>'+"     "+'<span style="color:blue">'+'<u>'+rows.lang+'</u>'+'</span>'+"     "+rows.views + '<br>'+'<br>');

        }
        $('#mov_readsome').append('<br>'+'<br>'+'<br>');

    })

}







var mus_largest;
music=function(){
    var name=$("#mus_name").val();
    var singer=$("#mus_sing").val();
    var view=$("#mus_views").val();
    var stat = localStorage.getItem("stat");
    console.log("log is " + stat);
    if (stat != "logged in ") {

        $('#vr').html("login first");

    }
    else if (stat== "logged in ") {
        $.get('/musicid', function (data, status) {
            console.log("enter here");
            mus_largest = parseInt(data[0].id) + 1;


            $.post('/music', {
                    id: mus_largest,
                    name: name,
                    singer: singer,
                    view: view
                },
                function (data, status) {
                    console.log("/mobile is working with status " + status);
                    alert("submitted succesfully");

                })
        })
        document.musicform.reset();
    }return false;


}




mus_srch1=function(){
    var search=$("#mus_search").val();
    $.post('/mus_srch',{
            search:search,
        },
        function (data, status) {
            console.log("enter here");
            if(data=="no match"){

                alert("no match for this try with a new search value ");
            }
            else {
                var srchdiv=document.getElementById("mus_srch2");
                srchdiv.style.display="block";
                document.getElementById("mus_srch2").innerHTML = "";
                var count=0;
                for (var rows of data) {
                    count++;
                    $('#mus_srch2').append("user"+count+"  says :         " + rows.views + '<br>');

                }

                $('#mus_srch2').append('<br>'+'<br>'+'<br>'+'<input type="button" value="hide reviews" onclick="mus_div()">'+'<br>'+'<br>');
                document.mussrchform.reset();
            }
        })

    return false;
}




mus_div=function(){
    var srchdiv=document.getElementById("mus_srch2");
    srchdiv.style.display="none";

}


mus_read_all=function(){


    document.getElementById("m_readall").innerHTML = "";
    $.get('/mus_all', function (data, status) {
        console.log("enter here");
        var count=0;
        $('#m_readall').append( '<br>'+'<br>'+'<br>');

        for (var rows of data) {
            count++;
            $('#m_readall').append("user"+count+"  says :         " +'<span style="color:blue">' + rows.name+'</span>'+"     "+'<span style="color:blue">'+'<u>'+rows.singer+'</u>'+'</span>'+"     "+rows.views + '<br>'+'<br>');

        }
        $('#m_readall').append('<br>'+'<br>'+'<br>');

    })

}


mus_read_some=function(){


    document.getElementById("m_readsome").innerHTML = "";
    $.get('/mus_some', function (data, status) {
        console.log("enter here");
        var count=0;
        $('#m_readsome').append( '<br>'+'<br>'+'<br>');

        for (var rows of data) {
            count++;
            $('#m_readsome').append("user"+count+"  says :         " +'<span style="color:blue">' + rows.name+'</span>'+"     "+'<span style="color:blue">'+'<u>'+rows.singer+'</u>'+'</span>'+"     "+rows.views + '<br>'+'<br>');

        }
        $('#m_readsome').append('<br>'+'<br>'+'<br>');

    })

}









var nov_largest;
novel=function(){

    var name=$("#nov_name").val();
    var writer=$("#nov_writer").val();
    var view=$("#nov_views").val();


    $.get('/novelid', function (data, status) {
        console.log("enter here");
        nov_largest = parseInt(data[0].id) + 1;


        $.post('/novel', {
                id: nov_largest,
                name:name,
                writer:writer,
                view:view
            },
            function (data, status) {
                console.log("/hotel is working with status " + status);
                alert("submitted succesfully");

            })
    })
    document.novelform.reset();
    return false;


}


nov_srch1=function(){
    var search=$("#nov_search").val();
    $.post('/nov_srch',{
            search:search,
        },
        function (data, status) {
            console.log("enter here");
            if(data=="no match"){

                alert("no match for this try with a new search value ");
            }
            else {
                var srchdiv=document.getElementById("nov_srch2");
                srchdiv.style.display="block";
                document.getElementById("nov_srch2").innerHTML = "";
                var count=0;
                for (var rows of data) {
                    count++;
                    $('#nov_srch2').append("user"+count+"  says :         " + rows.views + '<br>');

                }

                $('#nov_srch2').append('<br>'+'<br>'+'<br>'+'<input type="button" value="hide reviews" onclick="nov_div()">'+'<br>'+'<br>');
                document.hotsrchform.reset();
            }
        })

    return false;
}




nov_div=function(){
    var srchdiv=document.getElementById("nov_srch2");
    srchdiv.style.display="none";

}


nov_read_all=function(){


    document.getElementById("nov_readall").innerHTML = "";
    $.get('/nov_all', function (data, status) {
        console.log("enter here");
        var count=0;
        $('#nov_readall').append( '<br>'+'<br>'+'<br>');

        for (var rows of data) {
            count++;
            $('#nov_readall').append("user"+count+"  says :         " +'<span style="color:blue">' + rows.name+'</span>'+"     "+'<span style="color:blue">'+'<u>'+rows.writer+'</u>'+'</span>'+"     "+rows.views + '<br>'+'<br>');

        }
        $('#nov_readall').append('<br>'+'<br>'+'<br>');

    })

}


nov_read_some=function(){


    document.getElementById("nov_readsome").innerHTML = "";
    $.get('/nov_some', function (data, status) {
        console.log("enter here in mob.js nov_read_some");
        var count=0;
        $('#nov_readsome').append( '<br>'+'<br>'+'<br>');

        for (var rows of data) {
            count++;
            $('#nov_readsome').append("user"+count+"  says :         " +'<span style="color:blue">' + rows.name+'</span>'+"     "+'<span style="color:blue">'+'<u>'+rows.writer+'</u>'+'</span>'+"     "+rows.views + '<br>'+'<br>');

        }
        $('#nov_readsome').append('<br>'+'<br>'+'<br>');

    })

}







/*
 */

var res_largest;
rest=function() {

    var name=$("#res_name").val();
    var loc=$("#res_loc").val();
    var view=$("#res_views").val();

    //alert("mobile  "+brand+name+view);
    var stat = localStorage.getItem("stat");
    console.log("log is " + stat);
    if (stat != "logged in ") {

        $('#vr').html("login first");

    }
    else if (stat== "logged in ") {


        $.get('/restid', function (data, status) {
            console.log("enter here");
            res_largest = parseInt(data[0].id) + 1;


            $.post('/rest', {
                    id: res_largest,
                    name: name,
                    loc: loc,
                    view: view
                },
                function (data, status) {
                    console.log("/rest is working with status " + status);
                    alert("submitted succesfully");

                })
        })
        document.restform.reset();
    }return false;
}




res_srch1=function(){
    var search=$("#res_search").val();
    $.post('/res_srch',{
            search:search,
        },
        function (data, status) {
            console.log("enter here");
            if(data=="no match"){

                alert("no match for this try with a new search value ");
            }
            else {
                var srchdiv=document.getElementById("res_srch2");
                srchdiv.style.display="block";
                document.getElementById("res_srch2").innerHTML = "";
                var count=0;
                for (var rows of data) {
                    count++;
                    $('#res_srch2').append("user"+count+"  says :         " + rows.views + '<br>');

                }

                $('#res_srch2').append('<br>'+'<br>'+'<br>'+'<input type="button" value="hide reviews" onclick="res_div()">'+'<br>'+'<br>');
                document.ressrchform.reset();
            }
        })

    return false;
}




res_div=function(){
    var srchdiv=document.getElementById("res_srch2");
    srchdiv.style.display="none";

}


res_read_all=function(){


    document.getElementById("res_readall").innerHTML = "";
    $.get('/res_all', function (data, status) {
        console.log("enter here");
        var count=0;
        $('#res_readall').append( '<br>'+'<br>'+'<br>');

        for (var rows of data) {
            count++;
            $('#res_readall').append("user"+count+"  says :         " +'<span style="color:blue">' + rows.name+'</span>'+"     "+'<span style="color:blue">'+'<u>'+rows.loc+'</u>'+'</span>'+"     "+rows.views + '<br>'+'<br>');

        }
        $('#res_readall').append('<br>'+'<br>'+'<br>');

    })

}


res_read_some=function(){


    document.getElementById("res_readsome").innerHTML = "";
    $.get('/res_some', function (data, status) {
        console.log("enter here");
        var count=0;
        $('#res_readsome').append( '<br>'+'<br>'+'<br>');

        for (var rows of data) {
            count++;
            $('#res_readsome').append("user"+count+"  says :         " +'<span style="color:blue">' + rows.name+'</span>'+"     "+'<span style="color:blue">'+'<u>'+rows.loc+'</u>'+'</span>'+"     "+rows.views + '<br>'+'<br>');

        }
        $('#res_readsome').append('<br>'+'<br>'+'<br>');

    })

}








var pla_largest;
plac=function(){

    var name=$("#tou_name").val();
    var loc=$("#tou_city").val();
    var view=$("#tou_views").val();

    var stat = localStorage.getItem("stat");
    console.log("log is " + stat);
    if (stat != "logged in ") {

        $('#vr').html("login first");

    }
    else if (stat== "logged in ") {

        $.get('/placid', function (data, status) {
            console.log("enter here");
            pla_largest = parseInt(data[0].id) + 1;


            $.post('/plac', {
                    id: pla_largest,
                    name: name,
                    loc: loc,
                    view: view
                },
                function (data, status) {
                    console.log("/plac is working with status " + status);

                    alert("submitted succesfully");
                })
        })
        document.placform.reset();
    } return false;


}


pla_srch1=function(){
    var search=$("#pla_search").val();
    $.post('/pla_srch',{
            search:search,
        },
        function (data, status) {
            console.log("enter here");
            if(data=="no match"){

                alert("no match for this try with a new search value ");
            }
            else {
                var srchdiv=document.getElementById("pla_srch2");
                srchdiv.style.display="block";
                document.getElementById("pla_srch2").innerHTML = "";
                var count=0;
                for (var rows of data) {
                    count++;
                    $('#pla_srch2').append("user"+count+"  says :         " + rows.views + '<br>');

                }

                $('#pla_srch2').append('<br>'+'<br>'+'<br>'+'<input type="button" value="hide reviews" onclick="nov_div()">'+'<br>'+'<br>');
                document.plasrchform.reset();
            }
        })

    return false;
}




pla_div=function(){
    var srchdiv=document.getElementById("pla_srch2");
    srchdiv.style.display="none";

}


pla_read_all=function(){


    document.getElementById("pla_readall").innerHTML = "";
    $.get('/pla_all', function (data, status) {
        console.log("enter here");
        var count=0;
        $('#pla_readall').append( '<br>'+'<br>'+'<br>');

        for (var rows of data) {
            count++;
            $('#pla_readall').append("user"+count+"  says :         " +'<span style="color:blue">' + rows.name+'</span>'+"     "+'<span style="color:blue">'+'<u>'+rows.loc+'</u>'+'</span>'+"     "+rows.views + '<br>'+'<br>');

        }
        $('#pla_readall').append('<br>'+'<br>'+'<br>');

    })

}


pla_read_some=function(){


    document.getElementById("pla_readsome").innerHTML = "";
    $.get('/pla_some', function (data, status) {
        console.log("enter here in mob.js nov_read_some");
        var count=0;
        $('#pla_readsome').append( '<br>'+'<br>'+'<br>');

        for (var rows of data) {
            count++;
            $('#pla_readsome').append("user"+count+"  says :         " +'<span style="color:blue">' + rows.name+'</span>'+"     "+'<span style="color:blue">'+'<u>'+rows.loc+'</u>'+'</span>'+"     "+rows.views + '<br>'+'<br>');

        }
        $('#pla_readsome').append('<br>'+'<br>'+'<br>');

    })

}



//signup login stuff



/**
 * Created by pujasvi on 18/10/16.
 */
dd=function(){
    var stat = "logged out ";
    localStorage.setItem("stat", stat);
    $('#try').html(" ");
    $("#vv").remove();

}

//sign -up

var log;
login=function(){
    //document.getElementById("msg").innerHTML = "";
    var name=$("#log_name").val();

    var pass=$("#log_pass").val();

    $.post('/verify',{

            name:name,
            pswrd:pass,
        },
        function(data,status){
            console.log("verifying");
            console.log("data in verify is "+data);
            if(data== "password match")
            {console.log("enter in msg wlcm");

                log="logged in";
                var stat = "logged in ";
                var us=name;
                localStorage.setItem("stat", stat);
                localStorage.setItem("us", us);

                console.log("log is "+log);
                $('#try').html(" WELCOME  "+ '<div>'+name+'</div>');
                $('#try').append('<button  id="vv" onclick="dd()">' +"logout"+'</button>');


                var modal = document.getElementById("login");
                modal.style.display = "none";
            }

            else{
                $('#msg').html(" password  did not match");

            }


        })

    document.loginform.reset();
    return false;


}

unique=function(){

    var name = $("#sign_name").val();


    $.post('/unique', {

            user: name,
        },
        function (data, status) {
            console.log("verifying");
            console.log("data in verify is " + data);
            if (data == "user can go ahead") {
                $('#msg2').html(" user name can be created");
                $("#sbmit").prop("disabled", false);

            }

            else {

                $('#msg2').html(" user name  already taken");
                $("#sbmit").prop("disabled", true);

            }


        })
}




var largesta;
signup =function(){


    var name = $("#sign_name").val();
    var id = $("#sign_id").val();
    var no = $("#sign_no").val();
    var pswd = $("#sign_pswrd").val();
    var newpswrd = $("#sign_newpswrd").val();
    if (pswd == newpswrd) {

        $.get('/id', function (data, status) {
            console.log("enter here")
            largesta = parseInt(data[0].id) + 1;


            $.post('/signup', {
                    id: largesta,
                    name: name,
                    emailid: id,
                    no: no,
                    pswd: pswd

                },
                function (data, status) {
                    console.log("/rest is working with status " + status);
                    var modal = document.getElementById("box");
                    modal.style.display = "none";


                })

        });
        document.signupform.reset();
        document.getElementById("msg2").innerHTML = "";
        return false;

    }

    else {

        alert("password didn't match retype password");
        return false;
    }




}


//feedback

var feedback_largest;
feedback=function() {
    var name = $("#fb_name").val();
    var id = $("#fb_id").val();
    var view = $("#fb_view").val();

    $.get('/feedback_id', function (data, status) {
        console.log("enter here")
        feedback_largest = parseInt(data[0].id) + 1;

        $.post('/feedback', {
                id: feedback_largest,
                name: name,
                e_id: id,
                view: view

            },
            function (data, status) {
                console.log("/fb is working with status " + status);





            })

    })
    document.fbform.reset();
    return false;

}






