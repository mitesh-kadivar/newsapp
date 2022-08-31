import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
  // articles = [
  //   {
  //     "source": {
  //       "id": "bbc-news",
  //       "name": "BBC News"
  //     },
  //     "author": "BBC News",
  //     "title": "Boris Johnson met Russian oligarch Lebedev without aides",
  //     "description": "The prime minister admits he met Alexander Lebedev, an ex-KGB agent, without officials present.",
  //     "url": "http://www.bbc.co.uk/news/uk-politics-62068421",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/29B8/production/_125808601_alebedevafp20nov19.jpg",
  //     "publishedAt": "2022-07-07T02:22:19.2681577Z",
  //     "content": "Boris Johnson has told MPs he met Russian oligarch and ex-KGB officer Alexander Lebedev without officials present.\r\n\"I have certainly met him without officials,\" he said. \"I met him on a very few occ… [+1317 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "bbc-news",
  //       "name": "BBC News"
  //     },
  //     "author": "BBC News",
  //     "title": "No diplomatic immunity in modern slavery cases, Supreme Court rules",
  //     "description": "The UK Supreme Court says a Saudi diplomat accused of exploiting a Filipina worker is not protected.",
  //     "url": "http://www.bbc.co.uk/news/uk-62062318",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8FC0/production/_125800863_gettyimages-1052439910.jpg",
  //     "publishedAt": "2022-07-07T02:22:18.268407Z",
  //     "content": "By Caroline HawleyDiplomatic Correspondent\r\nThe UK Supreme Court has ruled that diplomats cannot hide behind immunity to exploit workers, in a victory for campaigners against modern slavery.\r\nDiploma… [+3623 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "bbc-news",
  //       "name": "BBC News"
  //     },
  //     "author": "BBC News",
  //     "title": "Boris Johnson vows to fight on despite resignations and calls to go",
  //     "description": "The PM remains defiant as he sacks Michael Gove and hits back at colleagues telling him to go.",
  //     "url": "http://www.bbc.co.uk/news/uk-politics-62069494",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/164B9/production/_125812319_hi077191338.jpg",
  //     "publishedAt": "2022-07-07T02:07:19.86309Z",
  //     "content": "By Joseph Lee &amp; Andre Rhoden-PaulBBC News\r\nBoris Johnson is fighting to stay on in No 10 despite his support collapsing in another dramatic day of resignations.\r\nThe PM was defiant despite many p… [+6125 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "bbc-news",
  //       "name": "BBC News"
  //     },
  //     "author": "BBC News",
  //     "title": "Ukraine war: 21,000 alleged war crimes being investigated, prosecutor says",
  //     "description": "A top prosecutor gave the new figure to the BBC, but admitted many trials would be held in absentia.",
  //     "url": "http://www.bbc.co.uk/news/world-europe-62073669",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/15FA5/production/_125812009_6d880346-ca8e-4e12-bbb1-4fd21e3a67c4.jpg",
  //     "publishedAt": "2022-07-07T00:37:17.5664619Z",
  //     "content": "By Yaroslav LukovBBC News\r\nUkraine says it is investigating more than 21,000 war crimes and crimes of aggression allegedly committed by Russia since the start of its invasion.\r\nProsecutor General Iry… [+2264 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "bbc-news",
  //       "name": "BBC News"
  //     },
  //     "author": "BBC News",
  //     "title": "Jerry Harris: Star of Netflix's Cheer sentenced to 12 years",
  //     "description": "Jerry Harris admitted to exchanging lewd pictures with children that he knew to be underage.",
  //     "url": "http://www.bbc.co.uk/news/world-us-canada-62073686",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/123AF/production/_114417647_gettyimages-1202790950-1.jpg",
  //     "publishedAt": "2022-07-07T00:22:18.4694304Z",
  //     "content": "Jeremiah \"Jerry\" Harris, one of the stars of the Netflix documentary series Cheer, has been sentenced to 12 years in prison on child sex abuse charges. \r\nHe pleaded guilty in February to charges of c… [+1437 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "bbc-news",
  //       "name": "BBC News"
  //     },
  //     "author": "BBC News",
  //     "title": "Revelry and protests as bull festival returns",
  //     "description": "The annual event in Spain's Pamplona was cancelled in 2020 and 2021 due to coronavirus restrictions.",
  //     "url": "http://www.bbc.co.uk/news/world-europe-62069885",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8264/production/_125808333_gettyimages-1406909783.jpg",
  //     "publishedAt": "2022-07-06T21:37:19.8937718Z",
  //     "content": "Thousands of Spaniards filled the streets of Pamplona to mark the return of the San Fermín bull festival.\r\nThe annual event, which was cancelled in 2020 and 2021 due to coronavirus restrictions, is k… [+183 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "bbc-news",
  //       "name": "BBC News"
  //     },
  //     "author": "BBC News",
  //     "title": "Boris Johnson: Why Conservatives are urging PM to resign",
  //     "description": "Two of his top ministers have quit and others are calling for him to go, but he is hanging on.",
  //     "url": "http://www.bbc.co.uk/news/uk-62062510",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8232/production/_125803333_mediaitem125803332.jpg",
  //     "publishedAt": "2022-07-06T19:52:22.034662Z",
  //     "content": "Media caption, Watch: 'Enough is enough,' says Sajid Javid in his resignation speech\r\nBoris Johnson's future as UK prime minister is in greater jeopardy than ever before.\r\nMonths of unremitting polit… [+5339 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "bbc-news",
  //       "name": "BBC News"
  //     },
  //     "author": "BBC News",
  //     "title": "Rapper Nipsey Hussle's killer convicted of murder",
  //     "description": "Hussle, born Ermias Asghedom, was shot outside his LA clothing store in 2019 after a brief argument.",
  //     "url": "http://www.bbc.co.uk/news/world-us-canada-62072376",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0BAD/production/_125398920_8b839426-8416-4c42-908c-62d13595db13.jpg",
  //     "publishedAt": "2022-07-06T18:37:25.0661061Z",
  //     "content": "The man who shot and killed Los Angeles rapper Nipsey Hussle minutes after a brief argument in 2019 has been found guilty of murdering the rising artist. \r\nEric Holder, 32, was convicted by a jury in… [+1231 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "bbc-news",
  //       "name": "BBC News"
  //     },
  //     "author": "BBC News",
  //     "title": "China: MI5 and FBI heads warn of ‘immense’ threat",
  //     "description": "The UK and US security service heads make an unprecedented joint appearance to warn about China.",
  //     "url": "http://www.bbc.co.uk/news/world-asia-china-62064506",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C8AA/production/_125807315_de08.jpg",
  //     "publishedAt": "2022-07-06T16:52:24.0039355Z",
  //     "content": "By Gordon CoreraSecurity correspondent, BBC News\r\nThe heads of UK and US security services have made an unprecedented joint appearance to warn of the threat from China. \r\nFBI director Christopher Wra… [+4289 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "bbc-news",
  //       "name": "BBC News"
  //     },
  //     "author": "BBC News",
  //     "title": "Highland Park shooting: Suspect confessed to shooting, court hears",
  //     "description": "The 21-year-old suspect was able to purchase five guns despite several 'red flags' being raised.",
  //     "url": "http://www.bbc.co.uk/news/world-us-canada-62068500",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9915/production/_125798193_tv077181313.jpg",
  //     "publishedAt": "2022-07-06T16:07:19.9875875Z",
  //     "content": "A man accused of opening fire on a Fourth of July parade near Chicago will be held without bail as he faces seven counts of murder.\r\nThe 21-year-old suspect faces the possibility of life without paro… [+4880 chars]"
  //   }
  // ];

  articles = [];

  static defaultProps = {
    country: 'in',
    pageSize: 10,
    category: 'general',
    apiKey: process.env.REACT_APP_NEWS_API_URL
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string,
  };

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    this.setState({loading: true})
    let data = await fetch(url);
    this.props.setProgress(50);
    let parseData = await data.json()
    this.props.setProgress(75);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async ()=> {
    this.setState({
      page: this.state.page - 1
    })
    this.updateNews();
  }
  
  handleNextClick = async ()=> {
    this.setState({
      page: this.state.page + 1
    })
    this.updateNews();
  }

  // Fetch More Article Data
  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1});

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    this.setState({loading: true})
    let data = await fetch(url);
    let parseData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false
    });
  };

  render() {
    return (
      <>
      {/* <div className='container my-3'>
        <h1>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        { this.state.loading && <Spinner/> }
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{ 
            return <div className="col-md-4 mt-3" key={element.url}>
            <NewsItem title={element.title ? element.title.slice(0, 30) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} newsUrl={element.url} auther={element.author} date={element.publishedAt} source={element.source.name}/>
          </div> 
          })}
        </div>
      </div> */}

      {/* Infinite Scroll */}
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <h1>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
          <div className="row">
              {this.state.articles.map((element)=>{ 
                return <div className="col-md-4 mt-3" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 30) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} newsUrl={element.url} auther={element.author} date={element.publishedAt} source={element.source.name}/>
              </div> 
              })}
          </div>
        </div>
      </InfiniteScroll>
      {/* End Infinite Scroll */}

      
      {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &laquo; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
      </div> */}
      </>
    )
  }
}
