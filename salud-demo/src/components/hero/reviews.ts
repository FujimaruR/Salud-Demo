export interface Review {

    id:number;

    name:string;

    text:string;

    rating:number;

}

export const reviews:Review[]=[

    {
        id:1,
        name:"Carlos M.",
        rating:5,
        text:"Excelente atención. Todo el personal fue muy amable y profesional."
    },

    {
        id:2,
        name:"Andrea G.",
        rating:5,
        text:"Mi tratamiento fue mucho más cómodo de lo que esperaba."
    },

    {
        id:3,
        name:"Luis R.",
        rating:5,
        text:"Las instalaciones son impecables y el servicio excelente."
    },

    {
        id:4,
        name:"Mariana T.",
        rating:5,
        text:"Mi sonrisa cambió completamente. Muy recomendados."
    },

    {
        id:5,
        name:"Daniel H.",
        rating:5,
        text:"La mejor clínica dental que he visitado."
    },

    {
        id:6,
        name:"Fernanda C.",
        rating:5,
        text:"Muy puntuales y con tecnología de primer nivel."
    }

];