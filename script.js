// common variable
const searchInputField = document.getElementById("search-field");

const searchButton = document.getElementById("search-button");

const cardContainer = document.getElementById("card-showcase");

const showAllButton = document.getElementById("show-all-button");

const modalContainer = document.getElementById("modal-container");

// activating search button

searchButton.addEventListener("click", () => {
  const searchPhoneName = searchInputField.value;
  loadPhone(searchPhoneName);
});

// using search name loading phone from api

const loadPhone = async (searchPhoneName, showAllClicked) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchPhoneName}`
  );
  const data = await response.json();
  let phones = data.data;
  // console.log(phones);
  cardContainer.innerHTML = "";

  // condition for showing 9 items

  if (phones.length > 9 && !showAllClicked) {
    phones = phones.slice(0, 9);
    showAllButton.classList.remove("hidden");
  } else {
    phones = phones;
    showAllButton.classList.add("hidden");
  }

  phones.forEach((phone) => {
    const cardDiv = document.createElement("div");

    cardDiv.innerHTML = `
        <div class = 'rounded-lg border border-solid border-[#cfcfcf] flex flex-col justify-center items-center p-6'> 
         <div'>
         <img  class='rounded-lg bg-[#0d6efd] bg-opacity-10 p-12' src="${phone.image}">
         </div>
         <h3 class='py-6 text-[#403f3f] text-2xl font-bold'>${phone.phone_name}</h3>
         <p class='text-[#706f6f] text-lg font-normal pb-3'>There are many variations of passages of available, but the majority have suffered</p>
         <button class='text-white text-xl font-semibold bg-[#0d6efd] rounded-lg px-6 py-2 mb-6' onclick="handleShowDetail('${phone.slug}'); my_modal_1.showModal()">Show Details</button>
         </div>
        `;

    // <button class='text-white text-xl font-semibold bg-[#0d6efd] rounded-lg px-6 py-2 mb-6' onclick="handleShowDetail('${phone.slug}'); my_modal_1.showModal()">Show Details</button>

    cardContainer.appendChild(cardDiv);

    // console.log(phone)
  });
};

loadPhone();

// activating show all button

const showAll = () => {
  const searchPhoneName = searchInputField.value;
  loadPhone(searchPhoneName, true);
};

// activating show details button

const handleShowDetail = (id) => {
  loadDetails(id);
};

const loadDetails = async (id) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await response.json();
  let details = data.data;
  console.log(details);
  // const modalImage = document.getElementById('modalImage');
  const modalDiv = document.createElement("div");

  modalDiv.innerHTML = `
        <img src="${details.image}" alt="" class="px-40 py-20 bg-[#0d6efd] bg-opacity-10 my-5">
      <h3 class="text-2xl text-[#403f3f] font-bold my-3">${details.name}</h3>
      <p class="text-[#706f6f] text-base font-normal">It is a long extablished fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <p class="text-[#706f6f] text-xl font-normal"><span class="text-[#403f3f] font-semibold my-2">Storage:</span>${details.mainFeatures.storage}</p>
      <p class="text-[#706f6f] text-xl font-normal"><span class="text-[#403f3f] font-semibold">Display Size:</span>${details.mainFeatures.displaySize}</p>
      <p class="text-[#706f6f] text-xl font-normal"><span class="text-[#403f3f] font-semibold my-2">Chipset:</span>${details.mainFeatures.chipSet}</p>
      <p class="text-[#706f6f] text-xl font-normal"><span class="text-[#403f3f] font-semibold">Memory:</span>${details.mainFeatures.memory}</p>
      <p class="text-[#706f6f] text-xl font-normal"><span class="text-[#403f3f] font-semibold my-2">Slug:</span>${details.slug}</p>
      <p class="text-[#706f6f] text-xl font-normal"><span class="text-[#403f3f] font-semibold">Release data:</span>${details.releaseData}</p>
      <p class="text-[#706f6f] text-xl font-normal"><span class="text-[#403f3f] font-semibold my-2">Brand:</span>${details.brand}</p>

      <div class="modal-action">
              <button
                class="btn rounded-lg bg-[#dc3545] px-6 py-2 text-white font-bold text-xl text-center"
              >
                Close
              </button>
            </div>
    `;
  modalContainer.appendChild(modalDiv);
};

// loadDetails();

// ${details.mainFeatures.stroage}
