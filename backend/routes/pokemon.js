
import { Router } from 'express';
import { getPokemonList } from '../controllers/pokemon.js';
import auth from '../middlewares/auth.js';
const pokemonRouter = Router();
 
pokemonRouter.get('/get', auth ,getPokemonList); 

export default pokemonRouter;