/* Replace with your SQL commands */
CREATE TABLE public.userdata (
    userdata_id integer NOT NULL,
    user_id integer NOT NULL,
    workplace_id integer NOT NULL,
    start_date date NOT NULL,
    end_date date NOT NULL,
    role character varying(50) NOT NULL
);

CREATE TABLE public.users (
    user_id integer NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    email character varying(255) NOT NULL,
    linkedin character varying(50) NOT NULL,
    password character varying(50)
);

CREATE TABLE public.workplaces (
    workplace_id integer NOT NULL,
    workplace character varying(50) NOT NULL,
    category character varying(50) NOT NULL,
    imageurl character varying(255)
);

INSERT INTO public.workplaces (workplace_id, workplace, category, imageurl) VALUES (1, 'Armstrong High School', 'high school', 'https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1587726922/rdaleorg/ekdtpkytkyr90pidagnp/ArmstrongHS-C.png');
