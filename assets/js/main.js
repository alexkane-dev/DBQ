
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('weekcalendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      aspectRatio: 1,
      initialView: 'timeGridWeek',  
      
    });
    
    calendar.render();
  });
  
  
  
  $(document).ready(function () {
      $(".approvebtn").click(function(){
          $(this).find('.appr').hide();
          $(this).find('.whenaproved').show();
        });
  
  
        function renderCalendar(month, year) {
          var daysInMonth = new Date(year, month + 1, 0).getDate();
          var firstDayOfMonth = new Date(year, month, 1).getDay();
      
          var calendarHTML = '<div class="navigation">';
          calendarHTML += '<div class="month-year">' + monthNames[month] + ' ' + year + '</div>';
          calendarHTML+='<button class="prevMonth"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4349 2.05176L2.05183 11.3312L11.3313 20.7143" stroke="#B1CCEB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>';
          calendarHTML += '<button class="nextMonth"><svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4349 2.05176L2.05183 11.3312L11.3313 20.7143" stroke="#B1CCEB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>';
          calendarHTML += '<table class="date-calendar"><thead><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr></thead><tbody>';
      
          var day = 1;
          for (var i = 0; i < 6; i++) {
            calendarHTML += '<tr>';
            for (var j = 0; j < 7; j++) {
              if (i === 0 && j < firstDayOfMonth) {
                calendarHTML += '<td></td>';
              } else if (day > daysInMonth) {
                break;
              } else {
                calendarHTML += '<td>' + day + '</td>';
                day++;
              }
            }
            calendarHTML += '</tr>';
            if (day > daysInMonth) {
              break;
            }
          }
      
          calendarHTML += '</tbody></table>';
          $('#calendar').html(calendarHTML);
        }
      
        var currentDate = new Date();
        var currentMonth = currentDate.getMonth();
        var currentYear = currentDate.getFullYear();
        var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      
        renderCalendar(currentMonth, currentYear);
      
        $('#calendar').on('click', '.prevMonth', function() {
          currentMonth--;
          if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
          }
          renderCalendar(currentMonth, currentYear);
        });
      
        $('#calendar').on('click', '.nextMonth', function() {
          currentMonth++;
          if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
          }
          renderCalendar(currentMonth, currentYear);
        });
  
  
  // SIDEBAR OPEN
  $(".hamburger").on('click', function(){
    $(".sidebar").toggleClass("sidebar-open");
    $(".menuopenicon").toggle();
    $(".menucloseicon").toggle();
  })
  
  
  // User profile
  $(".user-profile").on('click', function(){
    if($(window).width() <= 768) {
    $(".user-text").toggleClass("open")
    }
  })
  
  });
  