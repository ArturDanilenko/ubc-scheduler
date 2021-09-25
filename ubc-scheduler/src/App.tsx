import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import "./styles.css"

import { Article } from "./components/Article"
import { AddArticle } from "./components/AddArticle"
import { addArticle, removeArticle } from "./store/actions/actionCreators"
import { Dispatch } from "redux"
import { 
  IArticle,
  ApplicationState
} from "./types/commonTypes"

const App: React.FC = () => {
  const articles: readonly IArticle[]|undefined = useSelector(
    (state: ApplicationState) => state.articleState?.articles,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  )

  return (
    <main>
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles ? articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      )) : <></>}
    </main>
  )
}

export default App