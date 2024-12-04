//itens
const menu = [
    {
        id: 1,
        title: "Filé a parmegiana",
        category: "Almoço",
        price: 35.90,
        img: "./img/Parmegiana.jpg",
        desc: 'Lorem ipsum dolor sit amet. Ut vero dicta est voluptatem eius qui sunt omnis et facere esse vel delectus autem. Ut delectus praesentium et vero sequi qui debitis consequatur ut libero aliquid aut illo iusto est unde quaerat.'
    },
    {
        id: 2,
        title: "Feijoada",
        category: "Almoço",
        price: 42.50,
        img: "./img/Feijoada.webp",
        desc: 'Lorem ipsum dolor sit amet. Ut vero dicta est voluptatem eius qui sunt omnis et facere esse vel delectus autem. Ut delectus praesentium et vero sequi qui debitis consequatur ut libero aliquid aut illo iusto est unde quaerat.'
    },
    {
        id: 3,
        title: "File de frango a milanesa",
        category: "Almoço",
        price: 28.90,
        img: "./img/Filedefrangoamilanesa.jpg",
        desc: 'Lorem ipsum dolor sit amet. Ut vero dicta est voluptatem eius qui sunt omnis et facere esse vel delectus autem. Ut delectus praesentium et vero sequi qui debitis consequatur ut libero aliquid aut illo iusto est unde quaerat.'
    },
    {
        id: 4,
        title: "Pão de queijo",
        category: "Café da manhã",
        price: 12.90,
        img: "./img/Paodequeijo.webp",
        desc: 'Lorem ipsum dolor sit amet. Ut vero dicta est voluptatem eius qui sunt omnis et facere esse vel delectus autem. Ut delectus praesentium et vero sequi qui debitis consequatur ut libero aliquid aut illo iusto est unde quaerat.'  
    },
    {
        id: 5,
        title: "Cappucino",
        category: "Café da manhã",
        price: 7.80,
        img: "./img/cappuccino.webp",
        desc: 'Lorem ipsum dolor sit amet. Ut vero dicta est voluptatem eius qui sunt omnis et facere esse vel delectus autem. Ut delectus praesentium et vero sequi qui debitis consequatur ut libero aliquid aut illo iusto est unde quaerat.'
    },
    {
        id: 6,
        title: "Misto quente",
        category: "Café da manhã",
        price: 11.50,
        img: "./img/mistoquente.jpg",
        desc: 'Lorem ipsum dolor sit amet. Ut vero dicta est voluptatem eius qui sunt omnis et facere esse vel delectus autem. Ut delectus praesentium et vero sequi qui debitis consequatur ut libero aliquid aut illo iusto est unde quaerat.'
    },
    {
        id: 7,
        title: "Soda Italiana",
        category: "Refrescos",
        price: 14.00,
        img: "./img/Sodaitaliana.jpg",
        desc: 'Lorem ipsum dolor sit amet. Ut vero dicta est voluptatem eius qui sunt omnis et facere esse vel delectus autem. Ut delectus praesentium et vero sequi qui debitis consequatur ut libero aliquid aut illo iusto est unde quaerat.'
    },
    {
        id: 8,
        title: "Milk Shake",
        category: "Refrescos",
        price: 18.70,
        img: "./img/milkshake.jpg",
        desc: 'Lorem ipsum dolor sit amet. Ut vero dicta est voluptatem eius qui sunt omnis et facere esse vel delectus autem. Ut delectus praesentium et vero sequi qui debitis consequatur ut libero aliquid aut illo iusto est unde quaerat.'
    },
    {
        id: 9,
        title: "Limonada",
        category: "Refrescos",
        price: 10.90,
        img: "./img/limonada.webp",
        desc: 'Lorem ipsum dolor sit amet. Ut vero dicta est voluptatem eius qui sunt omnis et facere esse vel delectus autem. Ut delectus praesentium et vero sequi qui debitis consequatur ut libero aliquid aut illo iusto est unde quaerat.'
    },
];

const sectionCenter = socument.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', function(){
   let displayMenu = menu.map(function(item){
    console.log(item);

return item;
   });
   console.log(displayMenu);
});

