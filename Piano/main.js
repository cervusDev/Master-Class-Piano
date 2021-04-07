
// Get All Keys
    const allKeys = document.querySelectorAll(".key")

// Play Notes
   function playNote(event) {
        // Get KeyCode
            let audioKeyCode = getKeyCode(event)


        // typed or pressed key
            const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
            console.log(key)

        // if key exist

            const cantFoundAnyKey = !key
            if (cantFoundAnyKey) {
                return;
            }

        // play audio

        const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
        audio.currentTime = 0
        audio.play()
   }

    function getKeyCode (event) {
    
        let keyCode;

        const isKeyBoard = event.type === "keydown"
        if (isKeyBoard) {
            keyCode = event.keyCode
        } else {
        keyCode = event.target.dataset.key
        }

        console.log(keyCode)
        return keyCode
}
// Click with Mouse
allKeys.forEach( function (key) {
    key.addEventListener("click", playNote)
})
// Keyboard Type
   //
window.addEventListener("keydown", playNote)

