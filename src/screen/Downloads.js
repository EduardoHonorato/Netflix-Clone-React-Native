import React from 'react';
import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons'

const Container = styled.SafeAreaView`
flex:1;
background:#000;
`;


const Label = styled.Text`
color:#F1F1F1;
font-size:18px;
margin: 20px 0 5px 10px;
font-weight:bold;
text-align:center;
`;

const LabelText = styled.Text`
color:#F1F1F1;
font-size:16px;
margin: 5px 0 15px 10px;
font-weight:400;
text-align:center;
`;

const IconDownload = styled.View`
width:150px;
height:150px;
background:#121212;
border-radius:75px;
align-items:center;
justify-content:center;
align-self:center;
margin-top:150px;
`;
const Play = styled.TouchableOpacity`
flex-direction:row;
background:#fff;
width:70%;
height:40px;
border-radius:2px;
align-items:center;
justify-content:center;
align-self:center;

`;

const TextButtonPlay = styled.Text`
font-size:18px;
font-weight:bold;
padding-left:5px;
`;


const Downloads = ({}) => {       
    return(
        <>
        <Container>
           <IconDownload>
              <Feather name="download" size={80} color='#4d4d4d'/>
           </IconDownload>
           <Label>Nunca fique sem a Netflix</Label>
           <LabelText>Você pode baixar filmes e séries para ter a liberdade de assistir até quando estiver offline.</LabelText>
            <Play>
                <TextButtonPlay>Veja o que você pode baixar</TextButtonPlay>
            </Play>
        </Container>
        </>
        
    )
}

export default Downloads;