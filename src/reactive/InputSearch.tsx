import {
  createMemo,
  createResource,
  createSignal,
  Index,
  Show
} from "solid-js";
import type { BraidsType } from "@interfaces/braidsPrices.interface";

function InputSeachTsx() {
  const [data, setData] = createSignal<BraidsType[]>();
  const [id, setId] = createSignal<number>()
  const uriBraid = createMemo(()=> '/braid/'+ id() )
  
  createResource(async () => {
    const dataResponse = (await import("@data/braids.data.json")).default as BraidsType[];
    setData(dataResponse);
  });
  
  
  function onInput({currentTarget}){
    const btn = document.getElementById('btnSearch') as HTMLButtonElement
    const {value} = currentTarget
    const braid = data()!.find(v=> v.name == value)
    
    if(!braid){
      btn.setAttribute('disabled','')
      return;
    }
    
    btn.removeAttribute('disabled')
    setId(braid!.id)
  }
  
  return (
    <>
      <article class="flex flex-row flex-wrap justify-center items-center mx-2 space-x-2">
        <input
          id="searchItem"
          list="searchList"
          pattern="^(Boho|Box|Front)\s(Braids){1}\s?[a-zA-Z\d]*"
          class="border-1 placeholder:text-black text-blue-700 rounded-xl p-2 shadow-2xl shadow-gray-400 invalid:border-red-500 invalid:text-red-500" 
          type="text"
          placeholder="Buscar..."
          oninput={onInput}
          />
        <button
          class="active:bg-blue-800 active:text-white disabled:bg-blue-900 bg-blue-400 rounded-2xl cursor-pointer p-1.5 my-2 shadow-gray-600 hover:bg-blue-500"
          id="btnSearch"
          onclick={()=>  window.location.href = uriBraid()}
        >
          <span class="material-symbols-outlined p-0 m-0">
            search
          </span>
        </button>
      </article>
      <Show when={data()}>
        <datalist id="searchList">
          <Index each={data()}>
            {(data) => <option data-id={`${data().id}`}>{data().name}</option>}
          </Index>
        </datalist>
      </Show>
    </>
  );
}

export default InputSeachTsx;
