import {  AnimatePresence,motion  } from "framer-motion"

export function TransitionPage() {
    
    
    return (
        
       <AnimatePresence mode ="wait">

        <div>
            <motion.div
                className="fixed  top-0 bottom-0 right-full w-screen h-screen z-30  bg-secondary/70 opacity-50 "
                variants={TransitionVariantsPage}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.8 ,duration : 0.6 , ease : "easeInOut" }}
            >
            </motion.div>
            
            <motion.div
                className="fixed  top-0 bottom-0 right-full w-screen h-screen z-30  bg-secondary "
                variants={TransitionVariantsPage}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.4 ,duration : 0.6 , ease : "easeInOut" }}
            >
            </motion.div>

        </div>

        </AnimatePresence>


    )
}



const TransitionVariantsPage = {

        initial : { 
            x: "100%",
            width : "100%"
        
        },

        animate: { 
            x: "0%",
            width : "0%"
        
        },
        
        exit : { 
            x: [" 0%" , " 100%"],
            width : [ "0%", "100%" ]
        
        }


} 