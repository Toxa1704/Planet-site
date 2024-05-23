import{nav, imagePlanet, imageGoology, descriptionTitle, descriptionText, descriptionSource, overview, structure, geology, rotationNumb, revolutionNumb, radiusNumb, averageNumb} from './DOMutility.js'
export {Planet, navColor}
class Planet {
    constructor (name, overview, structure, geology, rotation, revolution, radius, temperature, images){
        this.name = name
        this.overview = overview
        this.structure = structure
        this.geology = geology
        this.rotation = rotation
        this.revolution = revolution
        this.radius = radius
        this.temperature = temperature
        this.images = images
        }
    }

const navColor = ['#419EBB', '#EDA249', '#6f2ed6', '#D14C32', '#D83A34', '#CD5120', '#1EC1A2', '#2D68F0']