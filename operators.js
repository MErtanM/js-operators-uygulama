/*

There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team,using the test data below
Compare the team's average scores to determine the winner of the competition,
and print it to the console. 2. Include a requirement for a minimum scoreof 100. Witht his rule,a
team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
3. Minimum score also applies to a draw!So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/


//1

const avgDolphins = (96 +108 + 89 ) / 3

const avgKoalas = (88 + 91 +110 ) / 3

console.log(avgDolphins, avgKoalas)

if(avgDolphins > avgKoalas){
console.log("Winner is Dolphins")
}else{
    console.log("Winner is KOalas")
}

// 2.
const avgDolphins2 = (97 + 112 + 101 ) / 3
const avgKoalas2 = (109 + 95 + 123 ) / 3

console.log(avgDolphins2, avgKoalas2)

if (avgDolphins2 > avgKoalas2 && avgDolphins2 >=100){
console.log("Winner is Dolphins")

}else if(avgKoalas2 > avgDolphins2 && avgKoalas2 >= 100){
    console.log("Winner is Koalas")}

// 3

const avgDolphins3 = (97 + 112 + 101 ) / 3
const avgKoalas3 = (109 + 95 + 123 ) / 3

console.log(avgDolphins3, avgKoalas3)

if (avgDolphins3 > avgKoalas3 && avgDolphins3 >=100){
console.log("Winner is Dolphins")

}else if(avgKoalas3 > avgDolphins3 && avgKoalas3 >= 100){
    console.log("Winner is Koalas")

}else if (avgKoalas3 == avgDolphins3 && avgKoalas3 >= 100 && avgDolphins3 >= 100){

    console.log("This is draw")

}else {
    console.log("Ther is no winner")
}



//uygulama2
/*

Take inputs from the user (the day and the time)  and return output whether is open or closed.
// Open -> Monday to Friday, 10-21 
// Close -> all weekend

*/

const day = prompt("Enter the day:")
const time = prompt("Enter the time:")

/*
 if(day !="Saturday" && day != "Sunday" && (time >= 10 && time <= 21)) {

    console.log('Open')
 }else{
     console.log("Close")
 }


*/








if(hour <= 21 && hour >= 10 ) {
    switch (day) {

case ("monday"):
        console.log("Open")
        break
case ("tuesday"):
        console.log("Open")
        break
case ("wednesday"):
        console.log("Open")
        break
case ("thursday"):
        console.log("Open")
        break
case ("friday"):
        console.log("Open")
        break
        default:
            console.log("CLOSED")
            break
    }
         }else{
             console.log("CLOSED")
         }

     