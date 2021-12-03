import React, {createContext, useState} from 'react';
import { Alert } from 'react-native';

export const CineContext = createContext();

const CineProvider = (props)=>{
    const [Compra,setCompra]= useState({});
    const [cartelera, setCartelera]=useState([
      {codigo:1,nombre:"Halloween Kills", idioma:'SUB', clasificacion:'C',horarios:['13:00','17:50','20:30'],duracion:'106 min',url:'https://static.cinepolis.com/img/peliculas/37049/1/1/37049.jpg'},
      {codigo:2,nombre:"Los Locos Addams 2", idioma:'ESP', clasificacion:'A',horarios:['9:00','11:30','13:30'],duracion:'93 min',url:'https://static.cinepolis.com/img/peliculas/37048/1/1/37048.jpg'},
      {codigo:3,nombre:"Sin Tiempo Para Morir", idioma:'ESP', clasificacion:'B',horarios:['11:00','13:50','19:40'],duracion:'164 min',url:'https://static.cinepolis.com/img/peliculas/36792/1/1/36792.jpg'},
      {codigo:4,nombre:"Venom: Carnage Liberado", idioma:'ESP', clasificacion:'B',horarios:['10:30','14:20','18:30'],duracion:'98 min',url:'https://static.cinepolis.com/img/peliculas/36934/1/1/36934.jpg'},
    ]);

    const agregar=(pelicula,hora)=>{
        const temp={
          nombre: pelicula.nombre,
          idioma: pelicula.idioma,
          clasificacion: pelicula.clasificacion,
          cantidad:0,
          total:0,
          duracion: pelicula.duracion,
          horario: hora
        }
        setCompra(temp);
    }

    const eliminarCompra=()=>{
        setCompra({});
        Alert.alert("Compra cancelada");
    }

    const comprarT=(pelicula)=>{
        if(pelicula.cantidad>0){
            setCompra({});
            Alert.alert("Disfruta tu peli!");
        }
        else if (pelicula.cantidad == 0){
            setCompra({});
            Alert.alert("Ingresa cantidad valida!");
        }
    }

    const calcular=(pelicula,a)=>{
        let precio;
        if (a>0)
        {
            if (pelicula.clasificacion === "A") 
            precio = 50;
            if (pelicula.clasificacion === "B") 
            precio = 80;
            if (pelicula.clasificacion === "C") 
            precio = 95;
            const temp={
                nombre: pelicula.nombre,
                idioma: pelicula.idioma,
                clasificacion: pelicula.clasificacion,
                cantidad:a,
                total:precio*a,
                duracion: pelicula.duracion,
                horario: pelicula.horario
            }
            setCompra(temp);
          
        }
        else
        {
            const temp2={
                nombre: pelicula.nombre,
                idioma: pelicula.idioma,
                clasificacion: pelicula.clasificacion,
                cantidad:a,
                total:0,
                duracion: pelicula.duracion,
                horario: pelicula.horario
            }
            setCompra(temp2)

        }

        //para un cambio
    }

    return(
        <CineContext.Provider
            value={{
                Compra,
                setCompra,
                cartelera,
                calcular,
                comprarT,
                eliminarCompra,
                agregar
            }}>
            {props.children}
        </CineContext.Provider>
    );
}
export default CineProvider;