const createMap = () => {
    let zoom = 12;
    let maxZoom = 19;
    return {
        render: () => {
            let map = L.map('map').setView([45.4639102, 9.1906426], zoom);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: maxZoom,
                attribution:
                    '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                }).addTo(map);
        }
    }
}

export {createMap};