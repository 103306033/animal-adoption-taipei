var API_PATH = "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=5c09f39f-79cc-45b8-be8e-9b3ea8b220e3";

function getData(cb) {
  $.ajax({
    url : API_PATH,
    method : "GET",
    success : function(data) {
      cb(null, data);
    },
    error : function(err) {
      cb(err);
    }
  });
}
