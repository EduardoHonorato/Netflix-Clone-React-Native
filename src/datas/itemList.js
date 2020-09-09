import theWitcherImg from '../images/list/movie1.jpg'
import mundoMisterioImg from '../images/list/movie4.jpg'
import cobraKaiImg from '../images/list/movie2.jpg'
import oAnjoDoMossad from '../images/list/movie3.jpg'
import sennaImg from '../images/list/movie5.jpg'

export default [
    {
        id_movie: String(Math.random()),
        image: theWitcherImg,
        title: 'The Witcher',
        Description:'Ao chegar à cidade de Blaviken, Geralt encontra pessoas hostis e um mago esperto. O mundo de Ciri vira de pernas para o ar quando Nilfgaard se prepara para atacar Cintra.',
        Relevant: '88%',
        Temps: '1 temporada',
        Year: '2019',
        Age: '18',
        Info: 'Agora é oficial, em breve mais uma temporada',
        type:'serie'
    },
    {
        id_movie: String(Math.random()),
        image: mundoMisterioImg,
        title: 'Mundo Mistério',
        Description:'Felipe Castanhari explora os mistérios da ciência e da história para provar que aprender pode ser divertido. Ele é auxiliado pela doutora Tay, o zelador Betinho e também por B.R.I.G.G.S., uma inteligência artificial.',
        Relevant: '98%',
        Temps: '1 temporada',
        Year: '2020',
        Age: '12',
        Info: '',
        type:'serie'
    },
    {
        id_movie: String(Math.random()),
        image: cobraKaiImg,
        title: 'Cobra Kai',
        Description:'Cobra Kai é uma websérie americana de comédia dramática, baseada no primeiro filme da trilogia Karate Kid, criada por Robert Mark Kamen, que estreou em 2 de maio de 2018 no YouTube Premium.',
        Relevant: '78%',
        Temps: '2 temporadas',
        Year: '2020',
        Age: '16',
        Info: '',
        type:'serie'
    },
    {
        id_movie: String(Math.random()),
        image: oAnjoDoMossad,
        title: 'O anjo do Mossad',
        Description:'O Anjo é um filme de suspense espião israelense-americano, dirigido por Ariel Vromen e estrelado por Marwan Kenzari e Toby Kebbell, entre outros. É uma adaptação do livro de não ficção O anjo: o espião egípcio que salvou Israel, escrito por Uri Bar-Joseph',
        Relevant: '69%',
        Temps: '0',
        Year: '2018',
        Age: '16',
        Info: '',
        type:'filme'
        
    },
    {
        id_movie: String(Math.random()),
        image: sennaImg,
        title: 'Senna',
        Description:'Um documentário sobre o maior piloto brasileiro de Fórmula 1, Ayrton Senna, que ganhou o campeonato mundial três vezes antes de morrer tragicamente aos 34 anos de idade.',
        Relevant: '94%',
        Temps: '0',
        Year: '2010',
        Age: '14',
        Info: '',
        type:'filme'
    }
]