function handleFormSubmit(event) {
  event.preventDefault();

  
  let selectedCategory = event.target.category.value;

  let myObj = {
    expense: event.target.amount.value,
    describe: event.target.describe.value,
    category: selectedCategory
  };

  let myObj_serial = JSON.stringify(myObj);

  localStorage.setItem(selectedCategory, myObj_serial);

  const string = myObj.expense + "-" + myObj.describe + "-" + myObj.category;
  const newLi = document.createElement('li');
  newLi.setAttribute('data-category', myObj.category);
  newLi.innerHTML = string + '<button class="delete-btn">x</button><button class="edit-btn">Edit</button>';

  const list = document.querySelector("ul");
  list.appendChild(newLi);
}
document.addEventListener('DOMContentLoaded', function () {
  const userList = document.querySelector('ul');
    userList.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
          
            const usercategory = event.target.parentElement.getAttribute('data-category');
            
            localStorage.removeItem(usercategory);
  
            
            userList.removeChild(event.target.parentElement);
           
        }
           else if (event.target.classList.contains('edit-btn')) {
            const usercategory = event.target.parentElement.getAttribute('data-category');
  
          
            const userString = localStorage.getItem(usercategory);
            const userObj = JSON.parse(userString);
  
            
            document.getElementById('expense').value = userObj.expense;
            document.getElementById('describe').value = userObj.describe;
            document.getElementById('category').value = userObj.selectedCategory;
  
              
            localStorage.removeItem(usercategory);
  
          
            userList.removeChild(event.target.parentElement);
        }
      
    });
  });