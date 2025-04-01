const papers = document.querySelectorAll(".paper");

papers.forEach(paper => {
    // Function to start dragging
    function startDrag(event) {
        event.preventDefault(); // Prevents unwanted behavior

        let startX, startY;

        if (event.type === "mousedown") {
            startX = event.clientX - paper.getBoundingClientRect().left;
            startY = event.clientY - paper.getBoundingClientRect().top;

            document.addEventListener("mousemove", moveDrag);
            document.addEventListener("mouseup", stopDrag);
        } else if (event.type === "touchstart") {
            let touch = event.touches[0];
            startX = touch.clientX - paper.getBoundingClientRect().left;
            startY = touch.clientY - paper.getBoundingClientRect().top;

            document.addEventListener("touchmove", moveDrag);
            document.addEventListener("touchend", stopDrag);
        }

        function moveDrag(event) {
            let pageX, pageY;

            if (event.type === "mousemove") {
                pageX = event.clientX;
                pageY = event.clientY;
            } else if (event.type === "touchmove") {
                let touch = event.touches[0];
                pageX = touch.clientX;
                pageY = touch.clientY;
            }

            paper.style.position = "absolute";
            paper.style.left = `${pageX - startX}px`;
            paper.style.top = `${pageY - startY}px`;
        }

        function stopDrag() {
            document.removeEventListener("mousemove", moveDrag);
            document.removeEventListener("mouseup", stopDrag);
            document.removeEventListener("touchmove", moveDrag);
            document.removeEventListener("touchend", stopDrag);
        }
    }

    // Attach events for both mouse and touch
    paper.addEventListener("mousedown", startDrag);
    paper.addEventListener("touchstart", startDrag);
});
