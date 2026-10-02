const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "AIR JORDAN",
    price: 180,
    description: "A classic leather high-top with a supportive ankle collar and durable rubber outsole.",
    colors: [
      {
        code: "red",
        img: "./img/Jordan.png",
      },
      {
        code: "black",
        img: "./img/Jordan2.png",
      },
    ],
  },

  {
    id: 2,
    title: "LEBRON",
    price: 200,
    description: "A knit upper and plush cushioning give this signature basketball shoe a secure, comfortable feel.",
    colors: [
      {
        code: "black",
        img: "./img/Lebron.png",
      },
      {
        code: "white",
        img: "./img/Lebron2.png",
      },
    ],
  },

  {
    id: 3,
    title: "KOBE",
    price: 180,
    description: "A close-fitting signature design made for lightweight comfort and controlled movement on court.",
    colors: [
      {
        code: "purple",
        img: "./img/Kobe.png",
      },
      {
        code: "black",
        img: "./img/Kobe2.png",
      },
    ],
  },

  {
    id: 4,
    title: "KYRIE",
    price: 130,
    description: "A secure midfoot fit and grippy outsole support quick cuts and changes of direction.",
    colors: [
      {
        code: "pink",
        img: "./img/Kyrie.png",
      },
      {
        code: "yellow",
        img: "./img/Kyrie2.png",
      },
    ],
  },

  {
    id: 5,
    title: "CURRY",
    price: 160,
    description: "A breathable, lightweight basketball shoe with a grippy outsole for court movement.",
    colors: [
      {
        code: "blue",
        img: "./img/Curry.png",
      },
      {
        code: "white",
        img: "./img/Curry2.png",
      },
    ],
  },

  {
    id: 6,
    title: "DURANT",
    price: 150,
    description: "A versatile signature basketball shoe with a supportive fit and responsive court feel.",
    colors: [
      {
        code: "black",
        img: "./img/Durant.png",
      },
      {
        code: "red",
        img: "./img/Durant2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductDescription = document.querySelector(".productDescription")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")

function updateProductDetails(product) {
  currentProductTitle.textContent = product.title
  currentProductPrice.textContent = `${product.price}$`
  currentProductDescription.textContent = product.description
  currentProductImg.src = product.colors[0].img
  currentProductImg.alt = product.title
  

  currentProductColors.forEach((colorElement, index) => {
    const productColor = product.colors[index]
    colorElement.style.backgroundColor = productColor.code
    colorElement.style.border = productColor.code === "white" ? "1px solid gray" : "none"
    colorElement.style.boxSizing = "border-box"
    colorElement.onclick = () => {
      currentProductImg.src = productColor.img
    }
  })
}

updateProductDetails(choosenProduct)

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // change slide
    wrapper.style.transform = `translateX(${-100 * index}%)`;

    // change product
    choosenProduct = products[index]; 

    updateProductDetails(choosenProduct)
  });
});

 

currentProductSizes.forEach((size) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach(size=>{
    size.style.backgroundColor = "white"
    size.style.color = "black" 
    })
    size.style.backgroundColor = "black"
    size.style.color = "white"
  })
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");


productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})

close.addEventListener("click",()=>{
    payment.style.display="none"
})