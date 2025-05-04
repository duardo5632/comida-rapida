import "../../styles/ingredient.css";

interface Props {
  ingre: string;
}

const Ingredient = ({ ingre }: Props) => {
  return (
    <div>
      <p className="ingredient">{ingre}</p>
    </div>
  );
};

export default Ingredient;
