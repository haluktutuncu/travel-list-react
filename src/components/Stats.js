export function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercentage = (numPacked / numItems) * 100;

  if (!numItems) {
    return (
      <p className="stats">Start adding some items to your packing list 🫡</p>
    );
  }
  return (
    <footer className="stats">
      <em>
        {numPercentage === 100
          ? "Ready to go 🍕"
          : ` You have ${numItems} items on your list,and you already packed
          ${numPacked} %${Math.round(numPercentage)}`}
      </em>
    </footer>
  );
}
