import React from 'react'
import {View, Text} from 'react-native'
import styled from 'styled-components/native';

const Container = styled.View`
align-items:center;
flex-direction:row;
justifyContent: space-between;
padding:45px 25px 0 25px
width:100%;
`;

const Logo = styled.Image`
width:20px;
height:40px;
`;

const Button = styled.TouchableOpacity``;


const Menu = styled.Text`
    font-size:18px;
    color:#fff;
    letter-spacing: 0.1px;
`;

const Header = () =>{
    return(
        <Container>
            <Button><Logo resizeMode='contain' source={require('../images/logo.png')}/></Button>
            <Button><Menu>Séries</Menu></Button>
            <Button><Menu>Filmes</Menu></Button>
            <Button><Menu>Minha lista</Menu></Button>
        </Container>
    )
}

export default Header;