import Link from 'next/link';
import Image from 'next/image';

export default function Experiencia() {
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
        <div className="p2Tittle">
          <h1>Educacion y Habilidades Profesionales 🤓</h1>
        </div>
        <br />
        <div className="p2Content">
          <div className="p2contenedor">
            <div>
              <h2>· Educación:</h2>
              <br />
              <h3>Universidad Rafael Landivar</h3>
              <p>Ing. En Informatica y Sistemas, 2018 - En curso</p>

              <h3>Instituto De Estudios Avanzados</h3>
              <p>Bachiller en computacion, 2017.</p>

              <h3>Academia Europea</h3>
              <p>Nivel C1, 2020-2022</p>
            </div>
            <div className="p2linea" />
            <div>
              <h2>· Habilidades:</h2>
              <br />
              <h3>Microsoft Certified: Azure Fundamentals</h3>
              <p>Microsoft Azure, 2022</p>

              <h3>Desarrollo Backend con Python y Django</h3>
              <p>BPlatzi, 2021.</p>

              <h3>Curso Profesional de Git y GitHub</h3>
              <p>Platzi, 2021</p>

              <h3>JavaScript Algorithms and Data Structure</h3>
              <p>FreeCodeCamp, 2020</p>
            </div>
          </div>
        </div>
        <center>
          <br />
          <br />
          <br />
          <div className="RedesIcons2">
            <Image
              src="/images/a1.png"
              alt="Instagram icon"
              width={60}
              height={45}
            />
            <Image
              src="/images/a3.png"
              alt="Twitter Icon"
              width={60}
              height={45}
            />
            <Image
              src="/images/a4.png"
              alt="Facebook icon"
              width={60}
              height={45}
            />
            <Image
              src="/images/a5.png"
              alt="Facebook icon"
              width={60}
              height={45}
            />
            <Image
              src="/images/py.png"
              alt="Facebook icon"
              width={60}
              height={45}
            />
          </div>
        </center>
      </div>
    </section>
  );
}
