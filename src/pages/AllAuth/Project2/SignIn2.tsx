import React from 'react'
import styled from 'styled-components'
import img from "../../../assets/online-class.png"
import { NavLink } from 'react-router-dom'

const SignIn2 = () => {
  return (
    <div>
        <Container>
            <Main>
                <Card>


                    <ImageHolder>
                    <BigText>Welcome Back</BigText>
                        
                    </ImageHolder>


                       

                        <InputHolder>
                        <InputTitle>Email</InputTitle>
                        <Input/>
                        </InputHolder>

                        <InputHolder>
                        <InputTitle >Password</InputTitle>
                        <Input type='password'/>
                        </InputHolder>

                      


                          <div style={{display:"flex", alignItems: "center", justifyContent: "center", width: "100%"}}>
                <Button>Login</Button>
                </div>
                        
                        <TextHolder>
                            <Text>DOn't have an Account?</Text>
                            <NavLink to="/register2">
                            <Login>SignUp</Login>
                            </NavLink>
                        </TextHolder>
                        </Card>

            </Main>
        </Container>
      
    </div>
  )
}

export default SignIn2
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
const Button = styled.div`
padding: 10px 50px;
background: linear-gradient( rgb(0, 198, 255), rgb(194, 27, 255));;
border: 0;
outline: none;
font-family: Poppins;
cursor: pointer;
transition: all 350ms;
color: white;
margin: 20px 0;
align-self: center;
border-radius: 30px;
:hover{
    transform: scale(1.09);
}

`
const Input = styled.input`
flex: 1;
border: 0;
outline: none;
border-bottom: 1px solid silver;
outline: 0;
font-family: Poppins;
`
const InputTitle = styled.div`
font-size: 14px;
font-weight: 500;

`
const InputHolder = styled.div`
width: 70%;
height: 50px;
display: flex;
flex-direction: column;
margin:10px 30px;
`
const ImageHolder = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
flex-direction: column;
`
const BigText = styled.div`
font-size: 30px;
font-weight: 700;
margin: 20px 0;


`
const Card = styled.div`
width: 350px;
padding: 20px;
height: 60%;
background-color: white;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
display: flex;
flex-direction: column;
justify-content: center;

`
const Main = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: #F2F2F2;

`
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

`

