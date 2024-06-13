import { ArticleCard } from "../ArticleCard";

import './styles.css'

export function ArticleList() {
  return (
    <section id='articles-list'>
       <ArticleCard />
       <ArticleCard />
       <ArticleCard />
       <ArticleCard />
       <ArticleCard />
    </section>
  )
}