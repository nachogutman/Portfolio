import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { createContext } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = (props) => {
    const [favsList, setFavsList] = useState([]);

    function addToFavorites(project) {
        setFavsList([...favsList, project])
        
        localStorage.setItem('favsList', JSON.stringify([...favsList, project]))
        console.log(JSON.parse(localStorage.getItem('favsList')))
    }

    function deleteFromFavorites(project) {
        var i = -1;
        favsList.map((item, index) => {
            if(item.title === project.title){
              i = index;
            }
          });
        

        const temp = [...favsList];
        temp.splice(i, 1);
        setFavsList(temp);
        localStorage.setItem('favsList', JSON.stringify(temp))
        console.log(JSON.parse(localStorage.getItem('favsList')))
    }

    useEffect(() => {
        if(JSON.parse(localStorage.getItem('favsList')) !== null){
            setFavsList(JSON.parse(localStorage.getItem('favsList')))
        }
    }, []);


    return (
        <FavoritesContext.Provider value={{ favsList, addToFavorites, deleteFromFavorites }}>
            {props.children}
        </FavoritesContext.Provider>
    )
}


export default FavoritesProvider;