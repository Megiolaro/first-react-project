import React, {useState, useRef} from "react";
import {Container, H1, Imagem, ContainerItens, Label, Input, Button, Users} from './styles'

import image1 from './assets/image1.svg'
import seta from './assets/seta.svg'
import lixo from './assets/lixo.svg'

function App()  {

  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  function addNewUser(){
    setUsers([...users, {id: Math.random(), name: inputName.current.value, age: inputAge.current.value}])
  }

  function deleteUser(userId){
    const newUsers = users.filter((user) => user.id !== userId)
    setUsers(newUsers)
  }

  return (
  <Container>
    <Imagem src={image1}/>
    <ContainerItens>

      <H1>Olá</H1>

      <Label>Nome</Label>
      <Input ref={inputName} placeholder="Nome"/>

      <Label>Idade</Label>
      <Input ref={inputAge} placeholder="Idade"/>

      <Button onClick={addNewUser}>Cadastrar<img src={seta} alt="seta"/></Button>

      <ul>
        {users.map((user) => (
          <Users key={user.id}><p>{user.name}</p><p>{user.age}</p><button onClick={() => deleteUser(user.id)}><img src={lixo} alt="lixo"/></button></Users>
        ))}
      </ul>

    </ContainerItens>
  </Container>
  )

}

export default App