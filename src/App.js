import './App.css';
import Header from "./components/header/Header";
import SideBar from "./components/appBody/sideBar/SideBar";
import Feed from "./components/appBody/newsFeed/Feed";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";
import Login from "./components/auth/Login";
import {useEffect} from "react";
import {auth} from "./firebase";
import Widget from "./components/appBody/widget/Widget";


function App() {


    const user = useSelector(selectUser)

    const dispatch = useDispatch();

    useEffect(() => {

        auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                dispatch(
                    login({
                            uid: userAuth.uid,
                            email: userAuth.email,
                            displayName: userAuth.displayName,
                            photoUrl: userAuth.photoURL
                        }
                    )
                )
            } else {
                dispatch(logout())
            }

        })
    }, [])
    return (
        <div className="app">
            <Header/>
            {!user ? <Login/> :
                (
                    <div className="app__body">
                        <SideBar/>
                        <Feed/>
                        <Widget/>
                    </div>
                )

            }

        </div>
    );
}

export default App;
