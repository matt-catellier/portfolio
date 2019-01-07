/**
 * Created by matthewcatellier on 2016-03-01.
 */

 module.exports = {
     scale: function(div, scale, time, effect) {
         div.transition({ scale: scale}, time, effect);
     },
     zero: function(opt) {
        if(!opt) {
            $(this).transition({ scale: 0 });
        } else if(opt.hasOwnProperty('div')) {
            opt.div.transition({ scale: 0});
        }else if(opt.hasOwnProperty('div') && opt.hasOwnProperty('time') && opt.hasOwnProperty('effect') ) {
            opt.div.transition({ scale: 0}, opt.time, opt.effect );
        } else {
           console.log('Error in scale.zero opt parameter: ' + opt);
        }
    },

    one: function(opt) {
       if(!opt) {
           $(this).transition({ scale: 1 });
       }else if(opt.hasOwnProperty('div')) {
           opt.div.transition({ scale: 1});
       } else if(opt.hasOwnProperty('div') && opt.hasOwnProperty('time') && opt.hasOwnProperty('effect') ) {
           opt.div.transition({ scale: 1}, opt.time, opt.effect);
       } else {
          console.log('Error in scale.one opt parameter: ' + opt);
       }
   },

     // will blowup div and all its children
     ten: function(opt) {
         if(!opt) {
             $(this).transition({ scale: 10 });
         }else if(opt.hasOwnProperty('div')) {
             opt.div.transition({ scale: 10 });
         } else {
            console.log('Error in scale.ten opt parameter: ' + opt);
         }
     },
     // will blowup div and all its children
     twenty: function(opt) {
         if(!opt) {
             $(this).transition({ scale: 20 });
         }else if(opt.hasOwnProperty('div')) {
             opt.div.transition({ scale: 20 });
         } else {
            console.log('Error in scale.twenty opt parameter: ' + opt);
         }
     },

     // will blowup div and all its children
     forty: function(opt) {
         if(!opt) {
             $(this).transition({ scale: 40 });
         }else if(opt.hasOwnProperty('div')) {
             opt.div.transition({ scale: 40 });
         } else if(opt.hasOwnProperty('div') && opt.hasOwnProperty('time') && opt.hasOwnProperty('effect') ) {
             opt.div.transition({ scale: 40}, opt.time, opt.effect);
         } else {
             console.log('Error in scale.forty opt parameter: ' + opt);
         }
     },

     expandMenu: function(div, time, effect) {
         div.transition({ scale: [100, 300] }, time, effect );
     }
 };
