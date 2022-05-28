import { writeFileSync, readFile } from 'fs';
import { destroy_component } from 'svelte/internal';

export async function post({ request }) {
    try {
        const data = JSON.parse((await request.body.read()).toString());

        const file = data['image'];
        const title = data['title'];
        const description = data['description'];
        const FirstName = data['first name'];
        const LastName = data['last name'];
        const Phone = data['phone'];
        const Email = data['email'];
    
        writeFileSync(`static/compuploads/${title}.png`, file, 'base64' );
        addCompImage({ path: `/compuploads/${title}.png`, title: title, description : description, FirstName : FirstName, LastName : LastName, Phone : Phone, Email : Email })
        return {
            status: 200,
        };
    } catch (error) {
        console.log(error)
    }

}

function addCompImage({ path, title, description, FirstName, LastName, Phone, Email }) {
    try {
        
        readFile('static/compgallery.json', function (err, data) {
            const json = JSON.parse(data.toString())
            json.push({
                "path" : path,
                "title" : title,
                "description" :  description,
                "firstname" : FirstName,
                "lastname" : LastName,
                "phone" : Phone,
                "email" : Email

            })
        
            writeFileSync('static/compgallery.json', JSON.stringify(json))
        })

        
    } catch (error) {
        console.log(error)
    }

}