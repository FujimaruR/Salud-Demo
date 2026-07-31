import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import ReviewCard from "./ReviewCard";
import { reviews } from "./reviews";

const randomReview = (exclude: number) => {
    let index = exclude;

    while (index === exclude) {
        index = Math.floor(Math.random() * reviews.length);
    }

    return index;
};

export default function FloatingReview() {

    const [top, setTop] = useState(0);
    const [middle, setMiddle] = useState(1);
    const [bottom, setBottom] = useState(2);

    useEffect(() => {

        const first = setInterval(() => {

            setTop(previous => randomReview(previous));

        },5000);

        const second = setInterval(() => {

            setMiddle(previous => randomReview(previous));

        },7000);

        const third = setInterval(() => {

            setBottom(previous => randomReview(previous));

        },9000);

        return ()=>{

            clearInterval(first);

            clearInterval(second);

            clearInterval(third);

        };

    },[]);

    return(

        <div className="relative hidden h-[650px] lg:block">

            {/* Card Superior */}

            <AnimatePresence mode="wait">

                <motion.div

                    key={top}

                    initial={{
                        opacity:0,
                        y:50,
                        rotate:-8
                    }}

                    animate={{
                        opacity:1,
                        y:0,
                        rotate:-3
                    }}

                    exit={{
                        opacity:0,
                        y:-40
                    }}

                    transition={{
                        duration:.6
                    }}

                    className="absolute right-10 top-0"

                >

                    <ReviewCard review={reviews[top]} />

                </motion.div>

            </AnimatePresence>

            {/* Card Centro */}

            <AnimatePresence mode="wait">

                <motion.div

                    key={middle}

                    initial={{
                        opacity:0,
                        x:-60,
                        rotate:8
                    }}

                    animate={{
                        opacity:1,
                        x:0,
                        rotate:2
                    }}

                    exit={{
                        opacity:0,
                        x:60
                    }}

                    transition={{
                        duration:.6
                    }}

                    className="absolute left-0 top-60"

                >

                    <ReviewCard review={reviews[middle]} />

                </motion.div>

            </AnimatePresence>

            {/* Card Inferior */}

            <AnimatePresence mode="wait">

                <motion.div

                    key={bottom}

                    initial={{
                        opacity:0,
                        y:70,
                        rotate:-5
                    }}

                    animate={{
                        opacity:1,
                        y:0,
                        rotate:-1
                    }}

                    exit={{
                        opacity:0,
                        y:-60
                    }}

                    transition={{
                        duration:.6
                    }}

                    className="absolute bottom-0 right-0"

                >

                    <ReviewCard review={reviews[bottom]} />

                </motion.div>

            </AnimatePresence>

        </div>

    );

}