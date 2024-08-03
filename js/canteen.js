const menuItems = [
    { sNo: 1, name: "Veggie Burger", type: "veg", description: "A delicious vegetarian burger made with fresh veggies.", price: "$5.99", image: "veggie_burger.jpg" },
    { sNo: 2, name: "Chicken Sandwich", type: "nonveg", description: "Grilled chicken sandwich with lettuce and tomato.", price: "$6.99", image: "chicken_sandwich.jpg" },
    { sNo: 3, name: "Grilled Cheese", type: "veg", description: "Classic grilled cheese sandwich with melted cheese.", price: "$4.99", image: "grilled_cheese.jpg" },
    { sNo: 4, name: "Beef Taco", type: "nonveg", description: "Spicy beef taco with salsa and cheese.", price: "$3.99", image: "beef_taco.jpg" },
    { sNo: 5, name: "Caesar Salad", type: "veg", description: "Crisp Caesar salad with croutons and parmesan.", price: "$5.49", image: "caesar_salad.jpg" },
    { sNo: 6, name: "Fish and Chips", type: "nonveg", description: "Crispy fish with a side of golden fries.", price: "$7.99", image: "fish_chips.jpg" },
    { sNo: 7, name: "Mushroom Risotto", type: "veg", description: "Creamy risotto with sautéed mushrooms.", price: "$8.99", image: "mushroom_risotto.jpg" },
    { sNo: 8, name: "BBQ Ribs", type: "nonveg", description: "Tender ribs with a smoky BBQ sauce.", price: "$9.99", image: "bbq_ribs.jpg" },
    { sNo: 9, name: "Paneer Tikka", type: "veg", description: "Spicy grilled paneer with a side of chutney.", price: "$7.49", image: "paneer_tikka.jpg" },
    { sNo: 10, name: "Shrimp Pasta", type: "nonveg", description: "Pasta with a rich shrimp and garlic sauce.", price: "$10.99", image: "shrimp_pasta.jpg" }
];

document.addEventListener('DOMContentLoaded', () => {
    const menuTable = document.getElementById('menu-table');
    menuItems.forEach(item => {
        const tr = document.createElement('tr');
        tr.classList.add(item.type);

        const sNo = document.createElement('td');
        sNo.textContent = item.sNo;

        const img = document.createElement('td');
        const image = document.createElement('img');
        image.src = item.image;
        img.appendChild(image);

        const name = document.createElement('td');
        name.textContent = item.name;

        const description = document.createElement('td');
        description.textContent = item.description;

        const price = document.createElement('td');
        price.textContent = item.price;

        tr.appendChild(sNo);
        tr.appendChild(img);
        tr.appendChild(name);
        tr.appendChild(description);
        tr.appendChild(price);

        menuTable.appendChild(tr);
    });
    filterMenu('all');
});

function filterMenu(type) {
    const rows = document.querySelectorAll('#menu-table tr');
    rows.forEach(row => {
        if (type === 'all') {
            row.style.display = '';
        } else if (row.classList.contains(type)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}
