import {useState,useEffect} from 'react';

//TEXTOS PARA EL CAMBIO DE IDIOMA
const textLanguage = {
    esp:{
        menu:{'about':'Acerca','tech':'Tecnologia','work':'Trabajo','contact':'Contacto'}
    },
    eng:{
        menu:{'about':'About','tech':'Tech','work':'Work','contact':'Contact'}
    }
};

export function useDataLanguage(idLenguange){
    const [dataText,setDataText] = useState(textLanguage[idLenguange]);
    useEffect(() => {
        if(idLenguange !== null){
            setDataText(textLanguage[idLenguange]);
        }
    },[idLenguange]);
    return{
        dataText
    };
}
