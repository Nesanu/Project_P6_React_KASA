import './Gallery.scss'
import datas from '../../data/data'
import Card from '../card/Card'


/**Documentation de méthode 
   * @description
   * Ce composant permet de créer une galerie de logements.
   * @returns {JSX.Element} - Une galerie de logements.
   * @example
   * <Gallery /> 
    */
   
export default function Gallery() {

    return (
        <main className='home_gallery'>
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    )
}