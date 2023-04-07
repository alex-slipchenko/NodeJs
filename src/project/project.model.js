

class projectModel {
    getInfo = () => {
        return new Promise(res => res({
            name: 'Alex',
            pasword: '12345678',
        }))
    }
}

module.exports = new projectModel();