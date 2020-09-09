import React from 'react';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {Feather, Ionicons, AntDesign} from '@expo/vector-icons'
import ItemList from '../datas/itemList'
import RecommendedList from '../datas/recommended'
import RealLifeList from '../datas/realLife'


interface ItemProps {
  item1: typeof ItemList[0];
  item3: typeof RecommendedList[0];
  item5: typeof RealLifeList[0];

}

const Container = styled.SafeAreaView`
flex:1;
background:#000;
`;

const ContainerDetails = styled.ScrollView``;

const Poster = styled.ImageBackground`
width:100%;
height:350px;

`;

const PosterMin = styled.Image`
width:250px;
height:160px;
margin-top:40px;
align-self:center;
`;

const Gradient = styled(LinearGradient)`
    height:100%;
`;


const Tags = styled.View`
justify-content:center;
margin-top:20px;
flex-direction:row;
`;

const MenuTag = styled.Text`
color:#fff
padding:0 8px;
font-size:16px;
font-weight:600;
`;

const Separator = styled.View`
width:3px;
height:6px;
background:#e8e8e8;
margin:6px 0;
border-radius:3px;
`;

const Classification = styled.View`
width:20px;
height:18px;
border-radius:3px;
background:red;
align-items:center;
`;
const TextClassification = styled.Text`
color:white;`;

const Hd = styled.View`
width:35px;
height:20px;
border-radius:6px;
border:2px;
border-color:#fff
align-items:center;
justify-content:center;
`;
const TextHd = styled.Text`
color:#fff;
text-align:center;
`;
const Label = styled.Text`
color:#fff;
text-align:center;
font-weight:bold;
font-size:16px;
margin-top:10px;
`;
const LabelTitle = styled.Text`
color:#fff;
font-weight:bold;
font-size:16px;
margin-top:10px;
padding:10px;`;

const Play = styled.TouchableOpacity`
flex-direction:row;
background:red;
width:95%;
height:35px;
border-radius:2px;
align-items:center;
justify-content:center;
align-self:center;
margin-top:20px;
`;

const TextButtonPlay = styled.Text`
font-size:18px;
font-weight:bold;
padding-left:5px;
color:white;
`;
const Relevant = styled.Text`
color:#59d07c;
font-size:14px;
font-weight:bold;
`;
const Bio = styled.View`
margin-top:-35px;
`;
const TextBio = styled.Text`
color:white;
text-align:justify;
padding:10px;
margin-top:-10px;
`;
const MenuHero = styled.View`
width:95%;
margin-top:15px;
flex-direction:row;
justify-content:space-between;
align-items:center;
align-self:center;
margin-bottom:15px;
`;

const Button = styled.TouchableOpacity`
align-items: center;
`;
const TextButton = styled.Text`
color:#fff;
font-size:13px;
margin-top:3px;
`;
const ContainerMovies = styled.View`
padding: 5px 0;
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


const Detail: React.FC = ({route}) => {
  const ListItem: React.FC<ItemProps> = ({item1}) =>(
    <MovieCard key={item1.id_movie}>
         <Button onPress={()=>navigation.navigate('Detail', {title: item1.title, image: item1.image, relevant: item1.Relevant, year: item1.Year, age: item1.Age, type: item1.type, info: item1.Info, temps: item1.Temps, description: item1.Description})}>
             <MoviePoster resizeMode='contain' source={item1.image} />
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
const ListRealLife: React.FC<ItemProps> = ({item5}) =>(
  <MovieCard key={item5.id_movie}>
      <Button onPress={()=>console.warn(item5.title)}>
          <MoviePoster resizeMode='contain' source={item5.image} />
      </Button>
  </MovieCard>
)
    return(
        <Container>
          <ContainerDetails>
            <Poster source={route.params.image} blurRadius={12}>
              <Gradient
                  locations={[0, 0.2, 0.6, 0.93]}
                  colors={[
                      'rgba(0,0,0,0.5)',
                      'rgba(0,0,0,0)',
                      'rgba(0,0,0,0)',
                      'rgba(0,0,0,1)'
                  ]}>
                  <PosterMin source={route.params.image} resizeMode='contain' />
                  <Tags>
                    <Relevant>{route.params.relevant} relevante</Relevant>
                    <MenuTag>{route.params.year}</MenuTag>
                    <Classification><TextClassification>19</TextClassification></Classification>
                    <MenuTag>{route.params.type == 'filme' ? '' : route.params.temps}</MenuTag>
                    <Hd><TextHd>HD</TextHd></Hd>
                  </Tags>
                  <Label>{route.params.info}</Label>
                  <Play>
                    <Ionicons name='ios-play' size={26} color='white' />
                    <TextButtonPlay>Assistir</TextButtonPlay>
                  </Play>
              </Gradient>
            </Poster>
            <Bio>
            <LabelTitle>{route.params.title}</LabelTitle>
                  <TextBio>
                  {route.params.description}
                  </TextBio>
            </Bio>
            <MenuHero>
              <Button>
                  <Feather name='plus' size={26} color='#fff'  />
                  <TextButton>Minha lista</TextButton>
              </Button>
              <Button>
                  <AntDesign name='like2' size={26} color='#fff'  />
                  <TextButton>Classifique</TextButton>
              </Button>
              <Button>
                <Feather name='send' size={26} color='#fff'  />
                <TextButton>Compartilhe</TextButton>
              </Button>
              <Button>
                <Feather name='download' size={26} color='#fff'  />
                <TextButton>Download</TextButton>
              </Button>
          </MenuHero>
          <LabelTitle>Títulos semelhantes</LabelTitle>
          <ContainerMovies>
                <MovieScroll horizontal>
                    {ItemList.map(item1 =>(
                        <ListItem key={item1.id_movie} item1={item1}/>
                    ))}
                </MovieScroll>
          </ContainerMovies>
          <ContainerMovies>
                <MovieScroll horizontal>
                    {RecommendedList.map(item3 =>(
                        <ListRecommended key={item3.id_movie} item3={item3}/>
                    ))}
                </MovieScroll>
          </ContainerMovies>
          <ContainerMovies>
                <MovieScroll horizontal>
                    {RealLifeList.map(item5 =>(
                        <ListRealLife key={item5.id_movie} item5={item5}/>
                    ))}
                </MovieScroll>
            </ContainerMovies>
          </ContainerDetails>
        </Container>
    )
}

export default Detail;