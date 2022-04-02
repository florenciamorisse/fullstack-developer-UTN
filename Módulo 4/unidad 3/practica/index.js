var moment= require('moment');
moment.locale('es');


console.log('Nací '+ moment("19790122", "YYYYMMDD").fromNow());
