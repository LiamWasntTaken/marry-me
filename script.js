// Make the paper draggable
const papers = document.querySelectorAll(".paper");

papers.forEach(paper => {
    paper.addEventListener("mousedown", (event) => {
        let shiftX = event.clientX - paper.getBoundingClientRect().left;
        let shiftY = event.clientY - paper.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            paper.style.left = pageX - shiftX + "px";
            paper.style.top = pageY - shiftY + "px";
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener("mousemove", onMouseMove);

        paper.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", onMouseMove);
        });
    });

    paper.addEventListener("dragstart", () => false);
});
