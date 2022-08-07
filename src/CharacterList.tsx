import { Link } from "react-router-dom"

function CharacterList(props: any) {
  return (
    <>
      {props.data.map((character: any, index: number) => (
          <div key={character.url}>
            <Link to={`/${index}`}>
              <h2>{character.name}</h2>{" "}
            </Link>
          </div>
      ))}
    </>
  )
}

export default CharacterList
