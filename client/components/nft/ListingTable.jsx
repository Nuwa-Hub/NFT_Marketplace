import Table from "react-bootstrap/Table";
const ListingTable = () => {
	return (
		<div>
			<Table striped responsive="sm">
				<thead>
					<tr>
						<th>Price</th>
						<th>Expiration</th>
						<th>From</th>
					</tr>
				</thead>
				<tbody>
					{[1, 2, 3, 4].map((item, index) => {
						return (
							<tr key={item}>
								<td>0.5 ETH</td>
								<td>1 day</td>
								<td>0x123456789</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};

export default ListingTable;
