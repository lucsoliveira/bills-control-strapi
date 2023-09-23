import { getClient } from "./index";
type ItemDTO = {
  name: string;
  id: number;
  icon: any;
  createdAt: string;
  updatedAt: string;
  accounts: {
    count: number;
  };
  createdBy: any;
  updatedBy: any;
};
export const CategoriesService = (get: any = getClient) => ({
  filter: async (data: {
    accountId: number;
    pageSize: number;
    pageNumber: number;
  }): Promise<{
    success: Boolean;
    categories: ItemDTO[];
    error?: any;
  }> => {
    const url = `/content-manager/collection-types/api::category.category?page=${data.pageNumber}&pageSize=${data.pageSize}&sort=name:ASC&filters[$and][0][accounts][id][$eq]=${data.accountId}`;

    try {
      const result: {
        data: {
          results: any[];
        };
      } = await get(url);

      const { data } = result;
      const { results } = data;

      return {
        success: true,
        categories: results,
      };
    } catch (error) {
      return {
        success: false,
        categories: [],
        error,
      };
    }
  },
});
