import React, {useState} from 'react';
import './Login.css'
import {auth} from "../../firebase";
import {useDispatch} from "react-redux";
import {login} from "../../features/userSlice";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const publish = useDispatch();


    const register = () => {

        if (!name) {
            return alert("Please enter a full name")
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuthenticated) => {
                userAuthenticated.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                }).then(() =>
                    //dispatch user to store redux
                {
                    publish(login(
                        {
                            uid: userAuthenticated.user.uid,
                            email: userAuthenticated.user.email,
                            displayName: name,
                            photoUrl: profilePic
                        })
                    );
                });
            }).catch((error) => alert(error.message))

    }

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(
            (userAuth) => {
                {
                    publish(login(
                        {
                            uid: userAuth.user.uid,
                            email: userAuth.user.email,
                            displayName: userAuth.user.displayName,
                            photoUrl: userAuth.user.photoURL
                        })
                    );
                }
            }
        )
    }
    return (
        <div className={'login'}>

            <img
                src={'https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c528.png'}
                alt={''}/>
            <form className={'login__form'}>
                <input type={'text'}
                       placeholder={'Full name (required if registering)'}
                       value={name}
                       onChange={event => setName(event.target.value)}/>
                <input type={'text'}
                       placeholder={'Profile pic URL (Optional)'}
                       value={profilePic}
                       onChange={event => setProfilePic(event.target.value)}
                />
                <input type={'email'}
                       placeholder={'elon.musk@gmail.com'}
                       value={email}
                       onChange={event => setEmail(event.target.value)}/>
                <input type={'password'}
                       placeholder={''}
                       value={password}
                       onChange={event => setPassword(event.target.value)}/>
                <button type={'submit'} onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member ? <span className={'login__register'} onClick={register}> Register Now</span></p>
        </div>
    );
}

export default Login;