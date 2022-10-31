function escolherCarro(escolhido) {
  // Conversão das (var) html para JS
  var foto = document.getElementById("foto")
  var cores = document.getElementById("cores")
  var ano = document.getElementById("ano")
  var motores = document.getElementById("motores")
  var bannerDoModelo = document.getElementById("bannerDoModelo")

  // Switch que muda a foto/op. das cores, ano e motores de acordo com o carro escolhido
  switch (escolhido) {
    case 'selecione' :
      foto.innerHTML = '<img src="../../imagens/imagem-principal.png" width="320" height="180">'
      cores.innerHTML =  ` <option>COR</option> `
      ano.innerHTML = `<option>ANO</option>`
      motores.innerHTML = `<option>MOTORES</option> `
      valor.innerHTML = ""
      break
    case 'C180':
      foto.innerHTML = `<img src="../../imagens/mercedes-benz-c-180.png" >`
      cores.innerHTML = `  <option>PRATA</option> <option>BRANCO</option> <option>PRETO</option>`
      ano.innerHTML = `<option>2020</option>`
      motores.innerHTML = `<option> Avantgarde– Motor 1.6 Turbo Flex de 156 cv</option> `
      valor.innerHTML = "R$220.800,00"
      break
    case 'C63':
      foto.innerHTML = `<img src="../../imagens/mercedes-benz-c-63-amg.png"  >`
      cores.innerHTML = `  <option>PRETO</option> <option>BRANCO</option> <option>PRATA</option>`
      ano.innerHTML = `<option>2017</option>`
      motores.innerHTML = `<option>S AMG- V8 biturbo 4.0 e 510cv</option> `
      valor.innerHTML = "R$498.100,00"
      break
    case 'G63':
      foto.innerHTML = `<img src="../../imagens/mercedes-benz-g-63-amg.png"  >`
      cores.innerHTML = `  <option>PRETO</option> <option>BRANCO</option> <option>PRATA</option>`
      ano.innerHTML = `<option>2022</option>`
      motores.innerHTML = `<option> SUV AMG 4.0L V8 biturbo e 577cv</option> `
      valor.innerHTML = "R$ 557.000,00"
      break
    case 'XC40':
      foto.innerHTML = `<img src="../../imagens/volvo-xc40.png" >`
      cores.innerHTML = `  <option>BRANCO</option> <option>PRETO</option> <option>PRATA</option>`
      ano.innerHTML = `<option>2018</option>`
      motores.innerHTML = `<option>1.5 T5 RECHARGE INSCRIPTION E. GEARTRONIC </option>  <option>2.0 T4 GASOLINA GEARTRONIC </option>`
      valor.innerHTML = "R$ 295.000,00"
      break
    case 'XC60':
      foto.innerHTML = `<img src="../../imagens/volvo-xc60.png">`
      cores.innerHTML = `  <option>PRATA</option> <option>BRANCO</option> <option>PRETO</option>`
      ano.innerHTML = `<option>2014</option> <option>2021</option>`
      motores.innerHTML = `<option>2.0 T8 HYBRID MOMENTUM AWD GEARTRONIC </option> <option>2.0 D5 DIESEL MOMENTUM AWD GEARTRONIC</option>`
      valor.innerHTML = "R$90.000,00"
      break
    case 'XC90':
      foto.innerHTML = `<img src="../../imagens/volvo-xc90.png">`
      cores.innerHTML = `  <option>BRANCO</option> <option>PRETO</option> <option>PRATA</option>`
      ano.innerHTML = `<option>2017</option> <option>2016</option>`
      motores.innerHTML = `<option>2.0 D5 DIESEL MOMENTUM AWD GEARTRONIC</option>`
      valor.innerHTML = 'R$160.000,00'
      break
    case 'X1':
      foto.innerHTML = `<img src="../../imagens/bmw-x1.png">`
      cores.innerHTML = `  <option>BRANCO</option> <option>PRETO</option> <option>PRATA</option>`
      ano.innerHTML = `<option>2021</option>`
      motores.innerHTML = `<option>2.0 16V GASOLINA SDRIVE18I 4P AUTOMÁTICO</option> <option>2.0 16V TURBO ACTIVEFLEX SDRIVE20I</option>`
      valor.innerHTML = 'R$224.965,00'
      break
    case 'Z4':
      foto.innerHTML = `<img src="../../imagens/bmw-z4.png">`
      cores.innerHTML = `  <option>BRANCO</option> <option>PRETO</option> <option>PRATA</option>`
      ano.innerHTML = `<option>2015</option>`
      motores.innerHTML = `<option>2.0 16V TURBO GASOLINA SDRIVE20I AUTOMÁTICO</option> <option>2.0 ROADSTER 16V GASOLINA 2P MANUAL</option>`
      valor.innerHTML = 'R$243.650,00'
      break
    case 'M3':
      foto.innerHTML = `<img src="../../imagens/bmw-m3.png" >`
      cores.innerHTML = `  <option>BRANCO</option> <option>PRETO</option> <option>PRATA</option>`
      ano.innerHTML = `<option>2021</option>`
      motores.innerHTML = `<option>3.0 I6 GASOLINA SEDAN AUTOMÁTICO</option> <option>3.2 I6 GASOLINA SMG</option>`
      valor.innerHTML = 'R$399.950,00'
      break

    default:
      foto.innerHTML = ""
      cores.innerHTML = ""
      motores.inner = ""
  }

}

// Function que muda a foto do carro de acordo com a cor selecionada
// function coresSelect(modelo, cor) {
//   switch (modelo, cor) {
//     case 'C180' && 'PRETO':
//       foto.innerHTML = `<img src="./imagens/testejs.png" width="390" height="250" >`
//       break
//     case 'C180' && 'BRANCO':
//       foto.innerHTML = `<img src="./imagens/teste2js.png" width="390" height="250" >`
//       break
//     case 'C180' && 'PRATA':
//       foto.innerHTML = `<img src="./imagens/teste3js.png" width="390" height="250" >`
//       break

//     case 'C63' && 'PRETO':
//       foto.innerHTML = `<img src="../../imagens/testejs.png" width="390" height="250" >`
//       break
//     case 'C63' && 'BRANCO':
//       foto.innerHTML = `<img src="../../teste2js.png" width="390" height="250" >`
//       break
//     case 'C63' && 'PRATA':
//       foto.innerHTML = `<img src="../../teste1js.png" width="390" height="250" >`
//       break

//     case 'XC40' && 'PRETO':
//       foto.innerHTML = `<img src="testejs.png" width="390" height="250" >`
//       break
//     case 'XC40' && 'BRANCO':
//       foto.innerHTML = `<img src="teste2js.png" width="390" height="250" >`
//       break
//     case 'XC40' && 'PRATA':
//       foto.innerHTML = `<img src="teste3js.png" width="390" height="250" >`
//       break

//     case 'XC60' && 'PRETO':
//       foto.innerHTML = `<img src="testejs.png" width="390" height="250" >`
//       break
//     case 'XC60' && 'BRANCO':
//       foto.innerHTML = `<img src="teste2js.png" width="390" height="250" >`
//       break
//     case 'XC60' && 'PRATA':
//       foto.innerHTML = `<img src="teste3js.png" width="390" height="250" >`
//       break

//     case 'XC90' && 'PRETO':
//       foto.innerHTML = `<img src="testejs.png" width="390" height="250" >`
//       break
//     case 'XC90' && 'BRANCO':
//       foto.innerHTML = `<img src="teste2js.png" width="390" height="250" >`
//       break
//     case 'XC90' && 'PRATA':
//       foto.innerHTML = `<img src="teste3js.png" width="390" height="250" >`
//       break

//     case 'X1' && 'PRETO':
//       foto.innerHTML = `<img src="testejs.png" width="390" height="250" >`
//       break
//     case 'X1' && 'BRANCO':
//       foto.innerHTML = `<img src=../../imagens/x1branca.png" width="390" height="250" >`
//       break
//     case 'X1' && 'PRATA':
//       foto.innerHTML = `<img src="teste3js.png" width="390" height="250" >`
//       break

//     case 'Z4' && 'PRETO':
//       foto.innerHTML = `<img src="testejs.png" width="390" height="250" >`
//       break
//     case 'Z4' && 'BRANCO':
//       foto.innerHTML = `<img src="teste2js.png" width="390" height="250" >`
//       break
//     case 'Z4' && 'PRATA':
//       foto.innerHTML = `<img src="teste3js.png" width="390" height="250" >`
//       break

//     case 'M3' && 'PRETO':
//       foto.innerHTML = `<img src="testejs.png" width="390" height="250" >`
//       break
//     case 'M3' && 'BRANCO':
//       foto.innerHTML = `<img src="teste2js.png" width="390" height="250" >`
//       break
//     case 'M3' && 'PRATA':
//       foto.innerHTML = `<img src="teste3js.png" width="390" height="250" >`
//       break

//     default:

//   }

// }

//Function que disponibiliza os valores após a seleção do motor(último select)
function valorTotal(modelo, ano, motor) {
  var carroSelecionado = modelo + '_' + ano + '_' + motor
  switch (carroSelecionado) {
    case 'C180_2020_Avantgarde– Motor 1.6 Turbo Flex de 156 cv':
      valor.innerHTML = "R$220.800,00"
      break

    case 'C63_2017_S AMG- V8 biturbo 4.0 e 510cv':
      valor.innerHTML = "R$498.100,00"
      break

    case 'G63_2022_SUV AMG 4.0L V8 biturbo e 577cv':
      valor.innerHTML = "R$ 557.000,00"
      break

    case 'XC40_2018_1.5 T5 RECHARGE INSCRIPTION E. GEARTRONIC':
      valor.innerHTML = "R$ 295.000,00"
      break

    case 'XC40_2018_2.0 T4 GASOLINA GEARTRONIC':
      valor.innerHTML = "R$ 215.000,00"
      break

    case 'XC60_2014_2.0 T8 HYBRID MOMENTUM AWD GEARTRONIC':
      valor.innerHTML = "R$90.000,00"
      break
    case 'XC60_2014_2.0 D5 DIESEL MOMENTUM AWD GEARTRONIC':
      valor.innerHTML = "85.000,00"
      break
    case 'XC60_2021_2.0 T8 HYBRID MOMENTUM AWD GEARTRONIC':
      valor.innerHTML = "R$300.000,00"
      break
    case 'XC60_2021_2.0 D5 DIESEL MOMENTUM AWD GEARTRONIC':
      valor.innerHTML = "R$320.000,00"
      break

    case 'XC90_2016_2.0 D5 DIESEL MOMENTUM AWD GEARTRONIC':
      valor.innerHTML = 'R$160.000,00'
      break
    case 'XC90_2017_2.0 D5 DIESEL MOMENTUM AWD GEARTRONIC':
      valor.innerHTML = 'R$120.000,00'
      break

    case 'X1_2021_2.0 16V GASOLINA SDRIVE18I 4P AUTOMÁTICO':
      valor.innerHTML = 'R$224.965,00'
      break
    case 'X1_2021_2.0 16V TURBO ACTIVEFLEX SDRIVE20I':
      valor.innerHTML = 'R$215.779,00'
      break

    case 'Z4_2015_2.0 16V TURBO GASOLINA SDRIVE20I AUTOMÁTICO':
      valor.innerHTML = 'R$243.650,00'
      break
    case 'Z4_2015_2.0 ROADSTER 16V GASOLINA 2P MANUAL':
      valor.innerHTML = 'R$259.990,00'
      break

    case 'M3_2021_3.0 I6 GASOLINA SEDAN AUTOMÁTICO':
      valor.innerHTML = 'R$399.950,00'
      break

      case 'M3_2021_3.2 I6 GASOLINA SMG':
        valor.innerHTML = 'INDISPONÍVEL!!'
        break

    default:
      valor.innerHTML = ""
  }
}