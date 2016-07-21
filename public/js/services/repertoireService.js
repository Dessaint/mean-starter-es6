class repertoireService {

    constructor($http) {
        this.$http = $http;
    }

    create(data) {
        return this.$http.post('/api/telos', 
            data
        )
    }

    getAll() {
        return this.$http.get('/api/telos')
    }

    getOne(id) {
        return this.$http.get('/api/telos/' + id)
    }

    update(id, data) {
        return this.$http.put('/api/telos/' + id, 
            data
        )
    }

    delete(id) {
        return this.$http.delete('/api/telos/' + id)
    }

}
