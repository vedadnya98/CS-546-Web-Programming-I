const express = require("express");
const router = express.Router();

const storyObj = {
                  "storyTitle": "Puppies for Sale",
                  "story": "A shop owner placed a sign above his door that said: “Puppies For Sale.” Signs like this always have a way of attracting young children, and to no surprise, a boy saw the sign and approached the owner ;“How much are you going to sell the puppies for?” he asked.The store owner replied, “Anywhere from $30 to $50.” \nThe little boy pulled out some change from his pocket. “I have $2.37,” he said. “Can I please look at them?” The shop owner smiled and whistled. Out of the kennel came Lady, who ran down the aisle of his shop followed by five teeny, tiny balls of fur. One puppy was lagging considerably behind. Immediately the little boy singled out the lagging, limping puppy and said, “What’s wrong with that little dog?”\nThe shop owner explained that the veterinarian had examined the little puppy and had discovered it didn’t have a hip socket. It would always limp. It would always be lame. The little boy became excited. “That is the puppy that I want to buy.” The shop owner said, “No, you don’t want to buy that little dog. If you really want him, I’ll just give him to you.”\nThe little boy got quite upset. He looked straight into the store owner’s eyes, pointing his finger, and said; “I don’t want you to give him to me. That little dog is worth every bit as much as all the other dogs and I’ll pay full price. In fact, I’ll give you $2.37 now, and 50 cents a month until I have him paid for.” The shop owner countered, “You really don’t want to buy this little dog. He is never going to be able to run and jump and play with you like the other puppies.”\nTo his surprise, the little boy reached down and rolled up his pant leg to reveal a badly twisted, crippled left leg supported by a big metal brace. He looked up at the shop owner and softly replied, “Well, I don’t run so well myself, and the little puppy will need someone who understands!”."
                 }

router.get("/", async (req, res) => {

    res.json(storyObj)
    });
    
    module.exports = router;