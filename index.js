var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());


app.post('/',function(req,res){
   console.log(">>>> "+req.body);
   res.json('Thank You');
});

// app.listen(3000,function(){
//     console.log('Server running at http://127.0.0.1:3000/');
// });
module.exports = function(bp) {
   bp.hear(/GET_STARTED|hello|hi|test|hey|holla/i, (event, next) => {
    event.reply('#welcome') // See the file `content.yml` to see the block
  })

  // You can also pass a matcher object to better filter events
  bp.hear({
    type: /message|text/i,
    text: /exit|bye|goodbye|quit|done|leave|stop/i
  }, (event, next) => {
    event.reply('#goodbye', {
      // You can pass data to the UMM bloc!
      reason: 'unknown'
    })
  })
  bp.wit.actions['pizza_type'] = request => {
    return new Promise((resolve, reject) => {
      bp.logger.info('Get Weather called', request)
      // Do something here
      resolve(request.context)
    })
  }
  
  // You need to call this method once you are done implementing the Actions
  bp.wit.reinitializeClient()
}
