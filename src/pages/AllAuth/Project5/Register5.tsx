import React from 'react'
import styled from 'styled-components'
import { MdArticle } from 'react-icons/md'
import img from "../../../assets/Adeyinka-Alabi-2-Talent-homepage-150x150--n6m8DB.jpg"
import { Link, NavLink } from 'react-router-dom'

const Register5 = () => {
  return (
    <div>
        <Container>
            <Main>

                <Card>
                <Left>
                    <BackgroundImage/>
                    <Background/>
                </Left>
              
                <Right>
                  

                    <Hold>
                        <Sub>
                    <BigText>Create Account </BigText>
                    <SmallText>Make the world know the exciting interest</SmallText>

                    <ImageHolder>
                        <Image src={img}/>
                        <ImageInput/>
                        <ImageLabel>Upload Image</ImageLabel>
                    </ImageHolder>

                    <InputHolder>
                    <Input placeholder='Username'/>

                    </InputHolder>
                    <InputHolder>
                    
                    <Input placeholder='Email'/>

                    </InputHolder>
                    <InputHolder>
                    
                    <Input placeholder='Password'/>

                    </InputHolder>
                    <InputHolder>
                    
                    <Input placeholder='Confirm Password'/>

                    </InputHolder>

                    <Holder>
                    <div style={{display:"flex", alignItems: "center", justifyContent: "center", width: "100%"}}>
                <Button>Signup </Button>
                </div>
                        <TextHolder>
                            <Text>Don't have an Account? </Text>
                          
                            <Login to="/siginin5">Login</Login>
                           
                        </TextHolder>
                    </Holder>
                    </Sub>
                    </Hold>

                   
                </Right>

              
                </Card>
            </Main>
        </Container>
    </div>
  )
}

export default Register5
const Login = styled(Link)`
font-size: 13px;
font-weight: 800;
margin-left: 10px;
cursor: pointer;
text-decoration: none;
color: black;

`
const Text = styled.div`
font-size: 13px;
font-weight: 400;
`
const TextHolder = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
`
const Button = styled.button`
padding: 10px 50px;
background: black;
border: 0;
outline: none;
font-size: 14px;
font-family: Poppins;
cursor: pointer;
transition: all 350ms;
color: white;
margin: 10px 0;
align-self: center;
border-radius: 5px;
:hover{
    transform: scale(1.09);
}
`
const Holder = styled.div``
const Input = styled.input`
width: 250px;
height: 100%;
border: 0;
outline: none;
border-bottom: 1px solid #6b6b6b;
font-family: Poppins;
color: #6b6b6b;
caret-color: black;
`
const InputTitle = styled.div``
const InputHolder = styled.div`
width: 90%;
height: 30px;
margin: 20px 0;
`
const ImageLabel = styled.label`
padding: 8px;
background-color: black;
color: white;
margin: 10px 0;
border-radius: 5px;
cursor: pointer;
`
const ImageInput = styled.input`
display: none;
`
const Image = styled.img`
width: 70px;
height: 70px;
border-radius: 50%;


`
const ImageHolder = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 10px;
`
const SmallText = styled.div`
font-size: 13px;
font-weight: 300;
width: 100%;
`
const BigText = styled.div`
font-size: 30px;
font-weight: 700;
`
const Sub = styled.div`

`
const Hold = styled.div`
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
align-items:center ;
`
const Logo = styled.div`
align-items: center;
display: flex;
font-size: 20px;
`
const Right = styled.div`
width: 40%;
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
padding: 20px;

`
const Background = styled.div`
width: 80px;
height: 80px;
background-color: rgba(225, 225, 225, 0.6);
backdrop-filter: calc(2px);
border-radius: 50%;
`
const BackgroundImage = styled.div`
background-color:#7F56D9 ;
width: 150px;
height: 150px;
border-radius: 50%;
`

const Left = styled.div`
width: 60%;
background-color: #F3F4F8;
padding: 10px;
display: flex;
align-items: center;
justify-content: center;
`
const Card = styled.div`
width: 70%;
height: 93%;
display: flex;



`
const Main = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: #E6E7EB;

`
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
align-items: center;

`