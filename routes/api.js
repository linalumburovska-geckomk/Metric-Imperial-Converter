/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      //Validation 
      if(initNum=='Invalid Number'){
        if(initUnit=='Invalid Unit'){
          res.json('Invalid Number and Unit');
        }
        res.json('Invalid Number');
      }
      if(initUnit=='Invalid Unit'){
        res.json('Invalid Unit')
      }

      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      var data = {

        "initNum": initNum,
        "initUnit": initUnit,
        "returnNum": returnNum,
        "returnUnit": returnUnit,
        "string": toString

      }
      res.json(data);
    });
    
};
