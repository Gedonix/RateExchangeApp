import axios from "axios"

export default class GetData {
    static async getRates() {
        const response = await axios.get('http://data.fixer.io/api/latest?access_key=6d2a349687d5aa46abeaa85f58c25bda')
        return response.data.rates
    }
    static async getOptions() {
        const response = await axios.get('http://data.fixer.io/api/symbols?access_key=6d2a349687d5aa46abeaa85f58c25bda')
        let tmp = [];
        for (let entry of Object.entries(response.data.symbols)) {
            tmp.push({ value: entry[0], name: entry[1] });
        }
        return tmp
    }
}