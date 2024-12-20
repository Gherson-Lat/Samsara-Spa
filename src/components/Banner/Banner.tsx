import { FloatedSearch } from "../FloatedSearch";

export function Banner() {
    return (
        <div className="container ralative mx-auto">
            <div className="pt-20 md:pt-0 min-h-[80vh] bg-banner bg-no-repeat  bg-cover bg-center  rounded-3xl relative flex flex-col  items-center  md:justify-center">
                <div className="max-w-3xl text-center  text-white">
                    <h2 className=" text-5xl  font-semibold ">Tu bienestar es nuestra prioridad, disfruta de una experiencia única</h2>
                    <p className="mt-2 text-xl md:mt-8">
                    Descubre la paz interior con nuestros tratamientos rejuvenecedores
                    </p>
                    
                </div>
                <FloatedSearch/>
            </div>

        </div>
       )
}
