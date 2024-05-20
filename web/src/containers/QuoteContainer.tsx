import useAppStore from "../stores/app-store";

const QuoteContainer = () => {
    const { username, quoteStore } = useAppStore();

    return (
        <div className="flex flex-col justify-end items-end text-white font-semibold m-14">
            <div className=" flex text-2xl max-w-xl">
                "{quoteStore.quote}"
            </div>
            <div className="text-xl max-w-sm pr-5">
                - {quoteStore.author}
            </div>
        </div>
    )
}

export default QuoteContainer;