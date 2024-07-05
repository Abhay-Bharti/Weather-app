import { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
    let [result, setResult] = useState({});
    let [image, setImage] = useState("");

    const getResult = async (newResult) => {
        setResult(newResult);
    };

    useEffect(() => {
        const updateImage = () => {
            const imageUrls = {
                clouds: "https://images.unsplash.com/photo-1599806112354-67f8b5425a06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnklMjBjbG91ZHN8ZW58MHx8MHx8fDA%3D",
                sky: "https://images.unsplash.com/photo-1612251276789-9b1a8f2add8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsZWFyJTIwc2t5fGVufDB8fDB8fHww",
                cold: "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D",
                rain: "https://images.unsplash.com/photo-1525087740718-9e0f2c58c7ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJhaW58ZW58MHx8MHx8fDA%3D",
                mist: "https://images.unsplash.com/photo-1542092465-ca0d31a6969f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1pc3QlMjBza3l8ZW58MHx8MHx8fDA%3D",
                default: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
            };

            const weatherConditions = ["overcast clouds", "thunderstorm", "scattered clouds"];
            const Rain = ["moderate rain", "light rain", "light intensity drizzle"]

            if (weatherConditions.includes(result.weather)) {
                setImage(imageUrls.clouds);
            } else if (result.weather === "clear sky") {
                setImage(imageUrls.sky);
            } else if (result.weather === "mist" && result.temp < 10) {
                setImage(imageUrls.cold);
            } else if (Rain.includes(result.weather)) {
                setImage(imageUrls.rain);
            } else if (result.weather === "mist" || result.weather === "haze") {
                setImage(imageUrls.mist);
            } else {
                setImage(imageUrls.default);
            }
        };

        if (Object.keys(result).length !== 0) {
            updateImage();
        }
    }, [result]);

    return (
        <div>
            <h1 style={{marginTop: "1em"}}>Weather App</h1>
            <SearchBox getResult={getResult} />
            {Object.keys(result).length !== 0 && (
                <>
                    <InfoBox result={result} image={image} />
                </>
            )}
        </div>
    );
}
