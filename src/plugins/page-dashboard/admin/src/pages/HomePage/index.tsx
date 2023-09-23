/*
 *
 * Dashboard - Home
 *
 */

import React, { useEffect, useState } from "react";
import pluginId from "../../pluginId";
import {
  BaseHeaderLayout,
  HeaderLayout,
  Box,
  Flex,
  Button,
  Typography,
} from "@strapi/design-system";
import { ArrowLeft } from "@strapi/icons";

import { HeaderBox } from "../../../../../../admin/shared/HeaderBox";
import { AccountSelector } from "./components/AccountSelector";
import "./dash.css";
const HomePage = () => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    console.log({ account });
  }, [account]);
  return (
    <div className="page-dashboard">
      <HeaderBox
        title="Dashboard"
        subtitle="Resumo das transações"
        navigationActions={{
          icon: <ArrowLeft />,
          path: "/",
          text: "Voltar",
        }}
        primaryAction={
          <AccountSelector account={account} setAccount={setAccount} />
        }
      />
      Seletor mes <br />
      Box Estatistica Geral <br />
      <div className="box-timeline-chart small-shadow">
        <div className="div-timeline">
          <Typography variant="epsilon">Linha do Tempo</Typography>
        </div>
        <div className="div-chart-categories small-shadow">
          <Typography variant="epsilon">Despesas por Categoria</Typography>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
