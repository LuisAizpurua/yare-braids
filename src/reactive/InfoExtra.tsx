import type { PricesType } from "@interfaces/braidsPrices.interface";

import {splitProps } from 'solid-js'

interface Prop{
    id: string,
    prices: PricesType[]
    class: string
}

function InfoExtraTsx(props: Partial<Prop>){

    const  [attr, others] = splitProps(props, ['prices'])

    return <>
    <div {...others}>
    <ul class="ml-3 my-1">
      {
        attr.prices!.map(({total, includeMaterial,infoExtra}) =>
        !(!!infoExtra)?(
          <li class="font-extrabold text-gray-600 my-1">
            <span class="font-bold">${total}  - </span> {includeMaterial?'Si':'No'} incluye material
          </li>
        ):(
        infoExtra.split('.').map(
         (str)=>( 
        <li class="font-extrabold font-serif text-gray-600 my-1">
            {str}.
         </li>
        ))))
      }
    </ul>
</div>
    </>

}

export default InfoExtraTsx;