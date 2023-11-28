
import './App.css';
import FeedbackButtons from './components/FeedbackButtons';
const CAT_IMAGE_1 = "https://cdn2.thecatapi.com/images/8kj.jpg"
const CAT_IMAGE_2 = "https://cdn2.thecatapi.com/images/ag9.jpg"
const CAT_IMAGE_3 = "https://cdn2.thecatapi.com/images/9e2.jpg"
const CAT_IMAGE_4 = "https://cdn2.thecatapi.com/images/2bPsrIcp-.jpg"
// const CAT_IMAGE_1 = ""
// const CAT_IMAGE_2 = ""
// const CAT_IMAGE_3 = ""

function App() {
    return (
        <div className="App">
        <h1>Judge the Cat</h1>
          <div className="mb-3">
            <img
              src={CAT_IMAGE_1}
              alt="Cat"
              className="img-fluid rounded"
              style={{ height: '200px' }}
            />
          </div>

          <FeedbackButtons catUrl={CAT_IMAGE_1} />

            <div className="mb-3">
            <img
              src={CAT_IMAGE_2}
              alt="Cat"
              className="img-fluid rounded"
              style={{ height: '200px' }}
            />
          </div>

          <FeedbackButtons catUrl={CAT_IMAGE_2} />

          <div className="mb-3">
            <img
              src={CAT_IMAGE_3}
              alt="Cat"
              className="img-fluid rounded"
              style={{ height: '200px' }}
            />
          </div>

          <FeedbackButtons catUrl={CAT_IMAGE_3} />

        </div>
    );
}

export default App;
