const accordionItems = document.querySelectorAll('.accordion-item');
const openMultipleItems = document.getElementById('openMultipleCheckbox');

accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        //open it
        const currentItem = item.closest('.accordion-item');
        currentItem.classList.toggle('active');

        //close others 
        if (!openMultipleItems.checked) {
            accordionItems.forEach(other => {
                const otherItem = other.closest('.accordion-item');
                if (otherItem !== currentItem) {
                    otherItem.classList.remove('active');
                }
            })
        }
    })
});