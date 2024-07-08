function calculateMileage() {
    const distanceDriven = document.getElementById('distanceDriven').value;
    const petrolPrice = document.getElementById('petrolPrice').value;
    const amountSpent = document.getElementById('amountSpent').value;

    if (distanceDriven && petrolPrice && amountSpent) {
        const mileage = distanceDriven / (amountSpent / petrolPrice);
        document.getElementById('mileageResult').innerText = `Mileage: ${mileage.toFixed(2)} km/litre`;
    } else {
        alert('Please fill all the fields');
    }
}

function calculateSpentPrice() {
    const distanceDriven = document.getElementById('distanceDriven2').value;
    const fuelPrice = document.getElementById('fuelPrice').value;
    const averageMileage = document.getElementById('averageMileage').value;

    if (distanceDriven && fuelPrice && averageMileage) {
        const spentPrice = (distanceDriven / averageMileage) * fuelPrice;
        document.getElementById('priceResult').innerText = `Price: ₹${spentPrice.toFixed(2)}`;
    } else {
        alert('Please fill all the fields');
    }
}
