const pagoController = {};
const stripe = require('stripe')('sk_test_0DMoDOpjVDieOjlIyMRcaXmi00JN3FEIBL');

pagoController.test = (req, res) => {
    res.send('prueba');
};

pagoController.pagoDeNumeros = async (req, res) => {
    console.log(req.body);
    // const custumer =  await stripe.customers.create(
    //     {
    //       description: req.body.descripcion,
    //     },
    //     function(err, customer) {
    //       // asynchronously called
    //       if(err){
    //           res.json('error');
    //       }else{
    //           console.log(customer);
              
    //       }
    //     }
    //   );
      
     await stripe.charges.create(
        {
          amount: req.body.monto,
          currency: req.body.moneda,
          source: req.body.stripeToken,
          description: req.body.descripcion,
        },
        function(err, charge) {
          if(err){
              console.log(err);
              
              res.json('error charge');
          }else{
              console.log('charge');
              res.json(charge);
          }
        }
      );
    
    // res.json('recivido');
};


module.exports = pagoController;