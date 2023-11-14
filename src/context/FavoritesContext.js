import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { createContext } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = (props) => {
    let inicial = localStorage.getItem('favsList') ? JSON.parse(localStorage.getItem('favsList')) : [];
    const [favsList, setFavsList] = useState(inicial);

    function addToFavorites(project) {
        setFavsList([...favsList, project])                    
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
    }    

    useEffect(()=>{
        localStorage.setItem('favsList', JSON.stringify(favsList))
    },[favsList])


    return (
        <FavoritesContext.Provider value={{ favsList, addToFavorites, deleteFromFavorites }}>
            {props.children}
        </FavoritesContext.Provider>
    )
}


export default FavoritesProvider;