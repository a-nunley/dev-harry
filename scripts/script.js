document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('orderForm');

    // Example data object for the user's favorite or last order
    const favoriteOrder = {
        name: "",
        email: "",
        phone: "",
        address: "",
        order: "pizza",
        cutInHalf: true,
        extraCheese: false,
        friesAsSide: false
    };

    // Load data into the form
    document.getElementById('name').value = favoriteOrder.name;
    document.getElementById('email').value = favoriteOrder.email;
    document.getElementById('phone').value = favoriteOrder.phone;
    document.getElementById('address').value = favoriteOrder.address;
    document.getElementById('order').value = favoriteOrder.order;
    document.getElementById('cutInHalf').checked = favoriteOrder.cutInHalf;
    document.getElementById('extraCheese').checked = favoriteOrder.extraCheese;
    document.getElementById('friesAsSide').checked = favoriteOrder.friesAsSide;

    // Function to update form fields based on selected order
    const updateFormFields = () => {
        const order = document.getElementById('order').value;
        const cutInHalfField = document.getElementById('cutInHalfField');
        const extraCheeseField = document.getElementById('extraCheeseField');
        const burgerToppingsField = document.getElementById('burgerToppingsField');
        const friesAsSideField = document.getElementById('friesAsSide');
        const spicyLevelField = document.getElementById('spicyLevelField');
        const extraGuacamoleField = document.getElementById('extraGuacamoleField');

        if (order === 'burger') {
            cutInHalfField.style.display = 'none';
            extraCheeseField.style.display = 'none';
            burgerToppingsField.style.display = 'block';
            friesAsSideField.style.display = 'block';
            spicyLevelField.style.display = 'none';
            extraGuacamoleField.style.display = 'none';
        } else if (order === 'taco') {
            cutInHalfField.style.display = 'none';
            extraCheeseField.style.display = 'none';
            burgerToppingsField.style.display = 'none';
            friesAsSideField.style.display = 'none';
            spicyLevelField.style.display = 'block';
            extraGuacamoleField.style.display = 'block';
        } else {
            cutInHalfField.style.display = 'block';
            extraCheeseField.style.display = 'block';
            burgerToppingsField.style.display = 'none';
            friesAsSideField.style.display = 'none';
            spicyLevelField.style.display = 'none';
            extraGuacamoleField.style.display = 'none';
        }
    };

    // Add event listener to order dropdown
    document.getElementById('order').addEventListener('change', updateFormFields);

    // Initial call to set the correct fields based on the default order
    updateFormFields();

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const order = document.getElementById('order').value;
        const cutInHalf = document.getElementById('cutInHalf').checked;
        const extraCheese = document.getElementById('extraCheese').checked;
        const burgerToppings = document.getElementById('burgerToppings').value;
        const friesAsSide = document.getElementById('friesAsSide').checked;
        const spicyLevel = document.getElementById('spicyLevel').value;
        const extraGuacamole = document.getElementById('extraGuacamole').checked;

        if (name && email && phone && address && order) {
            const orderData = {
                name,
                email,
                phone,
                address,
                order,
                cutInHalf: order === 'burger' || order === 'taco' ? undefined : cutInHalf,
                extraCheese: order === 'burger' || order === 'taco' ? undefined : extraCheese,
                burgerToppings: order === 'burger' ? burgerToppings : undefined,
                friesAsSide: order === 'burger' ? friesAsSide : undefined,
                spicyLevel: order === 'taco' ? spicyLevel : undefined,
                extraGuacamole: order === 'taco' ? extraGuacamole : undefined
            };

            alert(`Order placed successfully!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nOrder: ${order}`);
            form.reset(); // Reset the form after successful submission

            // Log the data to the console in JSON format
            console.log(JSON.stringify(orderData));
        } else {
            alert('Please fill out all fields.');
        }
    });
});

