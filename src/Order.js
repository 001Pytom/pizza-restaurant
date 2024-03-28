function Order({ closeHour }) {
  return (
    <div className="order">
      <p>we are open until {closeHour}:00. Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  );
}

export default Order;
