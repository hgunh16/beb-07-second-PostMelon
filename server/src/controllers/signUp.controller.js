const blockchain = require('../blockchain');
const User = require('../models/user');

module.exports = {
  signUp: async (req, res, next) => {
    // console.log(req.body);
    const { email, nickname, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.json({ errors: [{ msg: 'User already exists' }] }); // email 중복 확인
      }

      const address = await blockchain.createAccount();
      // console.log(address);

      if (address) {
        user = new User({
          email,
          nickname,
          password,
          address,
        });

        await user.save(); //db 저장
        res.send('SignUp Successed.');
      } else {
        res.status('400').send('SignUp fail');
      }
    } catch (err) {
      console.error(err.message);
      next(err);
    }
  },
};
