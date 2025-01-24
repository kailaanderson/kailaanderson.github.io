function showProjects(type) {
    const passionProjects = document.querySelector('.projects.passion');
    const clientProjects = document.querySelector('.projects.client');
    const options = document.querySelectorAll('.option');

    if (type === 'passion') {
        passionProjects.classList.add('active');
        clientProjects.classList.remove('active');
    } else {
        passionProjects.classList.remove('active');
        clientProjects.classList.add('active');
    }

    options.forEach(option => {
        option.classList.remove('active');
    });

    document.querySelector(`.option[onclick="showProjects('${type}')"]`).classList.add('active');
}

function navigateAndMark(sectionId, itemId) {
    // Scroll to the section
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  
    // Mark the item as checked
    var item = document.getElementById(itemId);
    item.classList.add('checked');

    // Get all the list items
    var items = document.querySelectorAll('.todoNav li');
    var itemIndex = Array.from(items).indexOf(item);

    // Mark all items above the clicked item
    for (var i = 0; i <= itemIndex; i++) {
     items[i].classList.add('checked');
    }

    // Unmark all items below the clicked item
    for (var i = itemIndex + 1; i < items.length; i++) {
        items[i].classList.remove('checked');
     }
  }

function makeSticky() {
    var navbarContainer = document.getElementById("todoNavContainer");
    var stickyPoint = 300; // Point where navbar should stick

    if (window.scrollY >= stickyPoint) {
        navbarContainer.classList.add("sticky");
    } else {
        navbarContainer.classList.remove("sticky");
    }
}
