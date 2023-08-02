import React, { useState } from 'react'
import styled from "styled-components"
import {MdMessage, MdPassword, MdInbox, MdLock, } from "react-icons/md"
import img from '../../assets/online-class.png'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import {Link, useNavigate} from "react-router-dom"
import img1 from "../../assets/Adeyinka-Alabi-2-Talent-homepage-150x150--n6m8DB.jpg"
import { SigninAuthor, registerAuthor } from '../../utils/Api/authApi'
import { useDispatch } from 'react-redux'
import { signInuser } from '../../global/globalState'


const Signin = () => { 
    const navigate = useNavigate()
    const dispatch = useDispatch()
 

    const model = yup.object({
        email: yup.string().required(),
        password: yup.string().required(),
      
    })

    const { register,
        formState: { errors },
        handleSubmit,
        reset } = useForm({
            resolver: yupResolver(model)
    })

    const onHandleSubmit = handleSubmit(async(data:any)=>{
        const { email, password} = data
      
        SigninAuthor({ email, password}).then((res)=>{
            navigate("/")
            dispatch(signInuser(res))


        })
        

    })
  return (
    <div>
        <Container>
                <Main>
                    <Left>
                        <Image src={img}/>

                    </Left>
                    <Right>
                    <Card  onSubmit={onHandleSubmit}>
                        <MyText>Welcome Back</MyText>
                      


                      
                        <InputHolder style={{borderRadius: "0"}} br="mm">
                            
                            <MdInbox size={40} style={{margin: "0 20px"}}/>

                            <Input placeholder='Email' {...register("email")} />
                            {errors.email && "Enter email"}
                          
                        </InputHolder>
                        <InputHolder  br="mm">
                            
                            <MdPassword size={40} style={{margin: "0 20px"}}/>

                            <Input placeholder='Password'  {...register("password")}/>
                            {errors.password && "Enter Password"}
                          
                        </InputHolder>

                      
                      



                        <div style={{display : "flex", margin : "30px 0"}}>
                        <Button type='submit'  >Login</Button>
                        <Button1 to="/register"  >Sign Up</Button1>
                            
                        {/* <Link
                           
                        > */}
                            {/* <Button >Sign Up</Button></Link> */}
                        </div >
                        <TextHolder>
                            
                        </TextHolder>


                    </Card>
                    </Right>

                </Main>
            </Container>
        
    </div>
  )
}

export default Signin

const Image = styled.img`
width: 500px;
position: absolute;
left: 0;
bottom: 0;
animation: MoveUpDown 5s linear infinite;
  position: absolute;
  /* left: 0; */
  bottom: 0;
  @keyframes MoveUpDown {
  0%, 80% {
    bottom: 0;
  }
  30% {
    bottom: 12px;
  }
}


`
const Right = styled.div`


`
const Left = styled.div`
width: 40%;
height: 80%;
display: flex;
align-items: center;
position: relative;

`
const MyText = styled.div`
margin: 40px 5px;
font-size: 30px;
font-weight: 700;
`

const Line = styled.div`
height: 1px;
width: 100%;
background-color: #837583
`

const TextHolder = styled.div`
display:flex;
flex-direction: column;
/* width: 100%; */
justify-content: center;
align-items: center;
`

const Button1 = styled(Link)`
width: 130px;
height: 40px;
text-decoration: none;
justify-content: center;
align-items: center;
align-self: center;
display:flex;
background-color: #590059;
margin: 0  5px;

color: white;
border-radius: 30px;
cursor: pointer;
border: 0;
outline: none;
font-family: Poppins;
font-size: 15px;
margin-top: 20px;

`
const Button = styled.button<{ bg?: string }>`
width: 130px;
height: 40px;
justify-content: center;
align-items: center;
align-self: center;
display:flex;
background-color: ${({ bg }) => bg ? "#590059" : "dodgerblue"};
margin: 0  5px;

color: white;
border-radius: 30px;
cursor: pointer;
border: 0;
outline: none;
font-family: Poppins;
font-size: 15px;
margin-top: 20px;

`

const Error = styled.div`
font-size: 12px;
color: #c9016c;
text-align: right;
`

const Input = styled.input`
outline: none;
border: 0;
background-color: transparent;
/* border: 1px solid silver; */
border-radius: 3px;
height: 60%;
font-family: Poppins;
font-size: 16px;
width: 97%;
padding-left: 5px;
:active{
    color: green;
}
`

const InputText = styled.div`
font-size: 13px;
`

const InputHolder = styled.div<{br?:string, bb?:string}>`
/* margin: 10px 0; */
background-color:${({ br }) => br ? "#EEF2F5" : "white"} ;
display: flex;
width: 300px;
border-radius: ${({ bb }) => bb ? "20px 20px 0px 0" : "0 0 20px 20px"};
height: 80px;
align-items: center;
`

const ImageInput = styled.input`
display: none;
`
const Small = styled.label`
text-align: center;
background-color:  #220122; 
color: white;
font-size: 13px;
margin-bottom: 20px;
outline: none;
border: 0;
padding: 10px 20px;
font-family: Poppins;
border-radius: 10px;

`
const Title = styled.img`
text-align: center;
/* color: #220122;  */
font-size: 30px;
object-fit: cover;
width: 90px;
height: 90px;
border-radius: 50%;
margin-bottom: 10px;
/* background-color: dodgerblue; */
`

const Card = styled.form`
width: 280px;
min-height: fit-content;
border-radius: 5px;
padding: 20px 10px 
`

const Main = styled.div`
display:flex;
width: 70%;
height: 90vh;
justify-content: space-between;
align-items: center;
padding: 0 50px;
border-radius: 10px;
background-color: #F9FAFC;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;



`

const Container = styled.div`
display:flex;
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
color: #220122 
`