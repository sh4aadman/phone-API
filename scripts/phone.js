const loadPhone = async (searchText) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await response.json();
    const phones = data.data;
    displayPhones(phones);
};

const displayPhones = (phones) => {
    const phoneContainer = document.getElementById('phone-container');

    phoneContainer.textContent = '';
    
    const showAllContainer = document.getElementById('show-all-container');
    
    if (phones.length > 6) {
        showAllContainer.classList.remove('hidden');
    }
    else {
        showAllContainer.classList.add('hidden');
    }

    phones = phones.slice(0, 6);
    
    phones.forEach(phone => {
        const phoneCard = document.createElement('div');

        phoneCard.classList = `card bg-[#FFF] border-2 border-[#CFCFCF] rounded-lg`;

        phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
            <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
                <button class="btn bg-primary">Buy Now</button>
            </div>
        </div>
        `;

        phoneContainer.appendChild(phoneCard);
    });

    isLoading(false);
};

const searchPhone = () => {
    isLoading(true);

    const searchFieldElement = document.getElementById('search-field');
    const searchFieldValue = searchFieldElement.value;    
    
    loadPhone(searchFieldValue);
};

const isLoading = (loading) => {
    const loadingSection = document.getElementById('loading-section');
    if (loading) {
        loadingSection.classList.remove('hidden');
    }
    else {
        loadingSection.classList.add('hidden');
    }
}

loadPhone('iphone');