/**
 * Created by pujasvi on 18/10/16.
 */
const express=require('express');
const app=express();
app.use('/',express.static('./public_html'));

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const db=require('./dbhandler.js')

app.listen(3300,function(){
    console.log("server running on port 3300");
})

const md5=require('md5');





app.post('/mobile',function(req,res) {

    console.log("mobile in server is " + req.body.brand+req.body.name+req.body.view);
        var values ={
            id:req.body.id,
            brand: req.body.brand,
            name:req.body.name,
            view: req.body.view,



        };

        db.mobile(values,function(result) {
            res.send(result);
        })
}
)

//events
app.post('/events',function(req,res) {

        console.log("events in server is " + req.body.name+req.body.loc+req.body.view);
    var values = {
        id: req.body.id,
        name:req.body.name,
        loc: req.body.loc,
        view: req.body.view,
    };
        db.events(values,function(result) {
            res.send(result);
        })
    }
)


app.get('/eventsid',function(req,res){

    db.events_id_find(function (result) {

            console.log(result[0]);

            res.send(result);
        }
    )
})

app.post('/eve_srch',function(req,res) {



    console.log("event_search in server is " + req.body.search);
    var values ={
        search:req.body.search,



    };
    db.eve_srch(values,function(result) {
        console.log(result);
        if(result[0]!=null) {
            for (var rows of result) {
                console.log(rows.views);

            }

            res.send(result);

        }
        else{
            console.log("no match");
            res.send("no match");
        }
    })


})

app.get('/eve_all',function(req,res) {



    console.log("event_search in server is ");

    db.eve_all(function(result) {
        for (var rows of result) {
            console.log(rows.views);

        }

        res.send(result);
    })


})

app.get('/eve_some',function(req,res) {



    console.log("event_search in server is ");

    db.eve_some(function(result) {
        for (var rows of result) {
            console.log(rows.views);

        }

        res.send(result);
    })


})






//coffee

app.post('/cofy',function(req,res) {

        console.log("plac in server is " + req.body.name+req.body.loc+req.body.view);
        var values = {
            id: req.body.id,
            name:req.body.name,
            loc: req.body.loc,
            view: req.body.view,
        };
        db.cofy(values,function(result) {
            res.send(result);
        })
    }
)


app.get('/cofyid',function(req,res){

    db.cofy_id_find(function (result) {

            console.log(result[0]);

            res.send(result);
        }
    )
})

app.post('/cof_srch',function(req,res) {



    console.log("cofy_slearch in server is " + req.body.search);
    var values ={
        search:req.body.search,



    };
    db.cof_srch(values,function(result) {
        console.log(result);
        if(result[0]!=null) {
            for (var rows of result) {
                console.log(rows.views);

            }

            res.send(result);

        }
        else{
            console.log("no match");
            res.send("no match");
        }
    })


})

app.get('/cof_all',function(req,res) {



    console.log("cof_search in server is ");

    db.cof_all(function(result) {
        for (var rows of result) {
            console.log(rows.views);

        }

        res.send(result);
    })


})

app.get('/cof_some',function(req,res) {



    console.log("cof_latest in server is ");

    db.cof_some(function(result) {
        for (var rows of result) {
            console.log(rows.views);

        }

        res.send(result);
    })


})






//hotel

app.post('/hotel',function(req,res) {

        console.log("music in server is " + req.body.name+req.body.loc+req.body.view);
        var values = {
            id: req.body.id,
            name:req.body.name,
            loc: req.body.loc,
            view: req.body.view,
        };
        db.hotel(values,function(result) {
            res.send(result);
        })
    }
)


app.get('/hotelid',function(req,res){

    db.hotel_id_find(function (result) {

            console.log(result[0]);

            res.send(result);
        }
    )
})

app.post('/hot_srch',function(req,res) {



    console.log("hotel_search in server is " + req.body.search);
    var values ={
        search:req.body.search,



    };
    db.hot_srch(values,function(result) {
        console.log(result);
        if(result[0]!=null) {
            for (var rows of result) {
                console.log(rows.views);

            }

            res.send(result);

        }
        else{
            console.log("no match");
            res.send("no match");
        }
    })


})

app.get('/hot_all',function(req,res) {



    console.log("hotel_search in server is ");

    db.hot_all(function(result) {
        for (var rows of result) {
            console.log(rows.views);

        }

        res.send(result);
    })


})

app.get('/hot_some',function(req,res) {



    console.log("hotel_latest in server is ");

    db.hot_some(function(result) {
        for (var rows of result) {
            console.log(rows.views);

        }

        res.send(result);
    })


})





//movies


app.post('/movies',function(req,res) {

        console.log("movies in server is " + req.body.name+req.body.lang+req.body.view);

    var values ={
            id:req.body.id,
            name: req.body.name,
            lang:req.body.lang,
            view: req.body.view,



        };

        db.movies(values,function(result) {
            res.send(result);
        })
    }
)

app.get('/moviesid',function(req,res){

    db.movies_id_find(function (result) {

            console.log(result[0]);

            res.send(result);
        }
    )
})

app.post('/mov_srch',function(req,res) {



    console.log("movies_search in server is " + req.body.search);
    var values ={
        search:req.body.search,



    };
    db.mov_srch(values,function(result) {
        console.log(result);
        if(result[0]!=null) {
            for (var rows of result) {
                console.log(rows.views);

            }

            res.send(result);

        }
        else{
            console.log("no match");
            res.send("no match");
        }
    })


})

app.get('/mov_all',function(req,res) {



    console.log("movies_search in server is ");

    db.mov_all(function(result) {
        for (var rows of result) {
            console.log(rows.views);

        }

        res.send(result);
    })


})

app.get('/mov_some',function(req,res) {



    console.log("movies_search in server is ");

    db.mov_some(function(result) {
        for (var rows of result) {
            console.log(rows.views);

        }

        res.send(result);
    })


})






//music


app.post('/music',function(req,res) {

        console.log("music in server is " + req.body.name+req.body.singer+req.body.view);
        var values = {
            id: req.body.id,
            name:req.body.name,
            singer: req.body.singer,
            view: req.body.view,
        };
        db.music(values,function(result) {
            res.send(result);
        })
    }
)


app.get('/musicid',function(req,res){

    db.music_id_find(function (result) {

            console.log(result[0]);

            res.send(result);
        }
    )
})

app.post('/mus_srch',function(req,res) {



    console.log("music_search in server is " + req.body.search);
    var values ={
        search:req.body.search,



    };
    db.mus_srch(values,function(result) {
        console.log(result);
        if(result[0]!=null) {
            for (var rows of result) {
                console.log(rows.views);

            }

            res.send(result);

        }
        else{
            console.log("no match");
            res.send("no match");
        }
    })


})

app.get('/mus_all',function(req,res) {



    console.log("event_search in server is ");

    db.mus_all(function(result) {
        for (var rows of result) {
            console.log(rows.views);

        }

        res.send(result);
    })


})

app.get('/mus_some',function(req,res) {



    console.log("event_search in server is ");

    db.mus_some(function(result) {
        for (var rows of result) {
            console.log(rows.views);

        }

        res.send(result);
    })


})










//novels


app.post('/novel',function(req,res) {

        console.log("novel in server is " + req.body.name+req.body.writer+req.body.view);
        var values = {
            id: req.body.id,
            name:req.body.name,
            writer: req.body.writer,
            view: req.body.view,
        };
        db.novel(values,function(result) {
            res.send(result);
        })
    }
)


app.get('/novelid',function(req,res){

    db.novel_id_find(function (result) {

            console.log(result[0]);

            res.send(result);
        }
    )
})

app.post('/nov_srch',function(req,res) {



    console.log("nove_slearch in server is " + req.body.search);
    var values ={
        search:req.body.search,



    };
    db.nov_srch(values,function(result) {
        console.log(result);
        if(result[0]!=null) {
            for (var rows of result) {
                console.log(rows.views);

            }

            res.send(result);

        }
        else{
            console.log("no match");
            res.send("no match");
        }
    })


})

app.get('/nov_all',function(req,res) {



    console.log("novel_search in server is ");

    db.nov_all(function(result) {
        for (var rows of result) {
            console.log(rows.views);

        }

        res.send(result);
    })


})

app.get('/nov_some',function(req,res) {



    console.log("novel_latest in server is ");

    db.nov_some(function(result) {
        for (var rows of result) {
            console.log(rows.views);

        }

        res.send(result);
    })


})




//rest

app.post('/rest',function(req,res) {

        console.log("rest in server is " + req.body.name+req.body.loc+req.body.view);

        var values ={
            id:req.body.id,
            name: req.body.name,
            loc:req.body.loc,
            view: req.body.view,



        };

        db.rest(values,function(result) {
            res.send(result);
        })
    }
)


app.get('/restid',function(req,res){

    db.rest_id_find(function (result) {

            console.log(result[0]);


            res.send(result);
        }
    )
})





app.post('/res_srch',function(req,res) {



    console.log("rest_search in server is " + req.body.search);
    var values ={
        search:req.body.search,



    };
    db.res_srch(values,function(result) {
        console.log(result);
        if(result[0]!=null) {
            for (var rows of result) {
                console.log(rows.views);

            }

            res.send(result);

        }
        else{
            console.log("no match");
            res.send("no match");
        }
    })


})

app.get('/res_all',function(req,res) {



    console.log("rest_search in server is ");

    db.res_all(function(result) {
        for (var rows of result) {
            console.log(rows.views);

        }

        res.send(result);
    })


})

app.get('/res_some',function(req,res) {



    console.log("rest_search in server is ");

    db.res_some(function(result) {
        for (var rows of result) {
            console.log(rows.views);

        }

        res.send(result);
    })


})







//tourist

app.post('/plac',function(req,res) {

        console.log("plac in server is " + req.body.name+req.body.loc+req.body.view);
        var values = {
            id: req.body.id,
            name:req.body.name,
            loc: req.body.loc,
            view: req.body.view,
        };
        db.plac(values,function(result) {
            res.send(result);
        })
    }
)


app.get('/placid',function(req,res){

    db.plac_id_find(function (result) {

            console.log(result[0]);

            res.send(result);
        }
    )
})

app.post('/pla_srch',function(req,res) {



    console.log("pla_slearch in server is " + req.body.search);
    var values ={
        search:req.body.search,



    };
    db.pla_srch(values,function(result) {
        console.log(result);
        if(result[0]!=null) {
            for (var rows of result) {
                console.log(rows.views);

            }

            res.send(result);

        }
        else{
            console.log("no match");
            res.send("no match");
        }
    })


})

app.get('/pla_all',function(req,res) {



    console.log("pla_search in server is ");

    db.pla_all(function(result) {
        for (var rows of result) {
            console.log(rows.views);

        }

        res.send(result);
    })


})

app.get('/pla_some',function(req,res) {



    console.log("pla_latest in server is ");

    db.pla_some(function(result) {
        for (var rows of result) {
            console.log(rows.views);

        }

        res.send(result);
    })


})






//signup

app.get('/id',function(req,res){

    db.id_find(function (result) {

            console.log(result[0]);

            res.send(result);
        }
    )
})

//mobile id
app.get('/mobileid',function(req,res){

    db.mobile_id_find(function (result) {

            console.log(result[0]);

            res.send(result);
        }
    )
})

app.post('/mob_srch',function(req,res) {



    console.log("mobile_search in server is " + req.body.search);
    var values ={
        search:req.body.search,



    };
    db.mob_srch(values,function(result) {
        console.log(result);
if(result[0]!=null) {
    for (var rows of result) {
        console.log(rows.views);

    }

    res.send(result);

}
else{
    console.log("no match");
    res.send("no match");
}
    })


})

app.get('/mob_all',function(req,res) {



    console.log("mobile_search in server is ");

    db.mob_all(function(result) {
        for (var rows of result) {
            console.log(rows.views);

        }

       res.send(result);
    })


})

app.get('/mob_some',function(req,res) {



    console.log("mobile_search in server is ");

    db.mob_some(function(result) {
        for (var rows of result) {
            console.log(rows.views);

        }

        res.send(result);
    })


})



//feeback
app.post('/feedback',function(req,res) {

        console.log("feedback in server is " + req.body.name+req.body.loc+req.body.view);
        var values = {
            id: req.body.id,
            name:req.body.name,
            e_id: req.body.e_id,
            view: req.body.view,
        };
        db.feedback(values,function(result) {
            res.send(result);
        })
    }
)


app.get('/feedback_id',function(req,res){

    db.feedback_id_find(function (result) {

            console.log(result[0]);

            res.send(result);
        }
    )
})





app.post('/verify', function (req, res) {
    //cloudinary.image("g86urzbajwbo7kkbxfi5", {width: 100, height: 150, crop: "fill"})
    console.log("verify in server.js and pswrd is " + req.body.pswrd);
    var ver = {
        name: req.body.name,
        pswrd: req.body.pswrd,
    }
    db.verify(ver, function (result) {
            console.log(result[0].password+"    "+md5(ver.pswrd));

            if (md5(ver.pswrd) == result[0].password) {
                res.send("password match")

            }
            else {
                res.send("donot match");
            }
        }
    )

});

app.post('/unique', function (req, res) {

    console.log("unique in server.js and user is " + req.body.user);
    var ver = {
        name: req.body.user,

    }
    db.unique(ver, function (result) {

        console.log(result[0].count);
            if (result[0].count!=0) {

                res.send("user already exists")

            }
            else {
                res.send("user can go ahead");
            }
        }
    )

});

/*




 */


app.post('/signup',function(req,res) {



        console.log("signup in server is " + req.body.name+req.body.emailid+req.body.no+req.body.pswd);
    var values ={
        id:req.body.id,
        name: req.body.name,
        email:req.body.emailid,
        phone: req.body.no,
        hash:md5(req.body.pswd),


    };
console.log("passsword hash is "+values.hash);
    db.signup(values,function(result) {
        res.send(result);
    })
    }
)





app.post('/login',function(req,res) {

        console.log("login in server is " + req.body.name+req.body.pass);

        res.send("login in server");
    }
)
