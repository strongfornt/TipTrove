/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AuthContext } from "../../AuthProvider/ContextProvider"
import { Link } from "react-router-dom/dist";


export default function MyListCard({data}) {
    const {theme} = useContext(AuthContext)
    
  return (
    <>
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
	<h2 className={`mb-4 text-2xl font-semibold leading-tight ${theme ==="light" ?'text-black':'text-white'}`}>Tourist Spots</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-24" />
			</colgroup>
			<thead className="dark:bg-gray-300">
				<tr className="text-left">
					<th className="p-3">Country</th>
					<th className="p-3">T - spots</th>
					<th className="p-3">Avg.Cost</th>
					<th className="p-3">Visitor/y</th>
					<th className="p-3 text-right">Delete</th>
					<th className="p-3">Update</th>
				</tr>
			</thead>
			<tbody>

                {
                    data?.map((data,idx)=> <tr key={idx} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p>{data.country}</p>
					</td>
					<td className="p-3">
						<p>{data.spot}</p>
					</td>
					<td className="p-3">
						<p>${data.cost} /</p>
						
					</td>
					<td className="p-3">
						<p>Visitor-{data.visitor} /y</p>
						
					</td>
					<td className="p-3 text-right">
						<p className="text-red-500 cursor-pointer text-base font-bold ">   
                       X
                        </p>
					</td>
					<td className="p-3 text-right">
						<Link 
                            to={`/updateTouristSpot/${data._id}`}
                        className="px-3 py-1 cursor-pointer   font-semibold rounded-md bg-[#fcb040] dark:text-gray-50">
							<span>Update</span>
						</Link>
					</td>
				</tr> )
                }
				
			
			</tbody>
		</table>
	</div>
</div>
    </>
  )
}
