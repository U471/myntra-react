import HomeItem from "../components/HomeItem";
import { items } from "../data/items";
const Home =()=>{
return (
    <main>
        <div className="items-container">
          <HomeItem item={items[0]} />
        </div>
      </main>
);
}
export default Home;