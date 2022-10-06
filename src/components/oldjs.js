
    window.onload = () => {

        var loaderwolf = anime.timeline({
           easing: 'easeInOutQuart',
           duration: 1500,
           opacity: [
               {value: [0, 1], duration: 200}
           ],

        });
        
       loaderwolf 
          .add({
               targets: '.loader-wolf .path-a',
               strokeDashoffset: [anime.setDashoffset, 0],
               opacity: 1
           })
   
           .add({
       
               duration: 1000,
               targets: '.path-c',
               strokeDashoffset: [anime.setDashoffset, 0],
               opacity: 1
           })
   
           .add({
            
               duration: 500,
               targets: '.path-b',
               strokeDashoffset: [anime.setDashoffset, 0],
               opacity: 1
           })
           
           .add ({
               delay: 300,
               targets: '.loader-wolf',
               keyframes : [
                   {scale: 1.1},
                   {scale: .5}
               ],
               easing: 'easeInOutQuint'
           });
       

   };

