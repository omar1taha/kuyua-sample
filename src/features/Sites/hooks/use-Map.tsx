import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2hhbGVkNzUwIiwiYSI6ImNsdm9kajV0YTBpeDcycW82MW5icDM1aWYifQ.kPUahKxxSidr5l0ARsTsRg";

export default function useMap(latitude: number, longitude: number) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null); // Reference to the marker
  const [address, setAddress] = useState("");
  const [lng, setLng] = useState(longitude);
  const [lat, setLat] = useState(latitude);
  const [zoom, setZoom] = useState(2);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    // Initialize marker
    marker.current = new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(map.current);
  }, [lng, lat, zoom]);

  const handleSearch = async () => {
    try {
      if (address) {
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
            address
          )}.json?access_token=${mapboxgl.accessToken}`
        );
        const data = await response.json();
        const coordinates = data.features[0].center;
        setLng(coordinates[0]);
        setLat(coordinates[1]);
        setZoom(15);
        map.current.flyTo({ center: coordinates, zoom: 2 });

        // Update marker position
        marker?.current.setLngLat(coordinates);
      }
    } catch (error) {
      console.error("Error searching address:", error);
    }
  };

  return { handleSearch, address, setAddress, mapContainer };
}
