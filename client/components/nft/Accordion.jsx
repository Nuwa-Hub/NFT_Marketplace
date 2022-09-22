import Accordion from "react-bootstrap/Accordion";
import ItemActivityTable from "./ItemActivityTable";
import ListingTable from "./ListingTable";
const Accordion_ = () => {
	return (
		<div>
			<Accordion defaultActiveKey="0">
				<Accordion.Item eventKey="0">
					<Accordion.Header>Price History</Accordion.Header>
					<Accordion.Body></Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="0">
					<Accordion.Header>Listings</Accordion.Header>
					<Accordion.Body>
						<ListingTable />
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="0">
					<Accordion.Header>Item Activity</Accordion.Header>
					<Accordion.Body>
						<ItemActivityTable />
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</div>
	);
};

export default Accordion_;
