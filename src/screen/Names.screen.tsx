// @ts-ignore
import * as React from 'react';
import { Component } from 'react';
import { Animated, Image, Route, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants';
import { Theme, ThemeStyles } from "../themes/default";
import { SceneMap, TabView } from "react-native-tab-view";

const vocals = ['a', 'e', 'i', 'o', 'u'];

const names =
    [
        {
            "name": "Karina",
            "date": "2.1."
        },
        {
            "name": "Karin",
            "date": "2.1."
        },
        {
            "name": "Kar\u00edna",
            "date": "2.1."
        },
        {
            "name": "Radmila",
            "date": "3.1."
        },
        {
            "name": "Diana",
            "date": "4.1."
        },
        {
            "name": "Dalimil",
            "date": "5.1."
        },
        {
            "name": "Dalemil",
            "date": "5.1."
        },
        {
            "name": "Melichar",
            "date": "6.1."
        },
        {
            "name": "Baltazar",
            "date": "6.1."
        },
        {
            "name": "Ka\u0161par",
            "date": "6.1."
        },
        {
            "name": "Wilhelmina",
            "date": "7.1."
        },
        {
            "name": "Vilma",
            "date": "7.1."
        },
        {
            "name": "\u010cestm\u00edr",
            "date": "8.1."
        },
        {
            "name": "Vladan",
            "date": "9.1."
        },
        {
            "name": "B\u0159etislav",
            "date": "10.1."
        },
        {
            "name": "Bohdana",
            "date": "11.1."
        },
        {
            "name": "Pravoslav",
            "date": "12.1."
        },
        {
            "name": "Edita",
            "date": "13.1."
        },
        {
            "name": "Radovan",
            "date": "14.1."
        },
        {
            "name": "Alice",
            "date": "15.1."
        },
        {
            "name": "\u010ceslav",
            "date": "16.1."
        },
        {
            "name": "Ctirad",
            "date": "16.1."
        },
        {
            "name": "Drahoslav",
            "date": "17.1."
        },
        {
            "name": "Vladislav",
            "date": "18.1."
        },
        {
            "name": "Doubravka",
            "date": "19.1."
        },
        {
            "name": "Ilona",
            "date": "20.1."
        },
        {
            "name": "B\u011bla",
            "date": "21.1."
        },
        {
            "name": "Slavom\u00edr",
            "date": "22.1."
        },
        {
            "name": "Zdenko",
            "date": "23.1."
        },
        {
            "name": "Zden\u011bk",
            "date": "23.1."
        },
        {
            "name": "Zdenek",
            "date": "23.1."
        },
        {
            "name": "Milena",
            "date": "24.1."
        },
        {
            "name": "Milo\u0161",
            "date": "25.1."
        },
        {
            "name": "Zora",
            "date": "26.1."
        },
        {
            "name": "Ingrid",
            "date": "27.1."
        },
        {
            "name": "Ot\u00fdlie",
            "date": "28.1."
        },
        {
            "name": "Otilie",
            "date": "28.1."
        },
        {
            "name": "Zdeslava",
            "date": "29.1."
        },
        {
            "name": "Zdislava",
            "date": "29.1."
        },
        {
            "name": "Robin",
            "date": "30.1."
        },
        {
            "name": "Marika",
            "date": "31.1."
        },
        {
            "name": "Hynek",
            "date": "1.2."
        },
        {
            "name": "Nela",
            "date": "2.2."
        },
        {
            "name": "Bla\u017eej",
            "date": "3.2."
        },
        {
            "name": "Jarmila",
            "date": "4.2."
        },
        {
            "name": "Dobromila",
            "date": "5.2."
        },
        {
            "name": "Vanda",
            "date": "6.2."
        },
        {
            "name": "Wanda",
            "date": "6.2."
        },
        {
            "name": "Veronika",
            "date": "7.2."
        },
        {
            "name": "Milada",
            "date": "8.2."
        },
        {
            "name": "Apolena",
            "date": "9.2."
        },
        {
            "name": "Mojm\u00edr",
            "date": "10.2."
        },
        {
            "name": "Bo\u017eena",
            "date": "11.2."
        },
        {
            "name": "Slav\u011bna",
            "date": "12.2."
        },
        {
            "name": "V\u011bnceslav",
            "date": "13.2."
        },
        {
            "name": "Valent\u00fdn",
            "date": "14.2."
        },
        {
            "name": "Valentin",
            "date": "14.2."
        },
        {
            "name": "Valent\u00fdna",
            "date": "14.2."
        },
        {
            "name": "Ji\u0159ina",
            "date": "15.2."
        },
        {
            "name": "Jorga",
            "date": "15.2."
        },
        {
            "name": "Ljuba",
            "date": "16.2."
        },
        {
            "name": "Miloslava",
            "date": "17.2."
        },
        {
            "name": "Gisela",
            "date": "18.2."
        },
        {
            "name": "Gizela",
            "date": "18.2."
        },
        {
            "name": "Patrik",
            "date": "19.2."
        },
        {
            "name": "Old\u0159ich",
            "date": "20.2."
        },
        {
            "name": "Lenka",
            "date": "21.2."
        },
        {
            "name": "Eleonora",
            "date": "21.2."
        },
        {
            "name": "Petr",
            "date": "22.2."
        },
        {
            "name": "Svatopluk",
            "date": "23.2."
        },
        {
            "name": "Maty\u00e1\u0161",
            "date": "24.2."
        },
        {
            "name": "Mat\u011bj",
            "date": "24.2."
        },
        {
            "name": "Matej",
            "date": "24.2."
        },
        {
            "name": "Lilian",
            "date": "25.2."
        },
        {
            "name": "Lily",
            "date": "25.2."
        },
        {
            "name": "Liliana",
            "date": "25.2."
        },
        {
            "name": "Dorota",
            "date": "26.2."
        },
        {
            "name": "Dorotea",
            "date": "26.2."
        },
        {
            "name": "Alexander",
            "date": "27.2."
        },
        {
            "name": "Alexis",
            "date": "27.2."
        },
        {
            "name": "Alexandr",
            "date": "27.2."
        },
        {
            "name": "Lum\u00edr",
            "date": "28.2."
        },
        {
            "name": "Rufin",
            "date": "29.2."
        },
        {
            "name": "Horym\u00edr",
            "date": "29.2."
        },
        {
            "name": "Bed\u0159ich",
            "date": "1.3."
        },
        {
            "name": "Ane\u017eka",
            "date": "2.3."
        },
        {
            "name": "Ines",
            "date": "2.3."
        },
        {
            "name": "Agnes",
            "date": "2.3."
        },
        {
            "name": "Kamil",
            "date": "3.3."
        },
        {
            "name": "Stela",
            "date": "4.3."
        },
        {
            "name": "Stella",
            "date": "4.3."
        },
        {
            "name": "Kazim\u00edr",
            "date": "5.3."
        },
        {
            "name": "Mirek",
            "date": "6.3."
        },
        {
            "name": "Miroslav",
            "date": "6.3."
        },
        {
            "name": "Thomas",
            "date": "7.3."
        },
        {
            "name": "Tom",
            "date": "7.3."
        },
        {
            "name": "Tom\u00e1\u0161",
            "date": "7.3."
        },
        {
            "name": "Gabriela",
            "date": "8.3."
        },
        {
            "name": "Francesca",
            "date": "9.3."
        },
        {
            "name": "Franti\u0161ka",
            "date": "9.3."
        },
        {
            "name": "Viktorie",
            "date": "10.3."
        },
        {
            "name": "Angelina",
            "date": "11.3."
        },
        {
            "name": "And\u011bl\u00edna",
            "date": "11.3."
        },
        {
            "name": "And\u011bla",
            "date": "11.3."
        },
        {
            "name": "Gregor",
            "date": "12.3."
        },
        {
            "name": "\u0158eho\u0159",
            "date": "12.3."
        },
        {
            "name": "Rosita",
            "date": "13.3."
        },
        {
            "name": "R\u016f\u017eena",
            "date": "13.3."
        },
        {
            "name": "Roz\u00e1lie",
            "date": "13.3."
        },
        {
            "name": "Matylda",
            "date": "14.3."
        },
        {
            "name": "R\u00fat",
            "date": "14.3."
        },
        {
            "name": "Rut",
            "date": "14.3."
        },
        {
            "name": "Ida",
            "date": "15.3."
        },
        {
            "name": "Elena",
            "date": "16.3."
        },
        {
            "name": "Herbert",
            "date": "16.3."
        },
        {
            "name": "Vlastimil",
            "date": "17.3."
        },
        {
            "name": "Eduard",
            "date": "18.3."
        },
        {
            "name": "Edvard",
            "date": "18.3."
        },
        {
            "name": "Jozef",
            "date": "19.3."
        },
        {
            "name": "Josef",
            "date": "19.3."
        },
        {
            "name": "Sv\u011btlana",
            "date": "20.3."
        },
        {
            "name": "Radomil",
            "date": "21.3."
        },
        {
            "name": "Radek",
            "date": "21.3."
        },
        {
            "name": "Leona",
            "date": "22.3."
        },
        {
            "name": "Ivona",
            "date": "23.3."
        },
        {
            "name": "Yvona",
            "date": "23.3."
        },
        {
            "name": "Gabriel",
            "date": "24.3."
        },
        {
            "name": "Mari\u00e1n",
            "date": "25.3."
        },
        {
            "name": "Marius",
            "date": "25.3."
        },
        {
            "name": "Marian",
            "date": "25.3."
        },
        {
            "name": "Emanuel",
            "date": "26.3."
        },
        {
            "name": "Dita",
            "date": "27.3."
        },
        {
            "name": "Ditta",
            "date": "27.3."
        },
        {
            "name": "Sonja",
            "date": "28.3."
        },
        {
            "name": "Sonia",
            "date": "28.3."
        },
        {
            "name": "So\u0148a",
            "date": "28.3."
        },
        {
            "name": "Ta\u0165\u00e1na",
            "date": "29.3."
        },
        {
            "name": "Tatiana",
            "date": "29.3."
        },
        {
            "name": "Arno\u0161t",
            "date": "30.3."
        },
        {
            "name": "Kvido",
            "date": "31.3."
        },
        {
            "name": "Quido",
            "date": "31.3."
        },
        {
            "name": "Hugo",
            "date": "1.4."
        },
        {
            "name": "Erika",
            "date": "2.4."
        },
        {
            "name": "Richard",
            "date": "3.4."
        },
        {
            "name": "Ivana",
            "date": "4.4."
        },
        {
            "name": "Ivanka",
            "date": "4.4."
        },
        {
            "name": "Miroslava",
            "date": "5.4."
        },
        {
            "name": "Mirka",
            "date": "5.4."
        },
        {
            "name": "Vendulka",
            "date": "6.4."
        },
        {
            "name": "Vendula",
            "date": "6.4."
        },
        {
            "name": "Herman",
            "date": "7.4."
        },
        {
            "name": "Herm\u00edna",
            "date": "7.4."
        },
        {
            "name": "He\u0159man",
            "date": "7.4."
        },
        {
            "name": "Ema",
            "date": "8.4."
        },
        {
            "name": "Emma",
            "date": "8.4."
        },
        {
            "name": "Du\u0161an",
            "date": "9.4."
        },
        {
            "name": "Du\u0161ana",
            "date": "9.4."
        },
        {
            "name": "Daria",
            "date": "10.4."
        },
        {
            "name": "Darya",
            "date": "10.4."
        },
        {
            "name": "Darja",
            "date": "10.4."
        },
        {
            "name": "Isabel",
            "date": "11.4."
        },
        {
            "name": "Izabela",
            "date": "11.4."
        },
        {
            "name": "Julius",
            "date": "12.4."
        },
        {
            "name": "Julian",
            "date": "12.4."
        },
        {
            "name": "J\u00falius",
            "date": "12.4."
        },
        {
            "name": "Ale\u0161",
            "date": "13.4."
        },
        {
            "name": "Vincenc",
            "date": "14.4."
        },
        {
            "name": "Vincent",
            "date": "14.4."
        },
        {
            "name": "Anast\u00e1zie",
            "date": "15.4."
        },
        {
            "name": "Anastazia",
            "date": "15.4."
        },
        {
            "name": "Irini",
            "date": "16.4."
        },
        {
            "name": "Irena",
            "date": "16.4."
        },
        {
            "name": "Rolf",
            "date": "17.4."
        },
        {
            "name": "Rudolf",
            "date": "17.4."
        },
        {
            "name": "Val\u00e9rie",
            "date": "18.4."
        },
        {
            "name": "Valerie",
            "date": "18.4."
        },
        {
            "name": "Valeria",
            "date": "18.4."
        },
        {
            "name": "Rostislava",
            "date": "19.4."
        },
        {
            "name": "Marcela",
            "date": "20.4."
        },
        {
            "name": "Alexandra",
            "date": "21.4."
        },
        {
            "name": "Ev\u017eenie",
            "date": "22.4."
        },
        {
            "name": "Ev\u017e\u00e9nie",
            "date": "22.4."
        },
        {
            "name": "Vojt\u011bch",
            "date": "23.4."
        },
        {
            "name": "Juraj",
            "date": "24.4."
        },
        {
            "name": "George",
            "date": "24.4."
        },
        {
            "name": "Ji\u0159\u00ed",
            "date": "24.4."
        },
        {
            "name": "Marek",
            "date": "25.4."
        },
        {
            "name": "Ota",
            "date": "26.4."
        },
        {
            "name": "Otto",
            "date": "26.4."
        },
        {
            "name": "Oto",
            "date": "26.4."
        },
        {
            "name": "Jaroslav",
            "date": "27.4."
        },
        {
            "name": "Vlastislav",
            "date": "28.4."
        },
        {
            "name": "Robert",
            "date": "29.4."
        },
        {
            "name": "Blahoslav",
            "date": "30.4."
        },
        {
            "name": "Zikmund",
            "date": "2.5."
        },
        {
            "name": "Alex",
            "date": "3.5."
        },
        {
            "name": "Alexej",
            "date": "3.5."
        },
        {
            "name": "Kv\u011btoslav",
            "date": "4.5."
        },
        {
            "name": "Klaudia",
            "date": "5.5."
        },
        {
            "name": "Claudia",
            "date": "5.5."
        },
        {
            "name": "Klaudie",
            "date": "5.5."
        },
        {
            "name": "Radoslav",
            "date": "6.5."
        },
        {
            "name": "Stanislav",
            "date": "7.5."
        },
        {
            "name": "Ctibor",
            "date": "9.5."
        },
        {
            "name": "Stibor",
            "date": "9.5."
        },
        {
            "name": "Bla\u017eena",
            "date": "10.5."
        },
        {
            "name": "Svatava",
            "date": "11.5."
        },
        {
            "name": "Pankr\u00e1c",
            "date": "12.5."
        },
        {
            "name": "Serv\u00e1c",
            "date": "13.5."
        },
        {
            "name": "Bonif\u00e1c",
            "date": "14.5."
        },
        {
            "name": "\u017dofie",
            "date": "15.5."
        },
        {
            "name": "P\u0159emysl",
            "date": "16.5."
        },
        {
            "name": "Anetta",
            "date": "17.5."
        },
        {
            "name": "Aneta",
            "date": "17.5."
        },
        {
            "name": "Nata\u0161a",
            "date": "18.5."
        },
        {
            "name": "Ivo",
            "date": "19.5."
        },
        {
            "name": "Ivo\u0161",
            "date": "19.5."
        },
        {
            "name": "Zby\u0161ek",
            "date": "20.5."
        },
        {
            "name": "Monika",
            "date": "21.5."
        },
        {
            "name": "Emil",
            "date": "22.5."
        },
        {
            "name": "Vladim\u00edr",
            "date": "23.5."
        },
        {
            "name": "Jana",
            "date": "24.5."
        },
        {
            "name": "Viola",
            "date": "25.5."
        },
        {
            "name": "Filip",
            "date": "26.5."
        },
        {
            "name": "Waldemar",
            "date": "27.5."
        },
        {
            "name": "Valdemar",
            "date": "27.5."
        },
        {
            "name": "Vil\u00e9m",
            "date": "28.5."
        },
        {
            "name": "Maxmilian",
            "date": "29.5."
        },
        {
            "name": "Maxmili\u00e1n",
            "date": "29.5."
        },
        {
            "name": "Maximilian",
            "date": "29.5."
        },
        {
            "name": "Ferdinand",
            "date": "30.5."
        },
        {
            "name": "Kamila",
            "date": "31.5."
        },
        {
            "name": "Laura",
            "date": "1.6."
        },
        {
            "name": "Jarmil",
            "date": "2.6."
        },
        {
            "name": "Tamara",
            "date": "3.6."
        },
        {
            "name": "Dalibor",
            "date": "4.6."
        },
        {
            "name": "Dobroslav",
            "date": "5.6."
        },
        {
            "name": "Norbert",
            "date": "6.6."
        },
        {
            "name": "Yveta",
            "date": "7.6."
        },
        {
            "name": "Iveta",
            "date": "7.6."
        },
        {
            "name": "Medard",
            "date": "8.6."
        },
        {
            "name": "Stanislava",
            "date": "9.6."
        },
        {
            "name": "Otta",
            "date": "10.6."
        },
        {
            "name": "Bruno",
            "date": "11.6."
        },
        {
            "name": "Antonie",
            "date": "12.6."
        },
        {
            "name": "Antonina",
            "date": "12.6."
        },
        {
            "name": "Antonin",
            "date": "13.6."
        },
        {
            "name": "Anton\u00edn",
            "date": "13.6."
        },
        {
            "name": "Roland",
            "date": "14.6."
        },
        {
            "name": "V\u00edt",
            "date": "15.6."
        },
        {
            "name": "V\u00edtek",
            "date": "15.6."
        },
        {
            "name": "Zbyn\u011bk",
            "date": "16.6."
        },
        {
            "name": "Adolf",
            "date": "17.6."
        },
        {
            "name": "Milan",
            "date": "18.6."
        },
        {
            "name": "Leo\u0161",
            "date": "19.6."
        },
        {
            "name": "Kv\u011bta",
            "date": "20.6."
        },
        {
            "name": "Kveta",
            "date": "20.6."
        },
        {
            "name": "Aloys",
            "date": "21.6."
        },
        {
            "name": "Alojz",
            "date": "21.6."
        },
        {
            "name": "Alois",
            "date": "21.6."
        },
        {
            "name": "Pavla",
            "date": "22.6."
        },
        {
            "name": "Zdenka",
            "date": "23.6."
        },
        {
            "name": "Zdena",
            "date": "23.6."
        },
        {
            "name": "Zde\u0148ka",
            "date": "23.6."
        },
        {
            "name": "Jan",
            "date": "24.6."
        },
        {
            "name": "Ivan",
            "date": "25.6."
        },
        {
            "name": "Adriana",
            "date": "26.6."
        },
        {
            "name": "Ladislav",
            "date": "27.6."
        },
        {
            "name": "Lubomil",
            "date": "28.6."
        },
        {
            "name": "Lubom\u00edr",
            "date": "28.6."
        },
        {
            "name": "Pavel",
            "date": "29.6."
        },
        {
            "name": "Petr",
            "date": "29.6."
        },
        {
            "name": "\u0160\u00e1rka",
            "date": "30.6."
        },
        {
            "name": "Jaroslava",
            "date": "1.7."
        },
        {
            "name": "Patricie",
            "date": "2.7."
        },
        {
            "name": "Radom\u00edr",
            "date": "3.7."
        },
        {
            "name": "Prokop",
            "date": "4.7."
        },
        {
            "name": "Metod\u011bj",
            "date": "5.7."
        },
        {
            "name": "Cyril",
            "date": "5.7."
        },
        {
            "name": "Bohuslava",
            "date": "7.7."
        },
        {
            "name": "Nora",
            "date": "8.7."
        },
        {
            "name": "Drahoslava",
            "date": "9.7."
        },
        {
            "name": "Am\u00e1lie",
            "date": "10.7."
        },
        {
            "name": "Libu\u0161e",
            "date": "10.7."
        },
        {
            "name": "Olga",
            "date": "11.7."
        },
        {
            "name": "Bo\u0159ek",
            "date": "12.7."
        },
        {
            "name": "Margit",
            "date": "13.7."
        },
        {
            "name": "Margareta",
            "date": "13.7."
        },
        {
            "name": "Mark\u00e9ta",
            "date": "13.7."
        },
        {
            "name": "Karolina",
            "date": "14.7."
        },
        {
            "name": "Karla",
            "date": "14.7."
        },
        {
            "name": "Karol\u00edna",
            "date": "14.7."
        },
        {
            "name": "Jind\u0159ich",
            "date": "15.7."
        },
        {
            "name": "Liboslav",
            "date": "16.7."
        },
        {
            "name": "Luboslav",
            "date": "16.7."
        },
        {
            "name": "Lubo\u0161",
            "date": "16.7."
        },
        {
            "name": "Martina",
            "date": "17.7."
        },
        {
            "name": "Drahom\u00edra",
            "date": "18.7."
        },
        {
            "name": "\u010cen\u011bk",
            "date": "19.7."
        },
        {
            "name": "Ilja",
            "date": "20.7."
        },
        {
            "name": "V\u00edt\u011bzslav",
            "date": "21.7."
        },
        {
            "name": "Magdal\u00e9na",
            "date": "22.7."
        },
        {
            "name": "Magdalena",
            "date": "22.7."
        },
        {
            "name": "Libor",
            "date": "23.7."
        },
        {
            "name": "Kristina",
            "date": "24.7."
        },
        {
            "name": "Krist\u00fdna",
            "date": "24.7."
        },
        {
            "name": "Kristen",
            "date": "24.7."
        },
        {
            "name": "Jakub",
            "date": "25.7."
        },
        {
            "name": "Anna",
            "date": "26.7."
        },
        {
            "name": "V\u011broslav",
            "date": "27.7."
        },
        {
            "name": "Victor",
            "date": "28.7."
        },
        {
            "name": "Viktor",
            "date": "28.7."
        },
        {
            "name": "Martha",
            "date": "29.7."
        },
        {
            "name": "Marta",
            "date": "29.7."
        },
        {
            "name": "Bo\u0159ivoj",
            "date": "30.7."
        },
        {
            "name": "Ign\u00e1c",
            "date": "31.7."
        },
        {
            "name": "Oskar",
            "date": "1.8."
        },
        {
            "name": "Gustav",
            "date": "2.8."
        },
        {
            "name": "Milu\u0161e",
            "date": "3.8."
        },
        {
            "name": "Dominik",
            "date": "4.8."
        },
        {
            "name": "Kristi\u00e1n",
            "date": "5.8."
        },
        {
            "name": "K\u0159i\u0161\u0165an",
            "date": "5.8."
        },
        {
            "name": "Milivoj",
            "date": "5.8."
        },
        {
            "name": "Old\u0159i\u0161ka",
            "date": "6.8."
        },
        {
            "name": "Lada",
            "date": "7.8."
        },
        {
            "name": "Sob\u011bslav",
            "date": "8.8."
        },
        {
            "name": "Roman",
            "date": "9.8."
        },
        {
            "name": "Vav\u0159inec",
            "date": "10.8."
        },
        {
            "name": "Susana",
            "date": "11.8."
        },
        {
            "name": "Zuzana",
            "date": "11.8."
        },
        {
            "name": "Clara",
            "date": "12.8."
        },
        {
            "name": "Kl\u00e1ra",
            "date": "12.8."
        },
        {
            "name": "Alena",
            "date": "13.8."
        },
        {
            "name": "Alan",
            "date": "14.8."
        },
        {
            "name": "Hanka",
            "date": "15.8."
        },
        {
            "name": "Hannah",
            "date": "15.8."
        },
        {
            "name": "Hana",
            "date": "15.8."
        },
        {
            "name": "J\u00e1chym",
            "date": "16.8."
        },
        {
            "name": "Joachim",
            "date": "16.8."
        },
        {
            "name": "Petra",
            "date": "17.8."
        },
        {
            "name": "Petronila",
            "date": "17.8."
        },
        {
            "name": "Helena",
            "date": "18.8."
        },
        {
            "name": "Ludv\u00edk",
            "date": "19.8."
        },
        {
            "name": "Bernard",
            "date": "20.8."
        },
        {
            "name": "Johana",
            "date": "21.8."
        },
        {
            "name": "Bohuslav",
            "date": "22.8."
        },
        {
            "name": "Bo\u017eislav",
            "date": "22.8."
        },
        {
            "name": "Sandra",
            "date": "23.8."
        },
        {
            "name": "Bartolomej",
            "date": "24.8."
        },
        {
            "name": "Bartolom\u011bj",
            "date": "24.8."
        },
        {
            "name": "Radim",
            "date": "25.8."
        },
        {
            "name": "Radim\u00edr",
            "date": "25.8."
        },
        {
            "name": "Lud\u011bk",
            "date": "26.8."
        },
        {
            "name": "Otokar",
            "date": "27.8."
        },
        {
            "name": "Otakar",
            "date": "27.8."
        },
        {
            "name": "August\u00fdn",
            "date": "28.8."
        },
        {
            "name": "Augustin",
            "date": "28.8."
        },
        {
            "name": "Evelin",
            "date": "29.8."
        },
        {
            "name": "Evelina",
            "date": "29.8."
        },
        {
            "name": "Evel\u00edna",
            "date": "29.8."
        },
        {
            "name": "Vlad\u011bna",
            "date": "30.8."
        },
        {
            "name": "Paul\u00edna",
            "date": "31.8."
        },
        {
            "name": "Pavl\u00edna",
            "date": "31.8."
        },
        {
            "name": "Linda",
            "date": "1.9."
        },
        {
            "name": "Samuel",
            "date": "1.9."
        },
        {
            "name": "Adela",
            "date": "2.9."
        },
        {
            "name": "Adl\u00e9ta",
            "date": "2.9."
        },
        {
            "name": "Ad\u00e9la",
            "date": "2.9."
        },
        {
            "name": "Bronislav",
            "date": "3.9."
        },
        {
            "name": "Henrieta",
            "date": "4.9."
        },
        {
            "name": "Jind\u0159i\u0161ka",
            "date": "4.9."
        },
        {
            "name": "Boris",
            "date": "5.9."
        },
        {
            "name": "Boleslav",
            "date": "6.9."
        },
        {
            "name": "Reg\u00edna",
            "date": "7.9."
        },
        {
            "name": "Regina",
            "date": "7.9."
        },
        {
            "name": "Mariana",
            "date": "8.9."
        },
        {
            "name": "Daniela",
            "date": "9.9."
        },
        {
            "name": "Irma",
            "date": "10.9."
        },
        {
            "name": "Denisa",
            "date": "11.9."
        },
        {
            "name": "Denis",
            "date": "11.9."
        },
        {
            "name": "Marie",
            "date": "12.9."
        },
        {
            "name": "Lubor",
            "date": "13.9."
        },
        {
            "name": "Radka",
            "date": "14.9."
        },
        {
            "name": "Jolana",
            "date": "15.9."
        },
        {
            "name": "Ludmila",
            "date": "16.9."
        },
        {
            "name": "Nad\u011b\u017eda",
            "date": "17.9."
        },
        {
            "name": "Kri\u0161tof",
            "date": "18.9."
        },
        {
            "name": "Kry\u0161tof",
            "date": "18.9."
        },
        {
            "name": "Zita",
            "date": "19.9."
        },
        {
            "name": "Oleg",
            "date": "20.9."
        },
        {
            "name": "Matou\u0161",
            "date": "21.9."
        },
        {
            "name": "Darina",
            "date": "22.9."
        },
        {
            "name": "Berta",
            "date": "23.9."
        },
        {
            "name": "Bertina",
            "date": "23.9."
        },
        {
            "name": "Jarom\u00edr",
            "date": "24.9."
        },
        {
            "name": "Zlata",
            "date": "25.9."
        },
        {
            "name": "Andrea",
            "date": "26.9."
        },
        {
            "name": "Ond\u0159ejka",
            "date": "26.9."
        },
        {
            "name": "Jon\u00e1\u0161",
            "date": "27.9."
        },
        {
            "name": "V\u00e1clav",
            "date": "28.9."
        },
        {
            "name": "V\u00e1clava",
            "date": "28.9."
        },
        {
            "name": "Michael",
            "date": "29.9."
        },
        {
            "name": "Michal",
            "date": "29.9."
        },
        {
            "name": "Jeronym",
            "date": "30.9."
        },
        {
            "name": "Jeron\u00fdm",
            "date": "30.9."
        },
        {
            "name": "Jarol\u00edm",
            "date": "30.9."
        },
        {
            "name": "Igor",
            "date": "1.10."
        },
        {
            "name": "Oliver",
            "date": "2.10."
        },
        {
            "name": "Olivia",
            "date": "2.10."
        },
        {
            "name": "Ol\u00edvie",
            "date": "2.10."
        },
        {
            "name": "Bohumil",
            "date": "3.10."
        },
        {
            "name": "Franti\u0161ek",
            "date": "4.10."
        },
        {
            "name": "Elsa",
            "date": "5.10."
        },
        {
            "name": "Eli\u0161ka",
            "date": "5.10."
        },
        {
            "name": "Hanu\u0161",
            "date": "6.10."
        },
        {
            "name": "Just\u00fdna",
            "date": "7.10."
        },
        {
            "name": "Justina",
            "date": "7.10."
        },
        {
            "name": "Justin",
            "date": "7.10."
        },
        {
            "name": "V\u011bra",
            "date": "8.10."
        },
        {
            "name": "Viera",
            "date": "8.10."
        },
        {
            "name": "\u0160tefan",
            "date": "9.10."
        },
        {
            "name": "S\u00e1ra",
            "date": "9.10."
        },
        {
            "name": "Marina",
            "date": "10.10."
        },
        {
            "name": "Mar\u00edna",
            "date": "10.10."
        },
        {
            "name": "Andrej",
            "date": "11.10."
        },
        {
            "name": "Marcel",
            "date": "12.10."
        },
        {
            "name": "Renata",
            "date": "13.10."
        },
        {
            "name": "Ren\u00e1ta",
            "date": "13.10."
        },
        {
            "name": "Ag\u00e1ta",
            "date": "14.10."
        },
        {
            "name": "Tereza",
            "date": "15.10."
        },
        {
            "name": "Havel",
            "date": "16.10."
        },
        {
            "name": "Hedvika",
            "date": "17.10."
        },
        {
            "name": "Luk\u00e1\u0161",
            "date": "18.10."
        },
        {
            "name": "Michala",
            "date": "19.10."
        },
        {
            "name": "Michaela",
            "date": "19.10."
        },
        {
            "name": "Vendel\u00edn",
            "date": "20.10."
        },
        {
            "name": "Brigita",
            "date": "21.10."
        },
        {
            "name": "Bridget",
            "date": "21.10."
        },
        {
            "name": "Sabina",
            "date": "22.10."
        },
        {
            "name": "Teodor",
            "date": "23.10."
        },
        {
            "name": "Theodor",
            "date": "23.10."
        },
        {
            "name": "Nina",
            "date": "24.10."
        },
        {
            "name": "Be\u00e1ta",
            "date": "25.10."
        },
        {
            "name": "Beata",
            "date": "25.10."
        },
        {
            "name": "Erik",
            "date": "26.10."
        },
        {
            "name": "Erv\u00edn",
            "date": "26.10."
        },
        {
            "name": "\u0160arlota",
            "date": "27.10."
        },
        {
            "name": "Zoja",
            "date": "27.10."
        },
        {
            "name": "Zoe",
            "date": "27.10."
        },
        {
            "name": "Sylva",
            "date": "29.10."
        },
        {
            "name": "Silva",
            "date": "29.10."
        },
        {
            "name": "Silvie",
            "date": "29.10."
        },
        {
            "name": "Tade\u00e1\u0161",
            "date": "30.10."
        },
        {
            "name": "Stefanie",
            "date": "31.10."
        },
        {
            "name": "\u0160tep\u00e1nka",
            "date": "31.10."
        },
        {
            "name": "Felix",
            "date": "1.11."
        },
        {
            "name": "Hubert",
            "date": "3.11."
        },
        {
            "name": "Karel",
            "date": "4.11."
        },
        {
            "name": "Miriam",
            "date": "5.11."
        },
        {
            "name": "Lib\u011bna",
            "date": "6.11."
        },
        {
            "name": "Saskie",
            "date": "7.11."
        },
        {
            "name": "Bohum\u00edr",
            "date": "8.11."
        },
        {
            "name": "Bohdan",
            "date": "9.11."
        },
        {
            "name": "Eugen",
            "date": "10.11."
        },
        {
            "name": "Ev\u017een",
            "date": "10.11."
        },
        {
            "name": "Martin",
            "date": "11.11."
        },
        {
            "name": "Benedikt",
            "date": "12.11."
        },
        {
            "name": "Tibor",
            "date": "13.11."
        },
        {
            "name": "S\u00e1va",
            "date": "14.11."
        },
        {
            "name": "Leopold",
            "date": "15.11."
        },
        {
            "name": "Otmar",
            "date": "16.11."
        },
        {
            "name": "Otomar",
            "date": "16.11."
        },
        {
            "name": "Mahulena",
            "date": "17.11."
        },
        {
            "name": "Romana",
            "date": "18.11."
        },
        {
            "name": "Al\u017eb\u011bta",
            "date": "19.11."
        },
        {
            "name": "Elisabeth",
            "date": "19.11."
        },
        {
            "name": "Nikola",
            "date": "20.11."
        },
        {
            "name": "Albert",
            "date": "21.11."
        },
        {
            "name": "Cec\u00edlie",
            "date": "22.11."
        },
        {
            "name": "Kliment",
            "date": "23.11."
        },
        {
            "name": "Klement",
            "date": "23.11."
        },
        {
            "name": "Emilia",
            "date": "24.11."
        },
        {
            "name": "Em\u00edlie",
            "date": "24.11."
        },
        {
            "name": "Katar\u00edna",
            "date": "25.11."
        },
        {
            "name": "Katka",
            "date": "25.11."
        },
        {
            "name": "Kate\u0159ina",
            "date": "25.11."
        },
        {
            "name": "Artur",
            "date": "26.11."
        },
        {
            "name": "Xenie",
            "date": "27.11."
        },
        {
            "name": "Ren\u00e9e",
            "date": "28.11."
        },
        {
            "name": "Ren\u00e9",
            "date": "28.11."
        },
        {
            "name": "Zina",
            "date": "29.11."
        },
        {
            "name": "Ond\u0159ej",
            "date": "30.11."
        },
        {
            "name": "Iva",
            "date": "1.12."
        },
        {
            "name": "Blanka",
            "date": "2.12."
        },
        {
            "name": "Svatoslav",
            "date": "3.12."
        },
        {
            "name": "Sv\u011btoslav",
            "date": "3.12."
        },
        {
            "name": "Barbara",
            "date": "4.12."
        },
        {
            "name": "Barbora",
            "date": "4.12."
        },
        {
            "name": "B\u00e1ra",
            "date": "4.12."
        },
        {
            "name": "Jitka",
            "date": "5.12."
        },
        {
            "name": "Mikol\u00e1\u0161",
            "date": "6.12."
        },
        {
            "name": "Nikolas",
            "date": "6.12."
        },
        {
            "name": "Mikul\u00e1\u0161",
            "date": "6.12."
        },
        {
            "name": "Benjamin",
            "date": "7.12."
        },
        {
            "name": "Ambro\u017e",
            "date": "7.12."
        },
        {
            "name": "Kv\u011btoslava",
            "date": "8.12."
        },
        {
            "name": "Vratislav",
            "date": "9.12."
        },
        {
            "name": "Julie",
            "date": "10.12."
        },
        {
            "name": "Juliana",
            "date": "10.12."
        },
        {
            "name": "Julia",
            "date": "10.12."
        },
        {
            "name": "Dana",
            "date": "11.12."
        },
        {
            "name": "\u0160imona",
            "date": "12.12."
        },
        {
            "name": "Simeona",
            "date": "12.12."
        },
        {
            "name": "Simona",
            "date": "12.12."
        },
        {
            "name": "Lucia",
            "date": "13.12."
        },
        {
            "name": "Lucie",
            "date": "13.12."
        },
        {
            "name": "Luciana",
            "date": "13.12."
        },
        {
            "name": "L\u00fddie",
            "date": "14.12."
        },
        {
            "name": "Lydia",
            "date": "14.12."
        },
        {
            "name": "Lydie",
            "date": "14.12."
        },
        {
            "name": "Radana",
            "date": "15.12."
        },
        {
            "name": "Alb\u00edna",
            "date": "16.12."
        },
        {
            "name": "Daniel",
            "date": "17.12."
        },
        {
            "name": "Dan",
            "date": "17.12."
        },
        {
            "name": "Miloslav",
            "date": "18.12."
        },
        {
            "name": "Ester",
            "date": "19.12."
        },
        {
            "name": "Dagmara",
            "date": "20.12."
        },
        {
            "name": "D\u00e1\u0161a",
            "date": "20.12."
        },
        {
            "name": "Dagmar",
            "date": "20.12."
        },
        {
            "name": "Nat\u00e1lie",
            "date": "21.12."
        },
        {
            "name": "Simon",
            "date": "22.12."
        },
        {
            "name": "Simeon",
            "date": "22.12."
        },
        {
            "name": "\u0160imon",
            "date": "22.12."
        },
        {
            "name": "Vlasta",
            "date": "23.12."
        },
        {
            "name": "Eva",
            "date": "24.12."
        },
        {
            "name": "Adam",
            "date": "24.12."
        },
        {
            "name": "\u0160tep\u00e1n",
            "date": "26.12."
        },
        {
            "name": "\u0160t\u011bp\u00e1n",
            "date": "26.12."
        },
        {
            "name": "\u017daneta",
            "date": "27.12."
        },
        {
            "name": "Bohumila",
            "date": "28.12."
        },
        {
            "name": "Judita",
            "date": "29.12."
        },
        {
            "name": "David",
            "date": "30.12."
        },
        {
            "name": "Silvester",
            "date": "31.12."
        },
        {
            "name": "Silvestr",
            "date": "31.12."
        },
        {
            "name": "Sylvestr",
            "date": "31.12."
        }
    ];

interface TabProps {
    items: any[],
    gender: string
}

class Tab extends Component<TabProps, any> {

    constructor(props: TabProps) {
        super(props);
        this.state = {
            favorites: []
        }
        this.toggleFavorite = this.toggleFavorite.bind(this);
    }

    toggleFavorite(index: number) {
        if (this.state.favorites.includes(index)) {
            let favorites = this.state.favorites.filter((i: number) => {
                return i != index
            })
            this.setState({ favorites: favorites });
        } else {
            let favorites = this.state.favorites;
            favorites.push(index);
            this.setState({ favorites: favorites });
        }
    }

    render() {
        return (
            <ScrollView>
                {this.props.items.map((group: any) => {
                    return (
                        <View key={this.props.gender + group.letter}>
                            <Text style={{
                                fontSize: 18,
                                color: Theme.gray,
                                fontWeight: 'bold',
                                padding: 10
                            }}>{group.letter}</Text>
                            <View style={{ backgroundColor: Theme.white, borderRadius: 10 }}>
                                {group.names.map((name: any, index: any) => {
                                    return (<TouchableOpacity onPress={() => {
                                        this.toggleFavorite(group.letter + index)
                                    }}>
                                        <View style={{
                                            height: 40,
                                            margin: 10,
                                            flexDirection: 'row',
                                            borderBottomWidth: 1,
                                            borderBottomColor: Theme.gray
                                        }}>
                                            <Text style={{
                                                marginTop: 5,
                                                marginBottom: 5,
                                                color: Theme.black,
                                                flex: 0.6
                                            }}>{name.name}</Text><Text
                                                style={{ marginTop: 5, marginBottom: 5, flex: 0.3 }}>{name.date}</Text>

                                            <Image style={{
                                                marginTop: 5, marginBottom: 5,
                                                flex: 0.1,
                                                width: 12,
                                                height: 18,
                                                resizeMode: 'stretch',
                                            }}
                                                source={this.state.favorites.includes(group.letter + index) ? require('../../assets/srdcefarebne.png') : require('../../assets/srdcesive.png')} />
                                        </View>
                                    </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </View>)
                })}
            </ScrollView>
        );
    }
}

let
    favorites = [];

function

    sortByNameAZ() {
    return names.sort((a, b) => (a.name > b.name ? 1 : -1));
}

function

    sortByNameZA() {
    return names.sort((a, b) => (a.name < b.name ? 1 : -1));
}

class
    NamesFilter
    extends

    Component<any, any> {

}

interface NamesState {
    girls: any;
    boys: any;
    index: number;
    routes: any;
    favorites: number[];
}

export default class Names extends Component<{ navigation: any }, NamesState> {


    componentDidMount(): void {

    }

    constructor(props: any) {
        super(props);
        this.state = {
            girls: this.prepareGirls(),
            boys: this.prepareBoys(),
            index: 0,
            favorites: [],
            routes: [
                { key: 'girls', title: 'Dievčatá' },
                { key: 'boys', title: 'Chlapci' },
            ],
        };
    }

    prepareGirls() {
        let names = sortByNameAZ().filter((item) => {
            return vocals.includes(item.name[item.name.length - 1])
        });
        return this.prepareGroups(names);
    }

    prepareGroups(names: any[]) {
        let groups: any[] = [];
        let index = -1;
        let lastLetter = '';
        names.forEach((item) => {
            if (lastLetter == item.name[0]) {
                groups[index].names.push({ name: item.name, date: item.date });
            } else {
                index++;
                lastLetter = item.name[0];
                groups[index] = {
                    letter: item.name[0],
                    names: [{ name: item.name, date: item.date }]
                };

            }
        });
        return groups;
    }

    prepareBoys() {
        let names = sortByNameAZ().filter((item) => {
            return !vocals.includes(item.name[item.name.length - 1])
        });
        return this.prepareGroups(names);
    }

    _handleIndexChange = (index: number) => this.setState({ index });

    _renderTabBar = (props: any) => {
        const inputRange = props.navigationState.routes.map((x: Route, i: number) => i);

        return (
            <View style={styles.tabBar}>
                {props.navigationState.routes.map((route: Route, i: number) => {
                    const opacity = props.position.interpolate({
                        inputRange,
                        outputRange: inputRange.map((inputIndex: number) =>
                            inputIndex === i ? 1 : 0.5
                        ),
                    });

                    return (
                        <TouchableOpacity
                            key={'tab' + i}
                            style={[styles.tabItem, {
                                borderBottomWidth: 1,
                                borderBottomColor: this.state.index == i ? Theme.pink : Theme.gray
                            }]}
                            onPress={() => this.setState({ index: i })}>
                            <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    _renderScene = SceneMap({
        girls: () => {
            return (<Tab gender={'girls'} key={'girls'} items={this.state.girls} />);
        },
        boys: () => {
            return (<Tab gender={'boys'} key={'boys'} items={this.state.boys} />);
        },
    });

    render() {

        return (
            <View style={[ThemeStyles.applicationBackground, ThemeStyles.container]}>
                <View style={styles.container}>
                    <TabView
                        navigationState={this.state}
                        renderScene={this._renderScene}
                        renderTabBar={this._renderTabBar}
                        onIndexChange={this._handleIndexChange}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    tabBar: {
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
});