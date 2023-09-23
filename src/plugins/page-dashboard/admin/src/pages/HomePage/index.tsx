/*
 *
 * Dashboard - Home
 *
 */

import React, { useEffect, useState } from "react";
import pluginId from "../../pluginId";
import { Typography } from "@strapi/design-system";
import { ArrowLeft } from "@strapi/icons";

import { HeaderBox } from "../../../../../../admin/shared/HeaderBox";
import { AccountSelector } from "./components/AccountSelector";
import "./dash.css";
import "../../../../../../admin/shared/style/page.css";
import { useCMEditViewDataManager } from "@strapi/helper-plugin";

import { AccountsService } from "../../../../../../admin/shared/services/accountsService";
import { CategoriesService } from "../../../../../../admin/shared/services/categoriesService";

const HomePage = () => {
  const { modifiedData } = useCMEditViewDataManager();

  const [categories, setCategories] = useState<
    {
      name: string;
      value: number;
    }[]
  >([]);
  const [account, setAccount] = useState(null);
  const [accounts, setAccounts] = useState<
    {
      name: string;
      value: number;
    }[]
  >([]);

  useEffect(() => {
    AccountsService()
      .listAll()
      .then((result) => {
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
    if (account) {
      CategoriesService()
        .filter({
          accountId: account,
          pageNumber: 1,
          pageSize: 100,
        })
        .then((result) => {
          if (result.success) {
            const arrayAux = result.categories.map((item) => {
              return {
                name: item.name,
                value: item.id,
              };
            });

            setCategories(arrayAux);
          }
        });
    }
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

          {JSON.stringify(categories)}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
