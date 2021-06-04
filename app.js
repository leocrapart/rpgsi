console.log("hello vue");

const app = Vue.createApp({
    data() {
        return {
            jeux: [
            {
                nom: "exploding kitten",
                description: "boom les petits chats",
                disponible: true,
            },
            {
                nom: "monopoly",
                description: "boom les petits jeankevin",
                disponible: true,
            },
            {
                nom: "croque carotte",
                description: "miam miam les carottes",
                disponible: false,
            }
            ]
            
        }
    },
    methods: {
        prendre(nom) {
            console.log(`je prends le jeu ${nom}`);
            const jeu = this.recupererLeJeu(nom)
            console.log(jeu.description);
            console.log(jeu.disponible?"dispo":"pas dispo")
            this.inverserLaDispo(nom)
        },

        rendre(nom) {
            console.log(`je rends le jeu ${nom}`);
            const jeu = this.recupererLeJeu(nom)
            console.log(jeu.description);
            console.log(jeu.disponible?"dispo":"pas dispo")
            this.inverserLaDispo(nom)
        },

        recupererLeJeu(nom) {
            const jeux = this.jeux
            for (const i in jeux) {
                if (jeux[i].nom == nom) {
                    return jeux[i]
                }
            }
        },

        inverserLaDispo(nom) {
            const index = this.trouverIndex(nom)
            this.jeux[index].disponible = !this.jeux[index].disponible
        },

        trouverIndex(nom) {
            const jeux = this.jeux
            for (const i in jeux) {
                if (jeux[i].nom == nom) {
                    return i
                }
            }
        }


    }
})

app.mount("#app")