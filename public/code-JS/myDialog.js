// Get elements
    const openBtn = document.getElementById('openDialog');
    const closeBtn = document.getElementById('closeDialog');
    const dialog = document.getElementById('myDialog');

    // Open the dialog
    openBtn.addEventListener('click', () => {
        dialog.showModal(); // This opens it as a modal (blocks interaction with background)
    });

    // Close the dialog
    closeBtn.addEventListener('click', () => {
        dialog.close(); // Reverses everything: closes dialog and restores background
    });

    // Optional: Close with Escape key (built-in)
    dialog.addEventListener('close', () => {
        console.log('Dialog closed');
    });