// JQUERY javascript
// Listens for changes in the li and if checked, updates the h4 of amenitites
const amenityHead = $('.amenities h4');
const allInputs = $('.amenities .popover li input');
const checkedInputs = [];
const myAmenities = [];

allInputs.change(() => {
  for (let i = 0; i < allInputs.length; i++) {
    if (allInputs[i].checked) {
      if (!checkedInputs.includes(allInputs[i].id)) {
        checkedInputs.push(allInputs[i].id);
        myAmenities.push(allInputs[i].name);
      }
    } else {
      if (checkedInputs.includes(allInputs[i].id)) {
        const index = checkedInputs.indexOf(allInputs[i].id);
        const nameIndex = checkedInputs.indexOf(allInputs[i].name);
        checkedInputs.splice(index, 1);
        myAmenities.splice(nameIndex, 1);
      }
    }
  }
  amenityHead.text(myAmenities.join(', '));
});
