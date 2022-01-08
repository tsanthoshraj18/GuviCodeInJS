var list_Of_contact_number = {
  "santhosh": 9087840193,
  "Raj": 1213,
  "sam": 456,
};
console.log("Contact List:",list_Of_contact_number)
// console.log(santhosh in list_Of_contact_number);
var search_Contact = prompt('Enter the conact Name');

if (search_Contact in list_Of_contact_number) {
  console.log(search_Contact,list_Of_contact_number[search_Contact])
  // if (Search_Contact == "santhosh"){
  //   console.log(list_Of_contact_number.santhosh)
  // }
  // else if (Search_Contact == "Raj"){
  //   console.log(list_Of_contact_number.Raj)

  // }
  // else if (Search_Contact == "sam"){
  //   console.log(list_Of_contact_number.sam)
  // }
}
else{
  console.log("Number Not found")
}

var add_Number = prompt("Do you want to add number if yes enter y or N")
if (add_Number == "y" ){
  var name = prompt("Enter the name:")
  var number = prompt("Enter the number:");
  if (name in list_Of_contact_number){
     console.log("User already exist")
   }
   else{
     console.log("added")
    list_Of_contact_number[name]=number
   }
}
var delete_Number = prompt("Do you want to delete number if yes enter y or N")
if (delete_Number == "y" ){
  var name = prompt("Enter the name:");
  if (!(name in list_Of_contact_number)){
     console.log("User not found")
   }
  delete list_Of_contact_number[name] 
}
console.log("Contact List:",list_Of_contact_number)
