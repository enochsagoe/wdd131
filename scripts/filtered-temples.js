const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 22",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Three added temples: verify the facts and paste each image address yourself
    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl:
            "https://imgs.search.brave.com/dPeJ7azzIShh7VVTJRYBoqPFTpjAMJ3iK4Z9lzhGCCA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjI4/OTI1MTc2OC9waG90/by90aGUtc2FsdC1s/YWtlLXRlbXBsZS1z/dGFuZHMtbWFqZXN0/aWNhbGx5LWluLXRl/bXBsZS1zcXVhcmUt/aW4tc2FsdC1sYWtl/LWNpdHktdXRhaC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/LV9KMF9oTnk3ald6/Y2tNbHk1WVhoZDBz/ejRMR3lXbWFUajli/X1M4QWRiMD0"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: 
            "https://imgs.search.brave.com/27mB5BYkpyyJMIBYqdNOH1CSrL6qkV_OdWr0r7yPZEE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90ZW1w/bGVzLm9yZy9fdmVy/Y2VsL2ltYWdlP3Vy/bD0vdGVtcGxlcy9n/aGFuYS9hY2NyYS1n/aGFuYS10ZW1wbGUv/Z2FsbGVyeS9oZXJv/LmpwZyZ3PTEwODAm/cT03NQ"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: 
            "https://imgs.search.brave.com/3-ED7-4--EZ3TzveNw_UKq6CTEA-wr8NZxp3KbByOgw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dGhlY2h1cmNobmV3/cy5jb20vcmVzaXpl/ci92Mi9PTFVIRlZB/QU9DQVNGUEg0NlpW/SVlKUEZSVS5qcGc_/YXV0aD1jZWQ1OGI0/OTUwOTMyNmY3Zjc4/NDAxMDRhNTE2MTAw/MTYyZTI2MDM0NDMx/ZDU3MjNjZWM2YjA5/MmRhOTZmZWNkJmZv/Y2FsPTAsMCZ3aWR0/aD04NDAmaGVpZ2h0/PTU1NQ"
    }
];

const cardsContainer = document.querySelector("#temple-cards");
const filterTitle = document.querySelector("#filter-title");
const navLinks = document.querySelectorAll("nav a");

const getYear = (temple) => parseInt(temple.dedicated.split(",")[0], 10);

const filters = {
    home: { title: "All Temples", test: () => true },
    old: { title: "Old Temples (before 1900)", test: (temple) => getYear(temple) < 1900 },
    new: { title: "New Temples (after 2000)", test: (temple) => getYear(temple) > 2000 },
    large: { title: "Large Temples (over 90,000 sq ft)", test: (temple) => temple.area > 90000 },
    small: { title: "Small Temples (under 10,000 sq ft)", test: (temple) => temple.area < 10000 }
};

function createTempleCard(temple) {
    return `
        <section class="card">
            <h3>${temple.templeName}</h3>
            <p><span class="label">Location:</span> ${temple.location}</p>
            <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
            <p><span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
        </section>`;
}

function displayTemples(list) {
    cardsContainer.innerHTML = list.length
        ? list.map(createTempleCard).join("")
        : `<p>No temples match this filter.</p>`;
}

function applyFilter(key) {
    const selected = filters[key];
    displayTemples(temples.filter(selected.test));
    filterTitle.textContent = selected.title;
    navLinks.forEach((link) => {
        if (link.dataset.filter === key) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        applyFilter(link.dataset.filter);
    });
});

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

applyFilter("home");