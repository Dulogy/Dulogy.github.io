let exp = require('express');
let app = exp();
app.get('/:id/:name',function(req,res){
    res.send(" your id is " + req.params.id +" name is "+req.params.name);
}).listen(3000);