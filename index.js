// using async function loading data from api

const loadPhone = async (searchItem, showAllClicked) => {

  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchItem}`
  );
  const data = await response.json();
  const phoneData = data.data;
  displayPhone(phoneData, showAllClicked);
};



// displaying the data from api to the webpage dynamically
const displayPhone = (phoneData, showAllClicked) => {
    const displayContainer = document.getElementById("card-showcase");
    displayContainer.innerHTML = "";
  
     
    const showAllButton = document.getElementById("show-all-button");
    if (phoneData.length > 12 && !showAllClicked) {
      showAllButton.classList.remove("hidden");
    } else {
      showAllButton.classList.add("hidden");
    }
  
    if (!showAllClicked) {
      phoneData = phoneData.slice(0, 12);
    } else {
      phoneData = phoneData;
    }
  
    phoneData.forEach((phone) => {
      const displayDiv = document.createElement("div");
      // displayDiv.classList.add = ( );
      displayDiv.innerHTML = `
         <div class = 'rounded-lg border border-solid border-[#cfcfcf] flex flex-col justify-center items-center p-6'> 
         <div'>
         <img  class='rounded-lg bg-[#0d6efd] bg-opacity-10 p-12' src="${phone.image}">
         </div>
         <h3 class='py-6 text-[#403f3f] text-2xl font-bold'>${phone.phone_name}</h3>
         <p class='text-[#706f6f] text-lg font-normal pb-3'>There are many variations of passages of available, but the majority have suffered</p>
         <button class='text-white text-xl font-semibold bg-[#0d6efd] rounded-lg px-6 py-2 mb-6' onclick='showDetailsButton("${phone.slug}")'>Show Details</button>
         </div>`;
      displayContainer.appendChild(displayDiv);
      spinner.classList.add("hidden");
    });
  };
  
// activating showall button

const showAll = () => {
    const searchItem = searchField.value;
    loadPhone(searchItem, true);


// 

// load details function
// const loadDetails = async (phoneName) => {
//     try{
//      const response = await fetch (`https://openapi.programming-hero.com/api/phone/${phoneName}`);
//      const data = await response.json();
//      const phoneDetails = data.data;
//      // console.log(phoneDetails.image);
 
//      // diplaying result
 
//      const modalContainer = document.getElementById('modal-container');
//      const modalDiv = document.createElement('div');
//      modalDiv.innerHTML = `
//  <dialog id="modal" class="modal">
//    <form method="dialog" class="modal-box">
//      <div>
//        <img src="${phoneDetails.image}" alt="" class="px-40 py-20 bg-[#0d6efd] bg-opacity-10 my-5">
//        <h3 class="text-2xl text-[#403f3f] font-bold"></h3>
//        <p class="text-[#706f6f] text-base font-normal">It is a long extablished fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
//        <p class="text-[#706f6f] text-xl font-normal"><span class="text-[#403f3f] font-semibold">Storage:</span></p>
//        <p class="text-[#706f6f] text-xl font-normal"><span class="text-[#403f3f] font-semibold">Display Size:</span></p>
//        <p class="text-[#706f6f] text-xl font-normal"><span class="text-[#403f3f] font-semibold">Chipset:</span></p>
//        <p class="text-[#706f6f] text-xl font-normal"><span class="text-[#403f3f] font-semibold">Memory:</span></p>
//        <p class="text-[#706f6f] text-xl font-normal"><span class="text-[#403f3f] font-semibold">Slug:</span></p>
//        <p class="text-[#706f6f] text-xl font-normal"><span class="text-[#403f3f] font-semibold">Release data:</span></p>
//        <p class="text-[#706f6f] text-xl font-normal"><span class="text-[#403f3f] font-semibold">Brand:${phoneDetails.brand}</span></p>
 
//      </div>
//      <div class="modal-action">
//        <!-- if there is a button in form, it will close the modal -->
//        <button class="btn rounded-lg bg-[#dc3545] px-6 py-4 text-white font-bold text-xl text-center">Close</button>
//      </div>
//    </form>
//  </dialog>`;
     
//  modalContainer.appendChild(modalDiv);
//     } catch (error){
//      console.log('Error loading details:', error)
//     }
//  }
 

// modal click handlar
// const modal = (phoneDetails) => {
//     return `
// <dialog id="modal" class="modal">
//   <form method="dialog" class="modal-box">
//     <div>
//       <img src="${phoneDetails.image}" alt="" class="px-40 py-20 bg-[#0d6efd] bg-opacity-10 my-5">
//       <h3 class="text-2xl text-[#403f3f] font-bold"></h3>
//       <p class="text-[#706f6f] text-base font-normal">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
//       <p class="text-[#706f6f] text-xl font-normal"><span class="text-[#403f3f] font-semibold">Storage:</span></p>
//       <p class="text-[#706f6f] text-xl font-normal"><span class="text-[#403f3f] font-semibold">Display Size:</span></p>
//       <p class="text-[#706f6f] text-xl font-normal"><span class="text-[#403f3f] font-semibold">Chipset:</span></p>
//       <p class="text-[#706f6f] text-xl font-normal"><span class="text-[#403f3f] font-semibold">Memory:</span></p>
//       <p class="text-[#706f6f] text-xl font-normal"><span class="text-[#403f3f] font-semibold">Slug:</span></p>
//       <p class="text-[#706f6f] text-xl font-normal"><span class="text-[#403f3f] font-semibold">Release date:</span></p>
//       <p class="text-[#706f6f] text-xl font-normal"><span class="text-[#403f3f] font-semibold">Brand: ${phoneDetails.brand}</span></p>
//     </div>
//     <div class="modal-action">
//       <button class="btn rounded-lg bg-[#dc3545] px-6 py-4 text-white font-bold text-xl text-center">Close</button>
//     </div>
//   </form>
// </dialog> `;
// };



// getting search result

const searchField = document.getElementById("search-field");
const searchButton = document.getElementById("search-button");
const spinner = document.getElementById("spinner");

searchButton.addEventListener("click", () => {
  const searchItem = searchField.value;
  loadPhone(searchItem);
  spinner.classList.remove("hidden");
});

}


// calling the function to load data
loadPhone();
