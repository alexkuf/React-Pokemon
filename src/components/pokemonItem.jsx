import { styleColor } from "./colorDiv";

const PokemonItem = ({
  id,
  name,
  image,
  image1,
  type,
  setIsClicked,
  setPokeId,
  setColor,
}) => {
  const colorV = styleColor.filter((color) => {
    if (color[0] === type) {
      return color;
    }
    return !color;
  });

  return (
    <>
      <div
        className="container1 mb-4"
        style={{ width: "210px" }}
        onClick={() => {
          setPokeId(id);
          setIsClicked(true);
          setColor(colorV.map((el) => el[1]));
        }}
      >
        <div
          className="card border border-dark"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${colorV.map(
              (el) => el[1]
            )} 45%, #ffffff 40%)`,
          }}
        >
          <small className="m-auto mt-3 fs-5">#0{id}</small>
          {image ? (
            <img
              src={image}
              className="card-img-top m-auto mt-3"
              style={{ height: "90px", width: "90px" }}
              alt="..."
            />
          ) : image1 ? (
            <img
              src={image1}
              className="card-img-top m-auto mt-3"
              style={{ height: "90px", width: "90px" }}
              alt="..."
            />
          ) : (
            <div
              className="text-center m-auto mt-3"
              style={{ height: "90px", width: "90px" }}
            >
              No photo
            </div>
          )}

          <div className="m-auto mb-2 text-center">
            <h5 className="display-10 text-center">{name}</h5>
            <small
              className="x"
              style={{ color: colorV.map((el) => el[1]), fontSize: "20px" }}
            >
              Type: {type}
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonItem;
