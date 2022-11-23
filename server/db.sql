--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Homebrew)
-- Dumped by pg_dump version 14.5 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: userdata; Type: TABLE; Schema: public; Owner: sophiapung
--

CREATE TABLE public.userdata (
    userdata_id integer NOT NULL,
    user_id integer NOT NULL,
    workplace_id integer NOT NULL,
    start_date date NOT NULL,
    end_date date NOT NULL,
    role character varying(50) NOT NULL
);


ALTER TABLE public.userdata OWNER TO sophiapung;

--
-- Name: userdata_userdata_id_seq; Type: SEQUENCE; Schema: public; Owner: sophiapung
--

CREATE SEQUENCE public.userdata_userdata_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.userdata_userdata_id_seq OWNER TO sophiapung;

--
-- Name: userdata_userdata_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sophiapung
--

ALTER SEQUENCE public.userdata_userdata_id_seq OWNED BY public.userdata.userdata_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: sophiapung
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    email character varying(255) NOT NULL,
    linkedin character varying(50) NOT NULL,
    password character varying(50)
);


ALTER TABLE public.users OWNER TO sophiapung;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: sophiapung
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO sophiapung;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sophiapung
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: workplaces; Type: TABLE; Schema: public; Owner: sophiapung
--

CREATE TABLE public.workplaces (
    workplace_id integer NOT NULL,
    workplace character varying(50) NOT NULL,
    category character varying(50) NOT NULL,
    imageurl character varying(255)
);


ALTER TABLE public.workplaces OWNER TO sophiapung;

--
-- Name: workplaces_workplace_id_seq; Type: SEQUENCE; Schema: public; Owner: sophiapung
--

CREATE SEQUENCE public.workplaces_workplace_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.workplaces_workplace_id_seq OWNER TO sophiapung;

--
-- Name: workplaces_workplace_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sophiapung
--

ALTER SEQUENCE public.workplaces_workplace_id_seq OWNED BY public.workplaces.workplace_id;


--
-- Name: userdata userdata_id; Type: DEFAULT; Schema: public; Owner: sophiapung
--

ALTER TABLE ONLY public.userdata ALTER COLUMN userdata_id SET DEFAULT nextval('public.userdata_userdata_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: sophiapung
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Name: workplaces workplace_id; Type: DEFAULT; Schema: public; Owner: sophiapung
--

ALTER TABLE ONLY public.workplaces ALTER COLUMN workplace_id SET DEFAULT nextval('public.workplaces_workplace_id_seq'::regclass);


--
-- Data for Name: userdata; Type: TABLE DATA; Schema: public; Owner: sophiapung
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: sophiapung
--

INSERT INTO public.users (user_id, first_name, last_name, email, linkedin, password) VALUES (1, 'sophia', 'pung', 'sophiagracepung@gmail.com', 'linkedin.com/in/sophiapung/', NULL);
INSERT INTO public.users (user_id, first_name, last_name, email, linkedin, password) VALUES (6, 'sophia the phirst', '', 'sophiapung22@gmail.com', '', NULL);


--
-- Data for Name: workplaces; Type: TABLE DATA; Schema: public; Owner: sophiapung
--

INSERT INTO public.workplaces (workplace_id, workplace, category, imageurl) VALUES (1, 'Armstrong High School', 'high school', 'https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1587726922/rdaleorg/ekdtpkytkyr90pidagnp/ArmstrongHS-C.png');


--
-- Name: userdata_userdata_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sophiapung
--

SELECT pg_catalog.setval('public.userdata_userdata_id_seq', 1, false);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sophiapung
--

SELECT pg_catalog.setval('public.users_user_id_seq', 6, true);


--
-- Name: workplaces_workplace_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sophiapung
--

SELECT pg_catalog.setval('public.workplaces_workplace_id_seq', 1, true);


--
-- Name: userdata userdata_pkey; Type: CONSTRAINT; Schema: public; Owner: sophiapung
--

ALTER TABLE ONLY public.userdata
    ADD CONSTRAINT userdata_pkey PRIMARY KEY (userdata_id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: sophiapung
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_linkedin_key; Type: CONSTRAINT; Schema: public; Owner: sophiapung
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_linkedin_key UNIQUE (linkedin);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: sophiapung
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: workplaces workplaces_pkey; Type: CONSTRAINT; Schema: public; Owner: sophiapung
--

ALTER TABLE ONLY public.workplaces
    ADD CONSTRAINT workplaces_pkey PRIMARY KEY (workplace_id);


--
-- Name: userdata userdata_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sophiapung
--

ALTER TABLE ONLY public.userdata
    ADD CONSTRAINT userdata_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- Name: userdata userdata_workplace_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sophiapung
--

ALTER TABLE ONLY public.userdata
    ADD CONSTRAINT userdata_workplace_id_fkey FOREIGN KEY (workplace_id) REFERENCES public.workplaces(workplace_id);


--
-- PostgreSQL database dump complete
--

