const List = ({ list, handleStatus, deleteItem, handleCount }) => {
  return (
    <div className="list-container">
      <h3 onClick={handleCount}>Let's get to work!</h3>
      <ul className="list">
        {list.map((item) => {
          return (
            <div className="item-container" key={item.id}>
              <i
                className={
                  item.status ? "far fa-check-circle" : "far fa-circle"
                }
                onClick={() => handleStatus(item.id)}
              ></i>
              <li className={item.status ? "item completed" : "item"}>
                {item.name}
              </li>
              <i
                className="far fa-trash-alt"
                onClick={() => deleteItem(item.id)}
              ></i>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
