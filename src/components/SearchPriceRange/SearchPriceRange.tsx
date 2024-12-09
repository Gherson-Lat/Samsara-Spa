import { useState } from "react";
import { GrFormDown, GrTag, GrFormUp } from "react-icons/gr";

export function SearchPriceRange() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative nb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer "
             onClick={() => setIsOpen(!isOpen)}
             >
        <GrTag/>

        <div>
          <p></p>
          <p className="text-xs">Costos SPA</p>
        </div>
        
        {isOpen? (
            <GrFormUp />
        
        ) : ( 
            <GrFormDown/>
        )}
        
        {isOpen && (
        
        <div className="absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0">
            <p>Sencillo</p>
            <p>Exclusivo</p>
            <p>Golden prime</p>
         </div>
        )}
     </div>
        
 )
}