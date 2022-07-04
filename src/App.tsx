import { Header } from './components/Header';
import {Post} from './components/Post'
import {Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
       avatarUrl: "https://github.com/Pedro-St.png",
       name: 'Pedro Augusto',
       role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋', },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',}, 
      {type: 'link', content:  'jane.design/doctorcare'},            
    ],
    publishedAt: new Date('2022-06-21 22:30:00')
  },
  {
    id: 2,
    author: {
       avatarUrl: "https://github.com/pedrosaGp.png",
       name: 'Bernardinho',
       role: 'Web Developer',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋', },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',}, 
      {type: 'link', content: 'jane.design/doctorcare' },            
    ],
    publishedAt: new Date('2022-06-16 22:00:00')
  },
]; 

export function App() {
  return (
    <div> 
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {posts.map(post => {
          return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          );
         })}
        </main>
      </div>
    </div>
  )
}
