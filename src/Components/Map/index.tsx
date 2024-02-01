// components/Map.tsx

import { useState, useEffect } from 'react';
import { GoogleMap, Marker, LoadScript, Polygon, InfoWindow } from '@react-google-maps/api';


interface WeatherData {
  city: string;
  lat: number;
  lng: number;
  icon: string;
  description: string; 
  temperature: number; 

}

const Map: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<WeatherData | null>(null);
  const [showCurrentData, setShowCurrentData] = useState(true);


  const cities = [
    'Paris', 'Marseille', 'Lyon',  'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille', 'Toulouse', 'Brest',
     'Ajaccio', 'Nice', 'Gap', 'Montélimar', 'Perpignan', 'Tarbes', 'Biarritz', 'Vichy', 'Bourg-Saint-Maurice', 'Bourges', 'Tours', 'Rennes',  
     'Nantes', 'La Rochelle', 'Chalon-sur-Saône', 'Chaumont', 'Rouen', 'Cherbourg-Octeville', 'Amiens', 'Metz', 'Reims', 'Brest', 'Alençon', 'Limoges', 'Vichy',
     'Aurillac', 'Auxerre'

    // Ajoutez d'autres villes par région selon vos besoins
  ];

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = '1d87e5cbc319844198d49b6038bdb380';
      
      const promises = cities.map(async (city) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`);
        const data = await response.json();
        
        return {
          city,
          lat: data.coord.lat,
          lng: data.coord.lon,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          description: data.weather[0].description, // Ajoutez la description depuis l'API
          temperature: data.main.temp, // Ajoutez la température depuis l'API
    
        };
      });

      const result = await Promise.all(promises);
      setWeatherData(result);
    };

    fetchData();
  }, []);

  const francePolygon = [
    { lat: 51.124199, lng: -5.725555 },
    { lat: 51.124199, lng: 9.660322 },
    { lat: 41.303, lng: 9.660322 },
    { lat: 41.303, lng: -5.725555 },
  ];

  const franceRegionsPolygons = [
    // Exemple: Polygone pour représenter la région Île-de-France
    {
      paths: [
        { lat: 48.8014, lng: 2.1300 },
        { lat: 48.8574, lng: 2.3460 },
        { lat: 48.8394, lng: 2.4699 },
        // Ajoutez d'autres points pour définir la forme du polygone
      ],
      // strokeColor: '#FF0000', // Couleur du contour
      strokeOpacity: 0.8,
      strokeWeight: 2,
      // fillColor: '#FF0000', // Couleur de remplissage
      fillOpacity: 0.35,
    },
    // Ajoutez d'autres polygones pour les différentes régions
  ];

  const mapStyles: React.CSSProperties = {
    position:'relative',
    height: '100vh',
    width: '90%',
    justifyContent:'flex-start',
    marginTop : '10%',
    marginBottom : '3%',
    marginLeft:'2%'
  };

  const mapOptions = {
    zoomControl: false, // Désactive les contrôles de zoom
    gestureHandling: 'none', // Désactive le zoom par geste
    draggable: false, // Désactive le déplacement de la carte par glisser-déposer
    scrollwheel: false, // Désactive le zoom avec la molette de la souris
    disableDoubleClickZoom: true, // Désactive le zoom double-clic
    minZoom: 5, // Zoom minimum
    maxZoom: 10, // Zoom maximum
    restriction: {
      latLngBounds: {
        north: 51.124199, // Latitude maximale pour la France
        south: 41.303, // Latitude minimale pour la France
        west: -5.725555, // Longitude minimale pour la France
        east: 9.660322 // Longitude maximale pour la France
      },
    },
    styles: [
      {
        featureType: 'administrative',
        elementType: 'labels.text',
        stylers: [
          { visibility: 'off' }, // Masquer les étiquettes administratives (villes, départements, etc.)
        ],
      },
      {
        featureType: 'poi',
        stylers: [
          { visibility: 'off' }, // Masquer les points d'intérêt (parcs, attractions, etc.)
        ],
      },
      {
        featureType: 'water',
        elementType: 'labels.text',
        stylers: [
          { visibility: 'off' }, // Masquer les étiquettes de l'eau (rivières, lacs, etc.)
        ],
      },
      {
        featureType: 'road',
        stylers: [
          { visibility: 'off' }, // Masquer les routes
        ],
      },
    ],
    streetViewControl: false, // Désactive le contrôle Pegman (Street View)
    mapTypeControl: false, // Désactive le contrôle de type de carte (Satellite, etc.)
  };

  const handleMarkerMouseOver  = (markerData: WeatherData) => {
     // Vérifiez si la souris est déjà sur le marqueur sélectionné
     if (!selectedMarker || selectedMarker.city !== markerData.city) {
      setSelectedMarker(markerData);
    }
  };

  const handleMarkerMouseOut = () => {
    setTimeout(() => {
      setSelectedMarker(null);
    }, 4000); // Ajouter un délai de 300 millisecondes avant de fermer l'infobulle
  };

  const toggleDataDisplay = () => {
    setShowCurrentData((prev) => !prev);
  };
  

  return (
    <LoadScript googleMapsApiKey="AIzaSyAwjPsWJyl34bEJdPQ9HhHXbWmy1fzvtds">
      <GoogleMap mapContainerStyle={mapStyles} zoom={5.5} center={{ lat: 46.603354, lng: 1.888334 }} options={mapOptions}>

      {weatherData.map((data) => (
          <Marker
            key={data.city}
            position={{ lat: data.lat, lng: data.lng }}
            icon={{
              url: data.icon,
              scaledSize: new window.google.maps.Size(55, 55),
            }}
            onMouseOver={() => handleMarkerMouseOver(data)}
            onMouseOut={handleMarkerMouseOut}
            label={`${data.temperature}°C `}  // Utilisez le label pour afficher la température à côté de l'icône

          />
        ))}

        {selectedMarker && (
          <InfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onCloseClick={handleMarkerMouseOut}
          >
            <div style={{ padding: '10px', textAlign: 'center', width:'1(0px' }}>
              <p style={{ fontSize: '20px', fontWeight: 'bold', margin: '5px 0' }} >{selectedMarker.city}</p>
              <img style={{ height:'60px', width:'60px', margin:'auto'}} src={selectedMarker.icon} alt="Weather Icon" />
              <p style={{ fontSize: '16px' }}>Temperature: {selectedMarker.temperature}°C</p>
              <p style={{ fontSize: '16px' }} >{selectedMarker.description}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
