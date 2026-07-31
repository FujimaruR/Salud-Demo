import { ChevronDown } from "lucide-react";

export default function ScrollIndicator(){

    return(

        <div
            className="
                absolute
                bottom-8
                left-1/2
                -translate-x-1/2
                text-white
                animate-bounce
            "
        >

            <ChevronDown size={34}/>

        </div>

    );

}