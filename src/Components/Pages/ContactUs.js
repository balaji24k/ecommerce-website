import React, {useRef} from "react";
import { Form, Button, Card } from "react-bootstrap";

const ContactUs = () => {
	const name = useRef();
	const email = useRef();
	const phoneNumber = useRef();


	const handleSubmit = (e) => {
		e.preventDefault();
			fetch("https://react-api-calls-f5b35-default-rtdb.firebaseio.com/data.json", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: name.current.value,
					email: email.current.value,
					phoneNumber: phoneNumber.current.value,
					}),
			});
			name.current.value = '';
			email.current.value = '';
			phoneNumber.current.value = '';
	}  

	return (
		<div>
			<h2
					style={{ textAlign: "center", marginTop: "10px", fontFamily: "serif" }}
			>
					Contact-Us
			</h2>
			<Card style={{ width: "25rem" }} className="mx-auto my-5">
				<Card.Body>
					<Form  onSubmit={handleSubmit}>
						<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control type="text"  ref={name} placeholder="Name" required/>
						</Form.Group>
						<Form.Group>
						<Form.Label>Email</Form.Label>
						<Form.Control type="email"  ref={email} placeholder="Email"/>
						</Form.Group>
						<Form.Group>
						<Form.Label>Phone Number</Form.Label>
						<Form.Control type="number"  ref={phoneNumber} placeholder="Mobile" required/>
						</Form.Group>
						<div className="d-flex justify-content-center mt-3">
						<Button variant="btn-dark btn-outline-info text-black" type="submit">
								Submit
						</Button>
						</div>
					</Form>
				</Card.Body>
			</Card>
		</div>
	);
};

export default ContactUs;