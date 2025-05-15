import * as mongoose from "mongoose";

const movieMongoSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    plot: { type: String, required: true, trim: true },
    genres: { type: [String], required: true },
    runtime: { type: Number, default: 0, min: 0 },
    cast: { type: [String], required: true },
    poster: { type: String, trim: true },
    title: { type: String, required: true, trim: true },
    fullplot: { type: String, required: true, trim: true },
    languages: { type: [String], required: true },
    released: { type: Date, required: true },
    directors: { type: [String], required: true },
    rated: { type: String, trim: true },
    awards: {
        wins: { type: Number, required: true, default: 0, min: 0 },
        nominations: { type: Number, required: true, default: 0, min: 0 },
        text: { type: String, trim: true }
    },
    lastupdated: { type: String, trim: true },
    year: { type: Number, required: true },
    imdb: {
        rating: { type: Number, default: 0, min: 0 ,max:10},
        votes: { type: Number, default: 0, min: 0 },
        id: { type: Number, default: 0, min: 0 }
    },
    countries: { type: [String], required: true },
    type: { type: String, required: true, trim: true },
    tomatoes: {
        viewer: {
            rating: { type: Number, default: 0, min: 0 },
            numReviews: { type: Number, default: 0, min: 0 },
            meter: { type: Number, default: 0, min: 0 }
        },
        fresh: { type: Number, default: 0, min: 0 },
        critic: {
            rating: { type: Number, default: 0, min: 0 },
            numReviews: { type: Number, default: 0, min: 0 },
            meter: { type: Number, default: 0, min: 0 }
        },
        rotten: { type: Number, default: 0, min: 0 },
        lastUpdated: { type: Date }
    },
    num_mflix_comments: { type: Number, default: 0, min: 0 }
}, { collection: 'movies' });

export const MovieModel = mongoose.model('Movie', movieMongoSchema, 'movies');