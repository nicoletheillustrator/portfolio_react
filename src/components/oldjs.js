
    window.addEventListener('load', (event) => {
        console.log('page is fully loaded');
        
        var loaderwolf = anime.timeline({
            easing: 'easeInOutQuart',
            duration: 1000,
            opacity: [
                {value: [0, 1], duration: 150}
            ],
 
         });
         
        loaderwolf 
           .add({
                targets: '.loader-wolf .path-a',
                strokeDashoffset: [anime.setDashoffset, 0],
                opacity: 1
            })
    
            .add({
        
                duration: 500,
                targets: '.path-c',
                strokeDashoffset: [anime.setDashoffset, 0],
                opacity: 1
            })
    
            .add({
             
                duration: 250,
                targets: '.path-b',
                strokeDashoffset: [anime.setDashoffset, 0],
                opacity: 1
            })
            
            .add ({
                delay: 150,
                targets: '.loader-wolf',
                keyframes : [
                    {scale: 1.1},
                    {scale: .5}
                ],
                easing: 'easeInOutQuint'
            });
        
 
        setTimeout(
            function(){
            pageRef.current.style.display = 'none';
           
            console.log("new loD")
            
        }, "4500")
      });

