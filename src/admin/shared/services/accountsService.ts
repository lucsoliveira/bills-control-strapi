type AccountItemDTO = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  createdBy: any;
  updatedBy: any;
};

export const AccountsService = (getClient: any) => ({
  listAll: async (): Promise<{
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
      } = await getClient(url);

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
  },
});
