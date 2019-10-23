import React, {useState, useEffect} from 'react'

export default function (args) {
  const initProfile = {
    name : 'Juan', 
    lastName: 'Suarez'
  }

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [profile, setProfile] = useState(initProfile)

  useEffect(() => {
    localStorage.setItem('profile', JSON.stringify(profile));
  }, [profile]);

  return (
    <div>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='name'></input>
      <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='last name'></input>
      <button onClick={() => setProfile({name, lastName})}>Update profile</button>
      <p>User info: {JSON.stringify(profile)}</p>
    </div>
  )
}