// Date and Time in JavaScript
// JavaScript provides the Date object to work with dates and times.

// Creating a Date object   
let currentDate = new Date(); // Current date and time
let specificDate = new Date('2023-01-01'); // Specific date
let specificDateTime = new Date('2023-01-01T10:30:00'); // Specific date and time
// console.log(currentDate);
// console.log(specificDate);
// console.log(specificDateTime);   

// Getting date components
let year = currentDate.getFullYear();        // Get the year
let month = currentDate.getMonth();          // Get the month (0-11)
let day = currentDate.getDate();         // Get the day of the month (1-31) 
let hours = currentDate.getHours();        // Get the hours (0-23)
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();     // Get the minutes (0-59)
// console.log(year, month, day, hours, minutes, seconds);


// Setting date components
currentDate.setFullYear(2024);      // Set the year to 2024 
currentDate.setMonth(11);          // Set the month to December (11)    
currentDate.setDate(25);           // Set the day of the month to 25
currentDate.setHours(15);        // Set the hours to 15 (3 PM)      
currentDate.setMinutes(45);     // Set the minutes to 45    

// console.log(currentDate);

// Date formatting
let dateString = currentDate.toDateString(); // Convert to a readable date string
let timeString = currentDate.toTimeString(); // Convert to a readable time string
let isoString = currentDate.toISOString();   // Convert to ISO format
// console.log(dateString);
// console.log(timeString);
// console.log(isoString);      

// Date arithmetic
let futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 10); // Add 10 days to the current date
let pastDate = new Date();
pastDate.setMonth(pastDate.getMonth() - 2);    // Subtract 2 months from the current date
// console.log(futureDate);
// console.log(pastDate);   

// Difference between two dates
let date1 = new Date('2023-01-01');
let date2 = new Date('2023-12-31');
let differenceInTime = date2.getTime() - date1.getTime(); // Difference in milliseconds
let differenceInDays = differenceInTime / (1000 * 3600 * 24); // Convert to days
// console.log(differenceInDays); // 364    



// *********************************Date*********************************
// console.log(Date);
// console.log(Date.now()); // Current timestamp in milliseconds since January 1, 1970     

let d = new Date();

// console.log(d.getDate()); // Day of the month (1-31) 
// console.log(d.getDay()); // Day of the week (0-6)
// console.log(d.getFullYear()); // Full year (e.g., 2023)
// console.log(d.getHours()); // Hours (0-23)
// console.log(d.getMilliseconds()); // Milliseconds (0-999)
// console.log(d.getMinutes()); // Minutes (0-59)
// console.log(d.getMonth()); // Month (0-11)
// console.log(d.getSeconds()); // Seconds (0-59)
// console.log(d.getTime()); // Timestamp in milliseconds since January 1, 1970
// console.log(d.toString()) 
// console.log(typeof d);
// console.log(d.toDateString()); // Readable date string
// console.log(d.toTimeString()); // Readable time string
// console.log(d.toISOString()); // ISO format string


let myCreatedDate = new Date("01-10-2026")
// console.log(myCreatedDate.toLocaleDateString())

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


newDate.toLocalString('default',{
    weekday: "long",
})

