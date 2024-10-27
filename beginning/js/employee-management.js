//array with 5 employees initally shown to user
let employeesArr = [
    ["Sally Smith", "Quality Assurance", "3423"],
    ["Mark Martin", "VP Sales", "3346"],
    ["John Johnson", "Marketing", "3232"],
    ["Zak Ruvalcaba", "Teacher", "1234"],
    ["John Pateros", "Blade Runner Engineer", "2049"]
];


function showemployeesArr() {
    const employeeTable = window.document.querySelector("#employeeTable tbody");
    employeeTable.innerHTML = "";

    //first loop over all of the employees 
    employeesArr.forEach((employee, index) => {
        const row = window.document.createElement("tr");
        
        //since we have 2d array for each employee loop over the existent text to find attributes
        for (const informationText of employee) {
            const cell = document.createElement("td");
            cell.textContent = informationText;
            row.appendChild(cell);
        }
        
        const deleteCell = window.document.createElement("td");
        const deleteButton = createDeleteButton(index);
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);

        employeeTable.appendChild(row);
    });
    //•	Display the count of employeesArr in the system within the header
    window.document.getElementById("numemployeesArr").textContent = "Showing: " + employeesArr.length + " employeesArr";
}


//removes employee gets called when the delete button is clicked
function removeEmployee(index) {
    const newEmployeesArr = [];
    //add in all of the employees except for the one we are removing
    for (let i = 0; i < employeesArr.length; i++) {
        if (i !== index) {
            newEmployeesArr.push(employeesArr[i]);
        }
    }
    employeesArr = newEmployeesArr;
    //make sure the users can see the update
    showemployeesArr();
}

//creates delete button and assigns the function to be called to delete 
function createDeleteButton(index) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => removeEmployee(index); 
    return deleteButton;
}

//•	When the application loads, when a new employee is added, or when an existing employee is deleted, 
//employeesArr should appear neatly structured within a table.
window.document.addEventListener("DOMContentLoaded", () => {
    showemployeesArr();
});

//helper functuion to ensure the employees are all valid
function ensureValidEmployee(nameInput, titleInput, extensionInput) {
    let isValid = true;

    //ensure that the errors get cleared out initially unless they are present
    window.document.getElementById("nameError").textContent = "";
    window.document.getElementById("titleError").textContent = "";
    window.document.getElementById("extensionError").textContent = "";

    //show the 
    if (nameInput.value.trim() == "") {
        document.getElementById("nameError").textContent = "Name is required to add employee";
        isValid = false;
    }
    if (titleInput.value.trim() == "") {
        document.getElementById("titleError").textContent = "Title is required to add employee";
        isValid = false;
    }
    if (extensionInput.value.trim() == "") {
        document.getElementById("extensionError").textContent = "Extension is required to add employee";
        isValid = false;
    }

    return isValid;
}

//function to add the employees in
function addEmployee() {
    const nameInput = window.document.getElementById("name");
    const titleInput = window.document.getElementById("title");
    const extensionInput = window.document.getElementById("extension");
    
    const name = nameInput.value.trim();
    const title = titleInput.value.trim();
    const extension = extensionInput.value.trim();

    if (!ensureValidEmployee(nameInput, titleInput, extensionInput)) {
        return;
    }

    const employeeArray = new Array(name, title, extension);
    employeesArr.push(employeeArray);

    //reset the values from the input tp empty once we have added them so user can add more
    nameInput.value = "";
    titleInput.value = "";
    extensionInput.value = "";

    showemployeesArr();
}


