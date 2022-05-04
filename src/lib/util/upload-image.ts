export function getBase64(img) {
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = (e) => {
            resolve( e.target.result);
        };
      });
}

export async function uploadImage(title: string, imgBase64) {
    const imgData = imgBase64.split(',');
    const data = {
        title,
        image: imgData[1]
    };
    await fetch(`/upload`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(data)
    });
}