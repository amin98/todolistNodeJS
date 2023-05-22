const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementById('navbar-links');

const checkbox = document.getElementsByClassName('checkbox')[0];

var checkedStatus = false;
var task = {
  name: 'Stretching after workout',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo reiciendis cupiditate corporis perferendis sed! Rerum voluptatem fuga magni fugit. Nulla soluta, delectus vero et porro nobis illum ipsam! Pariatur, aliquam.',
  priority: 1,
  status: checkedStatus,
};

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    task.status = true;

    console.log(task.status);
  } else {
    task.status = !task.status;

    console.log(task.status);
  }
});
