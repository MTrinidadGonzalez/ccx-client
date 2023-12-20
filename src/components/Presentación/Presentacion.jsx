import React, { useState } from 'react';

const Presentacion = () => {
  const [mostrarPresentacion, setMostrarPresentacion] = useState(false);

  const togglePresentacion = () => {
    setMostrarPresentacion(!mostrarPresentacion);
  };

  return (
    <>
      <button onClick={togglePresentacion} className='btn-about-us'>Quienes somos?</button>
      {mostrarPresentacion && (
        <div className="presentacionContainer">
          <p>
            Circular CarlaXena sigue la ola verde que da un giro sostenible a la industria en nuestra provincia, respetando el libre comercio y la transacción directa conectándote con usuarios cerca de tu zona para comprar y vender artículos de belleza, de gimnasia, tecnológicos, artículos para el hogar y ropa que ya no usas para que alguien más pueda disfrutarlo. En esta app sos vos quien decide qué vender y a qué precio, promoviendo la economía circular dejando tu huella ecológica.
          </p>
        </div>
      )}
    </>
  );
};

export default Presentacion;