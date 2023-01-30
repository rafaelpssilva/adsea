import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";
import PostAds from "./components/admin/PostAds";
import Slider from "./components/view/Slider";
import Home from "./Home";

function App() {
    // const [dataAds, setDataAds] = useState([]);

    // const getAds = async () => {
    //     try {
    //         const response = await axios.get(
    //             "https://63d3afd0a93a149755b060d3.mockapi.io/Ads"
    //         );
    //         const ads = await response.data;
    //         setDataAds(ads);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // useEffect(() => {
    //     getAds();
    // }, []);

    // const postAds = ({ linkImg, durationAds, effectAds }) =>
    //     axios.post("https://63d3afd0a93a149755b060d3.mockapi.io/Ads", {
    //         linkImg,
    //         durationAds,
    //         effectAds,
    //     });

    // useEffect(() => {
    //     postAds({ linkImg: "r4.com", durationAds: "01:00:00" });
    // }, []);

    // const deleteArray = (array) => {
    //     for (let index = 0; index < array.length; index++) {
    //         let idParams = array[index].id;
    //         axios.delete(
    //             `https://63d3afd0a93a149755b060d3.mockapi.io/Ads/${idParams} `
    //         );
    //     }
    // };

    // const deleteAds = () => {
    //     dataAds.length > 0 ? deleteArray(dataAds) : null;
    // };

    // useEffect(() => {
    //     deleteAds();
    // }, [dataAds]);

    return (
        <div className="App w-screen h-screen">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Slider />} />
                    <Route exact path="/admin" element={<Admin />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
