import { Coin} from "./Coin";

interface ICoinResults {
    query: string
}

export const CoinResult = ({query}: ICoinResults) => {
    return (
        <>
            <p className='no-results'>
                Results with: <b>{query}</b>
            </p>

            <div className='grid'>
                {/* TODO: map to data and show cards */}
            </div>
        </>
    )
}