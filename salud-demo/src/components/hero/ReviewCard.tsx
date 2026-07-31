import { Star } from "lucide-react";
import type { Review } from "./reviews";

interface Props{

    review:Review;

    className?:string;

}

export default function ReviewCard({

    review,
    className

}:Props){

    return(

        <div
            className={`
                rounded-3xl
                border
                border-white/20
                bg-white/10
                p-6
                backdrop-blur-xl
                shadow-2xl
                transition-all
                duration-700

                ${className}
            `}
        >

            <div className="mb-4 flex">

                {

                    [...Array(review.rating)].map((_,index)=>

                        <Star
                            key={index}
                            size={18}
                            fill="#FACC15"
                            color="#FACC15"
                        />

                    )

                }

            </div>

            <p className="text-white leading-7">

                "{review.text}"

            </p>

            <div className="mt-5">

                <h4 className="font-semibold text-white">

                    {review.name}

                </h4>

                <span className="text-sm text-gray-300">

                    Paciente verificado

                </span>

            </div>

        </div>

    );

}