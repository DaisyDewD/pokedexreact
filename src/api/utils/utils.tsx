export function formatPokemonName(name: string) {
    if (name.includes('♀')) {
        return name.replace('♀', '-f');
    } else if (name.includes('♂')) {
        return name.replace('♂', '-m'); 
    } else if(name.includes('.')){   //Mr. Mime
        return name.replace('.', '-');
    } else if(name.includes("Farfetch'd")){   //Farfetch'd   
    }   return name.replace("Farfetch'd", "Farfetchd")
}

export function formatPokemonId(id: number) {
    return id.toString().padStart(3, '0');
}
