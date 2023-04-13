let productsOriginal = [
    {
        id: '1',
        photo: 'https://img.freepik.com/free-photo/close-up-of-a-person-writing-on-notepad-with-pencil-against-pink-background_23-2147979084.jpg?size=626&ext=jpg',
        category: 'tehnika',
        name: 'Ноутбук Lenovo IdeaPad Gaming 3 15IHU6 Shadow Black',
        quantity: '3',
        price: '5000',
        description: 'Екран 15.6" IPS (1920x1080) Full HD 120 Гц, матовий / Intel Core i5-11320H (2.5 - 4.5 ГГц) / RAM 8 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без  / 2.25 кг /'
    },
    {
        id: '2',
        photo: 'https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/r/i/rich1_1_expert_p_5.jpg/w_600',
        category: 'tehnika',
        name: 'Ноутбук Lenovo Y50-70 Aluminum Black',
        quantity: '1',
        price: '20000',
        description: 'Максимум переваг Отримайте переваги в  за допомогою таких удосконалень, як на 30% збільшена сенсорна панель. Оцініть найвищу якість аудіосистеми Nahimic Audio. Вона розроблена спеціально для геймерів та забезпечує виняткове 7.1-канальне обємне звучання, щоб ви могли легко та максимально точно визначати положення противників на полі бою.'
    },
    {
        id: '3',
        photo: 'https://img.freepik.com/free-photo/close-up-of-a-person-writing-on-notepad-with-pencil-against-pink-background_23-2147979084.jpg?size=626&ext=jpg',
        category: 'tehnika',
        name: 'ARTLINE Gaming X33 v14',
        quantity: '3',
        price: '1500',
        description: 'Швидше, тихіше, холодніше Завдяки вдосконаленій системі охолодження, яка відводить на 41% більше тепла (120 Вт), ноутбук IdeaPad Gaming 3 Gen 6 працює швидше та менше гріється порівняно з попередніми поколіннями мобільних ПК. Потужні внутрішні компоненти вимагають значно серйознішого охолодження, яке забезпечується за рахунок використання до чотирьох теплових трубок і вдвічі більшої кількості вентиляційних отворів.'
    },
    {
        id: '4',
        photo: 'https://img.freepik.com/free-photo/close-up-of-a-person-writing-on-notepad-with-pencil-against-pink-background_23-2147979084.jpg?size=626&ext=jpg',
        category: 'tehnika',
        name: 'HP 350 G1 Grey (i7-4510U/RAM-8GB DDR3/SSD 256GB)',
        quantity: '8',
        price: '2215',
        description: 'Висока продуктивність та дивовижний час автономної роботи Якщо вам говорять, що висока продуктивність та довгий час автономної роботи несумісні, що продуктивний ноутбук обовязково має бути великим та важким, не вірте. Тепер ви зможете оцінити високу якість графіки сучасних довгий час автономної роботи тонкого та легкого ноутбука на базі нових мобільних процесорів AMD Ryzen 5000 серії H. Більше жодних компромісів'
    },
    {
        id: '5',
        photo: 'https://img.freepik.com/free-photo/close-up-of-a-person-writing-on-notepad-with-pencil-against-pink-background_23-2147979084.jpg?size=626&ext=jpg',
        category: 'tehnika',
        name: 'Ноутбук Dell Inspiron 7568 Gray',
        quantity: '7',
        price: '3500',
        description: 'Экран 15.6" IPS (1920x1080) Full HD 120 Гц, матовый / AMD Ryzen 5 5600H (3.3 - 4.2 ГГц) / RAM 8 ГБ / HHD 1 ТБ + SSD 256 ГБ / nVidia GeForce RTX 3050, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-кам'
    },
    {
        id: '6',
        photo: 'https://img.freepik.com/free-photo/close-up-of-a-person-writing-on-notepad-with-pencil-against-pink-background_23-2147979084.jpg?size=626&ext=jpg',
        category: 'tehnika',
        name: 'ARTLINE Gaming X33 v14',
        quantity: '9',
        price: '4500',
        description: 'ARTLINE Gaming — це ігровий персональний компютер, чиє покликання бути розважальним центром для будь-якого користувача. Під час створення моделей проводиться ретельний добір, оцінка можливостей і сумісність один з одним кожного компонента'
    }
];


class userModel {

    dowland = () => {
        return new Promise(res => res(productsOriginal));
    }

    find = (id) => {
        const index = productsOriginal.findIndex(obj => obj.id === id);
        return new Promise(res => res(productsOriginal[index]));
    }

    createUser = (body) => {
        let myNewId = +new Date();
        productsOriginal.push({
            id: myNewId.toString(),
            ...body
        })

        return new Promise(res => res(
            productsOriginal
        ))
    }

    deleteIdUser = (id) => {
        const index = productsOriginal.findIndex(obj => obj.id === id);
        index !== -1 ? productsOriginal.splice(index, 1) : null;
        return new Promise(res => res(
            { delete: 'Ok' }
        ))
    }

    findIdUseAndUpdate = (id, body) => {
        const index = productsOriginal.findIndex(obj => obj.id === id);
        if (index !== -1) {
            productsOriginal[index].photo = body.photo;
            productsOriginal[index].category = body.category;
            productsOriginal[index].name = body.name;
            productsOriginal[index].quantity = body.quantity;
            productsOriginal[index].price = body.price;
            productsOriginal[index].description = body.description;
        }

        return new Promise(res => res(productsOriginal))
    }
}

module.exports = new userModel();