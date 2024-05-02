import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import { Site } from "../types";
import "./SitesPage.scss";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import React from "react";
import AddSiteDialog from "../components/AddSiteDialog";

function SitesPage() {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const rows: Site[] = [
    {
      id: 1,
      score: 1,
      name: "Egypt",
      address: "122 Zamalek st.",
      country: "EG",
      lat: 30.033333,
      lng: 31.233334,
    },
    {
      id: 2,
      score: 1,
      name: "Germany",
      address: "98 berlin st.",
      country: "GE",
      lat: 51.5167,
      lng: 9.9167,
    },
    {
      id: 3,
      score: 1,
      name: "Yemen",
      address: "11 north yemen",
      country: "YE",
      lat: 15.369445,
      lng: 44.191006,
    },
    {
      id: 4,
      score: 1,
      name: "Colombia",
      address: "10 luis diaz",
      country: "CO",
      lat: 4.624335,
      lng: 74.063644,
    },
    {
      id: 5,
      score: 1,
      name: "Lebanon",
      address: "South Lebanon",
      country: "LE",
      lat: 51.5167,
      lng: 9.9167,
    },
    {
      id: 6,
      score: 1,
      name: "Iraq",
      address: "11 North",
      country: "IQ",
      lat: 33.312805,
      lng: 44.361488,
    },
  ];

  const [sites, setSites] = React.useState(rows);

  const columns: GridColDef[] = [
    { field: "id", headerName: "id", width: 150 },
    { field: "score", headerName: "score", width: 150 },
    { field: "name", headerName: "name", width: 150 },
    { field: "address", headerName: "address", width: 150 },
    { field: "country", headerName: "country", width: 150 },
  ];

  const handleEvent: GridEventListener<"rowClick"> = (
    params // GridRowParams
  ) => {
    navigate(`/globe/${params.row.lat}/${params.row.lng}`);
  };

  const handleClose = () => setOpen(false);

  const handleSubmit = (site: Site) => {
    console.log(site);
    rows.push(site);
    setSites(rows);
    setOpen(false);
  };

  return (
    <div className="container">
      <div className="sitesFilter">
        <Button onClick={() => setOpen(true)}>Add new Site</Button>
      </div>
      <DataGrid rows={sites} columns={columns} onRowClick={handleEvent} />
      <AddSiteDialog
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default SitesPage;
