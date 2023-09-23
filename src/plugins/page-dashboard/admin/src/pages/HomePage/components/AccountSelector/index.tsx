import React from "react";

import { SingleSelectInput } from "../../../../../../../../admin/shared/inputs/SingleSelectInput";

export const AccountSelector = ({ account, setAccount }) => {
  return (
    <SingleSelectInput
      legend="Relatório de Conta"
      placeHolder="Selecione uma conta"
      values={[
        {
          name: "Conta 1",
          value: "conta1",
        },
      ]}
      value={account}
      onChange={setAccount}
    />
  );
};
