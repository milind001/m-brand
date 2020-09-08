import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import SHOP_DATA from './shopdata';

class ShopPage extends React.Component{
    constructor(){
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    )) 
                }
            </div>
        )
    };
} 

export default ShopPage;