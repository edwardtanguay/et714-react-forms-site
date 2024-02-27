import { useEffect, useState } from "react";
import { IEmployee } from "../interfaces";
import axios from "axios";
import * as config from "../config";

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
				<p>Loading...</p>
			) : (
				<p>There are {employees.length} employees:</p>
			)}
		</>
	);
};
