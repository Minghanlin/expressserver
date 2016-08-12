
module.exports = {
  index: function(req, res) {
    var response;


    res.json([
      {
        name: 'Chris',
        age: 26,
        job: 'asking questions'
      },
      {
        name: 'Stef',
        age: 26,
        job: 'asking questions'
      },
      {
        name: 'Kai',
        age: 26,
        job: 'asking questions'
      },

      {
        name: 'Chenxin',
        age: 26,
        job: 'asking questions'
      },
      {
        name: 'Yuzeng',
        age: 26,
        job: 'asking questions'
      },
      {
        name: 'Ming',
        age: 26,
        job: 'asking questions'
      },

    ]);
  }
};
