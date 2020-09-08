import React from 'react'
import {Dimensions} from 'react-native'
import styled from 'styled-components/native';


const Container = styled.View`
padding: 5px 0;
`;

const Label = styled.Text`
color:#fff;
font-size:24px;
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
width: ${(Dimensions.get('window').width *40)/100}px;
height:290px;
`;

const Button = styled.TouchableOpacity``;

const Movies = ({label, item}) =>{
    return(
        <Container>
            <Label>{label}</Label>
            <MovieScroll horizontal>
                {item.map((movie, item)=>{
                    return(
                        <MovieCard key={String(item)}>
                            <Button><MoviePoster resizeMode='contain' source={movie} /></Button>
                        </MovieCard>
                    )
                })}
            </MovieScroll>
        </Container>
    )
}

export default Movies;