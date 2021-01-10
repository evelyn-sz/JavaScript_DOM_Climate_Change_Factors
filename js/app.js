document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-item-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);
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

    const factorName = document.createElement('h2');
    factorName.textContent = (`Factor name: ${form.factorName.value}`);
    feedbackLoopItem.appendChild(factorName);

    const source = document.createElement('h3');
    source.textContent = form.source.value;
    feedbackLoopItem.appendChild(source);

    const impact = document.createElement('p');
    impact.textContent = form.impact.value;
    feedbackLoopItem.appendChild(impact);

    return feedbackLoopItem;
}