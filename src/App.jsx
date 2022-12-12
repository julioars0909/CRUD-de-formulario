
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [Users, setUsers] = useState()
  const [UpdateInfo, setUpdateInfo] = useState()
  const [closeForm, setclaseForm] = useState()
  const [CloseForm, setCloseForm] = useState(true)

  const getAllUsers = () => {
    const URL = 'http://users-crud.academlo.tech/users/ '
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const createNewUser = data => {
    const URL = `http://users-crud.academlo.tech/users/ `
    axios.post(URL, data)
      .then(res => getAllUsers())
      .catch(err => console.log(err))
  }

  const deleteUserById = (id) => {

    const URL = `http://users-crud.academlo.tech/users/${id}/ `
    axios.delete(URL)
      .then(() => getAllUsers())
      .catch(err => console.log(err))
  }
  const updateUserById = (id, data) => {

    const URL = `http://users-crud.academlo.tech/users/${id}/ `
    axios.put(URL, data)
      .then(() => getAllUsers())
      .catch(err => console.log(err))
  }

  console.log(UpdateInfo)

  return (
    <div className="App">
      <h1 className='App--title'>Users</h1>
      <button onClick={() => setCloseForm(false)} className='App--btn'>Open Form</button>
      <div className={`form--container ${CloseForm && 'close--form'}`}
      >
        <FormUser
          createNewUser={createNewUser}
          UpdateInfo={UpdateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setCloseForm={setCloseForm}
        />
      </div>

      <div className="user-container">
        {
          Users?.map(user => (
            <UserCard
              user={user}
              key={user.id}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              setCloseForm={setCloseForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
