export default function Content(props) {
    return (
        <div className="content">
            <img className="picture" alt="img" src={props.item.imageUrl}></img>
                <div className="text">
                    <p className="country"><img className="location--img" src="https://www.pngitem.com/pimgs/m/23-235870_google-location-icon-png-location-symbol-red-png.png"></img>
                    {props.item.location} <a href={props.item.googleMapsUrl} className="link">View on Google Maps</a></p>
                    <h3 className="titles">{props.item.title}</h3>
                    <p className="dates">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="description">{props.item.description}</p>
                </div>
        </div>
    )
}