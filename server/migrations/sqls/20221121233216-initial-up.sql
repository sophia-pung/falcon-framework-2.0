/* Replace with your SQL commands */
CREATE TABLE userdata (
    userdata_id integer NOT NULL,
    user_id integer NOT NULL,
    workplace_id integer NOT NULL,
    start_date date NOT NULL,
    end_date date NOT NULL,
    role character varying(50) NOT NULL
);

CREATE TABLE users (
    user_id integer NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    email character varying(255) NOT NULL,
    linkedin character varying(50) NOT NULL,
    password character varying(50)
);

CREATE TABLE workplaces (
    workplace_id integer NOT NULL,
    workplace character varying(50) NOT NULL,
    category character varying(50) NOT NULL,
    imageurl character varying(255)
);

CREATE SEQUENCE userdata_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE workplace_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

INSERT INTO workplaces (workplace_id, workplace, category, imageurl) VALUES (1, 'Armstrong High School', 'high school', 'https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1587726922/rdaleorg/ekdtpkytkyr90pidagnp/ArmstrongHS-C.png');

SELECT pg_catalog.setval('workplace_id_seq', 1, true);

