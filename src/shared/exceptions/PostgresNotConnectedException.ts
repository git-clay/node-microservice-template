import GenericException from "./GenericException";

export default class PostgresNotConnectedException extends GenericException {
  constructor() {
    const params = {
      name: 'PostgresNotConnectedException',
      message: 'Not connected to a Postgres dabatase'
    };
    super(params);

    Object.setPrototypeOf(this, PostgresNotConnectedException.prototype);
  }
}
