console.log('loading script...');
const eventButton = document.querySelector('.eventButton');
eventButton.addEventListener('click', function(e) {
  console.log('you got me!');
});

const handleClick = function() {
  console.log('another event');
};
//also eventButton.onclick(function() {})

// jQuery:
// $('.eventButton').click(function() {  ... stuff})
