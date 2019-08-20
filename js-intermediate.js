ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
 Coding practical questions

 Be sure to use all given test cases

 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

 getFib = (num) => {
   arr = []
   arr.push(num)
   arr.push(num)
   for(let i = 0; i < 8; i++){
     arr.push(arr[i] + arr[i + 1])
   }
   return arr
 }
 console.log(getFib(1));
 console.log(getFib(2));

 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
 Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
 Expected output: [7, 23, -823]

 oddChecker = (arr) => {
   odds=[]
   for(let i=0; i<arr.length; i++){
     if((arr[i] % 2 ===1 || arr[i]%2 === -1) && (typeof(arr[i])==='number')){
       odds.push(arr[i])
     }
   }
   return odds
 }
 console.log(oddChecker(fullArr1));
 console.log(oddChecker(fullArr2));

 oddChecker2 = (arr) => {
   return arr.filter(num => (num % 2 === 1 || num % 2 === -1) && typeof(num)==='number')
 }

 console.log(oddChecker2(fullArr1));
 console.log(oddChecker2(fullArr2));


 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

 Log the type of bicycle:
 console.log(bicycle.type)

 Log the bell:
 console.log(bicycle.gear[2])

 Log the PSI:
 console.log(bicycle.wheels.specs[2])


 4. Write a function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
 Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["a", "t", "l", "e", "d"]
 Expected output: ["d", "e", "l", "t", "a"]

 reverser = (arr) => {
   return arr.reverse()
 }
 console.log(reverser(originalArray1));
 console.log(reverser(originalArray2));

 5. Write the code that would make this test pass.

 describe("multTwo", () => {
     test ("returns an array with all the numbers multiplied by two", () => {
         expect(multTwo([3, 4, 5])).toEqual([6, 8, 10])
         expect(multTwo([23, -9, 0])).toEqual([46, -18, 0])
         expect(multTwo([4.5, -4.5, 12])).toEqual([9, -9, 24])
     })
 })
 multTwo = (arr) => {
   return arr.map(num => num*2)

 }
 console.log(multTwo([3, 4, 5]));
 console.log(multTwo([23, -9, 0]));
 console.log(multTwo([4.5, -4.5, 12]));


 6. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
 Expected output: 3

 letterCounter = (str) => {
   count = 0
   for(let i = 0; i<str.length; i++){
     if( str[i] === 'l' || str[i] === 'L' ){
       count += 1
     }
   }
   return count
 }
 letterCounter2 = (str) => {
   arr = str.split('')
   newArr = arr.filter(ele => ele === 'l' || ele === "L")
   return newArr.length
 }

 console.log(letterCounter2(ourString));

 7. Create a function that takes in a string of a single word and returns the middle letter of the word.
 If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
 Expected output: “l”
var middleLetters2 = "llamas"
 Expected output: “am”

 midEle = (str) => {
   let midCharOdd = Math.floor(str.length/2)
   let midCharEven = str.length/2
   if(str.length%2===1){
     return str[midCharOdd]
   }else{
     return str[midCharEven-1] + str[midCharEven]
   }
 }

 console.log(midEle(middleLetters1));
 console.log(midEle(middleLetters2));
 console.log(midEle('holyCowDude'));

 8. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases.
 Area of a sphere =  4πr^2 (four pi r squared)

 class Circle {
   constructor(radius){
     this.radius = radius
   }
   areaOfcircle(){
     return 4*3.14*(this.radius**2)
   }
 }

 let circle1 = new Circle(6)
 let circle2 = new Circle(8)
 let circle3 = new Circle(12)

 console.log(circle1.areaOfcircle());
 console.log(circle2.areaOfcircle());
 console.log(circle3.areaOfcircle());



 9. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
 Don't overthink this one, it's just destrcturing practice.

 var myCar = {
   make: "VW",
   model: "Jetta",
   specs: {
     doors: 4,
     transmission: "manual",
   }
 }
 console.log(myCar.specs.doors, myCar.specs.transmission);



 10. Stretch: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
 Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
 Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
 Expected output: []

 summerTime = (arr) => {
   newArr = []
   total = 0
   for(let i = 0; i < arr.length; i++) {
     newArr.push(total += arr[i])
   }
   return newArr
 }
 console.log(summerTime(numbersToAdd1));
 console.log(summerTime(numbersToAdd2));
 console.log(summerTime(numbersToAdd3));
 
 summerTime2 = (arr) => {
   sum = 0
   return arr.map(num => sum+=num)
 }
 
 console.log(summerTime2(numbersToAdd1));
 console.log(summerTime2(numbersToAdd2));
 console.log(summerTime2(numbersToAdd3));
