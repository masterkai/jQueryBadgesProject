$(function () {

  $.ajax({
    url: "https://www.codeschool.com/users/masterkai.json",
    dataType: 'jsonp',
    success: function (data) {
      //console.log(data.courses.completed);
      populateWithCourses(data.courses.completed)
    }
  });
  function populateWithCourses(courses) {
    //console.log(courses);
    var $badges = $('#badges');
    courses.forEach(function (course) {
      //console.log(course);
      $div = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($div);

      $('<img />', {
        src: course.badge
      }).appendTo($div);
    });
  }
});
