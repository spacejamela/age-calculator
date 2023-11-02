let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge(){
    let birthdate = new Date(userInput.value);

    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth() + 1;
    let y1 = birthdate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }
    if (d2 >= d1) {
        d3 = d2 - d1;
    }else {
      m3--;
      d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0 ){
        m3 = 11;
        y3--;
    }

    let monthsDiff = (y2 - y1) * 12 + (m2 - m1);
    // Adjust the months difference based on the day of the month
    if (d2 < d1) {
      monthsDiff -= 1;
    }

    let dayDiff = today - birthdate;
    // Calculate the number of days
    let daysDiff = Math.floor(dayDiff / (1000 * 60 * 60 * 24));

    let weekDiff = today - birthdate;
    // Calculate the number of weeks
    let weeksDiff = Math.floor(weekDiff / (1000 * 60 * 60 * 24 * 7));
  
    let hourDiff = today - birthdate;
  // Calculate the number of hours
  let hoursDiff = Math.floor(hourDiff / (1000 * 60 * 60));

  let minuteDiff = today - birthdate;

  // Calculate the number of minutes
  let minutesDiff = Math.floor(minuteDiff / (1000 * 60));



    const yearText = y3 < 2 ? "Year" : "Years";
    const monthText = m3 < 2 ? "Month" : "Months";
    const dayText = d3 < 2 ? "Day" : "Days";

    
    const weekText = weeksDiff < 2 ? "Week" : "Weeks";
  
    const hourText = hoursDiff < 2 ? "Hour" : "Hours";
    const minuteText = minutesDiff < 2 ? "Minute" : "Minutes";
    

    diffYear.innerHTML = `${y3}`;
    diffMonth.innerHTML = `${monthsDiff}`;
    diffDay.innerHTML = `${daysDiff}`;
    diffWeek.innerHTML = `${weeksDiff}`;
    diffHour.innerHTML = `${hoursDiff}`;
    diffMinute.innerHTML = `${minutesDiff}`;

    Year.innerHTML = `<span>${yearText}</span>`;
    Month.innerHTML = `<span>${monthText}</span>`;
    Week.innerHTML = `<span>${weekText}</span>`;
    Day.innerHTML = `<span>${dayText}</span>`;
    Hour.innerHTML = `<span>${hourText}</span>`;
    Minute.innerHTML = `<span>${minuteText}</span>`;
    


    years.innerHTML = `${y3} <span>${yearText}</span>`;
    months.innerHTML = `${m3} <span>${monthText}</span>`;
    days.innerHTML = `${d3} <span>${dayText}</span>`;
   
   // Determine the generation
   let generation = "";

   if (y1 >= 2013) {
     generation = "Gen Alpha";
   } else if (y1 >= 1995) {
     generation = "Generation Z";
   }else if (y1 >= 1980) {
     generation = "Millennials";
   }else if (y1 >= 1965) {
     generation = "Generation X";
   } else if (y1 >= 1946) {
     generation = "Baby Boomers";
   }else if (y1 >= 1925) {
     generation = "Silent Generation";
   } else {
     generation = "Greatest Generation";
   }
 
   genID.textContent = ` ${generation}`;

    document.querySelector('.downloadable').style.display = 'block';
}

function getDaysInMonth (year, month) {
    return new Date(year, month, 0).getDate();
}
// Function to calculate age and create downloadable image
  document.getElementById('downloadButton').addEventListener('click', function () {
    const downloadableDiv = document.querySelector('.result');
  
    html2canvas(downloadableDiv, {
      useCORS: true,
      scrollX: 0,
      scrollY: 0,
      windowWidth: document.documentElement.scrollWidth,
      windowHeight: document.documentElement.scrollHeight,
      scale: 2,
      logging: true,
      width: downloadableDiv.offsetWidth,
      height: downloadableDiv.offsetHeight,
      backgroundColor: null,
      borderRadius: 12 // Set the border radius to 12px
    }).then(function (canvas) {
      // Create a temporary link element
      const a = document.createElement('a');
      a.href = canvas.toDataURL('image/png'); // Convert canvas to image URL
      a.download = 'result.png'; // Set the download file name
      a.click(); // Trigger the download
    });
  });
  
  
  
  
  
  
  



  
