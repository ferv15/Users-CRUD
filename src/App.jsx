
import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [infoUpdate, setInfoUpdate] = useState()

  const [isDisable, setIsDisable] = useState(true)

  const url = 'https://users-crud.academlo.tech'
  
  const [ users, getUsers, createUser, deleteUser, updateUser ] = useCrud(url)

  useEffect(() => {
    getUsers('/users')
  }, [])
  
  const handleNewUser = () => {
    setIsDisable(false)
}

  return (
    <>
      <div>
        <h1>Users</h1>
        <button onClick={handleNewUser} className='form_btn'>Create New User</button>
        <FormUser 
          createUser={createUser}
          infoUpdate={infoUpdate}
          updateUser={updateUser}
          setInfoUpdate={setInfoUpdate}
          isDisable={isDisable}
          setIsDisable={setIsDisable}
        />
        <div className='users'>
          {
            users?.map( user => (
              <UserCard 
                key={user.id}
                user={user}
                deleteUser={deleteUser}
                setInfoUpdate = {setInfoUpdate}
                setIsDisable={setIsDisable}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
