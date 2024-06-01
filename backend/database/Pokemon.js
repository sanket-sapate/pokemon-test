import { Schema, model } from 'mongoose'

const PokemonSchema = new Schema({
    name: String,
    attacks: [String],
    abilities: [String],
    image: String
}, {
    timestamps: true
})

const Pokemon = model('Pokemon', PokemonSchema) // collection - users

export default Pokemon