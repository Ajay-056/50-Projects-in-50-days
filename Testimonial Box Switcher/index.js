const testimonialContainer = document.getElementById("tc");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const userName = document.querySelector(".username");
const userRole = document.querySelector(".role");

const testimonials = [];

for (let i = 0; i < 5; i++) {
  testimonials.push({
    name: faker.name.findName(),
    position: faker.name.jobTitle(),
    photo: `https://www.randomuser.me/api/portraits/women/${i}.jpg`,
    text: faker.lorem.paragraph(),
  });
}

let index = 0;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[index];

  testimonial.innerHTML = text;
  userImage.src = photo;
  userName.innerHTML = name;
  userRole.innerHTML = position;

  index++;

  if (index > testimonials.length - 1) {
    index = 0;
  }
}

setInterval(updateTestimonial, 10000);
