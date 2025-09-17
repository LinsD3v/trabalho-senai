
let currentPage = 1;
let totalPages = 1;

async function fetchCharacters(page = 1) {
    const url = `https://rickandmortyapi.com/api/character?page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    totalPages = data.info.pages;
    return data.results;
}

function createCharacterCard(character) {
    const card = document.createElement('div');
    card.className = 'character-card';
    card.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
        <p>Status: ${character.status}</p>
        <p>Species: ${character.species}</p>
        <p>Gender: ${character.gender}</p>
        <p>Origin: ${character.origin.name}</p>
    `;
    return card;
}


function createPagination() {
    const pagination = document.createElement('div');
    pagination.className = 'pagination';

    const prevBtn = document.createElement('button');
    prevBtn.textContent = 'Previous';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => changePage(currentPage - 1);

    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => changePage(currentPage + 1);

    const pageInfo = document.createElement('span');
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

    pagination.appendChild(prevBtn);
    pagination.appendChild(pageInfo);
    pagination.appendChild(nextBtn);
    return pagination;
}

async function displayCharacters(page = 1) {
    const container = document.getElementById('characters-container');
    container.innerHTML = '<p>Loading characters...</p>';
    try {
        const characters = await fetchCharacters(page);
        container.innerHTML = '';
        characters.forEach(character => {
            container.appendChild(createCharacterCard(character));
        });
        // Pagination in nav next to h1
        const nav = document.getElementById('pagination-nav');
        if (nav) {
            nav.innerHTML = '';
            nav.appendChild(createPagination());
        }
    } catch (error) {
        container.innerHTML = '<p>Failed to load characters.</p>';
    }
}

function changePage(page) {
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    displayCharacters(currentPage);
}

displayCharacters(currentPage);
