import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";

import { commerce } from "../../lib/commerce";
import { FormInput } from "./FormInput";

export function AddressForm({ checkoutToken, next }) {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  //set up React Hook Form
  const methods = useForm();

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, [checkoutToken.id]);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Endereço de Cobrança
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({ ...data, shippingCountry, shippingSubdivision })
          )}
        >
          <Grid container spacing={3}>
            <FormInput name="nomeCompleto" label="Nome Completo" />
            <FormInput name="email" label="E-mail" />
            <FormInput name="cpf" label="CPF" />
            <FormInput name="endereco" label="Endereço" />
            <FormInput name="cidade" label="Cidade" />
            {/* <FormInput name="pais" label="País" /> */}
            <Grid item xs={12} sm={6}>
              <InputLabel>Estado</InputLabel>
              <Select
                value={shippingSubdivision}
                fullWidth
                onChange={(e) => setShippingSubdivision(e.target.value)}
              >
                {Object.entries(shippingSubdivisions)
                  .map(([code, name]) => ({ id: code, label: name }))
                  .map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.label}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>País</InputLabel>
              <Select
                value={shippingCountry}
                fullWidth
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {Object.entries(shippingCountries)
                  .map(([code, name]) => ({ id: code, label: name }))
                  .map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.label}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
            <FormInput name="cep" label="CEP" />
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button component={Link} variant="outlined" to="/cart">
              Voltar ao Carrinho
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Próximo
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}

//Obs - using React Hook Form to manage inputs
//In this form we don't have to manage the state, it do it automatically when submit button is pressed
