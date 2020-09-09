import React from 'react';
import {Dimensions} from 'react-native'
import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient'
import Header from '../components/Header'
import Hero from '../components/Hero'

import ItemList from '../datas/itemList'
import PreviewList from '../datas/preview'
import RecommendedList from '../datas/recommended'
import OriginalsList from '../datas/originals'
import RealLifeList from '../datas/realLife'
import CommedyList from '../datas/commedy'

interface ItemProps {
    item1: typeof ItemList[0];
    item2: typeof PreviewList[0];
    item3: typeof RecommendedList[0];
    item4: typeof OriginalsList[0];
    item5: typeof RealLifeList[0];
    item6: typeof CommedyList[0];
  }


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


const ContainerMovies = styled.View`
padding: 5px 0;
`;

const Label = styled.Text`
color:#F1F1F1;
font-size:18px;
margin: 0 0 5px 10px;
font-weight:bold;
`;

const MovieScroll = styled.ScrollView`
padding-left:10px;
`;

const MovieCard = styled.View`
padding-right:9px;
`;

const MoviePoster = styled.Image`
width: ${(Dimensions.get('window').width *28)/100}px;
height:150px;
`;

const Button = styled.TouchableOpacity``;

const ContainerOriginals = styled.View`
padding: 5px 0;
`;

const LabelOriginal = styled.Text`
color:#fff;
font-size:24px;
margin: 0 0 5px 10px;
font-weight:bold;
`;

const MoviePosterOriginal = styled.Image`
width: ${(Dimensions.get('window').width *40)/100}px;
height:290px;
`;

const MoviePosterPreviews = styled.Image`
width: ${(Dimensions.get('window').width *25)/100}px;
height:120px;
`;



const Home: React.FC = ({navigation}) => {


        const ListItem: React.FC<ItemProps> = ({item1}) =>(
           <MovieCard key={item1.id_movie}>
                <Button onPress={()=>navigation.navigate('Detail', {title: item1.title, image: item1.image, relevant: item1.Relevant, year: item1.Year, age: item1.Age, type: item1.type, info: item1.Info, temps: item1.Temps, description: item1.Description})}>
                    <MoviePoster resizeMode='contain' source={item1.image} />
                </Button>
            </MovieCard>
        )

        const ListPreview: React.FC<ItemProps> = ({item2}) =>(
            <MovieCard key={item2.id_movie}>
                <Button onPress={()=>console.warn(item2.title)}>
                    <MoviePosterPreviews resizeMode='contain' source={item2.image} />
                </Button>
            </MovieCard>
        )

        const ListRecommended: React.FC<ItemProps> = ({item3}) =>(
            <MovieCard key={item3.id_movie}>
                <Button onPress={()=>console.warn(item3.title)}>
                    <MoviePoster resizeMode='contain' source={item3.image} />
                </Button>
            </MovieCard>
        )

        const ListOriginals: React.FC<ItemProps> = ({item4}) =>(
            <MovieCard key={item4.id_movie}>
                <Button onPress={()=>console.warn(item4.title)}>
                    <MoviePosterOriginal resizeMode='contain' source={item4.image} />
                </Button>
            </MovieCard>
        )

        const ListRealLife: React.FC<ItemProps> = ({item5}) =>(
            <MovieCard key={item5.id_movie}>
                <Button onPress={()=>console.warn(item5.title)}>
                    <MoviePoster resizeMode='contain' source={item5.image} />
                </Button>
            </MovieCard>
        )

        const ListCommedy: React.FC<ItemProps> = ({item6}) =>(
            <MovieCard key={item6.id_movie}>
                <Button onPress={()=>console.warn(item6.title)}>
                    <MoviePoster resizeMode='contain' source={item6.image} />
                </Button>
            </MovieCard>
        )
    return(
        <>
    
        <Container>
            <Poster source={require('../images/banner/banner-house-of-cards.jpg')}>
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

            <ContainerMovies>
                <Label>Prévias</Label>
                <MovieScroll horizontal>
                    {PreviewList.map(item2 =>(
                        <ListPreview key={item2.id_movie} item2={item2}/>
                    ))}
                </MovieScroll>
            </ContainerMovies>

            <ContainerMovies>
                <Label>Minha lista</Label>
                <MovieScroll horizontal>
                    {ItemList.map(item1 =>(
                        <ListItem key={item1.id_movie} item1={item1}/>
                    ))}
                </MovieScroll>
            </ContainerMovies>

            <ContainerMovies>
                <Label>Filmes e séries recomendados</Label>
                <MovieScroll horizontal>
                    {RecommendedList.map(item3 =>(
                        <ListRecommended key={item3.id_movie} item3={item3}/>
                    ))}
                </MovieScroll>
            </ContainerMovies>

            <ContainerOriginals>
                <LabelOriginal>Originais Netflix</LabelOriginal>
                <MovieScroll horizontal>
                    {OriginalsList.map(item4 =>(
                        <ListOriginals key={item4.id_movie} item4={item4}/>
                    ))}
                </MovieScroll>
            </ContainerOriginals>

            <ContainerMovies>
                <Label>Filmes baseados na vida real</Label>
                <MovieScroll horizontal>
                    {RealLifeList.map(item5 =>(
                        <ListRealLife key={item5.id_movie} item5={item5}/>
                    ))}
                </MovieScroll>
            </ContainerMovies>

            <ContainerMovies>
                <Label>Comédias</Label>
                <MovieScroll horizontal>
                    {CommedyList.map(item6 =>(
                        <ListCommedy key={item6.id_movie} item6={item6}/>
                    ))}
                </MovieScroll>
            </ContainerMovies>


        </Container>
        </>
        
    )
}

export default Home;