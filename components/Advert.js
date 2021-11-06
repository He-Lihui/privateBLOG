import Image from 'next/image'
const Adver = () => {

    return (
        <div className="ad-div comm-box">
            <div> 
            <Image
                src="/../static/img/1.jpg"
                alt="Landscape picture"
                width={500}
                height={600}
            />
            <Image
                src="/../static/img/2.jpg"
                alt="Landscape picture"
                width={500}
                height={600}
            />
            </div>
        </div>
    )
}
export default Adver