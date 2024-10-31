console.log("Jam njesh");

module.exports = async (req, res) => {
  res.status(200).json({ message: 'Function invoked successfully!' });
};
