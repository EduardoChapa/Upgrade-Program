import { heroes } from "../../data/heroes";

function getHeroById(id = '') {
    return heroes.find(hero => hero.id === id);
}

export default getHeroById;