let jonAttack = 25
let jamieAttack = 35

if (jonAttack > jamieAttack){
    console.log("Jons attack is greater");
} else if (jamieAttack > jonAttack) {
    console.log("Jaimies attack is greater")
} else {
    console.log("their attacks are the same")
}

let jonHealth = 100
let jonDefense = 0

if (jonHealth <= jamieAttack){
    console.log("Jon has been slain");
} else {
    jonHealth -= jamieAttack
    console.log(`Jons health is now ${jonHealth}`)
}

jonDefense += 15

if (jonHealth <= jamieAttack - jonDefense){
    console.log("Jon has been slain!")
} else {
    jonHealth -= jamieAttack - jonDefense
    console.log( `Jons health is now ${jonHealth}`)
}
//if ((conditional) >= 100), set health to 100)
if ((jonHealth + 50) >= 100){
    jonHealth = 100
} else {
    //take whatever Jons health is and add 50
    jonHealth += 50
    console.log(`Jons health is ${jonHealth}`)
}

// for (let i = 1; i <= 5; i++) { // this will give 5 attacks
//     if (jonHealth <= jamieAttack - jonDefense) {
//         console.log("Jon has been slain")
//     } else {
//         jonHealth -= jamieAttack - jonDefense
//         console.log(`Jon's current health: ${jonHealth}`)
//     }
// }

//or a while loop could be used to track
//how many hits itb takes to kill Jon.
let hits = 0
let bandage = 5
while(jonHealth>0){
    if(jonHealth<50 && bandage > 0){
        jonHealth += 50
        bandage --
    }
    jonHealth -= jamieAttack - jonDefense
    hits++
}
console.log(hits)