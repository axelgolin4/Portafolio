import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
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
      <div className="contentbox">
        <div className="subcontainer">
          <div className="Imagen">
            <Image
              src="/images/perfil.jpg"
              alt="Picture of the author"
              width={210}
              height={210}
              className="imgPerfil"
            />
          </div>
        </div>
        <div className="subcontainer2">
          <div className="Textcontent">
            <div className="Ttittle">
              <h1> Hola 👋 </h1>
              <br />
            </div>
            <div className="TContent">
              <p>
                Mi nombre es Axel Rodas tengo 22 años, soy Jr Developer,
                Actualmente estoy en mi ultimo año de ingenieria en sistemas, en
                la Universidad Rafael Landivar.
              </p>
              <p>Mi lenguaje favorito es python y javascript.</p>
              <p>
                Mi objetivo actual es terminar mis estudios y conseguir un
                trabajo como desarrollador para seguir aprendiendo de mis
                tecnologias favoritas.
              </p>
            </div>
          </div>
          <div className="RedesIcons">
            <Link href="https://www.instagram.com/axel.rodas.g/">
              <Image
                src="/images/instagram.png"
                alt="Instagram icon"
                width={45}
                height={45}
              />
            </Link>
            <Link href="https://www.facebook.com/axel.g.rodas">
              <Image
                src="/images/facebook.png"
                alt="Facebook icon"
                width={45}
                height={45}
              />
            </Link>
            <Link href="https://twitter.com/Axelgolin4">
              <Image
                src="/images/gorjeo.png"
                alt="Twitter Icon"
                width={45}
                height={45}
              />
            </Link>
            <Link href="https://github.com/axelgolin4">
              <Image
                src="/images/github.png"
                alt="Facebook icon"
                width={45}
                height={45}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
