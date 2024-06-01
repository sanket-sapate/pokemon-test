import Pokemon from "../database/Pokemon.js";

export async function getPokemonList(req, res) {
    try {
        const {page = 1} = req.query;

        const pokemons = await Pokemon.find()
            .limit(6 * 1)
            .skip((page - 1) * 6)
            .exec();

        return res.send({
            data: pokemons,
            hasMore: pokemons.length === 6
        })
    } catch(err) {
        console.log(err);
        return res.status(500).send({
            error: 'Something went wrong'
        })
    }
}




// Create a restricted paginated api GET “/pokemons” which will accept
// “page” and “pageSize” query string params where page is page number
// and pageSize specifies how much records I want on a page.