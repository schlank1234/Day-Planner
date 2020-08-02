console.log("day-planner")
var textarea = document.querySelector(".textarea")
textarea.textContent = "hello"
storage.setItem(keyName, keyValue);
UpdateContext({
    CurrentTime: Now()
});
Patch(MySharePointList, GalleryXYZ.Selected, {
    MyTimeColumn: CurrentTime
})



1. on click event
for save button
2. inside the on click event get the value from text area
3. get the time that is related to the text
4. save the time and text in the localStorage