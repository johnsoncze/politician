import React, {useState} from 'react'
import {createStructuredSelector} from 'reselect'
import { connect } from 'react-redux'
import {getDetailNews} from '../../redux/selectors'

const DEFAULT_ARTICLES_COUNT = 2

const Article = ({article}) => {
  return (
      <div>
        <div>{article.source}</div>
        <div>{article.time}</div>
        <div><a href={article.web} target='_blank' rel="noopener noreferrer">{article.headline}</a></div>
      </div>
  )
}

const Articles = ({articles}) => {
  const [showAll, setShowAll] = useState(false)
  return (
    <React.Fragment>
      <div>
        {!showAll && articles.slice(0, DEFAULT_ARTICLES_COUNT).map((article, index) => <Article article={article} key={index}/>)}
        {showAll && articles.map((article, index) => <Article article={article} key={index}/>)}
      </div>
      <div onClick={() => setShowAll(!showAll)}>
        {!showAll && <div>Zobrazit {articles.length - DEFAULT_ARTICLES_COUNT} dalších</div>}
        {showAll && <div>Zobrazit méně</div>}
      </div>
    </React.Fragment>
  )
}

const EmptyState = () => {
  return (<div>Empty</div>)
}

const NewsWidget = ({news}) => {
  return (
		<React.Fragment>
			<h2>V médiích</h2>
      {news.length > 0 && <Articles articles={news} />}
      {!news.length && <EmptyState />}
		</React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  news: getDetailNews,
})

export default connect(mapStateToProps)(NewsWidget);
