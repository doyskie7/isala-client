




export const Folder = ({ RenderFile,HandlePathNavigator }) =>{
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
                                    data.includes(".pdf")
                                    ?
                                    <img src="assets/images/isala/pdf-icon.png" alt=""  style={{
                                        height:"150px",
                                        width:"150px"
                                    }} />
                                    :
                                    <img src="assets/images/isala/folder-icon.png" alt=""/>

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