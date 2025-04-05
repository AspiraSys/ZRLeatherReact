import Filter from "../../Pages/Categories/CategoryFilter";
import Bar from '../../Components/Additional/Bar'

export default function Belts() {
  return (
    <>
      <Bar greyText='Leather Belts' bgColor="#F5F5F5" breadCrumbs={true} breadText1='Women' breadText2='Men' />
      <Filter category="Belts" />;

    </>

  )
}
