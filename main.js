let text =  "I booked my flight"
let words = text.split(/\s/);
console.log(words)

let arr = ['hi', 'my', 'name', 'is', 'Hien']
let sentence = arr.join(' ')
// console.log(sentence)

const ages = [3, 10, 28, 27, 20];
  
function checkAge(age) {
  return age > 20;
}
  
// array.findIndex(function(currentValue, index, arr))
//Tìm phần tử đầu tiên thỏa mãn điều kiện ở return của function

let age = ages.findIndex(checkAge);
// console.log(age);

// console.log([{'1':2},{'1':4}][0])

// program to get a random item from an array 
function getRandomItem(arr) {
  // get random index value 
  const randomIndex = Math.floor(Math.random() * arr.length);

  // let NewArrRandomIndex = []
  // for (var key in arr) {
  //   key < 20 ? NewArrRandomIndex.push(arr[0]) : null
  // }

  // get random item 
  const item = arr[randomIndex]; 
  return item;
}
const array = [1, 'hello', 5, 8]; 
const result = getRandomItem(array);
// console.log(result);

// console.log([1,2, 'a', 'b', 4, 5, 'x', 'y'].sort(() => Math.random() - 0.5))

const obj = {a: 1, b: 2, c: 3, d: 'a', e: 'b'}
// console.log([{...obj,f: 1}])
// console.log(Object.values(obj));

const obj1 = 
{"-NAZDyIXhRgg3zfZNZBA1": {"email": "mac3@gmail.com", "password": "123123", "userName": "hien3", "value": "Vietnam"}, "-NAZDyIXhRgg3zfZNZBA10 ": {"email": "mac3@gmail.com", "password": "123123", "userName": "hien3", "value": "Vietnam"}, "-NAZDyIXhRgg3zfZNZBA3  ": {"email": "mac3@gmail.com", "password": "123123", "userName": "hien3", "value": "Vietnam"}, "-NAZDyIXhRgg3zfZNZBA4  ": {"email": "mac3@gmail.com", "password": "123123", "userName": "hien3", "value": "Vietnam"}, "-NAZDyIXhRgg3zfZNZBA5  ": {"email": "mac3@gmail.com", "password": "123123", "userName": "hien3", "value": "Vietnam"}, "-NAZDyIXhRgg3zfZNZBA6  ": {"email": "mac3@gmail.com", "password": "123123", "userName": "hien3", "value": "Vietnam"}, "-NAZDyIXhRgg3zfZNZBA7  ": {"email": "mac3@gmail.com", "password": "123123", "userName": "hien3", "value": "Vietnam"}, "-NAZDyIXhRgg3zfZNZBA8  ": {"email": "mac3@gmail.com", "password": "123123", "userName": "hien3", "value": "Vietnam"}, "-NAZDyIXhRgg3zfZNZBA9  ": {"contact": "1234abc", "email": "mac3@gmail.com", "facebook": "123", "password": "123123", "userName": "hien3", "value": "Vietnam"}, "-NAZEizI1LcPsWV2hcRA2": {"contact": "my facebook is machien", "email": "mac1@gmail.com", "facebook": "machien", "password": "123123", "userName": "hien1", "value": "Vietnam"}}
// console.log(Object.values(obj1));

//cách dùng lặp lại một mảng theo key thứ i
function run(object) {
  var mang = [];
  var i = 0;
  for (var key in object) {
      console.log('a');
      i++; //${key} để lấy "key" của object[key]
      if (i > 8) {
          break
      }
  }
  return mang;
}

// console.log(run(obj1))
var size = Object.keys(obj1).length;
// console.log(size)

function convertToMMDDYYYY(dateString) {
  //  Convert a "dd/MM/yyyy" string into a Date object
  let d = dateString.split("/");
  let date = new Date(d[2] + '/' + d[1] + '/' + d[0]);
  return date;     
}

// console.log(convertToMMDDYYYY('23/7/2022'))

// Đối tượng thời gian hiện tại
var d = new Date();
 
d.getDate();
d.getDay();
d.getFullYear();
d.getYear();
d.getHours();
d.getMilliseconds();
d.getMinutes();
d.getMonth();
d.getSeconds();
d.getTime();

// console.log(d.getMonth())


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
}
if (mm < 10) {
  mm = '0' + mm;
}
var today = dd + '/' + mm + '/' + yyyy;
// console.log(today)


var datetime = 1383066000000; // anything
var date1 = new Date(datetime);
var options = {
  year: 'numeric', month: 'numeric', day: 'numeric',
};

var result2 = date1.toLocaleDateString('en-GB', options); // 10/29/2013
// console.log('date1:', result2)
// Expected output "Sunday, 20 December 2020 at 14:23:16 GMT+11"

//Function convert milisecon to MM/DD/YYYY
function miliseconToMMDDYYYY(milisecon){
  var datetime = milisecon; // anything
  var date1 = new Date(datetime);
  var options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
  };
  return date1.toLocaleDateString('en-GB', options);
  // Expected output "Sunday, 20 December 2020 at 14:23:16 GMT+11"
}

// console.log('1383066000000 to day:', miliseconToMMDDYYYY(1383066000000))

const today1 = new Date();
// Trừ đi 1 ngày
// console.log( 'today1:', today1)
const lastDay = today1.setDate(today1.getDate() - 1);
// console.log( 'today1.setDate(today1.getDate() - 1):', today1)
// console.log('lastDay:', lastDay) //trả về milisecon


//*** This code is copyright 2002-2016 by Gavin Kistner, !@phrogz.net
//*** It is covered under the license viewable at http://phrogz.net/JS/_ReuseLicense.txt
Date.prototype.customFormat = function(formatString){
  var YYYY,YY,MMMM,MMM,MM,M,DDDD,DDD,DD,D,hhhh,hhh,hh,h,mm,m,ss,s,ampm,AMPM,dMod,th;
  YY = ((YYYY=this.getFullYear())+"").slice(-2);
  MM = (M=this.getMonth()+1)<10?('0'+M):M;
  MMM = (MMMM=["January","February","March","April","May","June","July","August","September","October","November","December"][M-1]).substring(0,3);
  DD = (D=this.getDate())<10?('0'+D):D;
  DDD = (DDDD=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][this.getDay()]).substring(0,3);
  th=(D>=10&&D<=20)?'th':((dMod=D%10)==1)?'st':(dMod==2)?'nd':(dMod==3)?'rd':'th';
  formatString = formatString.replace("#YYYY#",YYYY).replace("#YY#",YY).replace("#MMMM#",MMMM).replace("#MMM#",MMM).replace("#MM#",MM).replace("#M#",M).replace("#DDDD#",DDDD).replace("#DDD#",DDD).replace("#DD#",DD).replace("#D#",D).replace("#th#",th);
  h=(hhh=this.getHours());
  if (h==0) h=24;
  if (h>12) h-=12;
  hh = h<10?('0'+h):h;
  hhhh = hhh<10?('0'+hhh):hhh;
  AMPM=(ampm=hhh<12?'am':'pm').toUpperCase();
  mm=(m=this.getMinutes())<10?('0'+m):m;
  ss=(s=this.getSeconds())<10?('0'+s):s;
  return formatString.replace("#hhhh#",hhhh).replace("#hhh#",hhh).replace("#hh#",hh).replace("#h#",h).replace("#mm#",mm).replace("#m#",m).replace("#ss#",ss).replace("#s#",s).replace("#ampm#",ampm).replace("#AMPM#",AMPM);
};


const d1 = new Date();
// console.log('d1:', d1.setDate(0)) ;
const d2 = new Date("July 21, 1983 01:15:00");
const d3 = d2.setDate(1);

//const newdate = new Date(year, month, day, hours, minutes, seconds, milliseconds);
const newdate = new Date(2010, 1, 22, 11, 55, 55, 555)
//Khai báo 1 ngày bất kì
var now = new Date;
// console.log('now:', now.customFormat( "#DD#/#MM#/#YYYY# #hh#:#mm#:#ss#" ) );
// console.log( 'd2=new Date(\'July 21, 1983 01:15:00\'):', d2)
// console.log('d2 to DD/MM/YYY:', d2.customFormat( "#DD#/#MM#/#YYYY# #hh#:#mm#:#ss#" ))
// console.log( 'd3=d2.setDate(1):', d3 )

/*tạo hàm tìm phần tử xuất hiện nhiều nhất trong mảng JavaScript*/
function array_unique_Exist_Most(array){
  array.sort(); // Xắp xếp lại theo quy tắc abc
  // console.log("🚀 ~ file: main.js ~ line 179 ~ array_unique_Exist_Most ~ array.sort()", array.sort())

  let max =[0,0];

  //Sử dụng vòng lặp for để lọc ra các phần tử xuất hiện nhiều hơn 1 lần
  //So sánh số lần xuất hiện và thay đổi max khi cần.
  let count =1;
  for (let i = 0; i < array.length; i++ ) {
      if (array[i] === array[i+1]) ++count; //Thấy phần tử trùng nhau thì tiếp tục đếm
      //Nếu thấy phần tử khác nhau thì so sánh tổng hợp rồi đếm phần tử tiếp
      else{
           //So sánh số lần xuất hiện với max[1] 
           if (max[1] < count){ 
                //Nếu tìm thấy phần tử xuất hiện nhiều hơn thì gán phần tử vào max[0]
                //Và gán số lần xuất hiện vào max[1]
                max[0] = array[i];
                max[1] = count;   
           }
           count = 1;
      }
  }
  // console.log( "Phần tử "+max[0]+" xuất hiện nhiều nhất với "+max[1]+" lần");
  return max[0] 
}


let array1 = ["#000", "#000", "#0000FF", "#000", "#000", "#0000FF","#000", "#000", "#0000FF","#000", "#000", "#0000FF","#000", "#000", "#0000FF","#000", "#000", "#0000FF","#000", "#000", "#0000FF","#000", "#000", "#0000FF","#000", "#000", "#0000FF","#000", "#000", "#0000FF",];


//Tìm phần tử xuất hiện nhiều nhất trong mảng JavaScript
// console.log('array_unique_Exist_Most(array1): ', array_unique_Exist_Most(array1))


//sắp xếp mảng
let numbers = [1, "a", "b", 4, 5];
let reversedNumbers = numbers.reduce((acc, val) => [val, ...acc], []);
// console.log(reversedNumbers); // [5, 4, 3, 2, 1]

let numbers1 = [1, "a", "b", 4, 5, "c", "d"];
numbers1.reverse();
// console.log(numbers1); // [5, 4, 3, 2, 1]

//Trộn mảng 
numbers1.sort(function(){return 0.5 - Math.random()})
// console.log(numbers1);  //Output: ra mảng trộn ngẫu nhiên


var abc = { name: 'Hien', age: 28, address: 'TN, VN' }
for (var key in abc) {
  // console.log(abc[key]); 
}
//Output: `Hien /n  28  /n TN, VN`

//Lấy tên key1
let myObject = { key1: "value1", key2: "value2", key3: "value3"};
let keys = Object.keys(myObject);  //tạo mảng các key của object
// console.log(keys[0]) // Output: "key1"




//     const randomArray = new Uint32Array(10);
//     crypto.getRandomValues(randomArray);
//     setNumbers(Array.from(randomArray));

//     function getArrLastTestNumber() {
//       let numbers1=[]
//       for (let i = 0; i < numbers.length; i++) {
//         numbers1[i] = (numbers[i] % 10)
//       }
//       setNumbers1(numbers1);
//       console.log("🚀 ~ file: VocabularyExcerciseNow.js:37 ~ getArrLastTestNumber ~ numbers1", numbers1)
//     }

//Test thử tần xuất xuất hiện các số từ 0-9 sau 25 lần nhấn nút reset (dùng chức năng find của vs code để tìm số lần: 10 số x 35 lần = 350 số)
//[0, 1, 8, 6, 7, 6, 8, 9, 4, 8,]//[6, 8, 5, 3, 6, 5, 0, 9, 7, 1,]//[6, 6, 8, 3, 4, 8, 9, 0, 7, 1,]//[1, 8, 0, 9, 5, 3, 9, 6, 0, 1,]//[0, 0, 5, 7, 1, 8, 4, 2, 5, 9,] 
//[4, 6, 6, 2, 6, 5, 2, 1, 4, 0,]//[8, 2, 3, 6, 5, 8, 9, 9, 4, 9,]//[6, 5, 3, 6, 8, 4, 9, 4, 9, 3,]//[9, 4, 6, 0, 5, 5, 0, 6, 7, 9,]//[2, 9, 8, 8, 6, 6, 1, 4, 1, 8,]
//[9, 0, 0, 4, 2, 5, 8, 0, 5, 3,]//[3, 2, 9, 5, 5, 6, 1, 5, 8, 1,]//[2, 4, 8, 9, 4, 7, 2, 2, 5, 5,]//[9, 5, 1, 6, 6, 3, 4, 2, 2, 3,]//[9, 0, 9, 7, 0, 8, 2, 7, 8, 3,]
//[6, 5, 8, 2, 6, 9, 8, 4, 4, 3,]//[2, 4, 8, 2, 5, 4, 6, 1, 9, 6,]//[4, 7, 9, 8, 4, 3, 8, 6, 3, 4,]//[4, 9, 7, 6, 8, 8, 2, 5, 3, 0,]//[6, 5, 9, 0, 6, 1, 0, 0, 6, 6,]
//[4, 8, 5, 7, 9, 7, 7, 7, 3, 6,]//[4, 0, 3, 0, 5, 8, 1, 7, 9, 1,]//[5, 8, 6, 1, 4, 7, 3, 7, 9, 7,]//[0, 0, 5, 3, 4, 8, 5, 1, 0, 8,]//[4, 6, 8, 9, 7, 7, 0, 3, 7, 0,]
//[3, 3, 1, 6, 7, 9, 3, 3, 1, 7,]//[8, 5, 5, 9, 2, 4, 0, 4, 4, 1,]//[1, 4, 9, 0, 4, 0, 2, 2, 9, 8,]//[9, 7, 6, 3, 8, 1, 5, 5, 8, 8,]//[6, 2, 7, 0, 5, 3, 6, 4, 2, 6,]
//[6, 4, 5, 3, 9, 7, 6, 6, 1, 4,]//[7, 5, 6, 2, 7, 8, 9, 2, 6, 3,]//[9, 2, 3, 7, 1, 5, 8, 8, 2, 3,]//[2, 9, 8, 8, 4, 9, 1, 8, 4, 7,]//[5, 9, 5, 0, 5, 2, 9, 8, 5, 3,]

//Kết quả : 
//0  31 lần
//1  26 lần
//2  28 lần
//3  31 lần
//4  37 lần
//5  39 lần
//6  43 lần
//7  30 lần
//8  44 lần
//9  41 lần

//===> Số xuất hiện ít nhất là 1 26 lần < 35 lần 9 lần, số xuất hiện nhiều nhất là 8 44 lần > 35 lần 9 lần
//===> Có thể suy đoán rằng hàm này ra ít số 1 (26 lần), 2 (28 lần) ra nhiều số 8 (44 lần), 9 (41 lần)
//Khá kì lạ là trong 100 chữ số của số pi thì số 1,2 cũng ít 8,9 cũng nhiều lần xuất hiện !!!