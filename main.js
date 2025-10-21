const summaryList = document.getElementById('summary-list');
// Definir funciòn asincrona para cargar datos desde un archivo JSON
async function loadSumaryData() {
    try{
        //Ruta al archivo JSON
        const response = await fetch('data.json');
        //Verificar si la respuesta es correcta
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        //Convertir la respuesta a formato JSON
        const data = await response.json();
        //Funciòn para generar elementos de lista
        generatelistItems(data);
    } catch (error) {
        console.error("Error fetching summary data:", error);
    }
}

//Funciòn para generar elementos de lista y agregarlos al DOM
function generatelistItems(data) {
    //Mapear los datos para crear elementos de lista
    const listData = data.map(item => {
        return `<li class="summary-item" style="background-color: ${item.colorLight};">
            <div class="item-icon">
                <img src="${item.icon}" alt="${item.category} icon" />
            </div>
            <div class="item-details">
                <span class="item-category" style="color: ${item.color};" >${item.category} </span>
                <span class="item-score"><strong>${item.score}</strong><span class="max-score">/ 100</span></span>
            </div>
        </li>`;
    }).join(''); //Unir todos los elementos en una sola cadena
    //Agregar los elementos generados al contenedor de la lista
    summaryList.innerHTML = listData;           
}
//Llamar a la función para cargar datos al iniciar la página
loadSumaryData();
