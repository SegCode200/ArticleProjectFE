import React, { useState } from 'react'
import styled from "styled-components"
import {MdMessage, MdPassword, MdInbox, MdLock, } from "react-icons/md"
import img from '../../assets/online-class.png'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import img1 from "../../assets/Adeyinka-Alabi-2-Talent-homepage-150x150--n6m8DB.jpg"
import { registerAuthor } from '../../utils/Api/authApi'


const Register = () => { 
    const [image, setImage] = useState(img1)
    const [Avatar, setAvatar] = useState("")

    const model = yup.object({
        name: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().required(),
        confirm: yup.string().oneOf([yup.ref("password")])
    })

    const { register,
        formState: { errors },
        handleSubmit,
        reset } = useForm({
            resolver: yupResolver(model)
    })
    const onHandleImage = (e:any)=>{
        try {
            const file = e.target.files[0]
            const realImage = URL.createObjectURL(file)
            setImage(realImage)
            setAvatar(file)
            
        } catch (error) {
            console.log(error)
            
        }

    }
    const onHandleSubmit = handleSubmit((data:any)=>{
        const {userName, email, password} = data
        const form = new FormData()
        form.append("userName", userName)
        form.append("email", email)
        form.append("password", password)
        form.append("image", Avatar)

        registerAuthor(data)
        console.log(data)

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
                        <TextHolder>
                        <Title src={image}/>
                        <ImageInput id='img1' type='file' onChange={onHandleImage}/>
                        <Small htmlFor='img1' >Upload Image</Small>
                        </TextHolder>


                        <InputHolder br='jj' bb="j">
                            
                            <MdMessage size={40} style={{margin: "0 20px"}}/>

                            <Input placeholder='UserName' {...register("name")}/>
                            {errors.name && "Enter Username"}
                          
                        </InputHolder>
                        <InputHolder style={{borderRadius: "0"}}>
                            
                            <MdInbox size={40} style={{margin: "0 20px"}}/>

                            <Input placeholder='Email' {...register("email")} />
                            {errors.email && "Enter email"}
                          
                        </InputHolder>
                        <InputHolder style={{borderRadius: "0"}}>
                            
                            <MdPassword size={40} style={{margin: "0 20px"}}/>

                            <Input placeholder='Password'  {...register("password")}/>
                            {errors.password && "Enter Password"}
                          
                        </InputHolder>

                        <InputHolder br='rr'>
                           <MdPassword size={40} style={{margin: "0 20px"}}/>
                            
                            <Input placeholder='Confirm Password' {...register("confirm")} />
                            {errors.confirm && "Enter Cofirm Password"}
                            
                        </InputHolder>
                      



                        <TextHolder>
                        <Button type='submit'  >Sign In</Button>
                            
                        {/* <Link
                           
                        > */}
                            {/* <Button >Sign Up</Button></Link> */}
                        </TextHolder>
                        <TextHolder>
                            
                        </TextHolder>


                    </Card>
                    </Right>

                </Main>
            </Container>
        
    </div>
  )
}

export default Register

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
margin: 0 5px
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