import React from 'react'
import styled from 'styled-components'
import img from "../../../assets/image.png"
import { Link } from 'react-router-dom'

const SignIn1 = () => {
  return (
    <div>
      <Container>
        <Main>
            <Right>
                <BackgroundImage src={img}/>

            </Right>
            <Left>
                <Card>
                <BigText>Welcome Back</BigText>
                <SmallText>We are always here for any content </SmallText>
                {/* Image Uploading */}
             

                {/* Username */}
                <Div>
             

                {/* Email */}
                <InputHolder>
                <InputTitle>Email</InputTitle>
                <Input/>
                </InputHolder>

                {/* Password */}
                <InputHolder>
                <InputTitle>Password</InputTitle>
                <Input/>
                </InputHolder>

              
                </Div>
                <div style={{display:"flex", alignItems: "center", justifyContent: "center", width: "100%"}}>
                <Button>Login </Button>
                </div>

                <TextHolder>
                    <Text>Don't have an account ?</Text>
                    <Link to="/register1">
                    <Login>SignUp</Login>
                    </Link>
                </TextHolder>
                </Card>
            </Left>
        </Main>
      </Container>
    </div>
  )
}

export default SignIn1
const Login = styled.div`
font-size: 12px;
font-weight: 600;
color: rgb(120, 221, 175);
margin-left: 10px;
text-decoration: none;
cursor: pointer;

`
const Text = styled.div`
font-size: 12px;
font-weight: 400;
`
const TextHolder = styled.div`
display: flex;
align-items: center;
margin-top: 30px;
`
const Button = styled.button`
padding: 10px 50px;
background: linear-gradient(rgb(120, 221, 175), rgb(140, 234, 165));
border: 0;
outline: none;
font-family: Poppins;
cursor: pointer;
transition: all 350ms;
color: white;
margin: 20px 0;
align-self: center;
border-radius: 5px;
:hover{
    transform: scale(1.09);
}

`
const Input = styled.input`
flex: 1;
border: 0;
outline: none;
background-color: transparent;
caret-color: #8BE9A5;
border-bottom: 1px solid #8BE9A5 ;
font-family: Poppins;
`

const InputTitle = styled.div`
font-size: 13px;
color: #615f5f;
`
const Div = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 20px 0;

`

const InputHolder = styled.div`
display: flex;
width: 70%;
height: 50px;
flex-direction: column;
margin: 20px 10px;
`

const ImageLabel = styled.label`
padding: 5px;
background-color: black;
border-radius: 5px;
color: white;
cursor: pointer;

`

const ImageInput = styled.input`
display: none;
`

const Image = styled.img`
width: 80px;
height: 80px;
object-fit: cover;
border-radius: 50%;
background-color: #8BE9A5;
margin-bottom: 5px;
`

const ImageHolder = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const SmallText = styled.div`
font-size: 14px;
color: #585757;
margin: 10px 0;
`

const BigText = styled.div`
font-size: 30px;
font-weight: 700;
line-height: 30px;
margin-bottom: 10px;
`

const Card = styled.div`
width: 100%;

`
const Left = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: center;
`

const BackgroundImage = styled.img`
width: 100%;
height: 100%;
/* object-fit: cover; */

`

const Right = styled.div`
width: 50%;
display: flex;
height: 100%;

`

const Main = styled.div`
width: 65%;
height: 90%;
display: flex;
background-color: #F1F6FD;
border-radius: 10px;
overflow: hidden;
    
`
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background: radial-gradient(rgb(74, 158, 120), rgb(115, 248, 150));

    
`
