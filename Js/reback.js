let chart_1 = document.getElementById('chart-1');

new Chart(chart_1, {
    type: 'line',
    data: {
    labels: ['Sales', 'Expenses', 'Investments', 'Profit', 'Savings', 'Last'],
    datasets: [{
        label: '# of Votes',
        data: [12, 15, 6, 12, 2, 9],
        borderWidth: 2,
        borderColor :"black"
    }]
    },
    options: {
    scales: {
        y: {
        beginAtZero: true
        }
    }
    }
});

let chart_2 = document.getElementById('chart-2');

new Chart(chart_2, {
    type: 'pie',
    data: {
    labels: ['Sales', 'Expenses', 'Investments', 'Profit', 'Savings', 'Last'],
    datasets: [{
        label: '# of Votes',
        data: [12, 15, 3, 5, 2, 3],
        borderWidth: 1
    }]
    },
    options: {
    scales: {
        y: {
        beginAtZero: true
        }
    }
    }
});

class ProductManager {  
    constructor() {  
        this.allData = [];  
        this.getData();  
    }  

    showData() {  
        let table = '';  
        this.allData.forEach((product, sh) => {
            let shortTitle = product.title.split(' ').slice(0, 3).join(' ');
            table += `  
            <tr>  
                <td>${sh + 1}</td>  
                <td>${shortTitle}</td>  
                <td>${product.price}</td>  
                <td>${product.category}</td>
            </tr>  
            `;  
        });  
        document.getElementById('tbody').innerHTML = table;  
    }  

    getData() {  
        fetch('https://fakestoreapi.com/products')  
            .then(response => {  
                if (!response.ok) {  
                    throw new Error('Network response was not ok');  
                }  
                return response.json();  
            })  
            .then(allProducts => {  
                this.allData = allProducts.map(product => new Product(product.title, product.price, product.category));  
                this.showData();  
            })   
    }  
}  

class Product {  
    constructor(title, price, category) {  
        this.title = title;  
        this.price = price;  
        this.category = category;  
    }  
}  

let productManager = new ProductManager();    
