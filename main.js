const d = new Date();
const year = String(d.getFullYear());
const curDate = String(d.getDate()).padStart(2, '0');
const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const monthName =months[d.getMonth()];

function show_date(){
    document.querySelector(".year h4").innerHTML = year;
    document.querySelector(".date h2").innerHTML = curDate;
    document.querySelector(".date span").innerHTML = monthName;
}
show_date();




