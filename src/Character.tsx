import "./Character.scss"
import { useParams } from "react-router-dom"

export default function Character(props: any) {
  const { characterIndex }: any = useParams()
  const eye_color: string = props.data[characterIndex].eye_color
  const gender: string = props.data[characterIndex].gender
  const hair_color: string = props.data[characterIndex].hair_color
  const height: string = props.data[characterIndex].height
  const skin_color: string = props.data[characterIndex].skin_color
  const films: number = props.data[characterIndex].films.length
  const name: string = props.data[characterIndex].name

  return (
    <div className="Characters">
      <h2>Name: {name}</h2>
      <div className="Characters-data">
        <p>
          <strong>Eye Color:</strong> {eye_color}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Hair Color:</strong> {hair_color}
        </p>
        <p>
          <strong>Avg. Height:</strong> {height}cm.
        </p>
        <p>
          <strong>Skin Color:</strong> {skin_color}
        </p>
        <p>
          <strong>Films:</strong> {films}
        </p>
      </div>
    </div>
  )
}
