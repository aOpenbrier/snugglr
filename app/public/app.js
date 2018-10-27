
function submitSurvey() {

    let nameIn = document.getElementById('name').value
    let photoIn = document.getElementById('photo').value
    let scoreArr

    function isComplete() {
        let isCompleted = true
        if (nameIn === '') {
            isCompleted = false
        }
        if (photoIn === '') {
            isCompleted = false
        }
        //clear array from previous attempts to submit
        scoreArr = []
        for (let i = 1; i <= 10; i++) {
            //collect scores while already checking values
            scoreArr.push(document.getElementById('q' + i).value)
            if (document.getElementById('q' + i).value === '') {
                isCompleted = false
            }
        }
        return isCompleted
    }

    if (isComplete()) {
        //collect user data into object
        const userInput = {
            name: nameIn,
            photo: photoIn,
            scores: scoreArr
        }
        fetch('/matches', {
            method: "Post",
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify(userInput)
        })
        .then(r => {
            console.log(r.status)
        })
        .catch(e => console.error(e))

        fetch('/matches')
        .then(r => r.json())
        .then(r => {
            console.log(`match: ${r.name}`)
            //TODO
            //display modal of match
        })
        .catch(e => console.error(e))
    }
}