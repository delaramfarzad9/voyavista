
function ExperienceCard (){
  return (
    <article className="flex flex-col border rounded-md border-green-600 pb-2">
    <img className="w-full h-64" src="/images/london.png" alt="" />
    <div className="flex flex-col p-2 gap-1">
        <h2 className="text-lg font-bold">food</h2>
        <p>london</p>
        <p>food</p>
        <p>96£</p>
        <p>4.5</p>
    </div>
    <button className="bg-emerald-600 p-2 rounded-lg text-white w-3/4 self-center my-2">view experience</button>
    </article>
  )
}
export default ExperienceCard