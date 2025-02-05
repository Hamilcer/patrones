PGDMP      $                }            PaginaDeCamisasBD    17.2    17.2 B    =           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            >           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            @           1262    24576    PaginaDeCamisasBD    DATABASE     �   CREATE DATABASE "PaginaDeCamisasBD" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
 #   DROP DATABASE "PaginaDeCamisasBD";
                     postgres    false            �            1259    24577    artista    TABLE     �   CREATE TABLE public.artista (
    nombre character varying(20) NOT NULL,
    email character varying(30) NOT NULL,
    password character varying(45) NOT NULL,
    trial438 character(1)
);
    DROP TABLE public.artista;
       public         heap r       postgres    false            �            1259    24580    camisa    TABLE     p  CREATE TABLE public.camisa (
    idcamisa integer NOT NULL,
    imagen text NOT NULL,
    precio real NOT NULL,
    talla character varying(10) NOT NULL,
    color character varying(20) NOT NULL,
    cantidad integer NOT NULL,
    estampado_idestampado integer,
    material_idmaterial integer NOT NULL,
    pedido_numerodepedido integer,
    trial438 character(1)
);
    DROP TABLE public.camisa;
       public         heap r       postgres    false            �            1259    24585    camisa_idcamisa_seq    SEQUENCE     �   CREATE SEQUENCE public.camisa_idcamisa_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.camisa_idcamisa_seq;
       public               postgres    false    218            A           0    0    camisa_idcamisa_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.camisa_idcamisa_seq OWNED BY public.camisa.idcamisa;
          public               postgres    false    219            �            1259    24586    cliente    TABLE     �   CREATE TABLE public.cliente (
    nombre character varying(45) NOT NULL,
    email character varying(45) NOT NULL,
    password character varying(45) NOT NULL,
    trial438 character(1)
);
    DROP TABLE public.cliente;
       public         heap r       postgres    false            �            1259    24589 	   estampado    TABLE     �   CREATE TABLE public.estampado (
    idestampado integer NOT NULL,
    "diseño" text NOT NULL,
    nombre text NOT NULL,
    categoria text NOT NULL,
    artista_email character varying(30) NOT NULL,
    trial438 character(1),
    descripcion text
);
    DROP TABLE public.estampado;
       public         heap r       postgres    false            �            1259    24594    estampado_idestampado_seq    SEQUENCE     �   CREATE SEQUENCE public.estampado_idestampado_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.estampado_idestampado_seq;
       public               postgres    false    221            B           0    0    estampado_idestampado_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.estampado_idestampado_seq OWNED BY public.estampado.idestampado;
          public               postgres    false    222            �            1259    24595    informacion    TABLE     n  CREATE TABLE public.informacion (
    idinformacion integer NOT NULL,
    barrio character varying(45) NOT NULL,
    ciudad character varying(45) NOT NULL,
    pais character varying(45) NOT NULL,
    codigopostal character varying(10) NOT NULL,
    direccion character varying(45) NOT NULL,
    telefono character varying(13) NOT NULL,
    trial438 character(1)
);
    DROP TABLE public.informacion;
       public         heap r       postgres    false            �            1259    24598    informacion_idinformacion_seq    SEQUENCE     �   CREATE SEQUENCE public.informacion_idinformacion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.informacion_idinformacion_seq;
       public               postgres    false    223            C           0    0    informacion_idinformacion_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.informacion_idinformacion_seq OWNED BY public.informacion.idinformacion;
          public               postgres    false    224            �            1259    24599    material    TABLE     �   CREATE TABLE public.material (
    idmaterial integer NOT NULL,
    nombre character varying(45) NOT NULL,
    cantidad integer NOT NULL,
    trial438 character(1)
);
    DROP TABLE public.material;
       public         heap r       postgres    false            �            1259    24602    material_idmaterial_seq    SEQUENCE     �   CREATE SEQUENCE public.material_idmaterial_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.material_idmaterial_seq;
       public               postgres    false    225            D           0    0    material_idmaterial_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.material_idmaterial_seq OWNED BY public.material.idmaterial;
          public               postgres    false    226            �            1259    24603    pago    TABLE     �   CREATE TABLE public.pago (
    numerodepago integer NOT NULL,
    fechapago date NOT NULL,
    valor real NOT NULL,
    trial441 character(1)
);
    DROP TABLE public.pago;
       public         heap r       postgres    false            �            1259    24606    pago_numerodepago_seq    SEQUENCE     �   CREATE SEQUENCE public.pago_numerodepago_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.pago_numerodepago_seq;
       public               postgres    false    227            E           0    0    pago_numerodepago_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.pago_numerodepago_seq OWNED BY public.pago.numerodepago;
          public               postgres    false    228            �            1259    24607    pedido    TABLE     O  CREATE TABLE public.pedido (
    numerodepedido integer NOT NULL,
    valor real NOT NULL,
    estado character varying(45),
    fechapedido date,
    fechaenvio date,
    pago_numerodepago integer NOT NULL,
    cliente_email character varying(45) NOT NULL,
    informacion_idinformacion integer NOT NULL,
    trial441 character(1)
);
    DROP TABLE public.pedido;
       public         heap r       postgres    false            �            1259    24610    pedido_numerodepedido_seq    SEQUENCE     �   CREATE SEQUENCE public.pedido_numerodepedido_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.pedido_numerodepedido_seq;
       public               postgres    false    229            F           0    0    pedido_numerodepedido_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.pedido_numerodepedido_seq OWNED BY public.pedido.numerodepedido;
          public               postgres    false    230            x           2604    24611    camisa idcamisa    DEFAULT     r   ALTER TABLE ONLY public.camisa ALTER COLUMN idcamisa SET DEFAULT nextval('public.camisa_idcamisa_seq'::regclass);
 >   ALTER TABLE public.camisa ALTER COLUMN idcamisa DROP DEFAULT;
       public               postgres    false    219    218            y           2604    24612    estampado idestampado    DEFAULT     ~   ALTER TABLE ONLY public.estampado ALTER COLUMN idestampado SET DEFAULT nextval('public.estampado_idestampado_seq'::regclass);
 D   ALTER TABLE public.estampado ALTER COLUMN idestampado DROP DEFAULT;
       public               postgres    false    222    221            z           2604    24613    informacion idinformacion    DEFAULT     �   ALTER TABLE ONLY public.informacion ALTER COLUMN idinformacion SET DEFAULT nextval('public.informacion_idinformacion_seq'::regclass);
 H   ALTER TABLE public.informacion ALTER COLUMN idinformacion DROP DEFAULT;
       public               postgres    false    224    223            {           2604    24614    material idmaterial    DEFAULT     z   ALTER TABLE ONLY public.material ALTER COLUMN idmaterial SET DEFAULT nextval('public.material_idmaterial_seq'::regclass);
 B   ALTER TABLE public.material ALTER COLUMN idmaterial DROP DEFAULT;
       public               postgres    false    226    225            |           2604    24615    pago numerodepago    DEFAULT     v   ALTER TABLE ONLY public.pago ALTER COLUMN numerodepago SET DEFAULT nextval('public.pago_numerodepago_seq'::regclass);
 @   ALTER TABLE public.pago ALTER COLUMN numerodepago DROP DEFAULT;
       public               postgres    false    228    227            }           2604    24616    pedido numerodepedido    DEFAULT     ~   ALTER TABLE ONLY public.pedido ALTER COLUMN numerodepedido SET DEFAULT nextval('public.pedido_numerodepedido_seq'::regclass);
 D   ALTER TABLE public.pedido ALTER COLUMN numerodepedido DROP DEFAULT;
       public               postgres    false    230    229            -          0    24577    artista 
   TABLE DATA           D   COPY public.artista (nombre, email, password, trial438) FROM stdin;
    public               postgres    false    217   hP       .          0    24580    camisa 
   TABLE DATA           �   COPY public.camisa (idcamisa, imagen, precio, talla, color, cantidad, estampado_idestampado, material_idmaterial, pedido_numerodepedido, trial438) FROM stdin;
    public               postgres    false    218   �P       0          0    24586    cliente 
   TABLE DATA           D   COPY public.cliente (nombre, email, password, trial438) FROM stdin;
    public               postgres    false    220   �P       1          0    24589 	   estampado 
   TABLE DATA           t   COPY public.estampado (idestampado, "diseño", nombre, categoria, artista_email, trial438, descripcion) FROM stdin;
    public               postgres    false    221   lQ       3          0    24595    informacion 
   TABLE DATA           w   COPY public.informacion (idinformacion, barrio, ciudad, pais, codigopostal, direccion, telefono, trial438) FROM stdin;
    public               postgres    false    223   =R       5          0    24599    material 
   TABLE DATA           J   COPY public.material (idmaterial, nombre, cantidad, trial438) FROM stdin;
    public               postgres    false    225   �R       7          0    24603    pago 
   TABLE DATA           H   COPY public.pago (numerodepago, fechapago, valor, trial441) FROM stdin;
    public               postgres    false    227   S       9          0    24607    pedido 
   TABLE DATA           �   COPY public.pedido (numerodepedido, valor, estado, fechapedido, fechaenvio, pago_numerodepago, cliente_email, informacion_idinformacion, trial441) FROM stdin;
    public               postgres    false    229   �S       G           0    0    camisa_idcamisa_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.camisa_idcamisa_seq', 18, true);
          public               postgres    false    219            H           0    0    estampado_idestampado_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.estampado_idestampado_seq', 9, true);
          public               postgres    false    222            I           0    0    informacion_idinformacion_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.informacion_idinformacion_seq', 23, true);
          public               postgres    false    224            J           0    0    material_idmaterial_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.material_idmaterial_seq', 1, false);
          public               postgres    false    226            K           0    0    pago_numerodepago_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.pago_numerodepago_seq', 24, true);
          public               postgres    false    228            L           0    0    pedido_numerodepedido_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.pedido_numerodepedido_seq', 24, true);
          public               postgres    false    230                       2606    24618    artista pk_artista 
   CONSTRAINT     S   ALTER TABLE ONLY public.artista
    ADD CONSTRAINT pk_artista PRIMARY KEY (email);
 <   ALTER TABLE ONLY public.artista DROP CONSTRAINT pk_artista;
       public                 postgres    false    217            �           2606    24620    camisa pk_camisa 
   CONSTRAINT     T   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT pk_camisa PRIMARY KEY (idcamisa);
 :   ALTER TABLE ONLY public.camisa DROP CONSTRAINT pk_camisa;
       public                 postgres    false    218            �           2606    24622    cliente pk_cliente 
   CONSTRAINT     S   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT pk_cliente PRIMARY KEY (email);
 <   ALTER TABLE ONLY public.cliente DROP CONSTRAINT pk_cliente;
       public                 postgres    false    220            �           2606    24624    estampado pk_estampado 
   CONSTRAINT     ]   ALTER TABLE ONLY public.estampado
    ADD CONSTRAINT pk_estampado PRIMARY KEY (idestampado);
 @   ALTER TABLE ONLY public.estampado DROP CONSTRAINT pk_estampado;
       public                 postgres    false    221            �           2606    24626    informacion pk_informacion 
   CONSTRAINT     c   ALTER TABLE ONLY public.informacion
    ADD CONSTRAINT pk_informacion PRIMARY KEY (idinformacion);
 D   ALTER TABLE ONLY public.informacion DROP CONSTRAINT pk_informacion;
       public                 postgres    false    223            �           2606    24628    material pk_material 
   CONSTRAINT     Z   ALTER TABLE ONLY public.material
    ADD CONSTRAINT pk_material PRIMARY KEY (idmaterial);
 >   ALTER TABLE ONLY public.material DROP CONSTRAINT pk_material;
       public                 postgres    false    225            �           2606    24630    pago pk_pago 
   CONSTRAINT     T   ALTER TABLE ONLY public.pago
    ADD CONSTRAINT pk_pago PRIMARY KEY (numerodepago);
 6   ALTER TABLE ONLY public.pago DROP CONSTRAINT pk_pago;
       public                 postgres    false    227            �           2606    24632    pedido pk_pedido 
   CONSTRAINT     Z   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT pk_pedido PRIMARY KEY (numerodepedido);
 :   ALTER TABLE ONLY public.pedido DROP CONSTRAINT pk_pedido;
       public                 postgres    false    229            �           1259    24633    fk_camisa_estampado1_idx    INDEX     \   CREATE INDEX fk_camisa_estampado1_idx ON public.camisa USING btree (estampado_idestampado);
 ,   DROP INDEX public.fk_camisa_estampado1_idx;
       public                 postgres    false    218            �           1259    24634    fk_camisa_material1_idx    INDEX     Y   CREATE INDEX fk_camisa_material1_idx ON public.camisa USING btree (material_idmaterial);
 +   DROP INDEX public.fk_camisa_material1_idx;
       public                 postgres    false    218            �           1259    24635    fk_camisa_pedido1_idx    INDEX     Y   CREATE INDEX fk_camisa_pedido1_idx ON public.camisa USING btree (pedido_numerodepedido);
 )   DROP INDEX public.fk_camisa_pedido1_idx;
       public                 postgres    false    218            �           1259    24636    fk_estampado_artista1_idx    INDEX     X   CREATE INDEX fk_estampado_artista1_idx ON public.estampado USING btree (artista_email);
 -   DROP INDEX public.fk_estampado_artista1_idx;
       public                 postgres    false    221            �           1259    24637    fk_pedido_cliente1_idx    INDEX     R   CREATE INDEX fk_pedido_cliente1_idx ON public.pedido USING btree (cliente_email);
 *   DROP INDEX public.fk_pedido_cliente1_idx;
       public                 postgres    false    229            �           1259    24638    fk_pedido_informacion1_idx    INDEX     b   CREATE INDEX fk_pedido_informacion1_idx ON public.pedido USING btree (informacion_idinformacion);
 .   DROP INDEX public.fk_pedido_informacion1_idx;
       public                 postgres    false    229            �           1259    24639    fk_pedido_pago1_idx    INDEX     S   CREATE INDEX fk_pedido_pago1_idx ON public.pedido USING btree (pago_numerodepago);
 '   DROP INDEX public.fk_pedido_pago1_idx;
       public                 postgres    false    229            �           2606    24640    camisa fk_camisa_estampado1    FK CONSTRAINT     �   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT fk_camisa_estampado1 FOREIGN KEY (estampado_idestampado) REFERENCES public.estampado(idestampado);
 E   ALTER TABLE ONLY public.camisa DROP CONSTRAINT fk_camisa_estampado1;
       public               postgres    false    221    4745    218            �           2606    24645    camisa fk_camisa_material1    FK CONSTRAINT     �   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT fk_camisa_material1 FOREIGN KEY (material_idmaterial) REFERENCES public.material(idmaterial);
 D   ALTER TABLE ONLY public.camisa DROP CONSTRAINT fk_camisa_material1;
       public               postgres    false    218    225    4749            �           2606    24650    camisa fk_camisa_pedido1    FK CONSTRAINT     �   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT fk_camisa_pedido1 FOREIGN KEY (pedido_numerodepedido) REFERENCES public.pedido(numerodepedido);
 B   ALTER TABLE ONLY public.camisa DROP CONSTRAINT fk_camisa_pedido1;
       public               postgres    false    218    229    4756            �           2606    24655    estampado fk_estampado_artista1    FK CONSTRAINT     �   ALTER TABLE ONLY public.estampado
    ADD CONSTRAINT fk_estampado_artista1 FOREIGN KEY (artista_email) REFERENCES public.artista(email);
 I   ALTER TABLE ONLY public.estampado DROP CONSTRAINT fk_estampado_artista1;
       public               postgres    false    4735    217    221            �           2606    24660    pedido fk_pedido_cliente1    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT fk_pedido_cliente1 FOREIGN KEY (cliente_email) REFERENCES public.cliente(email);
 C   ALTER TABLE ONLY public.pedido DROP CONSTRAINT fk_pedido_cliente1;
       public               postgres    false    229    220    4742            �           2606    24665    pedido fk_pedido_informacion1    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT fk_pedido_informacion1 FOREIGN KEY (informacion_idinformacion) REFERENCES public.informacion(idinformacion);
 G   ALTER TABLE ONLY public.pedido DROP CONSTRAINT fk_pedido_informacion1;
       public               postgres    false    4747    229    223            �           2606    24670    pedido fk_pedido_pago1    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT fk_pedido_pago1 FOREIGN KEY (pago_numerodepago) REFERENCES public.pago(numerodepago);
 @   ALTER TABLE ONLY public.pedido DROP CONSTRAINT fk_pedido_pago1;
       public               postgres    false    227    229    4751            -   :   x��M�+M���S鹉�9z������1~\�����9%�yE�U�H�F �=... �K�      .      x������ � �      0   �   x�}��
� �>L�h{�tO�Kf��m)��g;�l��/��W�Y8����FS`�W��-$J���Y�@�j�����i�s�fJ�x�Nw�}ac�J�Y����Zd���D:?c1�rsZ��k����s��7a"      1   �   x�]�1��0���>�/@� �n����6�p+F���Pp'*���P�n�7���+�Ӆ<I���NX�ڣY@�+�#:t�;`]�{t�e�;�n��D^���d��1f ��?� ą�`�Yb���WC{���Zh����
[}�Z����pTN��MT�JE�޿Qs��s�B �$&��_M��ua�}D�[M      3   u   x���K� D��0�������H� �O��0**�t�v^ZDH[��r�b!E�U�V�t#0���Z�< ��#!��Y6-�(�PV�fI:~�������,��;�,��gܠ�: �%V�      5   B   x�3�t�I�O���45����2��I�K�41q�8}2��9�M@C΀������"NCK�H� h�      7   `   x�u��� F�g��>E�����h�j�	}=��GAXM�d�D�_�y��j��e��[�5f����ŧ@>���?��I2���������k~?���7�      9   �   x���=�0�ٹ(q����'`A-j��T�opTK��`}��g|�Z�kX�㰬�F�h�`8b����qZ��.[�<�~��[������>���INB���/�X�䥐g!GP�B��<AQ
E
%)�X(��ߖY)��J&�Nu��2IF�S�d���.!��$l�=�d�To�߃$��H�F���Ob����UJ} ��     