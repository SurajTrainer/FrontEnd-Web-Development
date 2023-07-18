export default function user(){
    return "Hello Everyone";
}

export function otherUser(){
    // also can define this like
    console.log("Hello again and again i am here.")
}

export let UserVal="This is  the example of the Val values exported by User."

export class userClass{
    test(){
        console.log("User Class is also defind on here.")
    }
}

 class userOtherClass{
    test(){
        console.log("Othr User Class is also defind on here.")
    }
}

export let OTC = new userOtherClass();