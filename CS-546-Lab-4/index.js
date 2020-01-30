const animals = require("./data/animals");
const connection = require("./config/mongoConnection");

async function main() {
    try
    {
    const Sasha = await animals.create("Sasha", "Dog");
    console.log(Sasha);
    console.log("");
    }
    catch(error)
    {
        console.log(error);
    }

    try
    {
    const Lucy = await animals.create("Lucy", "Dog");
    console.log("");
    }
    catch(error)
    {
        console.log(error);
    }

    try
    {
    const allMyAnimals1 = await animals.getAll();
    console.log(allMyAnimals1);
    console.log("");
    }
    catch(error)
    {
        console.log(error);
    }

    try
    {
    const Duke = await animals.create("Duke", "Walrus");
    console.log(Duke);
    console.log("");
    }
    catch(error)
    {
        console.log(error);
    }

    try
    {
    const allMyAnimals2 = await animals.getAll();
    console.log(allMyAnimals2);
    console.log("");
    }
    catch(error)
    {
        console.log(error);
    }


    // try
    // {
    // const Sashita = await animals. rename("5d97d7111491bc0805d5b19b","Sashita");
    // console.log(Sashita);
    // console.log("");
    // }
    // catch(error)
    // {
    //     console.log(error);
    // }

    // try
    // {
    // const removeLucy = await animals.remove("5d97d7111491bc0805d5b19c");
    // console.log(removeLucy);
    // console.log("");
    // }
    // catch(error)
    // {
    //     console.log(error);
    // }

    // try
    // {
    // const allMyAnimals3 = await animals.getAll();
    // console.log(allMyAnimals3);
    // console.log("");
    // }
    // catch(error)
    // {
    //     console.log(error);
    // }

    try
    {
    const db = await connection();
    await db.serverConfig.close();
    }
    catch(error)
    {
        console.log(error);
    }
}

main()