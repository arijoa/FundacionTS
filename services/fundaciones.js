
//  const CANTIDAD_FUNDACIONES = 3

//  const nombres = ["Todo Ayuda", "Somos uno", "pepe"]
 
//  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
 
//  const generarNombre = () => `${nombres[random(0,nombres.length)]}`
 
 
//  const generarCvu = () => `${random(10000000000,99999999999)}${random(10000000000,99999999999)}`
 
 
//  const crearFundacion = () => {
//    return {
//      nombre: `${generarNombre()}`,
//      cvu: generarCvu(),
//    }
//  }
 
 
//  const fundaciones = Array.from({
//    length: CANTIDAD_FUNDACIONES
//      }, crearFundacion).map((item, index)=>{
//         return{...item,id: index}
//      })

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const generarCvu = () => `${random(10000000000,99999999999)}${random(10000000000,99999999999)}`
const fundaciones = [
{
  name: 'cor',
  cvu: generarCvu(),
  latitude:-34.48545848806608, 
  longitude:-58.50012125285287,
  avatar: 'https://geneticliteracyproject.org/wp-content/uploads/elementor/thumbs/Greenpeace-1-pe4t8r94c3j6lot19g7thz4y0u113g9pfoxw338i4y.jpg',
},
{
  name: 'Acnur',
  cvu: generarCvu(),
  latitude:-34.48772238223421,
  longitude:-58.50346864948479,
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZmq8VGdwlT3zil7mItCSEXMxWnrEZx4pKiykaoCi3b1j_58sTA85x1WXKjZetolpuVc&usqp=CAU',
},
 {
  name: 'Greenpeace',
  cvu: generarCvu(),
  latitude:-34.48772238223421,
  longitude:-58.50346864948479,
   avatar: 'https://geneticliteracyproject.org/wp-content/uploads/elementor/thumbs/Greenpeace-1-pe4t8r94c3j6lot19g7thz4y0u113g9pfoxw338i4y.jpg',
 },
 {
   name: 'Acnur',
   cvu: generarCvu(),
   latitude:-34.48772238223421,
   longitude:-58.50346864948479,
   avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZmq8VGdwlT3zil7mItCSEXMxWnrEZx4pKiykaoCi3b1j_58sTA85x1WXKjZetolpuVc&usqp=CAU',
 },
// {
//   name: 'Greenpeace',
//   cvu: generarCvu(),
//   avatar: 'https://geneticliteracyproject.org/wp-content/uploads/elementor/thumbs/Greenpeace-1-pe4t8r94c3j6lot19g7thz4y0u113g9pfoxw338i4y.jpg',
// },
// {
//   name: 'Acnur',
//   cvu: generarCvu(),
//   avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZmq8VGdwlT3zil7mItCSEXMxWnrEZx4pKiykaoCi3b1j_58sTA85x1WXKjZetolpuVc&usqp=CAU',
// },
// {
//   name: 'Greenpeace',
//   cvu: generarCvu(),
//   avatar: 'https://geneticliteracyproject.org/wp-content/uploads/elementor/thumbs/Greenpeace-1-pe4t8r94c3j6lot19g7thz4y0u113g9pfoxw338i4y.jpg',
// },
// {
//   name: 'Acnur',
//   cvu: generarCvu(),
//   avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZmq8VGdwlT3zil7mItCSEXMxWnrEZx4pKiykaoCi3b1j_58sTA85x1WXKjZetolpuVc&usqp=CAU',
// },
// {
//   name: 'Greenpeace',
//   cvu: generarCvu(),
//   avatar: 'https://geneticliteracyproject.org/wp-content/uploads/elementor/thumbs/Greenpeace-1-pe4t8r94c3j6lot19g7thz4y0u113g9pfoxw338i4y.jpg',
// },
// {
//   name: 'Acnur',
//   cvu: generarCvu(),
//   avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZmq8VGdwlT3zil7mItCSEXMxWnrEZx4pKiykaoCi3b1j_58sTA85x1WXKjZetolpuVc&usqp=CAU',
// },
// {
//   name: 'Greenpeace',
//   cvu: generarCvu(),
//   avatar: 'https://geneticliteracyproject.org/wp-content/uploads/elementor/thumbs/Greenpeace-1-pe4t8r94c3j6lot19g7thz4y0u113g9pfoxw338i4y.jpg',
// },
// {
//   name: 'Acnur',
//   cvu: generarCvu(),
//   avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZmq8VGdwlT3zil7mItCSEXMxWnrEZx4pKiykaoCi3b1j_58sTA85x1WXKjZetolpuVc&usqp=CAU',
// },
]
 
const getfundacion =() =>{
  return new Promise((resolve, reject)=>{
    return resolve(fundaciones)
  })
}

 export default {
  getfundacion
 }