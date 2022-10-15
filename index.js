const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.33
const euro = 5.18
const libra =5.95
const bitcoin = 102129.16
const renminbi = 0.74
const iene = 0.036
const pesoMx = 0.27
const pesoCol = 0.0012
const nuevoSol = 1.35
const rand = 0.29
const pesoArg = 0.035
const dolarAus = 3.30
const pesoChi =0.0055
const coroaDin = 0.70
const coroaNor = 0.50
const dolarNeo = 2.96
const guarani = 0.00074
const rublo = 0.085
const franco = 5.29
const coroaSue = 0.47
const pesoUru = 0.13

const convertValues = () =>{
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
  ).format(inputReais)

  if(select.value === 'US$ Dólar Americano'){
    currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
    { style: 'currency', currency: 'USD' }
  ).format(inputReais / dolar) 
  }
  
  if (select.value === '€ Euro') {
    currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
    { style: 'currency', currency: 'EUR' }
  ).format(inputReais / euro) 
  } 
  
  if( select.value === '£ Libra Esterlina'){
    currencyValueText.innerHTML = new Intl.NumberFormat('en-GB',
    { style: 'currency', currency: 'GBP' }
  ).format(inputReais / libra) 
  }
  
  if( select.value === '₿ Bitcoin'){
    currencyValueText.innerHTML = new Intl.NumberFormat('BTC',
    { style: 'currency', currency: 'BTC' }
  ).format(inputReais / bitcoin)
  } 
  
  if( select.value === 'RMB Renminbi (China)'){
    currencyValueText.innerHTML = new Intl.NumberFormat('zh-CN',
    { style: 'currency', currency: 'RMB' }
  ).format(inputReais / renminbi)
  } 
  
  if( select.value === '¥ Iene (Japão)'){
    currencyValueText.innerHTML = new Intl.NumberFormat('ja-JP',
    { style: 'currency', currency: 'JPY' }
  ).format(inputReais / iene)
  } 
  
  if( select.value === 'Mex$ Peso Mexicano'){
    currencyValueText.innerHTML = new Intl.NumberFormat('es-MX',
    { style: 'currency', currency: 'MXN' }
  ).format(inputReais / pesoMx)
  } 
  
  if( select.value === 'COP Peso Colombiano'){
    currencyValueText.innerHTML = new Intl.NumberFormat('es-CO',
    { style: 'currency', currency: 'COP' }
  ).format(inputReais / pesoCol)
  } 
  
  if (select.value === 'PEN Nuevo Sol Peruano') {
    currencyValueText.innerHTML = new Intl.NumberFormat('es-PE',
    { style: 'currency', currency: 'PEN' }
  ).format(inputReais / nuevoSol)
  } 

  if (select.value === 'Rand África do Sul') {
    currencyValueText.innerHTML = new Intl.NumberFormat('af-ZA',
    { style: 'currency', currency: 'ZAR' }
  ).format(inputReais / rand)
  } 

  if (select.value === 'Peso Argentino') {
    currencyValueText.innerHTML = new Intl.NumberFormat('es-AR',
    { style: 'currency', currency: 'ARS' }
  ).format(inputReais / pesoArg)
  } 

  if (select.value === 'Dólar Australiano'){
    currencyValueText.innerHTML = new Intl.NumberFormat('en-AU',
    { style: 'currency', currency: 'AUD' }
  ).format(inputReais / dolarAus)
  } 

  if (select.value === 'Peso Chileno') {
    currencyValueText.innerHTML = new Intl.NumberFormat('es-CL',
    { style: 'currency', currency: 'CLP' }
  ).format(inputReais / pesoChi)
  } 

  if (select.value === 'Coroa Dinamarquesa') {
    currencyValueText.innerHTML = new Intl.NumberFormat('da-DK',
    { style: 'currency', currency: 'DKK' }
  ).format(inputReais / coroaDin)
  } 

  if (select.value === 'Coroa Norueguesa') {
    currencyValueText.innerHTML = new Intl.NumberFormat('no-NO',
    { style: 'currency', currency: 'NOK' }
  ).format(inputReais / coroaNor)
  } 

  if (select.value === 'Dólar Neozelandes') {
    currencyValueText.innerHTML = new Intl.NumberFormat('en-NZ',
    { style: 'currency', currency: 'NZD' }
  ).format(inputReais / dolarNeo)
  } 

  if (select.value === 'Guarani Paraguaio') {
    currencyValueText.innerHTML = new Intl.NumberFormat('es-PY',
    { style: 'currency', currency: 'PYG' }
  ).format(inputReais / guarani)
  } 

  if (select.value === 'Rublo Russo') {
    currencyValueText.innerHTML = new Intl.NumberFormat('ru-RU',
    { style: 'currency', currency: 'RUB' }
  ).format(inputReais / rublo)
  } 

  if (select.value === 'Franco Suiço') {
    currencyValueText.innerHTML = new Intl.NumberFormat('de-CH',
    { style: 'currency', currency: 'CHF' }
  ).format(inputReais / franco)
  } 

  if (select.value === 'Coroa Sueca') {
    currencyValueText.innerHTML = new Intl.NumberFormat('sv-SE',
    { style: 'currency', currency: 'SEK' }
  ).format(inputReais / coroaSue)
  } 

  if (select.value === 'Peso Uruguaio') {
    currencyValueText.innerHTML = new Intl.NumberFormat('es-UY',
    { style: 'currency', currency: 'UYU' }
  ).format(inputReais / pesoUru)
  } 
}

changeCurrency = () =>{
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')
    
    if(select.value === '€ Euro'){
        currencyName.innerHTML ='Euro'
        currencyImg.src = './img/euro.png'
    }
    
    if( select.value === 'US$ Dólar Americano'){
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = './img/estados-unidos.png'
    }
    
    if( select.value === '£ Libra Esterlina'){
      currencyName.innerHTML = 'Libra Esterlina'
      currencyImg.src = './img/gbr.png'
    }
    
    if( select.value === '₿ Bitcoin'){
      currencyName.innerHTML = 'Bitcoin'
      currencyImg.src = './img/bitcoin.png'
    }
    
    if( select.value === 'RMB Renminbi (China)'){
      currencyName.innerHTML = 'Renminbi'
      currencyImg.src = './img/chn.png'
    }
    
    if( select.value === '¥ Iene (Japão)'){
      currencyName.innerHTML = 'Iene'
      currencyImg.src = './img/jpn2.png'
    }
    
    if( select.value === 'Mex$ Peso Mexicano'){
      currencyName.innerHTML = 'Peso Mexicano'
      currencyImg.src = './img/mx.png'
    }
    
    if( select.value === 'COP Peso Colombiano'){
      currencyName.innerHTML = 'Peso Colombiano'
      currencyImg.src = './img/col.png'
    }
    
    if( select.value === 'Rand África do Sul'){
      currencyName.innerHTML = 'Rand'
      currencyImg.src = './img/africadosul.png'
    }

    if( select.value === 'Peso Argentino'){
      currencyName.innerHTML = 'Peso Argentino'
      currencyImg.src = './img/arg.png'
    }

    if( select.value === 'Dólar Australiano'){
      currencyName.innerHTML = 'Dólar Australiano'
      currencyImg.src = './img/Australia.png'
    }

    if( select.value === 'Peso Chileno'){
      currencyName.innerHTML = 'Peso Chileno'
      currencyImg.src = './img/chl.png'
    }

    if( select.value === 'PEN Nuevo Sol Peruano'){
      currencyName.innerHTML = 'Nuevo Sol'
      currencyImg.src = './img/pen.png'
    }

    if( select.value === 'Coroa Dinamarquesa'){
      currencyName.innerHTML = 'Coroa Dinamarquesa'
      currencyImg.src = './img/den.png'
    }

    if( select.value === 'Coroa Norueguesa'){
      currencyName.innerHTML = 'Coroa Norueguesa'
      currencyImg.src = './img/nor.png'
    }

    if( select.value === 'Dólar Neozelandes'){
      currencyName.innerHTML = 'Dólar Neozelandes'
      currencyImg.src = './img/novazelandia.png'
    }

    if( select.value === 'Guarani Paraguaio'){
      currencyName.innerHTML = 'Guarani'
      currencyImg.src = './img/paraguay.png'
    }

    if( select.value === 'Rublo Russo'){
      currencyName.innerHTML = 'Rublo'
      currencyImg.src = './img/rus.png'
    }

    if( select.value === 'Franco Suiço'){
      currencyName.innerHTML = 'Franco'
      currencyImg.src = './img/sui.png'
    }

    if( select.value === 'Coroa Sueca'){
      currencyName.innerHTML = 'Coroa Sueca'
      currencyImg.src = './img/swe.png'
    }

    if( select.value === 'Peso Uruguaio'){
      currencyName.innerHTML = 'Peso Uruguaio'
      currencyImg.src = './img/uruguay.png'
    }

      convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)