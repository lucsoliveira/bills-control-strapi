import React from "react";

import { SingleSelectInput } from "../../../../../../../../admin/shared/inputs/SingleSelectInput";

export const AccountSelector = ({ accounts, account, setAccount }) => {
  return (
    <SingleSelectInput
      legend="Relatório de Conta"
      placeHolder="Selecione uma conta"
      values={accounts}
      value={account}
      onChange={setAccount}
    />
  );
};
