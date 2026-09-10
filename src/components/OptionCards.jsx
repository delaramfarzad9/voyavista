

function OptionCards({title,iconTag}){
    return(
        <div className="flex flex-row  gap-2 my-2 rounded-full border   border-green-600 items-center  py-2 px-8">
<div className="text-lg text-green-600">{iconTag}</div>
        <p className="text-lg font-semibold text-green-700">{title}</p>
        </div>
    )
}

export default OptionCards