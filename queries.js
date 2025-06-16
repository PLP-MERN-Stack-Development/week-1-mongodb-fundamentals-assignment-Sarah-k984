use(" plp_bookstore.books");
db.books.find();
db.books.find({ genre: "Fiction" });
db.books.insertOne({
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    publishedYear: 2008,
    rating: 4.7,});
    db.books.updateOne(
        { title: "Clean Code" },
        { $set: { rating: 4.8 } }
);
db.books.deleteOne({ title: "Clean Code" });