document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-item-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = (event) => {
    event.preventDefault();

    const feedbackLoopItem = createFeedbackLoopItem(event.target);
    const feedbackLoop = document.querySelector('#climate-change-factors');
    feedbackLoop.appendChild(feedbackLoopItem);

    event.target.reset();
}

const createFeedbackLoopItem = (form) => {
    const feedbackLoopItem = document.createElement('li');
    feedbackLoopItem.classList.add('feedback-loop-item');

    const factorName = document.createElement('li');
    factorName.textContent = form.factorName.value;
    feedbackLoopItem.appendChild(factorName);

    const cause = document.createElement('li');
    cause.textContent = (`Cause: ${form.cause.value}`);
    feedbackLoopItem.appendChild(cause);

    const impact = document.createElement('li');
    impact.textContent = (`Sign: ${form.impact.value}`);
    // if (impact.textContent == 'Positive') {
    //     impact.textContent.add('red')
    // } else {
    //     impact.textContent.add('blue')
    // }
    feedbackLoopItem.appendChild(impact);

    return feedbackLoopItem;
};

const handleDeleteAllClick = () => {
    const feedbackLoop = document.querySelector('#climate-change-factors');
    feedbackLoop.innerHTML = '';
}

