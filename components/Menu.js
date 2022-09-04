export default function Menu({ menuItems }) {
  return (
    <div className="section-center">
      {menuItems.map((items) => {
        const { id, title, img, desc, price } = items;
        const myLoader = ({ src, width, quality }) => {
          return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
        };

        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />

            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}€</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
