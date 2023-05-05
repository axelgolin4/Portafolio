import Link from 'next/link';
import Image from 'next/image';

export default function Proyectos() {
  return (
    <section>
      {/* ------------------------ NAVBAR -------------------------------- */}
      <div className="navbox">
        <div>
          <h2>Axel Cesar Rodas Samayoa</h2>
        </div>
        <div>
          <Link href="/">
            <Image
              src="/images/inicio.png"
              alt="Picture of the author"
              width={45}
              height={45}
            />
          </Link>
        </div>
        <div className="links">
          <Link href="/Proyectos">Proyectos</Link>
          <Link href="/Experiencia">Experiencia</Link>
          <Link href="/Blog">Blog</Link>
        </div>
      </div>

      {/* ------------------------ CONTENT -------------------------------- */}
      <div className="BOXCONTENT">
        <div className="p2Tittle2">
          <h1>Proyectos 👨‍💻</h1>
        </div>
        <br />
        <div className="p2Content">
          <div className="p3contenedor">
            {/* -------------------------------------------------------------CARRUCEL ----------------------------------------*/}
            <div className="carrousel">
              <div className="conteCarrousel">
                <div className="itemCarrousel" id="itemCarrousel-1">
                  <div className="itemCarrouselTarjeta">
                    <div className="textomargen">
                      <h1>APP WEB AHORROS</h1>
                      <p>
                        Proyecto Creado en el curso de Ingenieria de software
                        donde se creo una aplicacion web donde se podria llevar
                        las finanzas de nuestros
                      </p>
                      <p>
                        Propios ahorros y poder clasificar nuestros diferentes
                        gastos
                      </p>
                    </div>
                    <br />
                    <center>
                      <Image
                        src="/images/webappahorros.PNG"
                        alt="Picture of the author"
                        width={850}
                        height={250}
                      />
                    </center>
                  </div>
                  <div className="itemCarrouselArrows">
                    <a href="#itemCarrousel-3">
                      <i className="fas fa-chevron-left" />
                    </a>
                    <a href="#itemCarrousel-2">
                      <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
                <div className="itemCarrousel" id="itemCarrousel-2">
                  <div className="itemCarrouselTarjeta">
                    <div className="textomargen">
                      <h1>APP WEB ASISTENCIA</h1>
                      <p>
                        Proyecto Creado en el curso de analisis y deseño 1 donde
                        se creo una aplicacion web donde se podria llevar las
                        asistencia de los alumnos de la URL.
                      </p>
                    </div>
                    <br />
                    <center>
                      <Image
                        src="/images/asistencia.png"
                        alt="Picture of the author"
                        width={850}
                        height={250}
                      />
                    </center>
                  </div>
                  <div className="itemCarrouselArrows">
                    <a href="#itemCarrousel-1">
                      <i className="fas fa-chevron-left" />
                    </a>
                    <a href="#itemCarrousel-3">
                      <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
                <div className="itemCarrousel" id="itemCarrousel-3">
                  <div className="itemCarrouselTarjeta">
                    <div className="textomargen">
                      <h1>APP WEB Farmacia</h1>
                      <p>
                        Proyecto Creado en el curso de Bases de datos 2 se creo
                        una aplicacion web que llevara el control de inventario
                        y ventas de una pequeña farmacia en mazatenango *
                        farmacia central *
                      </p>
                    </div>
                    <br />

                    <center>
                      <Image
                        src="/images/farmacia.PNG"
                        alt="Imagen de farmacia"
                        width={850}
                        height={250}
                      />
                    </center>
                  </div>
                  <div className="itemCarrouselArrows">
                    <a href="#itemCarrousel-2">
                      <i className="fas fa-chevron-left" />
                    </a>
                    <a href="#itemCarrousel-1">
                      <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="conteCarrouselController">
                <a href="#itemCarrousel-1">
                  <Image
                    src="/images/numero-1.png"
                    alt="Imagen de farmacia"
                    width={30}
                    height={30}
                  />
                </a>
                <a href="#itemCarrousel-2">
                  <Image
                    src="/images/numero-2.png"
                    alt="Imagen de farmacia"
                    width={30}
                    height={30}
                  />
                </a>
                <a href="#itemCarrousel-3">
                  <Image
                    src="/images/numero-3.png"
                    alt="Imagen de farmacia"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            </div>
            {/* -------------------------------------------------------------CARRUCEL ---------------------------------------- */}
          </div>
        </div>
      </div>
    </section>
  );
}
