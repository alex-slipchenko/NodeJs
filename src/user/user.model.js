class userModel {
    find = (id) => {
        return new Promise(res => res({
            id,
            name: 'Alex',
            dataBirth: new Date(),
        }))
    }
    createUser = (body) => {
        return new Promise(res => res({
            id: +new Date(),
            ...body
        }))
    }
    deleteIdUser = (id) => {
        return new Promise(res => res({
            code: 'ok'
        }))
    }
    findIdUseAndUpdate = (id, body) => {
        return new Promise(res => res({
            id: id,
            ...body,
        }))
    }
}

module.exports = new userModel();