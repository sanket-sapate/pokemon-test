import Pokemon from "../database/Pokemon.js";
import connectDatabase from "../database/connectDatabase.js";

const pokemons = [{
    name: 'Ampharos',
    abilities: ['Jamming'],
    attacks: ['Cluster Bolt'],
    image: 'https://images.pokemontcg.io/dp3/1.png'
},{
    name: 'Aerodactyl',
    abilities: ['Reactive Protection'],
    attacks: ['Power Blow', 'Speed Stroke'],
    image: 'https://images.pokemontcg.io/ex12/1.png'
},{
    name: 'Caterpie',
    abilities: [],
    attacks: ['Surprise Attack'],
    image: 'https://images.pokemontcg.io/mcd19/1.png'
},{
    name: 'Azumarill',
    abilities: ['Froth'],
    attacks: ['Water Punch'],
    image: 'https://images.pokemontcg.io/ex7/1.png'
},{
    name: 'Celebi & Venusaur-GX',
    abilities: [],
    attacks: ['Pollen Hazard', 'Solar Beam', 'Evergreen-GX'],
    image: 'https://images.pokemontcg.io/sm9/1.png'
},{
    name: 'Blastoise',
    abilities: ['Dig Well'],
    attacks: ['Aqua Press', 'Double Launcher'],
    image: 'https://images.pokemontcg.io/pl1/2.png'
},{
    name: 'Altaria',
    abilities: [],
    attacks: ['Dragon Dance', 'Dragon Song'],
    image: 'https://images.pokemontcg.io/ex3/2.png'
},{
    name: 'Blastoise',
    abilities: ['Dig Well'],
    attacks: ['Aqua Press', 'Double Launcher'],
    image: 'https://images.pokemontcg.io/pl1/2.png'
},{
    name: 'Weedle',
    abilities: [],
    attacks: ['Poison Sting'],
    image: 'https://images.pokemontcg.io/mcd19/2.png'
},{
    name: 'Alolan Exeggutor',
    abilities: [],
    attacks: ['Tropical Shake'],
    image: 'https://images.pokemontcg.io/mcd19/2.png'
},{
    name: 'Kakuna',
    abilities: ['Molt'],
    attacks: ['Bug Bite'],
    image: 'https://images.pokemontcg.io/xy5/2.png'
},{
    name: 'Venusaur & Snivy-GX',
    abilities: ['Shining Vine'],
    attacks: ['Forest Dump', 'Solar Plant-GX'],
    image: 'https://images.pokemontcg.io/sm12/1.png'
},{
    name: 'Mew',
    abilities: [],
    attacks: ['Rainbow Wave'],
    image: 'https://images.pokemontcg.io/si1/1.png'
},{
    name: 'Caterpie',
    abilities: [],
    attacks: ['Surprise Attack'],
    image: 'https://images.pokemontcg.io/sm3/1.png'
},{
    name: 'Ampharos',
    abilities: ['Jamming'],
    attacks: ['Cluster Bolt'],
    image: 'https://images.pokemontcg.io/pop7/1.png'
},{
    name: 'Snivy',
    abilities: [],
    attacks: ['Leaf Blade'],
    image: 'https://images.pokemontcg.io/bw1/2.png'
},{
    name: 'Chansey',
    abilities: [],
    attacks: ['Scrunch', 'Double-edge'],
    image: 'https://images.pokemontcg.io/base4/3.png'
},{
    name: 'Celebi',
    abilities: [],
    attacks: ['Future Sight', 'Leaf Bind'],
    image: 'https://images.pokemontcg.io/hgss4/3.png'
},{
    name: 'Venusaur & Snivy-GX',
    abilities: ['Shining Vine'],
    attacks: ['Forest Dump', 'Solar Plant-GX'],
    image: 'https://images.pokemontcg.io/sm12/1.png'
},{
    name: 'Mew',
    abilities: [],
    attacks: ['Rainbow Wave'],
    image: 'https://images.pokemontcg.io/si1/1.png'
},{
    name: 'Caterpie',
    abilities: [],
    attacks: ['Surprise Attack'],
    image: 'https://images.pokemontcg.io/sm3/1.png'
},{
    name: 'Ampharos',
    abilities: ['Jamming'],
    attacks: ['Cluster Bolt'],
    image: 'https://images.pokemontcg.io/pop7/1.png'
},{
    name: 'Snivy',
    abilities: [],
    attacks: ['Leaf Blade'],
    image: 'https://images.pokemontcg.io/bw1/2.png'
},{
    name: 'Chansey',
    abilities: [],
    attacks: ['Scrunch', 'Double-edge'],
    image: 'https://images.pokemontcg.io/base4/3.png'
},{
    name: 'Celebi',
    abilities: [],
    attacks: ['Future Sight', 'Leaf Bind'],
    image: 'https://images.pokemontcg.io/hgss4/3.png'
},{
    name: 'Dark Crobat',
    abilities: ['Black Beam'],
    attacks: ['Dark Drain', 'Venom Bite'],
    image: 'https://images.pokemontcg.io/ex7/3.png'
}]
console.log(pokemons.length)
export async function addSeveralPokemon() {
    try{
        const db = await connectDatabase();
        pokemons.map(async (pokemon) => {
            const {name, attacks, abilities, image} = pokemon
            const newPokemon = new Pokemon({
                name, attacks, abilities, image
            });
    
            await newPokemon.save();
        }
        )
        console.log('Pokemons created successfully');
    }
    catch(err){
        console.log(err);
    }
    
}
addSeveralPokemon()