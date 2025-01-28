const gallery = document.querySelector(".product-detail__gallery");

const observer = new IntersectionObserver(function (entries){
  entries.forEach((entry)=>{
    console.log(entry);
    
  })
}, {
threshold: 1,
rootMargin: "-50px"
});

observer.observe(gallery);