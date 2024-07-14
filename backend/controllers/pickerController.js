const Picker = require('../models/Picker');

exports.registerPicker = async (req, res) => {
  const { name, contactInfo, location, servicesOffered } = req.body;
  try {
    const newPicker = new Picker({
      name,
      contactInfo,
      location,
      servicesOffered,
    });
    const picker = await newPicker.save();
    res.json(picker);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getPickers = async (req, res) => {
  const { location, services } = req.query;
  try {
    const query = {};
    if (location) query.location = location;
    if (services) query.servicesOffered = { $in: services.split(',') };

    const pickers = await Picker.find(query);
    res.json(pickers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
