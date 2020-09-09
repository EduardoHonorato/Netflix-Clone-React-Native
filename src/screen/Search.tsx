import React from 'react';
import styled from 'styled-components/native';
import HeaderSearch from '../components/HeaderSearch'

import {Entypo} from '@expo/vector-icons'
import ItemList from '../datas/itemList'


interface ItemProps {
    item1: typeof ItemList[0];
  }


const Container = styled.ScrollView`
flex:1;
background:#000;
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

const LabelText = styled.Text`
color:#F1F1F1;
font-size:14px;
margin: 0 0 5px 10px;
font-weight:300;
`;

const MovieScroll = styled.ScrollView`
padding-left:10px;
`;

const MovieCard = styled.View`
padding-right:9px;
padding:5px;
`;

const MoviePoster = styled.Image`
width: 120px;
height:150px;
`;

const Button = styled.TouchableOpacity`
flex-direction:row;
align-items:center;
justify-content:space-between;
`;



const Search = ({}) => {


        const ListItem: React.FC<ItemProps> = ({item1}) =>(
           <MovieCard key={item1.id_movie}>
                <Button onPress={()=>console.warn(item1.title)}>
                    <MoviePoster resizeMode='cover' source={item1.image} />
                    <LabelText>{item1.title}</LabelText>
                    <Entypo name='triangle-right' size={24} color='#fff' />

                </Button>
            </MovieCard>
        )

       
    return(
        <>
    
        <Container>
        <HeaderSearch/>
            <ContainerMovies>
                <Label>Busca Populares</Label>
                <MovieScroll>
                    {ItemList.map(item1 =>(
                        <ListItem key={item1.id_movie} item1={item1}/>
                    ))}
                </MovieScroll>
            </ContainerMovies>

           

        </Container>
        </>
        
    )
}

export default Search;