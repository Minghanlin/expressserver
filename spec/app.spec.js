var app = require('../app');
var request = require("request");
var supertest = require("supertest");
var base_url = "http://localhost:7000/";
var about_url = base_url + 'about';
var contact_url = base_url + 'contact';

// function check200(err, response, body) {
//   expect(response.statusCode).toBe(200);
//   done();
// }

describe("Express Server API", function() {
  describe("should return users json on get /users", function() {
    it("returns status code 200", function(done) {
      supertest(app)
        .get('/users')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it("returns a correct json format", function(done) {
      supertest(app)
        .get('/users')
        .expect([
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

        ], done);
    });
  });
});



// describe("Express Server Front End", function() {
//   describe("GET /", function() {
//     it("returns status code 200", function(done) {
//       // request.get(base_url,
//       //   function(err, response, body) {
//       //     expect(response.statusCode).toBe(200);
//       //     expect(body).toBe("Hello world with MVC Structure");
//       //     done();
//       //   }
//       // );
//
//       supertest(app)
//       .get('/')
//       .set('Accept', 'text/html')
//       .expect('Content-Type', /html/)
//       .expect(200, done); // note that we're passing the done as parameter to the expect
//     });
//   });
//
//   describe("GET /about", function() {
//     it("returns status code 200", function(done) {
//       request.get(base_url + 'about',
//         function(err, response, body) {
//           expect(response.statusCode).toBe(200);
//           done();
//         }
//       );
//     });
//   });
//
//   describe("GET /contact", function() {
//     it("returns status code 200", function(done) {
//       request.get(base_url + 'contact',
//         function(err, response, body) {
//           expect(response.statusCode).toBe(200);
//           done();
//         }
//       );
//     });
//   });
// });
