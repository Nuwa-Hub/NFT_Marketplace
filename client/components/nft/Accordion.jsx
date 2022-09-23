import Accordion from "react-bootstrap/Accordion";
import ItemActivityTable from "./ItemActivityTable";
import ListingTable from "./ListingTable";
import PriceHistoryTable from "./PriceHistoryTable";
const Accordion_ = () => {
	return (
		<div>
			<Accordion defaultActiveKey="0">
				<Accordion.Item eventKey="0">
					<Accordion.Header>Price History</Accordion.Header>
					<Accordion.Body>
						<PriceHistoryTable />
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>Listings</Accordion.Header>
					<Accordion.Body>
						<ListingTable />
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
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
