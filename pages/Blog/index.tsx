import Link from 'next/link';
import Image from 'next/image';
import { GetServerSideProps } from 'next';
import axios from 'axios';

interface Post {
  id: number;
  attributes: {
    Titulo: string;
    Contenido: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

interface StrapiResponse {
  data: Post[];
}

interface Props {
  posts: Post[];
}
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const endpint = `https://strapi-production-6921.up.railway.app/api/blogs`;
  const response = await axios.get<StrapiResponse>(endpint);
  const posts = response.data.data;
  return {
    props: {
      posts,
    },
  };
};

export default function Blog(props: Props) {
  const { posts } = props;
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
      <div className="BOXCONTENTB">
        <div className="p2Tittle">
          <h1>Blog ✍</h1>
        </div>
        <div className="Indice">
          <Link href="/Blog">
            <h2>Tema 1</h2>
          </Link>
          <Link href="/Blog/blog2">
            <h2>Tema 2</h2>
          </Link>
        </div>
        <div className="content">
          <div className="post-content">
            <div className="post-encabezado">
              <Image
                src="/images/a.png"
                alt="Picture of the author"
                width={200}
                height={100}
              />
              <section className="infopost">
                <h1 className="titulopost" key={posts[0].id}>
                  {posts[0].attributes.Titulo}
                </h1>
              </section>
            </div>
            <section className="textopost">
              <h1 key={posts[0].id}> {posts[0].attributes.Contenido}</h1>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
