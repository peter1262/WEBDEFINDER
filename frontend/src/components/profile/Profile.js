import React from 'react'
import PropTypes from 'prop-types'

class Profile extends React.Component {
    render() {
        let props = this.props

        let fb = undefined
        let is = undefined
        let gb = undefined
        let bg = undefined

        if(props.fbLink !== undefined && props.fbLink !== ""){
            fb = (<a href={props.fbLink}><img src='/fb.png' alt='' /></a>)
        }

        if(props.isLink !== undefined && props.isLink !== ""){
            is = (<a href={props.isLink}><img src='/is.png' alt='' /></a>)
        }

        if(props.gbLink !== undefined && props.gbLink !== ""){
            gb = (<a href={props.gbLink}><img src='/gb.png' alt='' /></a>)
        }

        if(props.bgLink !== undefined && props.bgLink !== ""){
            bg = (<a href={props.bgLink}><img src='/blog.png' alt='' /></a>)
        }

        return (
            <div className='profile'>
                <img src={props.imgLink} alt='' />
                <h3>{props.title}</h3>
                <p>{props.car}</p>
                <div className='contact'>
                    {fb}
                    {is}
                    {gb}
                    {bg}
                </div>
            </div>
        )
    }
}

Profile.propTypes = {
    title: PropTypes.string,
    car: PropTypes.string,
    fbLink: PropTypes.string,
    isLink: PropTypes.string,
    imgLink: PropTypes.string,
    gbLink: PropTypes.string,
    bgLink: PropTypes.string
}

Profile.defaultProps = {
    title: '',
    car: '',
    fbLink: '',
    isLink: '',
    gbLink: '',
    bgLink: ''
}

export default Profile;