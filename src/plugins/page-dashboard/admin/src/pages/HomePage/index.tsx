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
  Button,
} from "@strapi/design-system";
import { ArrowLeft } from "@strapi/icons";

import { HeaderBox } from "../../../../../../admin/shared/HeaderBox";
import { AccountSelector } from "./components/AccountSelector";

const HomePage = () => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    console.log({ account });
  }, [account]);
  return (
    <div>
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
      asd
    </div>
  );
};

export default HomePage;
