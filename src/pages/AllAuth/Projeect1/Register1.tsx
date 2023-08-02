import React, { useState } from 'react'
import styled from 'styled-components'
import img from "../../../assets/image.png"
import img1 from "../../../assets/Adeyinka-Alabi-2-Talent-homepage-150x150--n6m8DB.jpg"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import img2 from "../../assets/shape.svg"
import {Link, useNavigate} from "react-router-dom"
import { registerAuthor } from '../../../utils/Api/authApi'

const Register1 = () => {
  const navigate = useNavigate()
    const [image, setImage] = useState(img1)
    const [avatar, setAvatar] = useState("")

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

const onHandleImage = (e: any) => {
  try {
      const file = e.target.files[0]
      const realImage = URL.createObjectURL(file)
      setImage(realImage)
      setAvatar(file)

  } catch (error) {
      console.log(error)
  }
}

const onHandleSubmit = handleSubmit(async (data:any)=>{
  const {name, email, password} = data

  const formData = new FormData()

  formData.append("name", name)
  formData.append("email", email)
  formData.append("password", password)
  formData.append("avatar", avatar)
  


  registerAuthor(formData).then(()=>{
      navigate("/siginin1")
      

  })
  reset()
  

})

  return (
    <div>
      <Container >
        <Main>
            <Right>
                <BackgroundImage src={img}/>

            </Right>
            <Left>
                <Card onSubmit={onHandleSubmit}>
                <BigText>Start Creating Articles of interest to the world</BigText>
                <SmallText>Begin now to explore more</SmallText>
                {/* Image Uploading */}
                <ImageHolder>
                    <Image src={image}/>
                    <ImageInput id='img1' type='file' onChange={onHandleImage}/>
                    <ImageLabel htmlFor='img1' >Upload Image</ImageLabel>
                </ImageHolder>

                {/* Username */}
                <Div>
                <InputHolder>
                <InputTitle>UserName</InputTitle>
                <Input {...register("name")}/>
                {errors.name && <Error>Error</Error>}
                </InputHolder>

                {/* Email */}
                <InputHolder>
                <InputTitle>Email</InputTitle>
                <Input {...register("email")}/>
                {errors.email && <Error>Error</Error>}
                </InputHolder>

                {/* Password */}
                <InputHolder>
                <InputTitle>Password</InputTitle>
                <Input {...register("password")}/>
                {errors.password && <Error>Error</Error>}
                </InputHolder>

                {/* Confirm Password */}
                <InputHolder>
                <InputTitle>Confirm Password</InputTitle>
                <Input {...register("confirm")}/>
                {errors.confirm && <Error>Error</Error>}
                </InputHolder>
                </Div>
                <div style={{display:"flex", alignItems: "center", justifyContent: "center", width: "100%"}}>
                <Button type='submit'>Sign Up</Button>
                </div>

                <TextHolder>
                    <Text>Already have an account?</Text>
                    <Link to="/siginin1">
                    <Login>Login</Login>
                    </Link>
                </TextHolder>
                </Card>
            </Left>
        </Main>
      </Container>
    </div>
  )
}

export default Register1
const Error = styled.div`
font-size: 10px;
color: #53012e;
font-weight: bold;
text-align: right;
width:90%;
margin-bottom: 7px;
`
const Login = styled.div`
font-size: 12px;
font-weight: 600;
color: rgb(120, 221, 175);
margin-left: 10px;
text-decoration: double;
cursor: pointer;

`
const Text = styled.div`
font-size: 12px;
font-weight: 400;
`
const TextHolder = styled.div`
display: flex;
align-items: center;
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
flex-wrap: wrap;

`

const InputHolder = styled.div`
display: flex;
width: 45%;
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

const Card = styled.form`
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
overflow: hidden;
border-radius: 10px;
`

const Main = styled.div`
width: 65%;
height: 90%;
display: flex;
background-color: #F1F6FD;
border-radius: 10px;
    
`
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
    background: radial-gradient(rgb(74, 158, 120), rgb(115, 248, 150));

    
`
