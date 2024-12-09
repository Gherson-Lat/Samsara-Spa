export const fadeIn = () => {

    return {

        hidden:{ 
        
        y: 100,
        
        opacity: 0,
        
        x: 0,
        
        transition: {
        
        type: "tween",
        
        duration: 6.8,
        
        delay: 0.8,
        
        ease: [0.25],
        
        },
        
        },
        
        visible: {
        
        у: 0,
        
        x: 0,
        
        opacity: 1,
        
        transition: {
        
        type: "tween",
        
        duration: 0.7,
        
        delay: 0.7,
        
        ease: [0.25, 0.25, 0.25, 0.75],

         },
        },

    };

};

