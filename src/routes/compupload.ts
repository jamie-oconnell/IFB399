import { writeFileSync, readFile } from 'fs';

export async function post({ request }) {
    try {
        const data = JSON.parse((await request.body.read()).toString());

        console.log(data)
        const file = data['image'];
        const title = data['title'];
        const description = data['description'];
        const FirstName = data['FirstName'];
        const LastName = data['LastName'];
        const Phone = data['Phone'];
        const Email = data['Email'];
    
        writeFileSync(`static/compuploads/${title}.png`, file, 'base64' );
        addCompImage( `/compuploads/${title}.png`, title, description, FirstName, LastName, Phone, Email)
        return {
            status: 200,
        };
    } catch (error) {
        console.log(error)
    }

}

function addCompImage( path, title, description, FirstName, LastName, Phone, Email ) {
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