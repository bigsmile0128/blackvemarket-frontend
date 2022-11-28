import axios from "axios";
import { BASE_URL } from "../../assets/constants";

export const contactUs = async (contacts) => {
    console.log(contacts);
    const res = await axios.post(`${BASE_URL}/contacts/contact-us`, contacts);
    
    if ( res.data ) {
        console.log("contacted result", res.data);
        return res.data;
    }
    return [];
}