import { useEffect, useState } from "react";
import { IEmployee } from "../interfaces";
import axios from "axios";
import * as config from "../config";
import { ImSpinner9 } from "react-icons/im";

export const PageEmployees = () => {
	const [employees, setEmployees] = useState<IEmployee[]>([]);

	useEffect(() => {
		setTimeout(() => {
			(async () => {
				const response = await axios.get(
					`${config.getBackendUrl()}/employees`
				);
				const _employees: IEmployee[] = response.data;
				setEmployees(_employees);
			})();
		}, 1000);
	}, []);

	return (
		<>
			{employees.length === 0 ? (
				<p className="p-4">
					<ImSpinner9 className="spinner text-6xl text-slate-700" />
				</p>
			) : (
				<p>There are {employees.length} employees:</p>
			)}
		</>
	);
};
