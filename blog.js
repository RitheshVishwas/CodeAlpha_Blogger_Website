
const readMoreLinks = document.querySelectorAll('a[href="blog-post.html"]');


readMoreLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); 

    const blogPostUrl = this.getAttribute('href');

   
    window.open(blogPostUrl, '_blank');
  });
});


const currentYear = new Date().getFullYear();
const footer = document.querySelector('footer');
footer.innerHTML = `<p>&copy; ${currentYear} Books Blog. All rights reserved.</p>`;
