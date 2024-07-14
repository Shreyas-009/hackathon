const Booking = require("../models/Booking");
const Picker = require("../models/Picker");

exports.createBooking = async (req, res) => {
  try {
    const { pickerId, userId, serviceType, date, time, scheduledTime } =
      req.body;
    const booking = new Booking({
      pickerId,
      userId,
      serviceType,
      date,
      time,
      scheduledTime,
    });
    await booking.save();
    res.json(booking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id });
    res.json(bookings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.addFeedback = async (req, res) => {
  const { bookingId, feedback, rating } = req.body;
  try {
    const booking = await Booking.findById(bookingId);
    if (!booking) return res.status(404).json({ msg: "Booking not found" });

    booking.feedback = feedback;
    booking.rating = rating;
    await booking.save();

    const picker = await Picker.findById(booking.pickerId);
    picker.rating =
      (picker.rating * picker.reviewCount + rating) / (picker.reviewCount + 1);
    picker.reviewCount += 1;
    await picker.save();

    res.json(booking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
