const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('bom'); // you need to fill in the blank to reference the HTML element that is a unordered list element.


//const li = document.createElement('li');
//const deleteButton = document.createElement('button');
//li.textContent = input.value;
//deleteButton.textContent = '❌';
//li.append(deleteButton);
//list.append(li);

//part 2
// Event listener for 'Add Chapter' button
button.addEventListener('click', function() {
  
    // Check if input is not empty
    if (input.value.trim() !== '') {
        // Create new list item and delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        
        // Set content of li and button
        li.textContent = input.value; // Set li text to input value
        deleteButton.textContent = '❌'; // Set button text
        
        // Append delete button to li
        li.append(deleteButton);
        
        // Append li to the list
        list.append(li);
        
        // Event listener for delete button
        deleteButton.addEventListener('click', function () {
            list.removeChild(li); // Remove the list item
            input.focus(); // Focus back to input
        });
        
        // Clear the input field for the next entry
        input.value = '';
    }

    // Focus back on input field regardless of outcome
    input.focus();
});