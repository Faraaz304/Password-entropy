export default function Entropy({bits="Bits"}) {

    return (
        <div className="w-1/2 pl-6 flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl font-bold text-gray-700"> {bits}</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Start typing to see the entropy score
          </p>
        </div>
    );
    }