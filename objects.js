let captian = {
    firstname: "Steve",
    lastname:"rogers",
    friends : ["bucky" , "tony  stark" , "dr. dre"],
    isAvenger: true,
    age : 150,
    sayhi : function sayhi(){
        console.log("cap says Hi")
    },
    address : {
        city :  "New York",
        state : "Manhatten",
        country : "USA"
    }
}

console.log(captian)

captian.sayhi

captian.movies = [ "avenges1" , "avengers2" , "avengers3"]

delete captian.age