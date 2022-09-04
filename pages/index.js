import Layout from "../components/Layout";
import Menu from "../components/Menu";
import Categories from "../components/Categories";

export default function Home({ items }) {
  const allCategories = [
    "todos",
    ...new Set(items.map((item) => item.category)),
  ];
  //console.log(allCategories);
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "todos") {
      return setMenuItems(items);
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
    //console.log(newItems);
  };
  return (
    <Layout
      title={"E Bochiche"}
      description="Hola Bienvenido al Restaurate el Bochiche "
      footer={false}
    >
      <section className="menu section">
        <div className="title">
          <h2>nuestro menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu menuItems={menuItems} />
      </section>
    </Layout>
  );
}
import { menu } from "../lib/items";
import { useState } from "react";
export async function getStaticProps() {
  const items = menu;
  return { props: { items } };
}
