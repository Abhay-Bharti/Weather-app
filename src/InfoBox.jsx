import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./InfoBox.css";

export default function InfoBox({ result, image }) {

    return (
        <div className='InfoBox'>
            <Card sx={{ maxWidth: 550 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={image}
                        alt="Rainy Weather"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="div">
                            {result.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <div className="row">
                                <div className="box1 col-5">
                                    <h1 style={{ fontSize: "60px" }}>{result.temp}&deg;C</h1>
                                    FEEL LIKE {result.feelsLike}&deg;C
                                </div>
                                <div className="box2 col-7">
                                    <table className="table" style={{ marginRight: "3px" }}>
                                        <thead></thead>
                                        <tbody>
                                            <tr>
                                                <td>Humidity </td>
                                                <td>{result.humidity}%</td>
                                            </tr>
                                            <tr>
                                                <td>Max Temperature</td>
                                                <td>{result.maxTemp}&deg;C</td>
                                            </tr>
                                            <tr>
                                                <td>Min Temperature</td>
                                                <td>{result.minTemp}&deg;C</td>
                                            </tr>
                                            <tr>
                                                <td>Wind Speed</td>
                                                <td>{result.windSpeed}Km/h</td>
                                            </tr>
                                        </tbody>
                                        <tfoot></tfoot>
                                    </table>
                                </div>
                            </div>
                            <h4>The Weather is <i><b>{result.weather}</b></i>.</h4>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}