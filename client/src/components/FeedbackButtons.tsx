
import { CatBackendService } from "@genezio-sdk/judge-it_eu-central-1"
import { useEffect, useState } from "react";

interface FeedbackButtonsProps {
  catUrl: string;
}

const FeedbackButtons: React.FC<FeedbackButtonsProps> = ({ catUrl }) => {
  const [counters, setCounters] = useState<{ [url: string]: { like: number; dislike: number } }>({});

  useEffect(() => {
    const fetchData = async () => {
      const likes = await CatBackendService.getLikes(catUrl);
      const dislikes = await CatBackendService.getDislikes(catUrl);
      setCounters((prevCounters) => ({
        ...prevCounters,
        [catUrl]: { like: likes, dislike: dislikes },
      }));
    };
    fetchData();
  }, []);


  const handleLike = async (e: any) => {
    await CatBackendService.likeCat(catUrl);
    const likes = await CatBackendService.getLikes(catUrl);
    setCounters((prevCounters) => ({
      ...prevCounters,
      [catUrl]: { ...prevCounters[catUrl], like: likes },
    }));
  };

  const handleDislike = async (e: any) => {
    await CatBackendService.dislikeCat(catUrl);
    const dislikes = await CatBackendService.getDislikes(catUrl);
    setCounters((prevCounters) => ({
      ...prevCounters,
      [catUrl]: { ...prevCounters[catUrl], dislike: dislikes },
    }));
  };

  const currentCounters = counters[catUrl] || { like: 0, dislike: 0 };

  return (
    <div className="container mt-4">
        <div className="mb-3">
          <div className="btn-group mt-2" role="group" aria-label="Feedback Buttons">
            <button type="button" className="btn btn-success mr-2" onClick={(e) => handleLike(e)} >
              Love it <span className="badge bg-light text-dark">{currentCounters.like}</span>
            </button>
            <button type="button" className="btn btn-danger" onClick={(e) => handleDislike(e)} >
              Nope it <span className="badge bg-light text-dark">{currentCounters.dislike}</span>
            </button>
          </div>
        </div>
    </div>
  );
};

export default FeedbackButtons;
