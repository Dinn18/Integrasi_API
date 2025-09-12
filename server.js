const express = require('express');
const cors = require('cors');

const app = express();
const port = 1222;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is Running on port: ${port}`);
});

let reviews = [
    {
        id: 'A01',
        film_id: "12cfb892-aac0-4c5b-94af-521852e46d6a",
        user : "maulidin",
        rating: '97',
        Comment: 'animasi terbaik sepanjang masa!'
    },
    
    {
        id: 'A02',
        film_id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        user : "intan",
        rating: '95',
        Comment: 'animasi terbaik sepanjang masa!'
    },
    
    {
        id: 'A03',
        film_id: "86e544fd-79de-4e04-be62-5be67d8dd92e",
        user : "adelia",
        rating: '95',
        Comment: 'animasi terbaik sepanjang masa!'
    },
];    

// ======End Point GET ======
// menampilkan semua data film
app.get('/status', (req, res) => {
    res.json({status: 'OK', message: 'Server berjalan dengan baik!'});
});

app.get('/reviews', (req,res) => {
    res.json(reviews);
});

app.get('/reviews/:id', (req, res) => {
    const review = reviews.find(f => f.id === req.params.id);
    if (review) {
        res.json(review);
    } else {
        res.status(404).send('Review not Found');
    }
});

// ======End Point POST ======
// menambah data film
app.post('/reviews', (req, res) => {
    const {film_id, user, rating, Comment} = req.body || {};
    if (!film_id || !user || !rating || !Comment) {
        return res.status(400).json({error: 'semua field wajib di isi!'});
    }
    const current = reviews.length + 1;
    const newReview = {id: `A0${current}`, film_id, user, rating, Comment};
    reviews.push(newReview);
    res.status(201).json(newReview);
});

// ======End Point PUT ======
// mengubah data film
app.put('/reviews/:id', (req, res) => {
    const id = req.params.id;
    const reviewIndex = reviews.findIndex(r => r.id === id);
    if (reviewIndex === -1) {
       return res.status(404).json({error: 'Review tidak di temukan'});
    }
    const {film_id, user, rating, Comment} = req.body || {};
    const updatedReview = {id, film_id, user, rating, Comment};
    reviews[reviewIndex] = updatedReview;
    res.json(updatedReview);
});

// ======End Point DELETE ======
// menghapus data film
app.delete('/reviews/:id', (req,res)=> {
    const id = req.params.id;
    const reviewIndex = reviews.findIndex(r => r.id === id);
    if (reviewIndex === -1) {
       return res.status(404).json({error: 'Review tidak di temukan'});
    } else {
        reviews.splice(reviewIndex, 1);
        const message = 'Deleted success';
        res.status(200).send(message);
    }
});
