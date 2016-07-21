class repertoireController {

    constructor(repertoireService) {
        this.repertoireService = repertoireService;
        this.load();
    }

    load() {
        this.repertoireService.getAll().then((res) => {
            this.telos = res.data;
        })
    }

    create() {
        this.repertoireService.create(this.new).then(() => {
            this.new = '';
            this.load()
        })
    }

    update(telo) {
        this.repertoireService.update(telo._id, telo.nom, telo.telephone).then(() => {
            this.load()
        })
    }

    delete(telo) {
        this.repertoireService.delete(telo).then(() => {
            this.load()
        })
    }

}
