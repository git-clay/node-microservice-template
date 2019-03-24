import Connection from "../shared/class/Connection";

import replaceEntityController from "../entities/replaceEntity/replaceEntityController";
import replaceEntityBusiness from "../entities/replaceEntity/replaceEntityBusiness";

const providers = (() => {
  const replaceEntityController = new replaceEntityController();
  const connection = new Connection();
  const replaceEntityBusiness = new replaceEntityBusiness(replaceEntityController);

  return {
    connection,
    replaceEntityController,
    replaceEntityBusiness
  };
})();

export default providers;
