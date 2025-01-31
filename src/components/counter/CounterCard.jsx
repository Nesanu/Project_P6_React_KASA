import { CounterLogic } from './CounterLogic'
import { CounterTitle } from './CounterTitle'

export function CounterCard() {
    return (
        <div className='card'>
            <CounterTitle valeurTitre="MON  TITRE 0" class={'colorer'}/>
            <CounterTitle valeurTitre="MON SUPER 1" class={'active'} />
            <CounterTitle valeurTitre="MON SUPER TITRE complet" class={'active colorer'} />
            <CounterLogic />
        </div>
    )
}