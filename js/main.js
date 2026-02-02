// ========================================
// DAY 5: DOM MANIPULATION
// ========================================

console.log("Day 5 - DOM Manipulation Started!");

// ========================================
// DAY 4 PRACTICE (Keep for reference)
// ========================================

/*
// Your Day 4 code here
const allProviders = [...];
// etc...


// Sample provider data

const allProviders = [
    { name: "Karim Electricals", category: "Electrician", rating: 4.8, location: "Shyamoli" },
    { name: "Rahim Plumbing", category: "Plumber", rating: 4.5, location: "Mohammadpur" },
    { name: "Cool Tech AC", category: "AC Repair", rating: 4.2, location: "Gulshan" },
    { name: "Shahana Cleaning", category: "Cleaner", rating: 5.0, location: "Mirpur-10" },
    { name: "Fix Lock Services", category: "Locksmith", rating: 4.7, location: "Banani" }
];


// 2. Function to get top-rated providers (rating >= 4.5)
const getTopRated = () => {
    return allProviders.filter(provider => provider.rating >= 4.5);
};
// 3. Function to get providers by location
function getByLocation(location){
    const results=allProviders.filter(provider =>{
        const availablelocation=provider.location.toLowerCase();
        const givenlocation=location.toLowerCase();
        return availablelocation.includes(givenlocation);
    });
    return results
};

// 4. Function to display provider info nicely
const displayProvider = (provider) => {
    return `${provider.name} - ${provider.category} (${provider.rating}⭐) - ${provider.location}`;
};

// Test your functions
console.log("Top rated:", getTopRated());
console.log("Shyamoli providers:", getByLocation("Shyamoli"));

// Display all providers nicely
allProviders.forEach(provider => {
    console.log(displayProvider(provider));
});

*/

// ========================================
// DAY 5: DOM MANIPULATION
// ========================================

console.log("Day 5 - DOM Manipulation Started!");

// Select the hero section
const herosection = document.querySelector('#hero');
console.log("Hero section:", herosection);

if (herosection) {
    herosection.style.backgroundColor = '#10b981';
    
    setTimeout(() => {
        const heading = herosection.querySelector('h1');
        heading.textContent = 'JavaScript is controlling this!';
    }, 2000);
}

// ========================================
// PROVIDER DATA
// ========================================

const providers = [
    {
        id: 1,
        name: "Karim Electricals",
        category: "Electrician",
        phone: "01712345678",
        location: "Shyamoli",
        rating: 4.8,
        priceRange: "৳৳",
        emoji: "👨‍🔧"
    },
    {
        id: 2,
        name: "Rahim Plumbing Services",
        category: "Plumber",
        phone: "01798765432",
        location: "Mohammadpur",
        rating: 4.5,
        priceRange: "৳৳",
        emoji: "🚰"
    },
    {
        id: 3,
        name: "Shahana Cleaning Co.",
        category: "Cleaner",
        phone: "01856781234",
        location: "Mirpur-10",
        rating: 5.0,
        priceRange: "৳৳৳",
        emoji: "🧹"
    },
    {
        id: 4,
        name: "Cool Tech AC Service",
        category: "AC Repair",
        phone: "01923456789",
        location: "Gulshan",
        rating: 4.2,
        priceRange: "৳৳",
        emoji: "❄️"
    }
];

console.log("Providers loaded:", providers);

// ========================================
// CREATE PROVIDER CARD HTML
// ========================================

function createProviderCard(provider) {
    // Generate star rating
    const stars = '⭐'.repeat(Math.floor(provider.rating));
    
    // Create the HTML using template string
    const cardHTML = `
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
            <div class="h-48 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <span class="text-6xl">${provider.emoji}</span>
            </div>
            
            <div class="p-6">
                <h3 class="text-2xl font-bold text-gray-800 mb-2">${provider.name}</h3>
                
                <span class="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-semibold my-3">
                    ${provider.category}
                </span>
                
                <p class="text-gray-600 mb-2">📍 ${provider.location}, Dhaka</p>
                
                <div class="flex items-center gap-2 mb-2">
                    <span class="text-yellow-400">${stars}</span>
                    <span class="text-gray-600 font-semibold">${provider.rating}</span>
                </div>
                
                <p class="text-green-600 font-bold mb-4">Price: ${provider.priceRange}</p>
                
                <button class="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg transition">
                    📞 Contact
                </button>
            </div>
        </div>
    `;
    
    return cardHTML;
}

// ========================================
// DISPLAY PROVIDERS ON PAGE
// ========================================

function displayProviders(providersToShow) {
    const container = document.querySelector('#providers-container');
    
    if (!container) {
        console.error("ERROR: #providers-container not found in HTML!");
        return;
    }
    
    // Clear existing content
    container.innerHTML = '';
    
    // Check if there are no results
    if (providersToShow.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-16">
                <div class="text-6xl mb-4">🔍</div>
                <h3 class="text-2xl font-bold text-gray-700 mb-2">No providers found</h3>
                <p class="text-gray-500">Try searching for something else</p>
            </div>
        `;
        return;
    }
    
    // Create cards for each provider
    providersToShow.forEach(provider => {
        const cardHTML = createProviderCard(provider);
        container.innerHTML += cardHTML;
    });
    
    console.log(`✅ Displayed ${providersToShow.length} providers`);
}
// ========================================
// RUN WHEN PAGE LOADS
// ========================================

displayProviders(providers);

// ========================================
// SEARCH FUNCTIONALITY
// ========================================

function searchProviders(searchTerm) {
    // If search is empty, show all providers
    if (!searchTerm || searchTerm.trim() === '') {
        return providers;
    }
    
    // Filter providers based on search term
    const results = providers.filter(provider => {
        const term = searchTerm.toLowerCase();
        const name = provider.name.toLowerCase();
        const category = provider.category.toLowerCase();
        const location = provider.location.toLowerCase();
        
        return name.includes(term) || 
               category.includes(term) || 
               location.includes(term);
    });
    
    return results;
}

// Listen for search input changes
const searchInput = document.querySelector('#search-input');

if (searchInput) {
    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value;
        console.log("Searching for:", searchTerm);
        
        const results = searchProviders(searchTerm);
        console.log("Found:", results.length, "providers");
        
        displayProviders(results);
    });
}








