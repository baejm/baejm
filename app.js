"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _detectPort = _interopRequireDefault(require("detect-port"));

var _chalk = _interopRequireDefault(require("chalk"));

var _auth = _interopRequireDefault(require("./api/auth.js"));

var _posts = _interopRequireDefault(require("./api/posts.js"));

var _apiDoc = _interopRequireDefault(require("./utils/api-doc.js"));

var _auth2 = require("./utils/auth.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// libs
// api
// utils
// mongo db
const db = _mongoose.default.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

_mongoose.default.connect('mongodb+srv://test:1234@cluster0.fi1sp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

_mongoose.default.Promise = global.Promise; // server setup

let port;

async function configServer() {
  port = 3000 || (await (0, _detectPort.default)('https://baejm.github.io/vueapi/'));
}

configServer(); // express setup

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_bodyParser.default.json());
app.use((0, _morgan.default)('dev')); // log request
// express routers

app.use('/', _auth.default);
app.use('/posts', _auth2.authenticateUser, _posts.default); // api docs

app.use('/api', _apiDoc.default); // start

app.listen(port, () => console.log(`${_chalk.default.white.bgHex('#41b883').bold(`VUE TIL SERVER IS RUNNING ON ${port}`)}`));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiZGIiLCJtb25nb29zZSIsImNvbm5lY3Rpb24iLCJvbiIsImNvbnNvbGUiLCJlcnJvciIsImJpbmQiLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwiUHJvbWlzZSIsImdsb2JhbCIsInBvcnQiLCJjb25maWdTZXJ2ZXIiLCJhcHAiLCJ1c2UiLCJib2R5UGFyc2VyIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwianNvbiIsImF1dGgiLCJhdXRoZW50aWNhdGVVc2VyIiwicG9zdHMiLCJkb2NzIiwibGlzdGVuIiwibG9nIiwiY2hhbGsiLCJ3aGl0ZSIsImJnSGV4IiwiYm9sZCJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFHQTs7OztBQWZBO0FBU0E7QUFLQTtBQUdBO0FBQ0EsTUFBTUEsRUFBRSxHQUFHQyxrQkFBU0MsVUFBcEI7QUFDQUYsRUFBRSxDQUFDRyxFQUFILENBQU0sT0FBTixFQUFlQyxPQUFPLENBQUNDLEtBQVIsQ0FBY0MsSUFBZCxDQUFtQkYsT0FBbkIsRUFBNEIsMkJBQTVCLENBQWY7O0FBQ0FILGtCQUFTTSxPQUFULENBQ0UsZ0dBREYsRUFFRTtBQUNFQyxFQUFBQSxlQUFlLEVBQUU7QUFEbkIsQ0FGRjs7QUFNQVAsa0JBQVNRLE9BQVQsR0FBbUJDLE1BQU0sQ0FBQ0QsT0FBMUIsQyxDQUVBOztBQUNBLElBQUlFLElBQUo7O0FBQ0EsZUFBZUMsWUFBZixHQUE4QjtBQUM1QkQsRUFBQUEsSUFBSSxHQUFHLFNBQVMsTUFBTSx5QkFBVyxpQ0FBWCxDQUFmLENBQVA7QUFDRDs7QUFDREMsWUFBWSxHLENBRVo7O0FBQ0EsTUFBTUMsR0FBRyxHQUFHLHVCQUFaO0FBQ0FBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLG9CQUFSO0FBQ0FELEdBQUcsQ0FBQ0MsR0FBSixDQUFRQyxvQkFBV0MsVUFBWCxDQUFzQjtBQUFFQyxFQUFBQSxRQUFRLEVBQUU7QUFBWixDQUF0QixDQUFSO0FBQ0FKLEdBQUcsQ0FBQ0MsR0FBSixDQUFRQyxvQkFBV0csSUFBWCxFQUFSO0FBQ0FMLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLHFCQUFPLEtBQVAsQ0FBUixFLENBQXdCO0FBRXhCOztBQUNBRCxHQUFHLENBQUNDLEdBQUosQ0FBUSxHQUFSLEVBQWFLLGFBQWI7QUFDQU4sR0FBRyxDQUFDQyxHQUFKLENBQVEsUUFBUixFQUFrQk0sdUJBQWxCLEVBQW9DQyxjQUFwQyxFLENBRUE7O0FBQ0FSLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLE1BQVIsRUFBZ0JRLGVBQWhCLEUsQ0FFQTs7QUFDQVQsR0FBRyxDQUFDVSxNQUFKLENBQVdaLElBQVgsRUFBaUIsTUFDZlAsT0FBTyxDQUFDb0IsR0FBUixDQUNHLEdBQUVDLGVBQU1DLEtBQU4sQ0FDQUMsS0FEQSxDQUNNLFNBRE4sRUFFQUMsSUFGQSxDQUVNLGdDQUErQmpCLElBQUssRUFGMUMsQ0FFNkMsRUFIbEQsQ0FERiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYnNcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnO1xyXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XHJcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IGRldGVjdFBvcnQgZnJvbSAnZGV0ZWN0LXBvcnQnO1xyXG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xyXG5cclxuLy8gYXBpXHJcbmltcG9ydCBhdXRoIGZyb20gJy4vYXBpL2F1dGguanMnO1xyXG5pbXBvcnQgcG9zdHMgZnJvbSAnLi9hcGkvcG9zdHMuanMnO1xyXG5pbXBvcnQgZG9jcyBmcm9tICcuL3V0aWxzL2FwaS1kb2MuanMnO1xyXG5cclxuLy8gdXRpbHNcclxuaW1wb3J0IHsgYXV0aGVudGljYXRlVXNlciB9IGZyb20gJy4vdXRpbHMvYXV0aC5qcyc7XHJcblxyXG4vLyBtb25nbyBkYlxyXG5jb25zdCBkYiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XHJcbmRiLm9uKCdlcnJvcicsIGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlLCAnTW9uZ29EQiBjb25uZWN0aW9uIGVycm9yOicpKTtcclxubW9uZ29vc2UuY29ubmVjdChcclxuICAnbW9uZ29kYitzcnY6Ly90ZXN0OjEyMzRAY2x1c3RlcjAuZmkxc3AubW9uZ29kYi5uZXQvbXlGaXJzdERhdGFiYXNlP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScsXHJcbiAge1xyXG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gIH0sXHJcbik7XHJcbm1vbmdvb3NlLlByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcclxuXHJcbi8vIHNlcnZlciBzZXR1cFxyXG5sZXQgcG9ydDtcclxuYXN5bmMgZnVuY3Rpb24gY29uZmlnU2VydmVyKCkge1xyXG4gIHBvcnQgPSAzMDAwIHx8IChhd2FpdCBkZXRlY3RQb3J0KCdodHRwczovL2JhZWptLmdpdGh1Yi5pby92dWVhcGkvJykpO1xyXG59XHJcbmNvbmZpZ1NlcnZlcigpO1xyXG5cclxuLy8gZXhwcmVzcyBzZXR1cFxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbmFwcC51c2UoY29ycygpKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG5hcHAudXNlKG1vcmdhbignZGV2JykpOyAvLyBsb2cgcmVxdWVzdFxyXG5cclxuLy8gZXhwcmVzcyByb3V0ZXJzXHJcbmFwcC51c2UoJy8nLCBhdXRoKTtcclxuYXBwLnVzZSgnL3Bvc3RzJywgYXV0aGVudGljYXRlVXNlciwgcG9zdHMpO1xyXG5cclxuLy8gYXBpIGRvY3NcclxuYXBwLnVzZSgnL2FwaScsIGRvY3MpO1xyXG5cclxuLy8gc3RhcnRcclxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PlxyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgYCR7Y2hhbGsud2hpdGVcclxuICAgICAgLmJnSGV4KCcjNDFiODgzJylcclxuICAgICAgLmJvbGQoYFZVRSBUSUwgU0VSVkVSIElTIFJVTk5JTkcgT04gJHtwb3J0fWApfWAsXHJcbiAgKSxcclxuKTtcclxuIl19