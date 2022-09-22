import Table from "react-bootstrap/Table";
const PriceHistoryTable = () => {
	return (
		<div>
			<Table striped responsive="sm">
				<thead>
					<tr>
						<th>Date</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{[1, 2, 3, 4].map((item, index) => {
						return (
							<tr key={item}>
								<td>2020/2/5</td>
								<td>0.5eth</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};

export default PriceHistoryTable;
