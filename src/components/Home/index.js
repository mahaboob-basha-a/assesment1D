import {Component} from 'react'
import Loader from 'react-loader-spinner'
import NotFound from '../NotFound'
import Card from '../Card'
import './index.css'

class Home extends Component {
  state = {category: 'ALL', dataList: [], loading: true, notfound: false}

  componentDidMount() {
    this.onFetching()
  }

  onFetching = async () => {
    const {category} = this.state
    this.setState({loading: true})
    try {
      const url = `https://apis.ccbp.in/ps/projects?category=${category}`
      const res = await fetch(url)
      if (res.ok === true) {
        const data = await res.json()
        this.setState({loading: false, dataList: data.projects})
      } else {
        this.setState({loading: false, notfound: true})
      }
    } catch (e) {
      this.setState({loading: false, notfound: true})
    }
  }

  onCategoryChange = async e => {
    e.preventDefault()
    this.setState({category: e.target.value}, this.onFetching)
  }
  render() {
    const {catList} = this.props
    const {category, loading, dataList, notfound} = this.state
    return (
      <div className="home-page">
        <div className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            alt="website logo"
          />
        </div>
        <form>
          <select value={category} onChange={this.onCategoryChange}>
            {catList.map(item => {
              const {id, displayText} = item
              return (
                <option key={id} value={id}>
                  {displayText}
                </option>
              )
            })}
          </select>
        </form>
        <div>
          {loading ? (
            <div data-testid="loader" className="products-loader-container">
              <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
            </div>
          ) : notfound ? (
            <NotFound cat={category} />
          ) : (
            <ul className="ul-container">
              {dataList.map(item => {
                const {id, name, image_url} = item
                return (
                  <li key={id}>
                    <Card id={id} name={name} image_url={image_url} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default Home
