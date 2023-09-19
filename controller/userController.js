const importUser = async (req, res) => {
    try {
      res.status(200).send({ success: true, msg: 'Imported' });
    } catch (error) {
      // Handle errors and send an error response
      res.status(400).send({ success: false, msg: error.message });
    }
  };

  module.exports = {
    importUser
  };
  