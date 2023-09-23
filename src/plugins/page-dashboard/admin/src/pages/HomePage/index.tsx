/*
 *
 * HomePage
 *
 */

import React from "react";
import pluginId from "../../pluginId";
import {
  BaseHeaderLayout,
  HeaderLayout,
  Box,
  Button,
} from "@strapi/design-system";
import { ArrowLeft } from "@strapi/icons";
import { Plus } from "@strapi/icons";

import { HeaderBox } from "../../../../../../admin/shared/HeaderBox";

const HomePage = () => {
  return (
    <div>
      <HeaderBox
        title="Dashboard"
        subtitle="Apenas um teste"
        navigationActions={{
          icon: <ArrowLeft />,
          path: "/",
          text: "Voltar",
        }}
        primaryAction={<Button startIcon={<Plus />}>Add an entry</Button>}
      />
      asd
    </div>
  );
};

export default HomePage;
