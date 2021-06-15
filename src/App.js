import './App.css';
import Header from "./components/header/Header";
import SideBar from "./components/appBody/sideBar/SideBar";
import Feed from "./components/appBody/newsFeed/Feed";

function App() {
    return (
        <div className="app">

            <Header/>
            <div className="app__body">
                <SideBar/>
                <Feed/>
            </div>

        </div>
    );
}

export default App;
