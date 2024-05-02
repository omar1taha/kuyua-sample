import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormikField from "../../../ReusableComponents/TextField/TextField";
import { Form, Formik } from "formik";
import "./AddSiteDialog.scss";
import { Site } from "../types";
interface AddSiteDialogProps {
  open: boolean;
  handleSubmit: (values: Site) => void;
  handleClose: () => void;
}

function AddSiteDialog(props: AddSiteDialogProps) {
  const initialValues: Site = {
    id: Math.floor(Math.random() * 100),
    name: "",
    score: 0,
    address: "",
    lat: 0.0,
    lng: 0.0,
    country: "",
  };

  const handleSubmit = (values: Site): void => {
    props.handleSubmit(values);
  };

  return (
    <>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>New Site</DialogTitle>
        <DialogContent>
          <DialogContentText>Add new Site</DialogContentText>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ dirty, isValid }) => {
              return (
                <Form>
                  <FormikField name="name" label="Name" required />
                  <FormikField name="score" label="Score" required />
                  <FormikField name="address" label="Address" required />
                  <FormikField name="country" label="Counrty" required />
                  <FormikField name="lat" label="Latitude" required />
                  <FormikField name="lng" label="Langitude" required />

                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!dirty || !isValid}
                    type="submit"
                  >
                    Add new Site
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </DialogContent>
      </Dialog>
      ;
    </>
  );
}

export default AddSiteDialog;
