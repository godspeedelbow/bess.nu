export default (lat, lng) =>
  `http://maps.google.com/maps?q=${lat},${lng}&ll=${lat},${lng}&z=12`;
