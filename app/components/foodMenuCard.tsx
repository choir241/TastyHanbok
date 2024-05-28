import Button from "./button.tsx";

interface FoodMenuCardProps {
  onClick: () => void;
  foodName: string;
  foodDescription: string;
  foodImage: string;
  foodAltText: string;
  foodPrice: number;
}

export default function FoodMenuCard({
  onClick,
  foodName,
  foodDescription,
  foodImage,
  foodAltText,
  foodPrice,
}: FoodMenuCardProps) {
  return (
    <section onClick={() => onClick()}>
      <h2>{foodName}</h2>
      <p>{foodDescription}</p>
      <img src={foodImage} alt={foodAltText} />
      <span>{foodPrice}</span>
      <Button classNames="" text="Add to Cart" onClick={() => ""} />
    </section>
  );
}
