import React, {useContext} from 'react';
import {themeContext} from '../../context/themeContext';
import {langcontext} from "../../context/langContext";

export default function Bombones() {

  const {theme} = useContext(themeContext)
  const {idioma} = useContext(langcontext)

  const {bombones, categorias} = idioma


  return (
    <>
      <div className="container mb-5 p-5">
        <div className="d-flex justify-content-evenly align-items-center flex-wrap p-4">
          {bombones.map(b =>
            <div>
              <div key={b.id}>
                <img className="rounded-4 img-fluid" src={b.img} style={{width:"300px", height:"250px"}} alt="img" />
                <h4 className={`text-center text-${theme.color}`}>{b.name}</h4>
              </div>

              <div className="d-flex justify-content-center p-4">
                <div>
                  <button className="btn btn-outline-success me-3">Agregar</button>
                </div>
                <div>
                  <button className="btn btn-outline-primary w-100">Comprar</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}