import { writeFileSync, readFile } from 'fs';

export async function post({ request }) {
    try {
        const data = JSON.parse((await request.body.read()).toString());

        const file = data['image'];
        const title = data['title'];
    
        writeFileSync(`static/uploads/${title}.png`, file, 'base64');
        addImage({ path: `/uploads/${title}.png`, title: title })
        return {
            status: 200,
        };
    } catch (error) {
        console.log(error)
    }

}

function addImage({ path, title }) {
    try {
        
        readFile('static/gallery.json', function (err, data) {
            const json = JSON.parse(data.toString())
            json.push({
                "path" : path,
                "title" : title
            })
        
            writeFileSync('static/gallery.json', JSON.stringify(json))
        })

        
    } catch (error) {
        console.log(error)
    }

}