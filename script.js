//your JS code here. If required.
 document.getElementById("removeButton").addEventListener("click", () => {
        const colorSelect = document.getElementById("colorSelect");
        if (colorSelect.selectedIndex !== -1) {
            colorSelect.remove(colorSelect.selectedIndex);
        }
    });
});
