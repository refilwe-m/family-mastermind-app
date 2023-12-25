export const Game = () => {
  const configs = ["Give Hints", "Change Pin", "Start Timer"];

  const participants = [
    "Gugu",
    "Sphe",
    "Carol",
    "Thabiso",
    "Thapelo",
    "Precious",
    "Sanele",
    "Marcia",
  ];

  return (
    <section className="">
      <aside className="md:w-full w-40 h-screen md:min-h-fit border border-green-300 px-2">
        <ul className="font-semibold md:flex flex-col py-4">
          {configs.map((config) => (
            <li key={config}>{config}</li>
          ))}
        </ul>
      </aside>
      <main></main>
      <aside>
        <h1 className="bg-green-100 text-green-700">Participants</h1>
        {participants.map((name) => (
          <h4 className="border border-b-green-100">{name}</h4>
        ))}
      </aside>
    </section>
  );
};
