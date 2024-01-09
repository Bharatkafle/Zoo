const Card = ({
  name,
  likes,
  addLikesHandler,
  removeLikesHandler,
  removeHandler,
}) => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="close">
            <button className="close-btn" onClick={removeHandler}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div>
            <img
              className="image"
              src={`https://source.unsplash.com/400x400/?${name}`}
            ></img>
          </div>
          <div>
            <h1>{name}</h1>
          </div>
          <div className="reaction-container">
            <div className="love-reaction">
              <button onClick={addLikesHandler}>
                <span className="material-symbols-outlined">heart_plus</span>
                <span className="material-icons">
                  {/* {likes >= 0 ? (
                    <span className="material-symbols-outlined">favorite</span>
                  ) : (
                    <span className="material-symbols-outlined">
                      heart_broken
                    </span>
                  )} */}
                </span>
              </button>
              <p className="likes">{likes}</p>
            </div>
            <div className="broken-heart">
              <button onClick={removeLikesHandler}>
                <span className="material-symbols-outlined">heart_minus</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
//   return (
//     <>
//     <div>
//       {/* <div className="cardsOfAnimals">
//         {/* <div className="close"> */}
//         <button className="close-btn" onClick={removeHandler}>
//           <span className="material-symbols-outlined">close</span>
//         </button>
//         {/* </div> */}

//         <div className="butterfly">
//           <img src={`https://source.unsplash.com/400x400/?${name}`}></img>
//           <h1>{name}</h1>
//         </div>

//         <div className="reaction">
//           <button onClick={addLikesHandler}>
//             <span className="material-symbols-outlined">heart_plus</span>
//           </button>
//           <div className="likes-container">
//             <p className="likes">{likes}</p>
//             <span className="material-icons">
//               {likes >= 0 ? (
//                 <span className="material-symbols-outlined">favorite</span>
//               ) : (
//                 <span className="material-symbols-outlined">heart_broken</span>
//               )}
//             </span>
//           </div>
//           <button onClick={removeLikesHandler}>
//             <span className="material-symbols-outlined">heart_minus</span>
//           </button>
//         </div>
//       </div> */}
//     </>
//   );
// };

export default Card;
