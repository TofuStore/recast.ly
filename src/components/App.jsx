import exampleVideoData from '/compiled/src/data/exampleVideoData.js';
import VideoList from '/compiled/src/components/VideoList.js';
import VideoPlayer from '/compiled/src/components/VideoPlayer.js';
import searchYouTube from '/compiled/src/lib/searchYouTube.js';
import Search from '/compiled/src/components/Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
      currentVideo: null,
      currentSearch: ''
    };

    this.handleNewVideo = this.handleNewVideo.bind(this);
    this.handleCurrentSearch = this.handleCurrentSearch.bind(this);
    this.doSearch = this.doSearch.bind(this);
  }

  componentDidMount() {
    searchYouTube('', data => {
      this.setState({
        videoList: data,
        currentVideo: data[0]
      });
    });
  }

  handleNewVideo(video) {
    this.setState({
      currentVideo: video
    });
  }

  handleCurrentSearch(search) {
    this.setState({
      currentSearch: search
    });
  }

  doSearch() {
    searchYouTube(this.state.currentSearch, data => {
      this.setState({
        videoList: data,
        currentVideo: data[0]
      });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchBar={this.handleCurrentSearch} search={this.doSearch}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} newVideo={this.handleNewVideo}/>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
