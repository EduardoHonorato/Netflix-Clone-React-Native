import React from 'react'
import styled from 'styled-components/native';
import {FontAwesome} from '@expo/vector-icons'

const Container = styled.View`
align-items:center;
flex-direction:row;
justifyContent: space-between;
padding:45px 10px 0 10px
width:100%;
`;

const Logo = styled.Image`
width:20px;
height:40px;
`;

const Button = styled.TouchableOpacity``;


const Search = styled.View`
    background:gray;
    width:100%;
    height:30px;
    border-radius:5px;
    margin-bottom:5px;
    opacity:0.4;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    
`;

const Input = styled.TextInput.attrs({
    placeholderTextColor: "white",
    placeholderFontSize: 13
  })``;

const Header = () =>{
    return(
        <Container>
            <Search>
                <FontAwesome name='search' size={24} color='#ccc' />
                <Input placeholder='Buscar'/>
            </Search>
        </Container>
    )
}

export default Header;