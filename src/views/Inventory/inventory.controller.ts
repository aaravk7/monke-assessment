import { getModels } from "../../api/getModels";
import { IModel } from "../../types";

export const InventoryLoader = async (): Promise<IModel[]> => {
  const models = await getModels();
  return models.data;
};
