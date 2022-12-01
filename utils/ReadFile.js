
const fs = require('fs/promises');

exports.readFile = async (fileAdress) => {
    try {
      const content = await fs.readFile(fileAdress, { encoding: 'utf8' });
      return content
    } catch (err) {
      throw(err);
    }
  }
