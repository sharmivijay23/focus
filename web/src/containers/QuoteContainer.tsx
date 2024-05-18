import useAppStore from "../stores/app-store";

const QuoteContainer = () => {

    const { username, quoteStore, weekDayQuotes } = useAppStore();

    const currentTime = new Date();

    return (
        <div>
            <div className="flex flex-col justify-end items-end text-white p-10">
                <div className=" flex text-2xl p-5 max-w-xl">
                    "{quoteStore.quote}"
                </div>
                <div className="text-xl max-w-sm pr-5">
                    - {quoteStore.author}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-32">
                <div className=" text-white text-3xl ">
                    {weekDayQuotes.stat1}, {username}! {weekDayQuotes.stat2}
                </div>
                <div className="flex max-w-md backdrop-brightness-150 backdrop-blur-md p-6 py-6 mt-3 rounded-lg text-7xl">
                    {currentTime.getHours().toString().padStart(2, '0') + ":" + currentTime.getMinutes().toString().padStart(2, '0')}
                </div>
            </div>
        </div>
    )
}

export default QuoteContainer;