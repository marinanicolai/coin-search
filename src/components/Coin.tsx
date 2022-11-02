import { Result} from "../interfaces"

interface ICoin {
    res: Result
}

export const Coin = ({res} : ICoin) => {
    return (
        <div>
            <img src={res.urls.small} alt={res.alt_description || 'photo'} loading="lazy" />
            <div className="hidden">
                <h4>{res.description}</h4>
                
            </div>
        </div>
    )
}