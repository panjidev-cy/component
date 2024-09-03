

function IconBadge(props){
    const{icon} = props;
    
    return(
        <div className="container-icon-badge">
            <i className={`uil ${icon} text-xl text-secondary`} />
        </div>
    )
}

export default IconBadge;