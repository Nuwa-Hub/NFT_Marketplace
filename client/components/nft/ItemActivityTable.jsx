import Table from "react-bootstrap/Table";
const ItemActivityTable = () => {
	return (
		<div>
			<Table striped responsive="sm">
				<thead>
					<tr>
						<th>Event</th>
						<th>Price</th>
						<th>From</th>
						<th>To</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{[1, 2, 3, 4].map((item, index) => {
						return (
							<tr key={item}>
								<td>Minted</td>
								<td>2 eth</td>
								<td> 0x123456789</td>
								<td> 0x1523456789</td>
								<td> 12/12/2021</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};

export default ItemActivityTable;
