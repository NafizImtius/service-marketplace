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





