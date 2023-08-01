import React from 'react'
import styled from 'styled-components'
import { MdArticle } from 'react-icons/md'
import img from "../../../assets/Adeyinka-Alabi-2-Talent-homepage-150x150--n6m8DB.jpg"
import { NavLink } from 'react-router-dom'

const Register3 = () => {
  return (
    <div>
        <Container>
            <Main>

                <Card>
              
                <Right>
                    <Logo><MdArticle color='#7F56D9' size={30}/> Solar</Logo>

                    <Hold>
                        <Sub>
                    <BigText>Register Now </BigText>
                    <SmallText>Create an Account to be a part of the world interest</SmallText>

                    <ImageHolder>
                        <Image src={img}/>
                        <ImageInput/>
                        <ImageLabel>Upload Image</ImageLabel>
                    </ImageHolder>

                    <InputHolder>
                    <InputTitle>Username</InputTitle>
                    <Input/>

                    </InputHolder>
                    <InputHolder>
                    <InputTitle>Email</InputTitle>
                    <Input/>

                    </InputHolder>
                    <InputHolder>
                    <InputTitle>Password</InputTitle>
                    <Input/>

                    </InputHolder>
                    <InputHolder>
                    <InputTitle>Confirm Password</InputTitle>
                    <Input/>

                    </InputHolder>

                    <Holder>
                    <div style={{display:"flex", alignItems: "center", justifyContent: "center", width: "100%"}}>
                <Button>Signup </Button>
                </div>
                        <TextHolder>
                            <Text>Don't have an Account? </Text>
                            <NavLink to="/siginin3">
                            <Login>Login</Login>
                            </NavLink>
                        </TextHolder>
                    </Holder>
                    </Sub>
                    </Hold>

                   
                </Right>

                <Left>
                    <BackgroundImage/>
                    <Background/>
                </Left>
                </Card>
            </Main>
        </Container>
    </div>
  )
}

export default Register3
const Login = styled.div`
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
background: #7F56D9;
border: 0;
outline: none;
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
height: 25px;
border: 1px solid silver;
border-radius: 5px;
`
const InputTitle = styled.div``
const InputHolder = styled.div`
width: 90%;
height: 50px;
margin: 10px 0;
`
const ImageLabel = styled.label`
padding: 8px;
background-color: #b8b5b5;
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
`
const SmallText = styled.div`
font-size: 13px;
font-weight: 500;
width: 80%;
`
const BigText = styled.div`
font-size: 30px;
font-weight: 500;
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
width: 50%;
background-color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
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
width: 50%;
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
background-color: #D2D0DD;

`
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
align-items: center;

`