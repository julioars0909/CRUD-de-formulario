import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import './styles/formUser.css'


const FormUser = ({ createNewUser, UpdateInfo, updateUserById, setUpdateInfo, setCloseForm }) => {

    console.log(UpdateInfo)

    const { register, reset, handleSubmit } = useForm()

    useEffect(() => {
        reset(UpdateInfo)
    }, [UpdateInfo])

    const submit = data => {

        if (UpdateInfo) {
            updateUserById(UpdateInfo.id, data)
            setUpdateInfo()
        } else {
            createNewUser(data)
        }

        setCloseForm(true)

        reset({
            email: '',
            last_name: '',
            first_name: '',
            birthday: '',
            password: ''
        })
    }

    return (
        <form className='form' onSubmit={handleSubmit(submit)}>
            <div onClick={() => setCloseForm(true)} className="form--x">x</div>
            <h2 className='form--title'>{UpdateInfo ? "Update User" : "Create User"}</h2>
            <div className='form--div'>
                <label className='form--input' htmlFor="email">Email: </label>
                <input className='form--input' type="email" id="email" {...register("email")} />
            </div>
            <div className='form--div'>
                <label className='form--input' htmlFor="password">Password:</label>
                <input className='form--input' type="password" id="password"  {...register("password")} />
            </div>
            <div className='form--div'>
                <label className='form--input' htmlFor="first_name">First Name: </label>
                <input className='form--input' type="text" id="first_name"  {...register("first_name")} />
            </div>
            <div className='form--div'>
                <label className='form--input' htmlFor="last_name">Last name: </label>
                <input className='form--input' type="text" id="last_name"  {...register("last_name")} />
            </div>
            <div className='form--div'>
                <label className='form--input' htmlFor="birthday">Birthday: </label>
                <input className='form--input' type="date" id="birthday"  {...register("birthday")} />
            </div>
            <button className='form--btn'>Submit</button>
        </form>

    )
}

export default FormUser