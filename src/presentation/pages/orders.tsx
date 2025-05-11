import "../../styles/orders.css";
import Ingredient from "../components/ingredient";

const orders = () => {
  return (
    <div className="Orders">
      <aside className="navegation_bar">
        <section>
          <img src="/image/barra-grafica.png" alt="graph" className="graph" />
        </section>
        <section>
          <img src="/image/avatar.png" alt="avatar" className="avatar" />
        </section>
        <section>
          <img src="/image/entrega.png" alt="entrega" className="entrega" />
        </section>
        <section>
          <img src="/image/search.png" alt="searchs" className="searchs" />
        </section>
      </aside>
      <header className="bar">
        <h1 className="title">Pedidos</h1>
      </header>

      <main className="food">
        <section className="search">
          <input type="text" placeholder="Buscar" className="search_input" />
          <button className="search_button">Buscar</button>
          <button className="new_order">nueva orden</button>
        </section>
        <section className="table">
          <table className="table_orders">
            <thead>
              <tr>
                <th>atencion</th>
                <th>Comida</th>
                <th>Bebida</th>
                <th>Quitar ingredientes</th>
                <th>Nombre</th>
                <th>Mesa</th>
                <th>Tiempo de espera</th>
                <th>Delivery</th>
                <th>Estado</th>
                <th>pago</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <td>Maria</td>
                <td>Hamburguesa</td>
                <td>Pepsi</td>
                <td>
                  <div className="ingredient_list">
                    <Ingredient
                      comida="hola"
                      ingre="Holaasdasdsad adsda sdasdas"
                    />
                  </div>
                </td>
                <td>Juan Perez eduardo primera</td>
                <td>5</td>
                <td>20 min</td>
                <td>Si</td>
                <td>Eliminar conceptos de no se</td>
                <td>Pagado</td>
              </tr>
            </thead>
          </table>
        </section>
      </main>
    </div>
  );
};

export default orders;
