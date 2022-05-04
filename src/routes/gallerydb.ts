import {readFileSync} from "fs"

export async function get() {
    try {
        const res = await readFileSync('static/gallery.json')
        const json = JSON.parse(res.toString())

        return {
            body: json,
            status: 200,
        };
    } catch (error) {
        console.log(error)
    }
}