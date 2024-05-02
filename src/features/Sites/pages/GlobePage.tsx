import searchIcon from "../../../assets/icons8-search.svg";
import useMap from "../hooks/use-Map";
import "./GlobePage.scss";
import { useParams } from "react-router-dom";
function GlobePage() {
  const { lat, lng } = useParams();

  const { handleSearch, address, setAddress, mapContainer } = useMap(
    Number(lat),
    Number(lng)
  );

  return (
    <div className="cont">
      <div className="control-input">
        <button onClick={handleSearch}>
          <img src={searchIcon} alt="search" />
        </button>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="TYPE AN IP ADDRESS AND FIND LOCATION"
          onKeyPress={handleSearch}
        />
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default GlobePage;
