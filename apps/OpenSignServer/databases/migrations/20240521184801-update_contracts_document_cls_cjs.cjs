/**
 *
 * @param {Parse} Parse
 */
exports.up = async Parse => {
  // TODO: set className here
  const className = 'contracts_Document';
  const schema = new Parse.Schema(className);
  schema.addBoolean('SendMail');
  // TODO: Set the schema here
  // Example:
  // schema.addString('name').addNumber('cash');

  return schema.update();
};

/**
 *
 * @param {Parse} Parse
 */
exports.down = async Parse => {
  // TODO: set className here
  const className = 'contracts_Document';
  const schema = new Parse.Schema(className);
  schema.deleteField('SendMail');

  // TODO: Set the schema here
  // Example:
  // schema.deleteField('name').deleteField('cash');

  return schema.update();
};
