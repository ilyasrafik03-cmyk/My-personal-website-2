const skillBars = document.querySelectorAll('.skill-progress');
const abserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => 
  if (entry.isIntersecting)){
    const width = entry.target.style.width;
    entry.target.style.width = '0';
    setTimeout(() => {
      entry.target.style.width = width;
    }, 100);
  }
});
{threshold: 0.5});

skillBars.forEach(bar => {
  observer.observe(bar);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'
       });
  });
});

function sendEmail() {
  const Data = {
    to_email : "ilyasrafik03@gmail.com",
    from_name : document.getElementById('name').value,
    from_email : "ilyasrafik03@gmail.com",
    subject : "Suupport",
    message : `
    name : ${document.getElementById('name').value}
    email : ${document.getElementById('email').value}
    subject : ${document.getElementById('subject').value}
    message : ${document.getElementById('message').value}
    `,
  };
  emailjs.send("service_yyyasix", "template_0e09mlq" , Data).then((response) => {
    alert('success');
  }).catch((error) => {
    alert('fable' + error);
  });
}

document.getElementById("btn").addEventListener('click' , () => {
  sendEmail();
});