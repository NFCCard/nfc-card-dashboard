import axios from "axios";
import Cookies from "js-cookie";
const BASE_URL = "https://api.nfccardapp.ir/api/";

export default axios.create({
	baseURL: BASE_URL,
	headers: {
		Authorization: `
        ${
			Cookies.get("_s")
				? `
            Bearer ${JSON.parse(Cookies.get("_s")).access_token}
            `
				: ""
		}
        `,
		Accept: "application/json",
	},
});
