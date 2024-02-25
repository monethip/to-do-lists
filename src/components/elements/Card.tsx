export type CardProps = {
    title?: string;
}

export default function Card ({}: CardProps) {
    return (
        <div className="border px-4 py-2">
            
        </div>
    )
}


// export const Card = ({ }: CardProps) => {
//     return (
//         <div className="flex flex-wrap">
//             {Title.map((card) => (
//                 <div className="max-w-xs w-full sm:max-w-sm sm:w-1/2 lg:w-1/3 p-4">
//                     <div className="bg-white rounded-xl border border-gray-200 shadow">
//                         <a href="#">
//                             <img className="p-8 rounded-t-xl h-96 object-cover" src={card.image} alt={card.alt} />
//                         </a>
//                     </div>

//                     <div className="flex mt-2 gap-3 items-center">
//                         <img src={card.icon} />

//                         <span>{card.name}</span>
//                     </div> 
//                 </div>
//             )
//             )}
//         </div>

//     )
// }