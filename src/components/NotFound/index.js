import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'

class NotFound extends Component {
  state = {loading: false}

  onClicking = async () => {
    this.setState({loading: true})
    const res = await fetch(
      `https://apis.ccbp.in/ps/projects?category=${this.props.cat}`,
    )
    this.setState({loading: false})
  }
  render() {
    const {loading} = this.state
    return (
      <>
        {loading ? (
          <div data-testid="loader" className="products-loader-container">
            <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
          </div>
        ) : (
          <div>
            <img
              className="notImg"
              src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
              alt="failure view"
            />
            <p>Oops! Something Went Wrong</p>
            <p>We cannot seem to find the page you are looking for.</p>
            <button onClick={this.onClicking}>Retry</button>
          </div>
        )}
      </>
    )
  }
}
export default NotFound
