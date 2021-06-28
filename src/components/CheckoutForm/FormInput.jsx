import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

//this file is a connection of material ui text input with react hook
export function FormInput({ name, label }) {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        // as={TextField}
        render={({ field }) => (
          <TextField {...field} label={label} fullWidth required />
        )}
        defaultValue=""
        control={control}
        name={name}
      />
    </Grid>
  );
}
