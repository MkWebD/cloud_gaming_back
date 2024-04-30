CREATE SCHEMA IF NOT EXISTS public;

ALTER SCHEMA public OWNER TO postgres;

CREATE TABLE
    IF NOT EXISTS public.game (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        sortName VARCHAR(255) NOT NULL UNIQUE
    );

ALTER TABLE public.game OWNER TO postgres;

CREATE TABLE
    IF NOT EXISTS public.variants (
        id SERIAL PRIMARY KEY,
        appStore VARCHAR(255) NOT NULL,
        publisherName VARCHAR(255) NOT NULL,
        gameId INT NOT NULL,
        FOREIGN KEY (gameId) REFERENCES game (id)
    );

ALTER TABLE public.variants OWNER TO postgres;