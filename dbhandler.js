/**
 * Created by pujasvi on 19/10/16.
 */
const mysql=require('mysql');
let connection=null;
function createConnection(){
    connection=mysql.createConnection({
        host     : 'localhost',
        user     : 'review_pujasvi',
        // password : 'secret',
        //tab1
        database : 'review'
    });

}

function signup(val,cb){
    console.log("called sign up");
    createConnection();
    connection.connect();

    var queryString=
        'insert into signup value('+

        val.id +
        ',' +

        '"' + val.name + '"'+

        ','+
        '"' + val.email + '"'+
        ','+

        '"' +val.phone + '"'+
        ','+

        '"' + val.hash + '"'+
        ');'
    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);

//})
        connection.end();
    })
}
function id_find(cb){
    console.log("called id_find");
    createConnection();
    connection.connect();

    var queryString='select max(id)"id" from signup';

    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);

//})
        connection.end();
    })
}

function mobile_id_find(cb){
    console.log("called mobile_id_find");
    createConnection();
    connection.connect();

    var queryString='select max(id)"id" from mobile';

    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);

//})
        connection.end();
    })
}


//mob_srch

function mob_srch(ver,cb){
    createConnection();
    connection.connect();

    var nm=ver.search;
    const queryString='select views from mobile where name='+ "'"+ nm +"'";
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}


function mob_all(cb){
    createConnection();
    connection.connect();


    const queryString='select brand,name,views from mobile';
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}
function mob_some(cb){
    createConnection();
    connection.connect();


    const queryString='select brand,name,views from mobile order by id desc LIMIT 5';
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}




function verify(ver,cb){
    createConnection();
    connection.connect();

    var nm=ver.name;
    const queryString='select password from signup where name='+ "'"+ nm +"'";
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}


function unique(ver,cb){
    createConnection();
    connection.connect();

    var nm=ver.name;
    const queryString='select count(name)"count" from signup where name='+ "'"+ nm +"'";
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();


}


function mobile(val,cb){
    console.log("called mobile up");
    createConnection();
    connection.connect();

    var queryString=
        'insert into mobile value('+

        val.id +
        ',' +

        '"' + val.brand + '"'+

        ','+
        '"' + val.name + '"'+
        ','+

        '"' +val.view+ '"'+

        ');'
    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);

//})
        connection.end();
    })
}


function events(val,cb){
    console.log("called events up");
    createConnection();
    connection.connect();

    var queryString=
        'insert into events value('+

        val.id +
        ',' +

        '"' + val.name + '"'+

        ','+
        '"' + val.loc+ '"'+
        ','+

        '"' +val.view+ '"'+

        ');'
    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);

//})
        connection.end();
    })
}


function events_id_find(cb){
    console.log("called evenst_id_find");
    createConnection();
    connection.connect();

    var queryString='select max(id)"id" from events';

    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);

//})
        connection.end();
    })
}


//eve_srch

function eve_srch(ver,cb){
    createConnection();
    connection.connect();

    var nm=ver.search;
    const queryString='select views from events where name='+ "'"+ nm +"'";
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}


function eve_all(cb){
    createConnection();
    connection.connect();


    const queryString='select name,loc,views from events';
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}
function eve_some(cb){
    createConnection();
    connection.connect();


    const queryString='select name,loc,views from events order by id desc LIMIT 5';
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}


//music

function music(val,cb){
    console.log("called music up");
    createConnection();
    connection.connect();

    var queryString=
        'insert into music value('+

        val.id +
        ',' +

        '"' + val.name + '"'+

        ','+
        '"' + val.singer+ '"'+
        ','+

        '"' +val.view+ '"'+

        ');'
    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);

//})
        connection.end();
    })
}


function music_id_find(cb){
    console.log("called music_id_find");
    createConnection();
    connection.connect();

    var queryString='select max(id)"id" from music';

    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);

//})
        connection.end();
    })
}


//eve_srch

function mus_srch(ver,cb){
    createConnection();
    connection.connect();

    var nm=ver.search;
    const queryString='select views from music where name='+ "'"+ nm +"'";
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}


function mus_all(cb){
    createConnection();
    connection.connect();


    const queryString='select name,singer,views from music';
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}
function mus_some(cb){
    createConnection();
    connection.connect();


    const queryString='select name,singer,views from music order by id desc LIMIT 5';
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}




//movies

function movies(val,cb){
    console.log("called movies up");
    createConnection();
    connection.connect();

    var queryString=
        'insert into movies value('+

        val.id +
        ',' +

        '"' + val.name + '"'+

        ','+
        '"' + val.lang+ '"'+
        ','+

        '"' +val.view+ '"'+

        ');'
    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);

//})
        connection.end();
    })
}




function movies_id_find(cb){
    console.log("called movies_id_find");
    createConnection();
    connection.connect();

    var queryString='select max(id)"id" from movies';

    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);

//})
        connection.end();
    })
}


//mob_srch

function mov_srch(ver,cb){
    createConnection();
    connection.connect();

    var nm=ver.search;
    const queryString='select views from movies where name='+ "'"+ nm +"'";
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}


function mov_all(cb){
    createConnection();
    connection.connect();


    const queryString='select name,lang,views from movies';
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}
function mov_some(cb){
    createConnection();
    connection.connect();


    const queryString='select name,lang,views from movies order by id desc LIMIT 5';
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}


//rest




function rest(val,cb){
    console.log("called rest up");
    createConnection();
    connection.connect();

    var queryString=
        'insert into rest value('+

        val.id +
        ',' +

        '"' + val.name + '"'+

        ','+
        '"' + val.loc+ '"'+
        ','+

        '"' +val.view+ '"'+

        ');'
    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);

//})
        connection.end();
    })
}




function rest_id_find(cb){
    console.log("called rest_id_find");
    createConnection();
    connection.connect();

    var queryString='select max(id)"id" from rest';

    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);

//})
        connection.end();
    })
}



function res_srch(ver,cb){
    createConnection();
    connection.connect();

    var nm=ver.search;
    const queryString='select views from rest where name='+ "'"+ nm +"'";
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}


function res_all(cb){
    createConnection();
    connection.connect();


    const queryString='select name,loc,views from rest';
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}
function res_some(cb){
    createConnection();
    connection.connect();


    const queryString='select name,loc,views from rest order by id desc LIMIT 5';
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}



//
function hotel(val,cb){
    console.log("called hotel up");
    createConnection();
    connection.connect();

    var queryString=
        'insert into hotel value('+

        val.id +
        ',' +

        '"' + val.name + '"'+

        ','+
        '"' + val.loc+ '"'+
        ','+

        '"' +val.view+ '"'+

        ');'
    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);

//})
        connection.end();
    })
}




function hotel_id_find(cb){
    console.log("called hotel_id_find");
    createConnection();
    connection.connect();

    var queryString='select max(id)"id" from hotel';

    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);

//})
        connection.end();
    })
}



function hot_srch(ver,cb){
    createConnection();
    connection.connect();

    var nm=ver.search;
    const queryString='select views from hotel where name='+ "'"+ nm +"'";
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}


function hot_all(cb){
    createConnection();
    connection.connect();


    const queryString='select name,loc,views from hotel';
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}
function hot_some(cb){
    createConnection();
    connection.connect();

console.log("called hotel_latest");
    const queryString='select name,loc,views from hotel order by id desc LIMIT 5';
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}


function novel(val,cb){
    console.log("called novel up");
    createConnection();
    connection.connect();

    var queryString=
        'insert into novel value('+

        val.id +
        ',' +

        '"' + val.name + '"'+

        ','+
        '"' + val.writer+ '"'+
        ','+

        '"' +val.view+ '"'+

        ');'
    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);

//})
        connection.end();
    })
}




function novel_id_find(cb){
    console.log("called novel_id_find");
    createConnection();
    connection.connect();

    var queryString='select max(id)"id" from novel';

    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);

//})
        connection.end();
    })
}



function nov_srch(ver,cb){
    createConnection();
    connection.connect();

    var nm=ver.search;
    const queryString='select views from novel where name='+ "'"+ nm +"'";
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}


function nov_all(cb){
    createConnection();
    connection.connect();


    const queryString='select name,writer,views from novel';
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}
function nov_some(cb){
    createConnection();
    connection.connect();

    console.log("called novel_latest");
    const queryString='select name,writer,views from novel order by id desc LIMIT 5';
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}


//place


function plac(val,cb){
    console.log("called plac up");
    createConnection();
    connection.connect();

    var queryString=
        'insert into plac value('+

        val.id +
        ',' +

        '"' + val.name + '"'+

        ','+
        '"' + val.loc+ '"'+
        ','+

        '"' +val.view+ '"'+

        ');'
    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);

//})
        connection.end();
    })
}




function plac_id_find(cb){
    console.log("called plac_id_find");
    createConnection();
    connection.connect();

    var queryString='select max(id)"id" from plac';

    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);

//})
        connection.end();
    })
}



function pla_srch(ver,cb){
    createConnection();
    connection.connect();

    var nm=ver.search;
    const queryString='select views from plac where name='+ "'"+ nm +"'";
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}


function pla_all(cb){
    createConnection();
    connection.connect();


    const queryString='select name,loc,views from plac';
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}
function pla_some(cb){
    createConnection();
    connection.connect();

    console.log("called plac_latest");
    const queryString='select name,loc,views from plac order by id desc LIMIT 5';
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}


//cofee

function cofy(val,cb){
    console.log("called cofy up");
    createConnection();
    connection.connect();

    var queryString=
        'insert into cofy value('+

        val.id +
        ',' +

        '"' + val.name + '"'+

        ','+
        '"' + val.loc+ '"'+
        ','+

        '"' +val.view+ '"'+

        ');'
    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);

//})
        connection.end();
    })
}




function cofy_id_find(cb){
    console.log("called cofy_id_find");
    createConnection();
    connection.connect();

    var queryString='select max(id)"id" from cofy';

    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);

//})
        connection.end();
    })
}



function cof_srch(ver,cb){
    createConnection();
    connection.connect();

    var nm=ver.search;
    const queryString='select views from cofy where name='+ "'"+ nm +"'";
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}


function cof_all(cb){
    createConnection();
    connection.connect();


    const queryString='select name,loc,views from cofy';
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}
function cof_some(cb){
    createConnection();
    connection.connect();

    console.log("called cofy_latest");
    const queryString='select name,loc,views from cofy order by id desc LIMIT 5';
    //'where name='+ver.name;
    connection.query(queryString,function(err,rows,fields){
        if (err) throw err;
        cb(rows);
    })
    connection.end();

}

//feedback

function feedback(val,cb){
    console.log("called feedback up");
    createConnection();
    connection.connect();

    var queryString=
        'insert into feedback value('+

        val.id +
        ',' +

        '"' + val.name + '"'+

        ','+
        '"' + val.e_id+ '"'+
        ','+

        '"' +val.view+ '"'+

        ');'
    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);

//})
        connection.end();
    })
}


function feedback_id_find(cb){
    console.log("called fb_id_find");
    createConnection();
    connection.connect();

    var queryString='select max(id)"id" from feedback';

    connection.query(queryString,function(err,result){
        if(err) throw err;
        cb(result);

//})
        connection.end();
    })
}




module.exports= {
    signup:signup,
    id_find:id_find,
    verify:verify,
    unique:unique,

    mobile:mobile,
   mobile_id_find:mobile_id_find,
    mob_srch:mob_srch,
    mob_all:mob_all,
    mob_some:mob_some,

    events:events,
    events_id_find:events_id_find,
    eve_srch:eve_srch,
    eve_all:eve_all,
    eve_some:eve_some,

    music:music,
    music_id_find:music_id_find,
    mus_srch:mus_srch,
    mus_all:mus_all,
    mus_some:mus_some,


    movies:movies,
    movies_id_find:movies_id_find,
    mov_srch:mov_srch,
    mov_all:mov_all,
    mov_some:mov_some,

    rest:rest,
    rest_id_find:rest_id_find,
    res_srch:res_srch,
    res_all:res_all,
    res_some:res_some,

    hotel:hotel,
    hotel_id_find:hotel_id_find,
    hot_srch:hot_srch,
    hot_all:hot_all,
    hot_some:hot_some,


    novel:novel,
    novel_id_find:novel_id_find,
    nov_srch:nov_srch,
    nov_all:nov_all,
    nov_some:nov_some,


    plac:plac,
    plac_id_find:plac_id_find,
    pla_srch:pla_srch,
    pla_all:pla_all,
    pla_some:pla_some,


    cofy:cofy,
    cofy_id_find:cofy_id_find,
    cof_srch:cof_srch,
    cof_all:cof_all,
    cof_some:cof_some,



    feedback:feedback,
    feedback_id_find:feedback_id_find,
}