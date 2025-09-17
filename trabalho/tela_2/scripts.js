fetch('mock.json')
    .then(response => response.json())
    .then(data => {
        const container = document.createElement('div');
        container.className = 'item-container';

        data.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';

            const img = document.createElement('img');
            img.src = item.image_path;
            img.alt = item.item_name;

            const name = document.createElement('h2');
            name.textContent = item.item_name;

            const price = document.createElement('p');
            price.textContent = `$${item.item_price}`;

            itemDiv.appendChild(img);
            itemDiv.appendChild(name);
            itemDiv.appendChild(price);
            container.appendChild(itemDiv);
        });

        document.body.appendChild(container);
    })
    .catch(error => console.error('Error fetching data:', error));