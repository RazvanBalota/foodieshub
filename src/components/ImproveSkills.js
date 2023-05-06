export default function ImproveSkills() {
    const list = [
        "Learn new recepies",
        "Expermient with food",
        "Write your own recepies",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked",
    ]
    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src={"/img/gallery/img_10.jpg"} />
            </div>
            <div className="col typograph">
                <h1 className="title">Improve Your Culinary Skills</h1>
                {list.map((item, index) => (
                    <p className="skill-items" key={index}>{item}</p>
                ))}
                <button className="btn">signup now</button>
            </div>

        </div>
    )

}