// src/data.js

export const cursos = [
    {
      id: 1,
      nombre: "Sesenta años de inteligencia artificial",
      semanas: [
        {
          numero: 1,
          tareas: [
            // https://diazsa.blob.core.windows.net/coursera/El pensamiento de la Inteligencia artificial _ Coursera.pdf
            { id: 1, nombre: "El pensamiento de la Inteligencia artificial", link: './assets/archive/https://diazsa.blob.core.windows.net/coursera/%20pensamiento%20de%20la%20Inteligencia%20artificial%%20Coursera.pdf' },
           
          ],
        },
        {
          numero: 2,
          tareas: [
            { id: 2, nombre: "Conceptos básicos de Inteligencia artificial", link:'https://diazsa.blob.core.windows.net/coursera/Conceptos%20básicos%20de%20Inteligencia%20artificial%20_%20Coursera.pdf'},
          ],
        },
        {
            numero: 3,
            tareas: [
              { id: 3, nombre: "Peer-graded Assignment: Ensayo final", link:'https://coursera-assessments.s3.amazonaws.com/assessments/1705365944493/91f36dc8-0a30-4227-a0e1-7363d249d217/El_Impacto_de_la_Inteligencia_Artificial_en_las_Prcticas_Basadas_en_Radiografas_en_Oncologa.pdf'},
            ],
          },
      ],
    },
    {
      id: 2,
      nombre: "Razonamiento artificial",
      semanas: [
        {
          numero: 1,
          tareas: [
            { id: 4, nombre: "Logica Proporcional", link:'https://diazsa.blob.core.windows.net/coursera/Lógica%20proposicional%20_%20Coursera.pdf' },
           
          ],
        },
        {
          numero: 2,
          tareas: [
            { id: 5, nombre: "Logica Proporcional (parte 2)", link:'https://diazsa.blob.core.windows.net/coursera/Lógica%20proposicional%20(parte%202)%20_%20Coursera.pdf' },
            { id:6 , nombre: "Algoritmo DPLL", link:'https://diazsa.blob.core.windows.net/coursera/Programing_Logica_proporcional2.txt'}
          ],
        },
        {
            numero: 3,
            tareas: [
              { id: 7, nombre: "Logica Temporal", link:'https://diazsa.blob.core.windows.net/coursera/Lógica%20temporal%20_%20Coursera.pdf' },
              { id: 8, nombre: "Logica Predicados", link:'https://diazsa.blob.core.windows.net/coursera/Lógica%20de%20predicados%20_%20Coursera.pdf' },
            ],
        },
        {
            numero: 4,
            tareas: [
                { id: 9, nombre: "Teorema de Bayes", link:'https://diazsa.blob.core.windows.net/coursera/Teorema%20de%20Bayes%20_%20Coursera.pdf' },
                { id: 10, nombre: "Redes Bayesiana", link:'https://diazsa.blob.core.windows.net/coursera/redes_bayesianas.txt' },
            ],
        },
        {
            numero: 5,
            tareas: [
                { id: 9, nombre: "Teoria de Deciciones", link:'https://diazsa.blob.core.windows.net/coursera/Teoría%20de%20decisiones%20_%20Coursera.pdf' },
                { id: 10, nombre: "Teoria de Deciciones Programing", link:'https://diazsa.blob.core.windows.net/coursera/Teoria_Deciciones.txt' },
            ],
        },
        {
            numero: 6,
            tareas: [
                { id: 11, nombre: "Teoria de Juegos", link:'https://diazsa.blob.core.windows.net/coursera/Teoría%20de%20juegos%20_%20Coursera.pdf' },
                { id: 12, nombre: "Teoria de Deciciones Programing", link:'https://diazsa.blob.core.windows.net/coursera/Decision.txt' },
            ],
        },
      ],
    },
    {
        id: 3,
        nombre: "Resolución de problemas por búsqueda",
        semanas: [
          {
            numero: 1,
            tareas: [
              { id: 13, nombre: "Algoritmos de búsqueda ciega", link:'https://diazsa.blob.core.windows.net/coursera/Algoritmos%20de%20búsqueda%20ciega%20_%20Coursera.pdf' },
             
            ],
          },
          {
            numero: 2,
            tareas: [
              { id: 14, nombre: "Algoritmos de Búsqueda ciega (parte 2)", link:'https://diazsa.blob.core.windows.net/coursera/busqueda_ciega.txt' },
            ],
          },
          {
              numero: 3,
              tareas: [
                { id: 15, nombre: "Algoritmos de búsqueda informada", link:'https://diazsa.blob.core.windows.net/coursera/busqueda_informada.txt' },
                
              ],
          },
          {
              numero: 4,
              tareas: [
                  { id: 16, nombre: "Algoritmo IDA*", link:'https://diazsa.blob.core.windows.net/coursera/Algoritmo_ida.txt' },
              ],
          },
          {
              numero: 5,
              tareas: [
                  { id: 9, nombre: "Algoritmos metaheurísticos", link:'https://diazsa.blob.core.windows.net/coursera/Algoritmos%20metaheurísticos%20_%20Coursera.pdf' },
                  { id: 17, nombre: "Evaluación final: Solución del cubo de Rubik", link:'https://coursera-assessments.s3.amazonaws.com/assessments/1708390364280/479a38b4-52cd-4af4-a762-cadc78578db2/Tarea%20Final%20-%20relucion%20problemas%20busqueda%20-%20Final.pdf' },
              ],
          },
          
         
        ],
      },
      {
        id: 4,
        nombre: "Computo Evolutivo",
        semanas: [
          {
            numero: 1,
            tareas: [
              { id: 13, nombre: "Conceptos de algoritmos genéticos", link:'https://diazsa.blob.core.windows.net/coursera/Conceptos%20de%20algoritmos%20genéticos%20_%20Coursera.pdf' },
             
            ],
          },
          {
            numero: 2,
            tareas: [
              { id: 14, nombre: "Estudio del Teorema del Esquema", link:'https://diazsa.blob.core.windows.net/coursera/Estudio%20del%20Teorema%20del%20Esquema%20_%20Coursera.pdf' },
              { id: 15, nombre: "Análisis comparativo de codificaciones en algoritmos genéticos.", link:'https://coursera-assessments.s3.amazonaws.com/assessments/1708729565569/82636b25-29fb-4c11-989d-80b8d3162679/An%C3%A1lisis%20comparativo%20de%20codificaciones%20en%20algoritmos%20gen%C3%A9ticos.pdf' },
              
            ],
          },
          {
              numero: 3,
              tareas: [
                { id: 16, nombre: "Ruta óptima del TSP", link:'https://diazsa.blob.core.windows.net/coursera/rutatspQuiz.txt' },
                
              ],
          },
          {
              numero: 4,
              tareas: [
                  { id: 17, nombre: "Solución al Problema del Agente Viajero", link:'https://coursera-assessments.s3.amazonaws.com/assessments/1708991570108/bf17bb69-e665-4549-a925-871cb7927831/Actividadfinal_M4.pdf' },
              ],
          },
        
          
         
        ],
      },
  ];
  