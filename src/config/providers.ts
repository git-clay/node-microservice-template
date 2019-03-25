import Connection from '../data/connection';

// import replaceEntityController from "../entities/replaceEntity/replaceEntityController";
// import replaceEntityBusiness from "../entities/replaceEntity/replaceEntityBusiness";

const providers = (() => {
  // const replaceEntityController = new replaceEntityController();
  const connection = Connection;
  // const replaceEntityBusiness = new replaceEntityBusiness(replaceEntityController);

  return {
    connection,
    // replaceEntityController,
    // replaceEntityBusiness
  };
})();

export default providers;
