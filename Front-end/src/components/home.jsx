/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
import { useCallback, useEffect, useState } from "react";

export const Home = () => {
  const [data, setData] = useState([]);
  const [sugerencias, setSugerencias] = useState([]);
  const [valorInput, setValorInput] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5432/api/v1/films");
        const newData = await response.json();
        setData(newData.data);
        console.log(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = useCallback(() => {
    const valor = valorInput;
    if (valor.length > 0) {
      const filtrosugerencias = data.filter((item) =>
        item.filmName.toLowerCase().includes(valor.toLowerCase())
      );
      setSugerencias(filtrosugerencias);
    } else {
      setSugerencias([]);
    }
  }, [valorInput, data]);

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      handleInputChange();
    }, 2000);
    setTimeoutId(newTimeoutId);

    return () => clearTimeout(newTimeoutId);
  }, [valorInput, handleInputChange]);

  const handleButtonClick = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    handleInputChange();
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <img src="./../../public/Bugsflix.svg" alt="" />
      </div>

      <div className="flex items-center justify-center -mt-80">
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ej.: El padrino"
          required
          value={valorInput}
          onChange={(e) => setValorInput(e.target.value)}
        ></input>
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
          Buscar
        </button>
      </div>
      <div className="mt-16">
        <ul>
          {sugerencias.map((item) => (
            <div
              key={item.filmName}
              className="mb-3 bg-gray-800 text-white cursor-pointer rounded-lg shadow-lg p-4"
            >
              <div className="flex">
                <div className="w-full">
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="font-bold text-2xl mb-0">{item.filmName}</h2>
                    <p className="mb-0">
                      {item.gender} - {item.duration} min
                    </p>
                  </div>
                  <p className="mb-0 italic text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};
