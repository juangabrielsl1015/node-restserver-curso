/**
 * Puerto
 */
process.env.PORT = process.env.PORT || 8000;

/**
 * Entorno
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/**
 * Base de datos
 */
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://gazoo:hiq4YZYSupgwogPn@cafe.x6amk.mongodb.net/cafe';
}

process.env.urlDB = urlDB;