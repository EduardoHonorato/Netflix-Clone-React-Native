import React from 'react';
import {StatusBar, Dimensions} from 'react-native'
import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Movies from '../components/Movies'
import Originals from '../components/Originals'
import Previews from '../components/Previews'

const itemList = [
    require('../images/list/movie1.jpg'),
    require('../images/list/movie4.jpg'),
    require('../images/list/movie2.jpg'),

    require('../images/list/movie3.jpg'),
    require('../images/list/movie5.jpg'),
]

const preview = [
    require('../images/preview/movie1.jpg'),
    require('../images/preview/movie2.jpg'),
    require('../images/preview/movie3.jpg'),
    require('../images/preview/movie4.jpg'),
    require('../images/preview/movie5.jpg'),
    require('../images/preview/movie6.jpg'),

]

const recommended = [
    require('../images/recommended/movie1.jpg'),
    require('../images/recommended/movie2.jpg'),
    require('../images/recommended/movie3.jpg'),
    require('../images/recommended/movie4.jpg'),
    require('../images/recommended/movie5.jpg'),

]

const lifeReal = [
    require('../images/life-real/movie1.jpg'),
    require('../images/life-real/movie2.jpg'),
    require('../images/life-real/movie3.jpg'),
    require('../images/life-real/movie4.jpg'),
    require('../images/life-real/movie5.jpg'),

]

const comedy = [
    require('../images/comedy/movie1.jpg'),
    require('../images/comedy/movie2.jpg'),
    require('../images/comedy/movie3.jpg'),
    require('../images/comedy/movie4.jpg'),

]

const originals = [
    require('../images/originals/movie1.jpg'),
    require('../images/originals/movie2.jpg'),
    require('../images/originals/movie3.jpg'),
    require('../images/originals/movie4.jpg'),
    require('../images/originals/movie5.jpg'),


]

const Container = styled.ScrollView`
flex:1;
background:#000;
`;

const Poster = styled.ImageBackground`
width:100%;
height:${(Dimensions.get('window').height *81)/100}px;
`;

const Gradient = styled(LinearGradient)`
    height:100%;
`;

const Home = () =>{
    return(
        <>
        <StatusBar 
            translucent
            backgroundColor='transparent'
            barStyle='light-content'
        />
        <Container>
            <Poster source={require('../images/poster.jpg')}>
                <Gradient
                    locations={[0, 0.2, 0.6, 0.93]}
                    colors={[
                        'rgba(0,0,0,0.5)',
                        'rgba(0,0,0,0)',
                        'rgba(0,0,0,0)',
                        'rgba(0,0,0,1)'
                    ]}
                >
                    <Header/>
                    <Hero/>
                </Gradient>
            </Poster>
            <Previews label='Prévias' item={preview}/>
            <Movies label='Minha lista' item={itemList}/>
            <Movies label='Filmes e séries recomendados' item={recommended}/>
            <Originals label='Originais Netflix' item={originals}/>
            <Movies label='Filmes baseados na vida real' item={lifeReal}/>
            <Movies label='Comédia' item={comedy}/>

        </Container>
        </>
        
    )
}

export default Home;