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
import "../../../../../../admin/shared/style/page.css";
import {
  getFetchClient,
  useCMEditViewDataManager,
} from "@strapi/helper-plugin";
const { get, post } = getFetchClient();

type AccountItemDTO = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  createdBy: any;
  updatedBy: any;
};

const HomePage = () => {
  const { modifiedData } = useCMEditViewDataManager();

  const [account, setAccount] = useState(null);
  const [accounts, setAccounts] = useState<
    {
      name: string;
      value: number;
    }[]
  >([]);

  useEffect(() => {
    const fetchAccounts = async (): Promise<{
      success: Boolean;
      accounts: AccountItemDTO[];
      error?: any;
    }> => {
      try {
        const url =
          "/content-manager/collection-types/api::account.account?page=1&pageSize=10&sort=name:ASC";
        const result: {
          data: {
            results: AccountItemDTO[];
          };
        } = await get(url);

        const { data } = result;
        const { results } = data;

        return {
          success: true,
          accounts: results,
        };
      } catch (error) {
        return {
          success: false,
          accounts: [],
          error,
        };
      }
    };

    fetchAccounts().then((result) => {
      if (result.success) {
        const accountsAux = result.accounts.map((item) => {
          return {
            name: item.name,
            value: item.id,
          };
        });

        setAccounts(accountsAux);
      }
    });
  }, []);

  useEffect(() => {
    console.log({ account });
  }, [account]);
  return (
    <div className="content">
      <HeaderBox
        title="Dashboard"
        subtitle="Resumo das transações"
        navigationActions={{
          icon: <ArrowLeft />,
          path: "/",
          text: "Voltar",
        }}
        primaryAction={
          <AccountSelector
            accounts={accounts}
            account={account}
            setAccount={setAccount}
          />
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
