import React from 'react'
import styled from 'styled-components'
import img from "../../../assets/signUp.svg"
import img1 from "../../../assets/Adeyinka-Alabi-2-Talent-homepage-150x150--n6m8DB.jpg"
import { Link } from 'react-router-dom'

const SignIn4 = () => {
  return (
    <div>
        <Container>
            <Main>
                <Left>
                    <Logo>Solar <span style={{fontSize: "13px", alignSelf: "flex-end"}}>TM</span></Logo>
                    <BackgroundImage src={img}/>
                    <Text>We are always here for you...!</Text>
                </Left>
                <Right>
                    <Sub>
                    <BigText>Welcome Back</BigText>
                    
                    <Div>
                       
                        <InputHolder>
                        <InputTitle>Email</InputTitle>
                        <Input placeholder='Email'/>

                        </InputHolder>
                        <InputHolder>
                        <InputTitle>Password</InputTitle>
                        <Input placeholder='Password'/>

                        </InputHolder>
                    
                    </Div>
                    <Button>Login</Button>
                    <TextHolder>
                        <Hold>Don't have an account?</Hold>
                        <Login to="/register4">SIGN UP</Login>
                    </TextHolder>
                    </Sub>


                </Right>
            </Main>
        </Container>
    </div>
  )
}

export default SignIn4
const Login = styled(Link)`
font-size: 13px;
margin-left: 10px;
color: #06AA5E;
font-weight: 700;
cursor: pointer;
text-decoration: none;
`
const Hold = styled.div`
font-size: 13px;
`
const TextHolder = styled.div`
display: flex;
`
const Button = styled.button`
padding: 10px 50px;
margin: 50px 0;
font-size: 17px;
border-radius: 5px;
background-color: #06AA5E;
border: 0;
outline: 0;
font-family: Poppins;
color: white;
cursor: pointer;


`
const InputTitle = styled.div`
/* color: #707983; */
color: white;
font-size: 13px;
font-weight: 400;
margin-bottom: -5px;
/* margin-left: 6px; */
z-index: 1;
width: 100px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px 5px 5px 5px ;
background-color: #06AA5E;
transition: all 350ms ;
`
const Input = styled.input`
background-color: transparent;
border: 0;
font-family: Poppins;
font-size: 14px;
border-bottom: 1px solid black;
flex: 1;
color: #707983;
caret-color: #06AA5E;

:focus{
    border: 2px solid #06AA5E;
    outline: 0;
    border-radius: 5px;
}
`

const Div = styled.div`
width: 80%;
margin-top: 100px;
`
const InputHolder = styled.div`
width: 60%;
display: flex;
flex-direction: column;
height: 48px;
margin: 40px 0;
margin-right: 80px;


`
const ImageLabel = styled.label`
padding: 7px;
background-color: #06AA5E;
border-radius: 5px;
margin: 10px 0;
cursor: pointer;
`
const ImageInput = styled.input`
display: none;
`
const Image = styled.img`
width: 80px;
height: 80px;
object-fit: cover;
border-radius: 20px;


`
const ImageHolder = styled.div`
display: flex;
/* align-items: center;
justify-content: center; */
flex-direction: column;
margin: 10px 0;
`
const Sub = styled.div`
margin: 80px;
`
const BigText = styled.div`
font-size: 50px;
font-weight: 600;

`
const Right = styled.div`
width: 60%;
background-color: #1D2B3A ;
height: 100%;

`
const Text = styled.div`
    margin-left: 20px;
    font-size: 20px;
    align-self: center;
`
const BackgroundImage = styled.img`
width: 520px;
margin-top: 20px;

`
const Logo = styled.div`
font-size: 30px;
margin-left: 20px;
font-weight: 700;
:span{
    font-size: 14px;
}
`
const Left = styled.div`
width: 40%;
background-color: #06AA5E;
height: 100vh;
`
const Main = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
color: white;
`
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`