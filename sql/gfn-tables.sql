CREATE SCHEMA IF NOT EXISTS public;

ALTER SCHEMA public OWNER TO postgres;

CREATE TABLE
    IF NOT EXISTS public.game (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255),
        sortName VARCHAR(255)
    );

ALTER TABLE public.game OWNER TO postgres;

CREATE TABLE
    IF NOT EXISTS public.variants (
        id SERIAL PRIMARY KEY,
        appStore VARCHAR(255),
        publisherName VARCHAR(255),
        gameId INT,
        FOREIGN KEY (gameId) REFERENCES game (id)
    );

ALTER TABLE public.variants OWNER TO postgres;