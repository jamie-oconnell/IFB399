export function getBase64(img) {
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = (e) => {
            resolve( e.target.result);
        };
      });
}

export async function uploadCompetition(title: string, imgBase64, description: string, FirstName: string, LastName: string, Phone: string, Email: string ) {
    const imgData = imgBase64.split(',');
    const data = {
        title,
        image: imgData[1],
        description,
        FirstName,
        LastName,
        Phone,
        Email
    };
    const res = await fetch(`/compupload`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(data)
    });
    return res
}