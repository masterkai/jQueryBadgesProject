$(function() {

  $.ajax({
    url: "https://www.codeschool.com/users/masterkai.json",
    dataType:'jsonp',
    success: function (data) {
      populateWithCourses(data.courses.completed)
      }
  });
});
