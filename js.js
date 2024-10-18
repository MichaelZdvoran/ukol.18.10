
document.getElementById('add-image').addEventListener('click', function() {
    const imageUrl = document.getElementById('image-url').value.trim();  // Získat URL obrázku
    const imageTitle = document.getElementById('image-title').value.trim();  // Získat název obrázku

    if (imageUrl && imageTitle) {
        // Vytvořit a zobrazit obrázek
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = imageTitle;
        img.onerror = function() {  // Pokud obrázek nelze načíst
            alert('Nepodařilo se načíst obrázek. Zkontrolujte URL.');
            document.getElementById('image-container').innerHTML = ''; // Vymazat starý obrázek
        };

        const imageContainer = document.getElementById('image-container');
        imageContainer.innerHTML = '';  // Vymazat předchozí obrázek
        imageContainer.appendChild(img);

        // Přidat název do seznamu
        const imageList = document.getElementById('image-list');
        const listItem = document.createElement('li');
        listItem.textContent = imageTitle;
        imageList.appendChild(listItem);

    } else {
        alert('Prosím, vlož platný odkaz na obrázek a název obrázku!');
    }
});
