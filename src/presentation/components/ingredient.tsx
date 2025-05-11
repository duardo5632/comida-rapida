import "../../styles/ingredient.css";

interface Props {
  comida: string;
  ingre: string;
}

const Ingredient = ({ ingre, comida }: Props) => {
  return (
    <div>
      <p className="ingredient-card">{comida}:</p>
      <div className="ingredient">
        <p>{ingre}</p>
      </div>
    </div>
  );
};

export default Ingredient;
