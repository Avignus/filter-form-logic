const carros = [
    {
        nome: '306',
        marca: 'Peugeot',
        cor: 'azul',
        ano: '2019',
        preco: '15.000'
    },
    {
        nome: 'Palio',
        marca: 'Fiat',
        cor: 'azul',
        ano: '2015',
        preco: '15.000'
    },
    {
        nome: 'Uno',
        marca: 'Fiat',
        cor: 'azul',
        ano: '2013',
        preco: '15.000'
    },
]

const form = {
    nome: '3',
    marca: 'a',
    cor: '',
    ano: '',
    preco: '15.000'
}

const handle = (formValues, carros) => {
    let carrosFiltrados = carros.map((carro, index) => {
        const valoresDoForm = Object.values(formValues)
        const indexMatchProperty = []
        valoresDoForm.map((valor, index) => {
            if (valor !== '') indexMatchProperty.push(index)
            return valor !== ''
        });
        const propertiesFillted = Object.keys(formValues).filter((item, index) => {
            if (index === indexMatchProperty[index])
                return item
        })
        const carsWithPropertyMatched = propertiesFillted.map((property, indexValue) => {
            const carroProperty = carro[property].toLowerCase()
            const formValue = formValues[property].toLowerCase();
            if (carroProperty.indexOf(formValue) !== -1) return index
        })
        return carsWithPropertyMatched

    })
    carrosFiltrados = carrosFiltrados.filter(car => car.some(property => property !== undefined));
    const items = carrosFiltrados.map(item => {
        return [...Array.from(new Set(item.filter(value => typeof value === 'number')))];
    }).flat();
    carrosFiltrados = items;
    carrosFiltrados = carrosFiltrados.map(indexCarro => carros[indexCarro])
    console.log(carrosFiltrados)
    return carrosFiltrados
}

handle(form, carros)