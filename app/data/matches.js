let matches = [
    {
        name: "Dog",
        photo: "images/dog.jpg",
        scores: [3, 5, 2, 4, 4, 3, 3, 3, 3, 5]
    },
    {
        name: "Cat",
        photo: "images/cat.jpg",
        scores: [5, 2, 4, 3, 1, 1, 2, 5, 1, 2]
    },
    {
        name: "Raccoon",
        photo: "images/raccoon.jpg",
        scores: [4, 1, 5, 5, 2, 1, 1, 2, 1, 3]
    },
    {
        name: "Dolphin",
        photo: "images/dolphin.jpg",
        scores: [5, 4, 3, 1, 2, 5, 2, 4, 5, 4]
    },
    {
        name: "Piglet",
        photo: "images/piglet.jpg",
        scores: [2, 3, 2, 4, 5, 3, 5, 2, 2, 4]
    }
]
let newUser

module.exports = {
    addUser: function (userData) {
        newUser = userData
    },
    compareUser: function () {
        //total differences for each match
        let differencesArr = []
        matches.forEach(function (match) {
            differencesArr.push(match.scores.reduce(function (acc, cur, idx) {
                return acc + Math.abs(cur - parseInt(newUser.scores[idx]))
            }, 0))
        })
        //which match had least differences
        let fewestDifferencesIndex = 0
        for (let i = 0; i < differencesArr.length - 1; i++) {
            if (differencesArr[i] < differencesArr[fewestDifferencesIndex]) {
                fewestDifferencesIndex = i
            }
        }
        //add new user to system for future matching
        matches.push(newUser)
        //return the most compatible person
        return (matches[fewestDifferencesIndex])
    }
}