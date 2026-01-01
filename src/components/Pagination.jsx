<<<<<<< HEAD
const Pagination = ({page,pageHandler,dynamicPage}) => {
    const getPages = (current,total)=>{
    const pages = [ ]
    if(total <= 5){ 
        for(let i=0; i<= total; i++){
            pages.push(i)
        }
    }else if(current <= 3){
        pages.push(1,2,3,". . .",total)
    }else if(current >= total-2){
        pages.push(1,". . .",total-2, total-1, total)
    }else{
     pages.push(1 , '...' ,  current - 1, current, current + 1, '...' ,  total)   
    }
    return pages;
    }
  return (
    <div className='mt-10 space-x-4'>
        <button 
        disabled={page == 1} 
        className={`${page == 1 ? "bg-[#F59E0B]":"bg-[#F59E0B]"} text-white px-3 py-1 rounded-md cursor-pointer`}
        onClick={()=> pageHandler(page - 1)}
        >
        Prev
        </button>
        {
            getPages(page,dynamicPage).map((x,i)=>{
              return <span 
              key={i} 
              onClick={()=> typeof x == "number" && pageHandler(x)} 
              className={`cursor-pointer ${x == page? "font-bold [#F59E0B]": "text-black" }`}>
              {x}
              </span>
            })
            
        }
        <button 
        disabled={page == dynamicPage} 
        className={`${page == dynamicPage ? "bg-[#F59E0B]":"bg-[#F59E0B]"} text-white px-3 py-1 rounded-md cursor-pointer`}
        onClick={()=> pageHandler(page + 1)}
        >
        Next
        </button>
    </div>
  )
}

=======
const Pagination = ({page,pageHandler,dynamicPage}) => {
    const getPages = (current,total)=>{
    const pages = [ ]
    if(total <= 5){ 
        for(let i=0; i<= total; i++){
            pages.push(i)
        }
    }else if(current <= 3){
        pages.push(1,2,3,". . .",total)
    }else if(current >= total-2){
        pages.push(1,". . .",total-2, total-1, total)
    }else{
     pages.push(1 , '...' ,  current - 1, current, current + 1, '...' ,  total)   
    }
    return pages;
    }
  return (
    <div className='mt-10 space-x-4'>
        <button 
        disabled={page == 1} 
        className={`${page == 1 ? "bg-[#F59E0B]":"bg-[#F59E0B]"} text-white px-3 py-1 rounded-md cursor-pointer`}
        onClick={()=> pageHandler(page - 1)}
        >
        Prev
        </button>
        {
            getPages(page,dynamicPage).map((x,i)=>{
              return <span 
              key={i} 
              onClick={()=> typeof x == "number" && pageHandler(x)} 
              className={`cursor-pointer ${x == page? "font-bold [#F59E0B]": "text-black" }`}>
              {x}
              </span>
            })
            
        }
        <button 
        disabled={page == dynamicPage} 
        className={`${page == dynamicPage ? "bg-[#F59E0B]":"bg-[#F59E0B]"} text-white px-3 py-1 rounded-md cursor-pointer`}
        onClick={()=> pageHandler(page + 1)}
        >
        Next
        </button>
    </div>
  )
}

>>>>>>> e2aa20c (Have converted Zaptro into Stopify)
export default Pagination