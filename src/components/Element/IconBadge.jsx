

function IconBadge(props){
    const{icon} = props;
    
    return(
        <div className="container-icon-badge">
            <i className={`uil ${icon} icon-bagde`} />
        </div>
    )
}

export default IconBadge;