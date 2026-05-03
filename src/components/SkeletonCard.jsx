import Skeleton from "react-loading-skeleton";
import "../css/SkeletonCard.css";

function SkeletonCard() {
  return (
    <div className="skeleton-container">
      <div className="skeleton-card">
        <Skeleton height={300} width="90%" />
        <Skeleton height={18} width="50%" />
        <Skeleton height={20} width="80%" />
        <Skeleton height={18} width="50%" />
      </div>
    </div>
  );
}

export default SkeletonCard;
