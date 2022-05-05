const Show = ({ data }) => {
  return (
    <>
      <div>
        {data.map((item, index) => {
          return <div key={index}> {item.title}</div>;
        })}
      </div>
    </>
  );
};

export default Show;
