




export const Folder = ({ RenderFile,HandlePathNavigator }) =>{

    const RenderFileType = (indicator) => {
        if(indicator.includes(".mp4")){
            return (
                <>
                    <img src="assets/images/isala/video-icon.png" alt=""  style={{
                        height:"150px",
                        width:"150px"
                    }} />
                </>
            )
        }
        if(indicator.includes(".pdf")){
            return (
                <>
                    <img src="assets/images/isala/pdf-icon.png" alt=""  style={{
                        height:"150px",
                        width:"150px"
                    }} />
                </>
            )
        }
        return (
            <>
                <img src="assets/images/isala/folder-icon.png" alt=""  style={{
                    height:"150px",
                    width:"150px"
                }} />
            </>
        )
    }
    return (
        <>
            {
                RenderFile.map((data,index)=>{
                    return (
                    <>
                        <div className="mbr-gallery-item mbr-gallery-item--p2" 
                            data-video-url="false" 
                            key={index} 
                            onClick={(e)=>{
                                    HandlePathNavigator(data)
                                    }
                                }>
                            <div className="align-center">
                                {
                                    RenderFileType(data)
                                }
                                <h6>{data}</h6>
                            </div>
                        </div>
                    </>)
                })
            }
        </>
    )
}