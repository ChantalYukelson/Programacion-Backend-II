const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/current', passport.authenticate('jwt', { session: false }), async (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
