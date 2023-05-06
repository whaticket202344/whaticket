import React, { useEffect } from "react";
import MainContainer from "../../components/MainContainer";
import MainHeader from "../../components/MainHeader";
import Title from "../../components/Title";
import { Container } from "@material-ui/core";

import { MarketplaceButtonIntegration } from "./styles";

import { i18n } from "../../translate/i18n";

import { Grid } from "@material-ui/core";

import mlLogo from "../../assets/mercado-livre.png";


const integrations = [
  {
    id: "mercado-livre",
    logo: mlLogo,
    link: "https://auth.mercadolivre.com.br/authorization?client_id=6490552539634382&response_type=code&redirect_uri=https://app.michame.com.br/callback"
  }
];

export default function Marketplace(props) {
  function handleClickIntegration(link) {
    window.location.href = link;
  }

  return (
    <MainContainer>
      <MainHeader>
        <Title>{i18n.t("marketplace.title")}</Title>
      </MainHeader>
      <Container maxWidth="lg">
        {integrations.map(el => (
          <Grid item xs={12} sm={6} md={3}>
            <MarketplaceButtonIntegration
              key={el.id}
              onClick={() => handleClickIntegration(el.link)}
            >
              <img src={el.logo} />
            </MarketplaceButtonIntegration>
          </Grid>
        ))}
      </Container>
    </MainContainer>
  );
}
