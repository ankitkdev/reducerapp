import React from "react";

const CompUnmount = ()  => {
  return (
    <>
      <div>
        <button>Like | 1</button>
        <button>Dislike | 1</button>
      </div>
      <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
    </>
  );
};

export default CompUnmount;
