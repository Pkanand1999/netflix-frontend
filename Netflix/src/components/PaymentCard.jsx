import { useSelector } from "react-redux"
import { useState } from 'react';
import {
    Text,
    Input,
    Button,
    Box,
} from '@chakra-ui/react'

export default function PaymentCard({ cardDetail }) {
    const [cardNumber, setCardNumber] = useState("");
    const [expireDate, setExpireDate] = useState("");
    const [cvv, setCvv] = useState("");

    const data = useSelector((e) => {
        return e.price
    })

    return (
        <div style={{ width: "100%", display: "flex", marginTop: "5.8rem", justifyContent: "center", alignItems: "center" }}>
            {screen.width > 1230 && <div style={{ width: "50%" }}>
                <img src="https://cdn.dribbble.com/users/1299339/screenshots/14693431/media/0d14cfd0199c68d53fff50e42cca6c4b.gif" style={{ width: "100%", height: "80vh" }} />
            </div>}
            <Box style={{ display: "flex", justifyContent: "center" }} width={["100%","100%","85%","75%","50%"]}>
                <div style={{ width: "45%" }}>
                    <h5>Submit your Debit or Credit card details</h5>
                    <div style={{ width: "8%", display: "flex", justifyContent: "space-between" }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" alt="" />
                        <img src="https://www.mastercard.co.in/content/dam/public/mastercardcom/sg/en/consumers/find-a-card/images/debit-platinum-mastercard-card_1280x720.png" alt="" />
                        <img src="https://www.icicibank.com/content/dam/icicibank/icici-assets/personal-banking/sapphiro-card.png" alt="" />
                        <img src="https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/1601d7e1-bd75-4d66-aaa4-4a83a52b4de4/Personal/Pay/Cards/Debit%20Card/Debit%20Card%20Landing%20Page/Debit%20Cards/Rupay%20Premium/rupay_premium_debit_card_banner1.png" alt="" />
                    </div>
                    <form style={{ marginTop: "1rem", width: "100%" }} >
                        <h6 style={{ color: "#e4111b" }}>Enter your card number</h6>
                        <Input type="number" placeholder="Enter Your Card Number" pattern="[0-9]*"
                            minLength="16" maxLength="16" style={{ width: "100%", padding: "0.3rem 0", border: "2px solid #e4111b" }} focusBorderColor='#ed6f74'
                            onChange={(e) => setCardNumber(e.target.value)} />
                        <h6 style={{ marginTop: "0.4rem", color: "#e4111b" }}>Enter expire MM/YYYY</h6>
                        <Input type="number" placeholder="MM/YYYY" minLength="6"
                            style={{ width: "100%", padding: "0.3rem 0", border: "2px solid #e4111b" }} focusBorderColor='#ed6f74'
                            onChange={(e) => setExpireDate(e.target.value)} />
                        <h6 style={{ marginTop: "0.4rem", color: "#e4111b" }}>Enter your CVV</h6>
                        <Input type="number" placeholder="CVV" minLength="3"
                            style={{ width: "100%", padding: "0.3rem 0", border: "2px solid #e4111b" }} focusBorderColor='#ed6f74'
                            onChange={(e) => setCvv(e.target.value)} />
                    </form>
                    <div style={{ color: "green", display: "flex", justifyContent: "space-between", marginTop: "0.8rem" }}>
                        <h5 >Amount</h5><h5>₹ {data}/month</h5>
                    </div>
                    <Text fontSize="sm">By checking the checkbox below, you agree to our <span style={{ color: "#157cec" }}>Terms of Use, Privacy Statement</span>, and that you are over 18. Netflix will automatically continue your membership and charge the membership fee (currently ₹ {data}/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.</Text>

                    <Button onClick={() => cardDetail()}
                        style={{ background: "#e4111b", color: "white", fontWeight: "600", width: "100%", padding: "0.4rem 0", borderRadius: "5px" }}
                        isDisabled={!(cardNumber.length == 16 && expireDate.length == 6 && cvv.length == 3)}
                    >
                        Start Membership</Button>
                    <Text fontSize="sm">This page is protected by Google reCAPTCHA to ensure you are not a bot. <span style={{ color: "#157cec" }}>Learn more.</span></Text>
                </div>
            </Box>

        </div>
    )
}
